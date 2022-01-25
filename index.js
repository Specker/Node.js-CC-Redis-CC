const redis = require('redis');

const PORT = process.env.PORT || 5000;

(async () => {
    const redisClient = redis.createClient({
        url: 'redis://192.168.100.150:6379'
    });
    const subscriber = redisClient.duplicate();
    const publisher = redisClient.duplicate();
    redisClient.on('error', (err) => console.log('Redis Client Error: ', err));

    await redisClient.connect();
    await subscriber.connect();
    await publisher.connect();
    // SET Operation
    await redisClient.set('transactions', 123);
    // GET Operation
    console.log(await redisClient.get('transactions'));
    // DELETE Operation
    await redisClient.del('transactions');

    console.log(await redisClient.get('transactions'));

    // Increment Operation
    redisClient.incr('counter')
    console.log(await redisClient.get('counter'));
    // Decrement Operation
    redisClient.decr('counter')
    console.log(await redisClient.get('counter'));

    // TTL expiration Operation
    redisClient.set("TTLtest", "It still exists", { EX: 10 });
    console.log(await redisClient.get('TTLtest'));

    // LISTS Operation
    redisClient.del("ListTranstactions");
    redisClient.rPush("ListTranstactions", ['t1', 't2', 't3', 't4']);
    console.log(await redisClient.lRange('ListTranstactions', 0, -1));

    redisClient.rPop("ListTranstactions");
    console.log(await redisClient.lRange('ListTranstactions', 0, -1));

    // HashMap
    redisClient.hSet('transaction:1', ['transactionID', 1, 'type', 'PURCHASE', 'amount', 5]);
    console.log(await redisClient.hGetAll('transaction:1'));
    console.log(await redisClient.hGet('transaction:1', 'type'));

    //Message Broker
    await subscriber.subscribe('TestChannel', message => {
        console.log(`There is new message in TestChannel: ${message}`);
    });
    await subscriber.pSubscribe('*', (message, channel) => {
        console.log(`There is new message in ${channel}: ${message}`);
    });

    await publisher.publish('TestChannel', 'This Is a test message');
})();
