// Type definitions for Merapi Plugin Redis

import { Redis } from "ioredis";

declare module "merapi-plugin-redis" {
    export interface IRedis {
        client(): Redis;

        set(key: string, value: any, ...args: any[]): Promise<string>;
        get(key: string): Promise<string>;

        hset(key: string, field: string, value: any): Promise<number>;
        hget(key: string, field: string): Promise<string>;

        lpush(key: string, ...values: any[]): Promise<void>;
        rpush(key: string, ...values: any[]): Promise<void>;

        lpop(key: string): Promise<string>;
        rpop(key: string): Promise<string>;

        del(key: string): Promise<void>;
        delete(key: string): Promise<void>;
        exists(...keys: string[]): any;

        llen(key: string): Promise<number>;
        incr(key: string): Promise<number>;
        decr(key: string): Promise<number>;

        sadd(key: string, ...members: any[]): any;
        scard(key: string): Promise<number>;
        spop(key: string, count?: number): Promise<any>;
        srem(key: string, ...members: any[]): any;

        setTtl(key: string, value: any, ttl?: number): Promise<string>;
        expire(key: string, ttl?: number): Promise<number>;

        publish(channel: string, message: string): Promise<number>;
        subscribe(...channels: any[]): any;
        unsubscribe(...channels: any[]): any;
        onEvent(key: string, fn: any): any;
    }
}
