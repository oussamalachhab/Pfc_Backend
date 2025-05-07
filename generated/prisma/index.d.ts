
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model Subscriber
 * 
 */
export type Subscriber = $Result.DefaultSelection<Prisma.$SubscriberPayload>
/**
 * Model Subscription
 * 
 */
export type Subscription = $Result.DefaultSelection<Prisma.$SubscriptionPayload>
/**
 * Model Alert
 * 
 */
export type Alert = $Result.DefaultSelection<Prisma.$AlertPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscriber`: Exposes CRUD operations for the **Subscriber** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscribers
    * const subscribers = await prisma.subscriber.findMany()
    * ```
    */
  get subscriber(): Prisma.SubscriberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscription.findMany()
    * ```
    */
  get subscription(): Prisma.SubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alert`: Exposes CRUD operations for the **Alert** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alerts
    * const alerts = await prisma.alert.findMany()
    * ```
    */
  get alert(): Prisma.AlertDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Role: 'Role',
    Subscriber: 'Subscriber',
    Subscription: 'Subscription',
    Alert: 'Alert',
    AuditLog: 'AuditLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "role" | "subscriber" | "subscription" | "alert" | "auditLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      Subscriber: {
        payload: Prisma.$SubscriberPayload<ExtArgs>
        fields: Prisma.SubscriberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriberPayload>
          }
          findFirst: {
            args: Prisma.SubscriberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriberPayload>
          }
          findMany: {
            args: Prisma.SubscriberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriberPayload>[]
          }
          create: {
            args: Prisma.SubscriberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriberPayload>
          }
          createMany: {
            args: Prisma.SubscriberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SubscriberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriberPayload>
          }
          update: {
            args: Prisma.SubscriberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriberPayload>
          }
          deleteMany: {
            args: Prisma.SubscriberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubscriberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriberPayload>
          }
          aggregate: {
            args: Prisma.SubscriberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscriber>
          }
          groupBy: {
            args: Prisma.SubscriberGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriberGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriberCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriberCountAggregateOutputType> | number
          }
        }
      }
      Subscription: {
        payload: Prisma.$SubscriptionPayload<ExtArgs>
        fields: Prisma.SubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findMany: {
            args: Prisma.SubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          create: {
            args: Prisma.SubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          createMany: {
            args: Prisma.SubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          update: {
            args: Prisma.SubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscription>
          }
          groupBy: {
            args: Prisma.SubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionCountAggregateOutputType> | number
          }
        }
      }
      Alert: {
        payload: Prisma.$AlertPayload<ExtArgs>
        fields: Prisma.AlertFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlertFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlertFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          findFirst: {
            args: Prisma.AlertFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlertFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          findMany: {
            args: Prisma.AlertFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>[]
          }
          create: {
            args: Prisma.AlertCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          createMany: {
            args: Prisma.AlertCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AlertDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          update: {
            args: Prisma.AlertUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          deleteMany: {
            args: Prisma.AlertDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlertUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AlertUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          aggregate: {
            args: Prisma.AlertAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlert>
          }
          groupBy: {
            args: Prisma.AlertGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlertGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlertCountArgs<ExtArgs>
            result: $Utils.Optional<AlertCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    role?: RoleOmit
    subscriber?: SubscriberOmit
    subscription?: SubscriptionOmit
    alert?: AlertOmit
    auditLog?: AuditLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    CreateSubsribers: number
    UpdateSubsribers: number
    createdSubscriptions: number
    updatedSubscriptions: number
    auditLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CreateSubsribers?: boolean | UserCountOutputTypeCountCreateSubsribersArgs
    UpdateSubsribers?: boolean | UserCountOutputTypeCountUpdateSubsribersArgs
    createdSubscriptions?: boolean | UserCountOutputTypeCountCreatedSubscriptionsArgs
    updatedSubscriptions?: boolean | UserCountOutputTypeCountUpdatedSubscriptionsArgs
    auditLogs?: boolean | UserCountOutputTypeCountAuditLogsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreateSubsribersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriberWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUpdateSubsribersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriberWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUpdatedSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    users: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RoleCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type SubscriberCountOutputType
   */

  export type SubscriberCountOutputType = {
    subscriptions: number
  }

  export type SubscriberCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscriptions?: boolean | SubscriberCountOutputTypeCountSubscriptionsArgs
  }

  // Custom InputTypes
  /**
   * SubscriberCountOutputType without action
   */
  export type SubscriberCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriberCountOutputType
     */
    select?: SubscriberCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubscriberCountOutputType without action
   */
  export type SubscriberCountOutputTypeCountSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
  }


  /**
   * Count Type SubscriptionCountOutputType
   */

  export type SubscriptionCountOutputType = {
    alerts: number
  }

  export type SubscriptionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alerts?: boolean | SubscriptionCountOutputTypeCountAlertsArgs
  }

  // Custom InputTypes
  /**
   * SubscriptionCountOutputType without action
   */
  export type SubscriptionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionCountOutputType
     */
    select?: SubscriptionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubscriptionCountOutputType without action
   */
  export type SubscriptionCountOutputTypeCountAlertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    RoleId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    RoleId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    Name: string | null
    Email: string | null
    PasswordHash: string | null
    RoleId: number | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    Name: string | null
    Email: string | null
    PasswordHash: string | null
    RoleId: number | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    Name: number
    Email: number
    PasswordHash: number
    RoleId: number
    CreatedAt: number
    UpdatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    RoleId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    RoleId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    Name?: true
    Email?: true
    PasswordHash?: true
    RoleId?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    Name?: true
    Email?: true
    PasswordHash?: true
    RoleId?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    Name?: true
    Email?: true
    PasswordHash?: true
    RoleId?: true
    CreatedAt?: true
    UpdatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    Name: string
    Email: string
    PasswordHash: string
    RoleId: number
    CreatedAt: Date
    UpdatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Name?: boolean
    Email?: boolean
    PasswordHash?: boolean
    RoleId?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    CreateSubsribers?: boolean | User$CreateSubsribersArgs<ExtArgs>
    UpdateSubsribers?: boolean | User$UpdateSubsribersArgs<ExtArgs>
    createdSubscriptions?: boolean | User$createdSubscriptionsArgs<ExtArgs>
    updatedSubscriptions?: boolean | User$updatedSubscriptionsArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    Name?: boolean
    Email?: boolean
    PasswordHash?: boolean
    RoleId?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "Name" | "Email" | "PasswordHash" | "RoleId" | "CreatedAt" | "UpdatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    CreateSubsribers?: boolean | User$CreateSubsribersArgs<ExtArgs>
    UpdateSubsribers?: boolean | User$UpdateSubsribersArgs<ExtArgs>
    createdSubscriptions?: boolean | User$createdSubscriptionsArgs<ExtArgs>
    updatedSubscriptions?: boolean | User$updatedSubscriptionsArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      role: Prisma.$RolePayload<ExtArgs>
      CreateSubsribers: Prisma.$SubscriberPayload<ExtArgs>[]
      UpdateSubsribers: Prisma.$SubscriberPayload<ExtArgs>[]
      createdSubscriptions: Prisma.$SubscriptionPayload<ExtArgs>[]
      updatedSubscriptions: Prisma.$SubscriptionPayload<ExtArgs>[]
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      Name: string
      Email: string
      PasswordHash: string
      RoleId: number
      CreatedAt: Date
      UpdatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    CreateSubsribers<T extends User$CreateSubsribersArgs<ExtArgs> = {}>(args?: Subset<T, User$CreateSubsribersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    UpdateSubsribers<T extends User$UpdateSubsribersArgs<ExtArgs> = {}>(args?: Subset<T, User$UpdateSubsribersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdSubscriptions<T extends User$createdSubscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdSubscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    updatedSubscriptions<T extends User$updatedSubscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, User$updatedSubscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auditLogs<T extends User$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly Name: FieldRef<"User", 'String'>
    readonly Email: FieldRef<"User", 'String'>
    readonly PasswordHash: FieldRef<"User", 'String'>
    readonly RoleId: FieldRef<"User", 'Int'>
    readonly CreatedAt: FieldRef<"User", 'DateTime'>
    readonly UpdatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.CreateSubsribers
   */
  export type User$CreateSubsribersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriberInclude<ExtArgs> | null
    where?: SubscriberWhereInput
    orderBy?: SubscriberOrderByWithRelationInput | SubscriberOrderByWithRelationInput[]
    cursor?: SubscriberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriberScalarFieldEnum | SubscriberScalarFieldEnum[]
  }

  /**
   * User.UpdateSubsribers
   */
  export type User$UpdateSubsribersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriberInclude<ExtArgs> | null
    where?: SubscriberWhereInput
    orderBy?: SubscriberOrderByWithRelationInput | SubscriberOrderByWithRelationInput[]
    cursor?: SubscriberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriberScalarFieldEnum | SubscriberScalarFieldEnum[]
  }

  /**
   * User.createdSubscriptions
   */
  export type User$createdSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    cursor?: SubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * User.updatedSubscriptions
   */
  export type User$updatedSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    cursor?: SubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * User.auditLogs
   */
  export type User$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    id: number | null
  }

  export type RoleSumAggregateOutputType = {
    id: number | null
  }

  export type RoleMinAggregateOutputType = {
    id: number | null
    Name: string | null
  }

  export type RoleMaxAggregateOutputType = {
    id: number | null
    Name: string | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    Name: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    id?: true
  }

  export type RoleSumAggregateInputType = {
    id?: true
  }

  export type RoleMinAggregateInputType = {
    id?: true
    Name?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    Name?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    Name?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: number
    Name: string
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Name?: boolean
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>



  export type RoleSelectScalar = {
    id?: boolean
    Name?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "Name", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      Name: string
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Role$usersArgs<ExtArgs> = {}>(args?: Subset<T, Role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'Int'>
    readonly Name: FieldRef<"Role", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.users
   */
  export type Role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model Subscriber
   */

  export type AggregateSubscriber = {
    _count: SubscriberCountAggregateOutputType | null
    _avg: SubscriberAvgAggregateOutputType | null
    _sum: SubscriberSumAggregateOutputType | null
    _min: SubscriberMinAggregateOutputType | null
    _max: SubscriberMaxAggregateOutputType | null
  }

  export type SubscriberAvgAggregateOutputType = {
    id: number | null
    CreatedByUserId: number | null
    UpdatedByUserId: number | null
  }

  export type SubscriberSumAggregateOutputType = {
    id: number | null
    CreatedByUserId: number | null
    UpdatedByUserId: number | null
  }

  export type SubscriberMinAggregateOutputType = {
    id: number | null
    Name: string | null
    Email: string | null
    CreatedByUserId: number | null
    UpdatedByUserId: number | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type SubscriberMaxAggregateOutputType = {
    id: number | null
    Name: string | null
    Email: string | null
    CreatedByUserId: number | null
    UpdatedByUserId: number | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type SubscriberCountAggregateOutputType = {
    id: number
    Name: number
    Email: number
    CreatedByUserId: number
    UpdatedByUserId: number
    CreatedAt: number
    UpdatedAt: number
    _all: number
  }


  export type SubscriberAvgAggregateInputType = {
    id?: true
    CreatedByUserId?: true
    UpdatedByUserId?: true
  }

  export type SubscriberSumAggregateInputType = {
    id?: true
    CreatedByUserId?: true
    UpdatedByUserId?: true
  }

  export type SubscriberMinAggregateInputType = {
    id?: true
    Name?: true
    Email?: true
    CreatedByUserId?: true
    UpdatedByUserId?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type SubscriberMaxAggregateInputType = {
    id?: true
    Name?: true
    Email?: true
    CreatedByUserId?: true
    UpdatedByUserId?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type SubscriberCountAggregateInputType = {
    id?: true
    Name?: true
    Email?: true
    CreatedByUserId?: true
    UpdatedByUserId?: true
    CreatedAt?: true
    UpdatedAt?: true
    _all?: true
  }

  export type SubscriberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriber to aggregate.
     */
    where?: SubscriberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscribers to fetch.
     */
    orderBy?: SubscriberOrderByWithRelationInput | SubscriberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscribers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscribers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscribers
    **/
    _count?: true | SubscriberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubscriberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubscriberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriberMaxAggregateInputType
  }

  export type GetSubscriberAggregateType<T extends SubscriberAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscriber]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscriber[P]>
      : GetScalarType<T[P], AggregateSubscriber[P]>
  }




  export type SubscriberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriberWhereInput
    orderBy?: SubscriberOrderByWithAggregationInput | SubscriberOrderByWithAggregationInput[]
    by: SubscriberScalarFieldEnum[] | SubscriberScalarFieldEnum
    having?: SubscriberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriberCountAggregateInputType | true
    _avg?: SubscriberAvgAggregateInputType
    _sum?: SubscriberSumAggregateInputType
    _min?: SubscriberMinAggregateInputType
    _max?: SubscriberMaxAggregateInputType
  }

  export type SubscriberGroupByOutputType = {
    id: number
    Name: string
    Email: string
    CreatedByUserId: number
    UpdatedByUserId: number
    CreatedAt: Date
    UpdatedAt: Date
    _count: SubscriberCountAggregateOutputType | null
    _avg: SubscriberAvgAggregateOutputType | null
    _sum: SubscriberSumAggregateOutputType | null
    _min: SubscriberMinAggregateOutputType | null
    _max: SubscriberMaxAggregateOutputType | null
  }

  type GetSubscriberGroupByPayload<T extends SubscriberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriberGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriberGroupByOutputType[P]>
        }
      >
    >


  export type SubscriberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Name?: boolean
    Email?: boolean
    CreatedByUserId?: boolean
    UpdatedByUserId?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    CreatedBy?: boolean | UserDefaultArgs<ExtArgs>
    UpdatedBy?: boolean | UserDefaultArgs<ExtArgs>
    subscriptions?: boolean | Subscriber$subscriptionsArgs<ExtArgs>
    _count?: boolean | SubscriberCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscriber"]>



  export type SubscriberSelectScalar = {
    id?: boolean
    Name?: boolean
    Email?: boolean
    CreatedByUserId?: boolean
    UpdatedByUserId?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
  }

  export type SubscriberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "Name" | "Email" | "CreatedByUserId" | "UpdatedByUserId" | "CreatedAt" | "UpdatedAt", ExtArgs["result"]["subscriber"]>
  export type SubscriberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CreatedBy?: boolean | UserDefaultArgs<ExtArgs>
    UpdatedBy?: boolean | UserDefaultArgs<ExtArgs>
    subscriptions?: boolean | Subscriber$subscriptionsArgs<ExtArgs>
    _count?: boolean | SubscriberCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SubscriberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscriber"
    objects: {
      CreatedBy: Prisma.$UserPayload<ExtArgs>
      UpdatedBy: Prisma.$UserPayload<ExtArgs>
      subscriptions: Prisma.$SubscriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      Name: string
      Email: string
      CreatedByUserId: number
      UpdatedByUserId: number
      CreatedAt: Date
      UpdatedAt: Date
    }, ExtArgs["result"]["subscriber"]>
    composites: {}
  }

  type SubscriberGetPayload<S extends boolean | null | undefined | SubscriberDefaultArgs> = $Result.GetResult<Prisma.$SubscriberPayload, S>

  type SubscriberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriberCountAggregateInputType | true
    }

  export interface SubscriberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscriber'], meta: { name: 'Subscriber' } }
    /**
     * Find zero or one Subscriber that matches the filter.
     * @param {SubscriberFindUniqueArgs} args - Arguments to find a Subscriber
     * @example
     * // Get one Subscriber
     * const subscriber = await prisma.subscriber.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriberFindUniqueArgs>(args: SelectSubset<T, SubscriberFindUniqueArgs<ExtArgs>>): Prisma__SubscriberClient<$Result.GetResult<Prisma.$SubscriberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscriber that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriberFindUniqueOrThrowArgs} args - Arguments to find a Subscriber
     * @example
     * // Get one Subscriber
     * const subscriber = await prisma.subscriber.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriberFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriberClient<$Result.GetResult<Prisma.$SubscriberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscriber that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriberFindFirstArgs} args - Arguments to find a Subscriber
     * @example
     * // Get one Subscriber
     * const subscriber = await prisma.subscriber.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriberFindFirstArgs>(args?: SelectSubset<T, SubscriberFindFirstArgs<ExtArgs>>): Prisma__SubscriberClient<$Result.GetResult<Prisma.$SubscriberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscriber that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriberFindFirstOrThrowArgs} args - Arguments to find a Subscriber
     * @example
     * // Get one Subscriber
     * const subscriber = await prisma.subscriber.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriberFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriberFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriberClient<$Result.GetResult<Prisma.$SubscriberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscribers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscribers
     * const subscribers = await prisma.subscriber.findMany()
     * 
     * // Get first 10 Subscribers
     * const subscribers = await prisma.subscriber.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriberWithIdOnly = await prisma.subscriber.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriberFindManyArgs>(args?: SelectSubset<T, SubscriberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscriber.
     * @param {SubscriberCreateArgs} args - Arguments to create a Subscriber.
     * @example
     * // Create one Subscriber
     * const Subscriber = await prisma.subscriber.create({
     *   data: {
     *     // ... data to create a Subscriber
     *   }
     * })
     * 
     */
    create<T extends SubscriberCreateArgs>(args: SelectSubset<T, SubscriberCreateArgs<ExtArgs>>): Prisma__SubscriberClient<$Result.GetResult<Prisma.$SubscriberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscribers.
     * @param {SubscriberCreateManyArgs} args - Arguments to create many Subscribers.
     * @example
     * // Create many Subscribers
     * const subscriber = await prisma.subscriber.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriberCreateManyArgs>(args?: SelectSubset<T, SubscriberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Subscriber.
     * @param {SubscriberDeleteArgs} args - Arguments to delete one Subscriber.
     * @example
     * // Delete one Subscriber
     * const Subscriber = await prisma.subscriber.delete({
     *   where: {
     *     // ... filter to delete one Subscriber
     *   }
     * })
     * 
     */
    delete<T extends SubscriberDeleteArgs>(args: SelectSubset<T, SubscriberDeleteArgs<ExtArgs>>): Prisma__SubscriberClient<$Result.GetResult<Prisma.$SubscriberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscriber.
     * @param {SubscriberUpdateArgs} args - Arguments to update one Subscriber.
     * @example
     * // Update one Subscriber
     * const subscriber = await prisma.subscriber.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriberUpdateArgs>(args: SelectSubset<T, SubscriberUpdateArgs<ExtArgs>>): Prisma__SubscriberClient<$Result.GetResult<Prisma.$SubscriberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscribers.
     * @param {SubscriberDeleteManyArgs} args - Arguments to filter Subscribers to delete.
     * @example
     * // Delete a few Subscribers
     * const { count } = await prisma.subscriber.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriberDeleteManyArgs>(args?: SelectSubset<T, SubscriberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscribers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscribers
     * const subscriber = await prisma.subscriber.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriberUpdateManyArgs>(args: SelectSubset<T, SubscriberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Subscriber.
     * @param {SubscriberUpsertArgs} args - Arguments to update or create a Subscriber.
     * @example
     * // Update or create a Subscriber
     * const subscriber = await prisma.subscriber.upsert({
     *   create: {
     *     // ... data to create a Subscriber
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscriber we want to update
     *   }
     * })
     */
    upsert<T extends SubscriberUpsertArgs>(args: SelectSubset<T, SubscriberUpsertArgs<ExtArgs>>): Prisma__SubscriberClient<$Result.GetResult<Prisma.$SubscriberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subscribers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriberCountArgs} args - Arguments to filter Subscribers to count.
     * @example
     * // Count the number of Subscribers
     * const count = await prisma.subscriber.count({
     *   where: {
     *     // ... the filter for the Subscribers we want to count
     *   }
     * })
    **/
    count<T extends SubscriberCountArgs>(
      args?: Subset<T, SubscriberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscriber.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubscriberAggregateArgs>(args: Subset<T, SubscriberAggregateArgs>): Prisma.PrismaPromise<GetSubscriberAggregateType<T>>

    /**
     * Group by Subscriber.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubscriberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriberGroupByArgs['orderBy'] }
        : { orderBy?: SubscriberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubscriberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscriber model
   */
  readonly fields: SubscriberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscriber.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    CreatedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    UpdatedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subscriptions<T extends Subscriber$subscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, Subscriber$subscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subscriber model
   */
  interface SubscriberFieldRefs {
    readonly id: FieldRef<"Subscriber", 'Int'>
    readonly Name: FieldRef<"Subscriber", 'String'>
    readonly Email: FieldRef<"Subscriber", 'String'>
    readonly CreatedByUserId: FieldRef<"Subscriber", 'Int'>
    readonly UpdatedByUserId: FieldRef<"Subscriber", 'Int'>
    readonly CreatedAt: FieldRef<"Subscriber", 'DateTime'>
    readonly UpdatedAt: FieldRef<"Subscriber", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subscriber findUnique
   */
  export type SubscriberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriberInclude<ExtArgs> | null
    /**
     * Filter, which Subscriber to fetch.
     */
    where: SubscriberWhereUniqueInput
  }

  /**
   * Subscriber findUniqueOrThrow
   */
  export type SubscriberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriberInclude<ExtArgs> | null
    /**
     * Filter, which Subscriber to fetch.
     */
    where: SubscriberWhereUniqueInput
  }

  /**
   * Subscriber findFirst
   */
  export type SubscriberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriberInclude<ExtArgs> | null
    /**
     * Filter, which Subscriber to fetch.
     */
    where?: SubscriberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscribers to fetch.
     */
    orderBy?: SubscriberOrderByWithRelationInput | SubscriberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscribers.
     */
    cursor?: SubscriberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscribers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscribers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscribers.
     */
    distinct?: SubscriberScalarFieldEnum | SubscriberScalarFieldEnum[]
  }

  /**
   * Subscriber findFirstOrThrow
   */
  export type SubscriberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriberInclude<ExtArgs> | null
    /**
     * Filter, which Subscriber to fetch.
     */
    where?: SubscriberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscribers to fetch.
     */
    orderBy?: SubscriberOrderByWithRelationInput | SubscriberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscribers.
     */
    cursor?: SubscriberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscribers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscribers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscribers.
     */
    distinct?: SubscriberScalarFieldEnum | SubscriberScalarFieldEnum[]
  }

  /**
   * Subscriber findMany
   */
  export type SubscriberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriberInclude<ExtArgs> | null
    /**
     * Filter, which Subscribers to fetch.
     */
    where?: SubscriberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscribers to fetch.
     */
    orderBy?: SubscriberOrderByWithRelationInput | SubscriberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscribers.
     */
    cursor?: SubscriberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscribers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscribers.
     */
    skip?: number
    distinct?: SubscriberScalarFieldEnum | SubscriberScalarFieldEnum[]
  }

  /**
   * Subscriber create
   */
  export type SubscriberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriberInclude<ExtArgs> | null
    /**
     * The data needed to create a Subscriber.
     */
    data: XOR<SubscriberCreateInput, SubscriberUncheckedCreateInput>
  }

  /**
   * Subscriber createMany
   */
  export type SubscriberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscribers.
     */
    data: SubscriberCreateManyInput | SubscriberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscriber update
   */
  export type SubscriberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriberInclude<ExtArgs> | null
    /**
     * The data needed to update a Subscriber.
     */
    data: XOR<SubscriberUpdateInput, SubscriberUncheckedUpdateInput>
    /**
     * Choose, which Subscriber to update.
     */
    where: SubscriberWhereUniqueInput
  }

  /**
   * Subscriber updateMany
   */
  export type SubscriberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscribers.
     */
    data: XOR<SubscriberUpdateManyMutationInput, SubscriberUncheckedUpdateManyInput>
    /**
     * Filter which Subscribers to update
     */
    where?: SubscriberWhereInput
    /**
     * Limit how many Subscribers to update.
     */
    limit?: number
  }

  /**
   * Subscriber upsert
   */
  export type SubscriberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriberInclude<ExtArgs> | null
    /**
     * The filter to search for the Subscriber to update in case it exists.
     */
    where: SubscriberWhereUniqueInput
    /**
     * In case the Subscriber found by the `where` argument doesn't exist, create a new Subscriber with this data.
     */
    create: XOR<SubscriberCreateInput, SubscriberUncheckedCreateInput>
    /**
     * In case the Subscriber was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriberUpdateInput, SubscriberUncheckedUpdateInput>
  }

  /**
   * Subscriber delete
   */
  export type SubscriberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriberInclude<ExtArgs> | null
    /**
     * Filter which Subscriber to delete.
     */
    where: SubscriberWhereUniqueInput
  }

  /**
   * Subscriber deleteMany
   */
  export type SubscriberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscribers to delete
     */
    where?: SubscriberWhereInput
    /**
     * Limit how many Subscribers to delete.
     */
    limit?: number
  }

  /**
   * Subscriber.subscriptions
   */
  export type Subscriber$subscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    cursor?: SubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscriber without action
   */
  export type SubscriberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriberInclude<ExtArgs> | null
  }


  /**
   * Model Subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null
    _avg: SubscriptionAvgAggregateOutputType | null
    _sum: SubscriptionSumAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  export type SubscriptionAvgAggregateOutputType = {
    id: number | null
    SubscripterId: number | null
    CreatedByUserId: number | null
    UpdatedByUserId: number | null
  }

  export type SubscriptionSumAggregateOutputType = {
    id: number | null
    SubscripterId: number | null
    CreatedByUserId: number | null
    UpdatedByUserId: number | null
  }

  export type SubscriptionMinAggregateOutputType = {
    id: number | null
    SubscripterId: number | null
    StartDate: Date | null
    EndDate: Date | null
    Status: string | null
    CreatedByUserId: number | null
    UpdatedByUserId: number | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type SubscriptionMaxAggregateOutputType = {
    id: number | null
    SubscripterId: number | null
    StartDate: Date | null
    EndDate: Date | null
    Status: string | null
    CreatedByUserId: number | null
    UpdatedByUserId: number | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type SubscriptionCountAggregateOutputType = {
    id: number
    SubscripterId: number
    StartDate: number
    EndDate: number
    Status: number
    CreatedByUserId: number
    UpdatedByUserId: number
    CreatedAt: number
    UpdatedAt: number
    _all: number
  }


  export type SubscriptionAvgAggregateInputType = {
    id?: true
    SubscripterId?: true
    CreatedByUserId?: true
    UpdatedByUserId?: true
  }

  export type SubscriptionSumAggregateInputType = {
    id?: true
    SubscripterId?: true
    CreatedByUserId?: true
    UpdatedByUserId?: true
  }

  export type SubscriptionMinAggregateInputType = {
    id?: true
    SubscripterId?: true
    StartDate?: true
    EndDate?: true
    Status?: true
    CreatedByUserId?: true
    UpdatedByUserId?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type SubscriptionMaxAggregateInputType = {
    id?: true
    SubscripterId?: true
    StartDate?: true
    EndDate?: true
    Status?: true
    CreatedByUserId?: true
    UpdatedByUserId?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type SubscriptionCountAggregateInputType = {
    id?: true
    SubscripterId?: true
    StartDate?: true
    EndDate?: true
    Status?: true
    CreatedByUserId?: true
    UpdatedByUserId?: true
    CreatedAt?: true
    UpdatedAt?: true
    _all?: true
  }

  export type SubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscription to aggregate.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubscriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubscriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionMaxAggregateInputType
  }

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>
  }




  export type SubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithAggregationInput | SubscriptionOrderByWithAggregationInput[]
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum
    having?: SubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCountAggregateInputType | true
    _avg?: SubscriptionAvgAggregateInputType
    _sum?: SubscriptionSumAggregateInputType
    _min?: SubscriptionMinAggregateInputType
    _max?: SubscriptionMaxAggregateInputType
  }

  export type SubscriptionGroupByOutputType = {
    id: number
    SubscripterId: number
    StartDate: Date
    EndDate: Date
    Status: string
    CreatedByUserId: number
    UpdatedByUserId: number
    CreatedAt: Date
    UpdatedAt: Date
    _count: SubscriptionCountAggregateOutputType | null
    _avg: SubscriptionAvgAggregateOutputType | null
    _sum: SubscriptionSumAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    SubscripterId?: boolean
    StartDate?: boolean
    EndDate?: boolean
    Status?: boolean
    CreatedByUserId?: boolean
    UpdatedByUserId?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    CreatedBy?: boolean | UserDefaultArgs<ExtArgs>
    UpdatedBy?: boolean | UserDefaultArgs<ExtArgs>
    subscriber?: boolean | SubscriberDefaultArgs<ExtArgs>
    alerts?: boolean | Subscription$alertsArgs<ExtArgs>
    _count?: boolean | SubscriptionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>



  export type SubscriptionSelectScalar = {
    id?: boolean
    SubscripterId?: boolean
    StartDate?: boolean
    EndDate?: boolean
    Status?: boolean
    CreatedByUserId?: boolean
    UpdatedByUserId?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
  }

  export type SubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "SubscripterId" | "StartDate" | "EndDate" | "Status" | "CreatedByUserId" | "UpdatedByUserId" | "CreatedAt" | "UpdatedAt", ExtArgs["result"]["subscription"]>
  export type SubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CreatedBy?: boolean | UserDefaultArgs<ExtArgs>
    UpdatedBy?: boolean | UserDefaultArgs<ExtArgs>
    subscriber?: boolean | SubscriberDefaultArgs<ExtArgs>
    alerts?: boolean | Subscription$alertsArgs<ExtArgs>
    _count?: boolean | SubscriptionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscription"
    objects: {
      CreatedBy: Prisma.$UserPayload<ExtArgs>
      UpdatedBy: Prisma.$UserPayload<ExtArgs>
      subscriber: Prisma.$SubscriberPayload<ExtArgs>
      alerts: Prisma.$AlertPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      SubscripterId: number
      StartDate: Date
      EndDate: Date
      Status: string
      CreatedByUserId: number
      UpdatedByUserId: number
      CreatedAt: Date
      UpdatedAt: Date
    }, ExtArgs["result"]["subscription"]>
    composites: {}
  }

  type SubscriptionGetPayload<S extends boolean | null | undefined | SubscriptionDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPayload, S>

  type SubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionCountAggregateInputType | true
    }

  export interface SubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscription'], meta: { name: 'Subscription' } }
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionFindUniqueArgs>(args: SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionFindFirstArgs>(args?: SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionFindManyArgs>(args?: SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     * 
     */
    create<T extends SubscriptionCreateArgs>(args: SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscriptions.
     * @param {SubscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionCreateManyArgs>(args?: SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionDeleteArgs>(args: SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionUpdateArgs>(args: SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionDeleteManyArgs>(args?: SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionUpdateManyArgs>(args: SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionUpsertArgs>(args: SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubscriptionAggregateArgs>(args: Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscription model
   */
  readonly fields: SubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    CreatedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    UpdatedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subscriber<T extends SubscriberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubscriberDefaultArgs<ExtArgs>>): Prisma__SubscriberClient<$Result.GetResult<Prisma.$SubscriberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    alerts<T extends Subscription$alertsArgs<ExtArgs> = {}>(args?: Subset<T, Subscription$alertsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subscription model
   */
  interface SubscriptionFieldRefs {
    readonly id: FieldRef<"Subscription", 'Int'>
    readonly SubscripterId: FieldRef<"Subscription", 'Int'>
    readonly StartDate: FieldRef<"Subscription", 'DateTime'>
    readonly EndDate: FieldRef<"Subscription", 'DateTime'>
    readonly Status: FieldRef<"Subscription", 'String'>
    readonly CreatedByUserId: FieldRef<"Subscription", 'Int'>
    readonly UpdatedByUserId: FieldRef<"Subscription", 'Int'>
    readonly CreatedAt: FieldRef<"Subscription", 'DateTime'>
    readonly UpdatedAt: FieldRef<"Subscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subscription findUnique
   */
  export type SubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findUniqueOrThrow
   */
  export type SubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findFirst
   */
  export type SubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findFirstOrThrow
   */
  export type SubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Subscription.
     */
    data: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
  }

  /**
   * Subscription createMany
   */
  export type SubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Subscription.
     */
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
    /**
     * Choose, which Subscription to update.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
  }

  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Subscription to update in case it exists.
     */
    where: SubscriptionWhereUniqueInput
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     */
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
  }

  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter which Subscription to delete.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to delete.
     */
    limit?: number
  }

  /**
   * Subscription.alerts
   */
  export type Subscription$alertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    where?: AlertWhereInput
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    cursor?: AlertWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Subscription without action
   */
  export type SubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model Alert
   */

  export type AggregateAlert = {
    _count: AlertCountAggregateOutputType | null
    _avg: AlertAvgAggregateOutputType | null
    _sum: AlertSumAggregateOutputType | null
    _min: AlertMinAggregateOutputType | null
    _max: AlertMaxAggregateOutputType | null
  }

  export type AlertAvgAggregateOutputType = {
    id: number | null
    SubscriptionId: number | null
  }

  export type AlertSumAggregateOutputType = {
    id: number | null
    SubscriptionId: number | null
  }

  export type AlertMinAggregateOutputType = {
    id: number | null
    SubscriptionId: number | null
    Type: string | null
    Seen: boolean | null
    CreatedAt: Date | null
  }

  export type AlertMaxAggregateOutputType = {
    id: number | null
    SubscriptionId: number | null
    Type: string | null
    Seen: boolean | null
    CreatedAt: Date | null
  }

  export type AlertCountAggregateOutputType = {
    id: number
    SubscriptionId: number
    Type: number
    Seen: number
    CreatedAt: number
    _all: number
  }


  export type AlertAvgAggregateInputType = {
    id?: true
    SubscriptionId?: true
  }

  export type AlertSumAggregateInputType = {
    id?: true
    SubscriptionId?: true
  }

  export type AlertMinAggregateInputType = {
    id?: true
    SubscriptionId?: true
    Type?: true
    Seen?: true
    CreatedAt?: true
  }

  export type AlertMaxAggregateInputType = {
    id?: true
    SubscriptionId?: true
    Type?: true
    Seen?: true
    CreatedAt?: true
  }

  export type AlertCountAggregateInputType = {
    id?: true
    SubscriptionId?: true
    Type?: true
    Seen?: true
    CreatedAt?: true
    _all?: true
  }

  export type AlertAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alert to aggregate.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Alerts
    **/
    _count?: true | AlertCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlertAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlertSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlertMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlertMaxAggregateInputType
  }

  export type GetAlertAggregateType<T extends AlertAggregateArgs> = {
        [P in keyof T & keyof AggregateAlert]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlert[P]>
      : GetScalarType<T[P], AggregateAlert[P]>
  }




  export type AlertGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertWhereInput
    orderBy?: AlertOrderByWithAggregationInput | AlertOrderByWithAggregationInput[]
    by: AlertScalarFieldEnum[] | AlertScalarFieldEnum
    having?: AlertScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlertCountAggregateInputType | true
    _avg?: AlertAvgAggregateInputType
    _sum?: AlertSumAggregateInputType
    _min?: AlertMinAggregateInputType
    _max?: AlertMaxAggregateInputType
  }

  export type AlertGroupByOutputType = {
    id: number
    SubscriptionId: number
    Type: string
    Seen: boolean
    CreatedAt: Date
    _count: AlertCountAggregateOutputType | null
    _avg: AlertAvgAggregateOutputType | null
    _sum: AlertSumAggregateOutputType | null
    _min: AlertMinAggregateOutputType | null
    _max: AlertMaxAggregateOutputType | null
  }

  type GetAlertGroupByPayload<T extends AlertGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlertGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlertGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlertGroupByOutputType[P]>
            : GetScalarType<T[P], AlertGroupByOutputType[P]>
        }
      >
    >


  export type AlertSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    SubscriptionId?: boolean
    Type?: boolean
    Seen?: boolean
    CreatedAt?: boolean
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alert"]>



  export type AlertSelectScalar = {
    id?: boolean
    SubscriptionId?: boolean
    Type?: boolean
    Seen?: boolean
    CreatedAt?: boolean
  }

  export type AlertOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "SubscriptionId" | "Type" | "Seen" | "CreatedAt", ExtArgs["result"]["alert"]>
  export type AlertInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
  }

  export type $AlertPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Alert"
    objects: {
      subscription: Prisma.$SubscriptionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      SubscriptionId: number
      Type: string
      Seen: boolean
      CreatedAt: Date
    }, ExtArgs["result"]["alert"]>
    composites: {}
  }

  type AlertGetPayload<S extends boolean | null | undefined | AlertDefaultArgs> = $Result.GetResult<Prisma.$AlertPayload, S>

  type AlertCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlertFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlertCountAggregateInputType | true
    }

  export interface AlertDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Alert'], meta: { name: 'Alert' } }
    /**
     * Find zero or one Alert that matches the filter.
     * @param {AlertFindUniqueArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlertFindUniqueArgs>(args: SelectSubset<T, AlertFindUniqueArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Alert that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlertFindUniqueOrThrowArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlertFindUniqueOrThrowArgs>(args: SelectSubset<T, AlertFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alert that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindFirstArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlertFindFirstArgs>(args?: SelectSubset<T, AlertFindFirstArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alert that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindFirstOrThrowArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlertFindFirstOrThrowArgs>(args?: SelectSubset<T, AlertFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alerts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alerts
     * const alerts = await prisma.alert.findMany()
     * 
     * // Get first 10 Alerts
     * const alerts = await prisma.alert.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alertWithIdOnly = await prisma.alert.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlertFindManyArgs>(args?: SelectSubset<T, AlertFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Alert.
     * @param {AlertCreateArgs} args - Arguments to create a Alert.
     * @example
     * // Create one Alert
     * const Alert = await prisma.alert.create({
     *   data: {
     *     // ... data to create a Alert
     *   }
     * })
     * 
     */
    create<T extends AlertCreateArgs>(args: SelectSubset<T, AlertCreateArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alerts.
     * @param {AlertCreateManyArgs} args - Arguments to create many Alerts.
     * @example
     * // Create many Alerts
     * const alert = await prisma.alert.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlertCreateManyArgs>(args?: SelectSubset<T, AlertCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Alert.
     * @param {AlertDeleteArgs} args - Arguments to delete one Alert.
     * @example
     * // Delete one Alert
     * const Alert = await prisma.alert.delete({
     *   where: {
     *     // ... filter to delete one Alert
     *   }
     * })
     * 
     */
    delete<T extends AlertDeleteArgs>(args: SelectSubset<T, AlertDeleteArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Alert.
     * @param {AlertUpdateArgs} args - Arguments to update one Alert.
     * @example
     * // Update one Alert
     * const alert = await prisma.alert.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlertUpdateArgs>(args: SelectSubset<T, AlertUpdateArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alerts.
     * @param {AlertDeleteManyArgs} args - Arguments to filter Alerts to delete.
     * @example
     * // Delete a few Alerts
     * const { count } = await prisma.alert.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlertDeleteManyArgs>(args?: SelectSubset<T, AlertDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alerts
     * const alert = await prisma.alert.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlertUpdateManyArgs>(args: SelectSubset<T, AlertUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Alert.
     * @param {AlertUpsertArgs} args - Arguments to update or create a Alert.
     * @example
     * // Update or create a Alert
     * const alert = await prisma.alert.upsert({
     *   create: {
     *     // ... data to create a Alert
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alert we want to update
     *   }
     * })
     */
    upsert<T extends AlertUpsertArgs>(args: SelectSubset<T, AlertUpsertArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Alerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertCountArgs} args - Arguments to filter Alerts to count.
     * @example
     * // Count the number of Alerts
     * const count = await prisma.alert.count({
     *   where: {
     *     // ... the filter for the Alerts we want to count
     *   }
     * })
    **/
    count<T extends AlertCountArgs>(
      args?: Subset<T, AlertCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlertCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AlertAggregateArgs>(args: Subset<T, AlertAggregateArgs>): Prisma.PrismaPromise<GetAlertAggregateType<T>>

    /**
     * Group by Alert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AlertGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlertGroupByArgs['orderBy'] }
        : { orderBy?: AlertGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AlertGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlertGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Alert model
   */
  readonly fields: AlertFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Alert.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlertClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subscription<T extends SubscriptionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubscriptionDefaultArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Alert model
   */
  interface AlertFieldRefs {
    readonly id: FieldRef<"Alert", 'Int'>
    readonly SubscriptionId: FieldRef<"Alert", 'Int'>
    readonly Type: FieldRef<"Alert", 'String'>
    readonly Seen: FieldRef<"Alert", 'Boolean'>
    readonly CreatedAt: FieldRef<"Alert", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Alert findUnique
   */
  export type AlertFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert findUniqueOrThrow
   */
  export type AlertFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert findFirst
   */
  export type AlertFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alerts.
     */
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert findFirstOrThrow
   */
  export type AlertFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alerts.
     */
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert findMany
   */
  export type AlertFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alerts to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert create
   */
  export type AlertCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * The data needed to create a Alert.
     */
    data: XOR<AlertCreateInput, AlertUncheckedCreateInput>
  }

  /**
   * Alert createMany
   */
  export type AlertCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alerts.
     */
    data: AlertCreateManyInput | AlertCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Alert update
   */
  export type AlertUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * The data needed to update a Alert.
     */
    data: XOR<AlertUpdateInput, AlertUncheckedUpdateInput>
    /**
     * Choose, which Alert to update.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert updateMany
   */
  export type AlertUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alerts.
     */
    data: XOR<AlertUpdateManyMutationInput, AlertUncheckedUpdateManyInput>
    /**
     * Filter which Alerts to update
     */
    where?: AlertWhereInput
    /**
     * Limit how many Alerts to update.
     */
    limit?: number
  }

  /**
   * Alert upsert
   */
  export type AlertUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * The filter to search for the Alert to update in case it exists.
     */
    where: AlertWhereUniqueInput
    /**
     * In case the Alert found by the `where` argument doesn't exist, create a new Alert with this data.
     */
    create: XOR<AlertCreateInput, AlertUncheckedCreateInput>
    /**
     * In case the Alert was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlertUpdateInput, AlertUncheckedUpdateInput>
  }

  /**
   * Alert delete
   */
  export type AlertDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter which Alert to delete.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert deleteMany
   */
  export type AlertDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alerts to delete
     */
    where?: AlertWhereInput
    /**
     * Limit how many Alerts to delete.
     */
    limit?: number
  }

  /**
   * Alert without action
   */
  export type AlertDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _avg: AuditLogAvgAggregateOutputType | null
    _sum: AuditLogSumAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogAvgAggregateOutputType = {
    id: number | null
    entityId: number | null
    performedByUserId: number | null
  }

  export type AuditLogSumAggregateOutputType = {
    id: number | null
    entityId: number | null
    performedByUserId: number | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: number | null
    action: string | null
    entity: string | null
    entityId: number | null
    performedByUserId: number | null
    timestamp: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: number | null
    action: string | null
    entity: string | null
    entityId: number | null
    performedByUserId: number | null
    timestamp: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    action: number
    entity: number
    entityId: number
    performedByUserId: number
    timestamp: number
    _all: number
  }


  export type AuditLogAvgAggregateInputType = {
    id?: true
    entityId?: true
    performedByUserId?: true
  }

  export type AuditLogSumAggregateInputType = {
    id?: true
    entityId?: true
    performedByUserId?: true
  }

  export type AuditLogMinAggregateInputType = {
    id?: true
    action?: true
    entity?: true
    entityId?: true
    performedByUserId?: true
    timestamp?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    action?: true
    entity?: true
    entityId?: true
    performedByUserId?: true
    timestamp?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    action?: true
    entity?: true
    entityId?: true
    performedByUserId?: true
    timestamp?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuditLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuditLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _avg?: AuditLogAvgAggregateInputType
    _sum?: AuditLogSumAggregateInputType
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: number
    action: string
    entity: string
    entityId: number
    performedByUserId: number
    timestamp: Date
    _count: AuditLogCountAggregateOutputType | null
    _avg: AuditLogAvgAggregateOutputType | null
    _sum: AuditLogSumAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    performedByUserId?: boolean
    timestamp?: boolean
    performedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>



  export type AuditLogSelectScalar = {
    id?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    performedByUserId?: boolean
    timestamp?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "action" | "entity" | "entityId" | "performedByUserId" | "timestamp", ExtArgs["result"]["auditLog"]>
  export type AuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    performedBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {
      performedBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      action: string
      entity: string
      entityId: number
      performedByUserId: number
      timestamp: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    performedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'Int'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly entity: FieldRef<"AuditLog", 'String'>
    readonly entityId: FieldRef<"AuditLog", 'Int'>
    readonly performedByUserId: FieldRef<"AuditLog", 'Int'>
    readonly timestamp: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    Name: 'Name',
    Email: 'Email',
    PasswordHash: 'PasswordHash',
    RoleId: 'RoleId',
    CreatedAt: 'CreatedAt',
    UpdatedAt: 'UpdatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    Name: 'Name'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const SubscriberScalarFieldEnum: {
    id: 'id',
    Name: 'Name',
    Email: 'Email',
    CreatedByUserId: 'CreatedByUserId',
    UpdatedByUserId: 'UpdatedByUserId',
    CreatedAt: 'CreatedAt',
    UpdatedAt: 'UpdatedAt'
  };

  export type SubscriberScalarFieldEnum = (typeof SubscriberScalarFieldEnum)[keyof typeof SubscriberScalarFieldEnum]


  export const SubscriptionScalarFieldEnum: {
    id: 'id',
    SubscripterId: 'SubscripterId',
    StartDate: 'StartDate',
    EndDate: 'EndDate',
    Status: 'Status',
    CreatedByUserId: 'CreatedByUserId',
    UpdatedByUserId: 'UpdatedByUserId',
    CreatedAt: 'CreatedAt',
    UpdatedAt: 'UpdatedAt'
  };

  export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum]


  export const AlertScalarFieldEnum: {
    id: 'id',
    SubscriptionId: 'SubscriptionId',
    Type: 'Type',
    Seen: 'Seen',
    CreatedAt: 'CreatedAt'
  };

  export type AlertScalarFieldEnum = (typeof AlertScalarFieldEnum)[keyof typeof AlertScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    action: 'action',
    entity: 'entity',
    entityId: 'entityId',
    performedByUserId: 'performedByUserId',
    timestamp: 'timestamp'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UserOrderByRelevanceFieldEnum: {
    Name: 'Name',
    Email: 'Email',
    PasswordHash: 'PasswordHash'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const RoleOrderByRelevanceFieldEnum: {
    Name: 'Name'
  };

  export type RoleOrderByRelevanceFieldEnum = (typeof RoleOrderByRelevanceFieldEnum)[keyof typeof RoleOrderByRelevanceFieldEnum]


  export const SubscriberOrderByRelevanceFieldEnum: {
    Name: 'Name',
    Email: 'Email'
  };

  export type SubscriberOrderByRelevanceFieldEnum = (typeof SubscriberOrderByRelevanceFieldEnum)[keyof typeof SubscriberOrderByRelevanceFieldEnum]


  export const SubscriptionOrderByRelevanceFieldEnum: {
    Status: 'Status'
  };

  export type SubscriptionOrderByRelevanceFieldEnum = (typeof SubscriptionOrderByRelevanceFieldEnum)[keyof typeof SubscriptionOrderByRelevanceFieldEnum]


  export const AlertOrderByRelevanceFieldEnum: {
    Type: 'Type'
  };

  export type AlertOrderByRelevanceFieldEnum = (typeof AlertOrderByRelevanceFieldEnum)[keyof typeof AlertOrderByRelevanceFieldEnum]


  export const AuditLogOrderByRelevanceFieldEnum: {
    action: 'action',
    entity: 'entity'
  };

  export type AuditLogOrderByRelevanceFieldEnum = (typeof AuditLogOrderByRelevanceFieldEnum)[keyof typeof AuditLogOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    Name?: StringFilter<"User"> | string
    Email?: StringFilter<"User"> | string
    PasswordHash?: StringFilter<"User"> | string
    RoleId?: IntFilter<"User"> | number
    CreatedAt?: DateTimeFilter<"User"> | Date | string
    UpdatedAt?: DateTimeFilter<"User"> | Date | string
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    CreateSubsribers?: SubscriberListRelationFilter
    UpdateSubsribers?: SubscriberListRelationFilter
    createdSubscriptions?: SubscriptionListRelationFilter
    updatedSubscriptions?: SubscriptionListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    Name?: SortOrder
    Email?: SortOrder
    PasswordHash?: SortOrder
    RoleId?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    role?: RoleOrderByWithRelationInput
    CreateSubsribers?: SubscriberOrderByRelationAggregateInput
    UpdateSubsribers?: SubscriberOrderByRelationAggregateInput
    createdSubscriptions?: SubscriptionOrderByRelationAggregateInput
    updatedSubscriptions?: SubscriptionOrderByRelationAggregateInput
    auditLogs?: AuditLogOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    Email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    Name?: StringFilter<"User"> | string
    PasswordHash?: StringFilter<"User"> | string
    RoleId?: IntFilter<"User"> | number
    CreatedAt?: DateTimeFilter<"User"> | Date | string
    UpdatedAt?: DateTimeFilter<"User"> | Date | string
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    CreateSubsribers?: SubscriberListRelationFilter
    UpdateSubsribers?: SubscriberListRelationFilter
    createdSubscriptions?: SubscriptionListRelationFilter
    updatedSubscriptions?: SubscriptionListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }, "id" | "Email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    Name?: SortOrder
    Email?: SortOrder
    PasswordHash?: SortOrder
    RoleId?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    Name?: StringWithAggregatesFilter<"User"> | string
    Email?: StringWithAggregatesFilter<"User"> | string
    PasswordHash?: StringWithAggregatesFilter<"User"> | string
    RoleId?: IntWithAggregatesFilter<"User"> | number
    CreatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    UpdatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: IntFilter<"Role"> | number
    Name?: StringFilter<"Role"> | string
    users?: UserListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    Name?: SortOrder
    users?: UserOrderByRelationAggregateInput
    _relevance?: RoleOrderByRelevanceInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    Name?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    users?: UserListRelationFilter
  }, "id" | "Name">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    Name?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Role"> | number
    Name?: StringWithAggregatesFilter<"Role"> | string
  }

  export type SubscriberWhereInput = {
    AND?: SubscriberWhereInput | SubscriberWhereInput[]
    OR?: SubscriberWhereInput[]
    NOT?: SubscriberWhereInput | SubscriberWhereInput[]
    id?: IntFilter<"Subscriber"> | number
    Name?: StringFilter<"Subscriber"> | string
    Email?: StringFilter<"Subscriber"> | string
    CreatedByUserId?: IntFilter<"Subscriber"> | number
    UpdatedByUserId?: IntFilter<"Subscriber"> | number
    CreatedAt?: DateTimeFilter<"Subscriber"> | Date | string
    UpdatedAt?: DateTimeFilter<"Subscriber"> | Date | string
    CreatedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    UpdatedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    subscriptions?: SubscriptionListRelationFilter
  }

  export type SubscriberOrderByWithRelationInput = {
    id?: SortOrder
    Name?: SortOrder
    Email?: SortOrder
    CreatedByUserId?: SortOrder
    UpdatedByUserId?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    CreatedBy?: UserOrderByWithRelationInput
    UpdatedBy?: UserOrderByWithRelationInput
    subscriptions?: SubscriptionOrderByRelationAggregateInput
    _relevance?: SubscriberOrderByRelevanceInput
  }

  export type SubscriberWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    Email?: string
    AND?: SubscriberWhereInput | SubscriberWhereInput[]
    OR?: SubscriberWhereInput[]
    NOT?: SubscriberWhereInput | SubscriberWhereInput[]
    Name?: StringFilter<"Subscriber"> | string
    CreatedByUserId?: IntFilter<"Subscriber"> | number
    UpdatedByUserId?: IntFilter<"Subscriber"> | number
    CreatedAt?: DateTimeFilter<"Subscriber"> | Date | string
    UpdatedAt?: DateTimeFilter<"Subscriber"> | Date | string
    CreatedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    UpdatedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    subscriptions?: SubscriptionListRelationFilter
  }, "id" | "Email">

  export type SubscriberOrderByWithAggregationInput = {
    id?: SortOrder
    Name?: SortOrder
    Email?: SortOrder
    CreatedByUserId?: SortOrder
    UpdatedByUserId?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    _count?: SubscriberCountOrderByAggregateInput
    _avg?: SubscriberAvgOrderByAggregateInput
    _max?: SubscriberMaxOrderByAggregateInput
    _min?: SubscriberMinOrderByAggregateInput
    _sum?: SubscriberSumOrderByAggregateInput
  }

  export type SubscriberScalarWhereWithAggregatesInput = {
    AND?: SubscriberScalarWhereWithAggregatesInput | SubscriberScalarWhereWithAggregatesInput[]
    OR?: SubscriberScalarWhereWithAggregatesInput[]
    NOT?: SubscriberScalarWhereWithAggregatesInput | SubscriberScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Subscriber"> | number
    Name?: StringWithAggregatesFilter<"Subscriber"> | string
    Email?: StringWithAggregatesFilter<"Subscriber"> | string
    CreatedByUserId?: IntWithAggregatesFilter<"Subscriber"> | number
    UpdatedByUserId?: IntWithAggregatesFilter<"Subscriber"> | number
    CreatedAt?: DateTimeWithAggregatesFilter<"Subscriber"> | Date | string
    UpdatedAt?: DateTimeWithAggregatesFilter<"Subscriber"> | Date | string
  }

  export type SubscriptionWhereInput = {
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    id?: IntFilter<"Subscription"> | number
    SubscripterId?: IntFilter<"Subscription"> | number
    StartDate?: DateTimeFilter<"Subscription"> | Date | string
    EndDate?: DateTimeFilter<"Subscription"> | Date | string
    Status?: StringFilter<"Subscription"> | string
    CreatedByUserId?: IntFilter<"Subscription"> | number
    UpdatedByUserId?: IntFilter<"Subscription"> | number
    CreatedAt?: DateTimeFilter<"Subscription"> | Date | string
    UpdatedAt?: DateTimeFilter<"Subscription"> | Date | string
    CreatedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    UpdatedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    subscriber?: XOR<SubscriberScalarRelationFilter, SubscriberWhereInput>
    alerts?: AlertListRelationFilter
  }

  export type SubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    SubscripterId?: SortOrder
    StartDate?: SortOrder
    EndDate?: SortOrder
    Status?: SortOrder
    CreatedByUserId?: SortOrder
    UpdatedByUserId?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    CreatedBy?: UserOrderByWithRelationInput
    UpdatedBy?: UserOrderByWithRelationInput
    subscriber?: SubscriberOrderByWithRelationInput
    alerts?: AlertOrderByRelationAggregateInput
    _relevance?: SubscriptionOrderByRelevanceInput
  }

  export type SubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    Status?: string
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    SubscripterId?: IntFilter<"Subscription"> | number
    StartDate?: DateTimeFilter<"Subscription"> | Date | string
    EndDate?: DateTimeFilter<"Subscription"> | Date | string
    CreatedByUserId?: IntFilter<"Subscription"> | number
    UpdatedByUserId?: IntFilter<"Subscription"> | number
    CreatedAt?: DateTimeFilter<"Subscription"> | Date | string
    UpdatedAt?: DateTimeFilter<"Subscription"> | Date | string
    CreatedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    UpdatedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    subscriber?: XOR<SubscriberScalarRelationFilter, SubscriberWhereInput>
    alerts?: AlertListRelationFilter
  }, "id" | "Status">

  export type SubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    SubscripterId?: SortOrder
    StartDate?: SortOrder
    EndDate?: SortOrder
    Status?: SortOrder
    CreatedByUserId?: SortOrder
    UpdatedByUserId?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    _count?: SubscriptionCountOrderByAggregateInput
    _avg?: SubscriptionAvgOrderByAggregateInput
    _max?: SubscriptionMaxOrderByAggregateInput
    _min?: SubscriptionMinOrderByAggregateInput
    _sum?: SubscriptionSumOrderByAggregateInput
  }

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    OR?: SubscriptionScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Subscription"> | number
    SubscripterId?: IntWithAggregatesFilter<"Subscription"> | number
    StartDate?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    EndDate?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    Status?: StringWithAggregatesFilter<"Subscription"> | string
    CreatedByUserId?: IntWithAggregatesFilter<"Subscription"> | number
    UpdatedByUserId?: IntWithAggregatesFilter<"Subscription"> | number
    CreatedAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    UpdatedAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
  }

  export type AlertWhereInput = {
    AND?: AlertWhereInput | AlertWhereInput[]
    OR?: AlertWhereInput[]
    NOT?: AlertWhereInput | AlertWhereInput[]
    id?: IntFilter<"Alert"> | number
    SubscriptionId?: IntFilter<"Alert"> | number
    Type?: StringFilter<"Alert"> | string
    Seen?: BoolFilter<"Alert"> | boolean
    CreatedAt?: DateTimeFilter<"Alert"> | Date | string
    subscription?: XOR<SubscriptionScalarRelationFilter, SubscriptionWhereInput>
  }

  export type AlertOrderByWithRelationInput = {
    id?: SortOrder
    SubscriptionId?: SortOrder
    Type?: SortOrder
    Seen?: SortOrder
    CreatedAt?: SortOrder
    subscription?: SubscriptionOrderByWithRelationInput
    _relevance?: AlertOrderByRelevanceInput
  }

  export type AlertWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    Type?: string
    AND?: AlertWhereInput | AlertWhereInput[]
    OR?: AlertWhereInput[]
    NOT?: AlertWhereInput | AlertWhereInput[]
    SubscriptionId?: IntFilter<"Alert"> | number
    Seen?: BoolFilter<"Alert"> | boolean
    CreatedAt?: DateTimeFilter<"Alert"> | Date | string
    subscription?: XOR<SubscriptionScalarRelationFilter, SubscriptionWhereInput>
  }, "id" | "Type">

  export type AlertOrderByWithAggregationInput = {
    id?: SortOrder
    SubscriptionId?: SortOrder
    Type?: SortOrder
    Seen?: SortOrder
    CreatedAt?: SortOrder
    _count?: AlertCountOrderByAggregateInput
    _avg?: AlertAvgOrderByAggregateInput
    _max?: AlertMaxOrderByAggregateInput
    _min?: AlertMinOrderByAggregateInput
    _sum?: AlertSumOrderByAggregateInput
  }

  export type AlertScalarWhereWithAggregatesInput = {
    AND?: AlertScalarWhereWithAggregatesInput | AlertScalarWhereWithAggregatesInput[]
    OR?: AlertScalarWhereWithAggregatesInput[]
    NOT?: AlertScalarWhereWithAggregatesInput | AlertScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Alert"> | number
    SubscriptionId?: IntWithAggregatesFilter<"Alert"> | number
    Type?: StringWithAggregatesFilter<"Alert"> | string
    Seen?: BoolWithAggregatesFilter<"Alert"> | boolean
    CreatedAt?: DateTimeWithAggregatesFilter<"Alert"> | Date | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: IntFilter<"AuditLog"> | number
    action?: StringFilter<"AuditLog"> | string
    entity?: StringFilter<"AuditLog"> | string
    entityId?: IntFilter<"AuditLog"> | number
    performedByUserId?: IntFilter<"AuditLog"> | number
    timestamp?: DateTimeFilter<"AuditLog"> | Date | string
    performedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    performedByUserId?: SortOrder
    timestamp?: SortOrder
    performedBy?: UserOrderByWithRelationInput
    _relevance?: AuditLogOrderByRelevanceInput
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    action?: StringFilter<"AuditLog"> | string
    entity?: StringFilter<"AuditLog"> | string
    entityId?: IntFilter<"AuditLog"> | number
    performedByUserId?: IntFilter<"AuditLog"> | number
    timestamp?: DateTimeFilter<"AuditLog"> | Date | string
    performedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    performedByUserId?: SortOrder
    timestamp?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _avg?: AuditLogAvgOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
    _sum?: AuditLogSumOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AuditLog"> | number
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    entity?: StringWithAggregatesFilter<"AuditLog"> | string
    entityId?: IntWithAggregatesFilter<"AuditLog"> | number
    performedByUserId?: IntWithAggregatesFilter<"AuditLog"> | number
    timestamp?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type UserCreateInput = {
    Name: string
    Email: string
    PasswordHash: string
    CreatedAt: Date | string
    UpdatedAt: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    CreateSubsribers?: SubscriberCreateNestedManyWithoutCreatedByInput
    UpdateSubsribers?: SubscriberCreateNestedManyWithoutUpdatedByInput
    createdSubscriptions?: SubscriptionCreateNestedManyWithoutCreatedByInput
    updatedSubscriptions?: SubscriptionCreateNestedManyWithoutUpdatedByInput
    auditLogs?: AuditLogCreateNestedManyWithoutPerformedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    Name: string
    Email: string
    PasswordHash: string
    RoleId: number
    CreatedAt: Date | string
    UpdatedAt: Date | string
    CreateSubsribers?: SubscriberUncheckedCreateNestedManyWithoutCreatedByInput
    UpdateSubsribers?: SubscriberUncheckedCreateNestedManyWithoutUpdatedByInput
    createdSubscriptions?: SubscriptionUncheckedCreateNestedManyWithoutCreatedByInput
    updatedSubscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUpdatedByInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutPerformedByInput
  }

  export type UserUpdateInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    CreateSubsribers?: SubscriberUpdateManyWithoutCreatedByNestedInput
    UpdateSubsribers?: SubscriberUpdateManyWithoutUpdatedByNestedInput
    createdSubscriptions?: SubscriptionUpdateManyWithoutCreatedByNestedInput
    updatedSubscriptions?: SubscriptionUpdateManyWithoutUpdatedByNestedInput
    auditLogs?: AuditLogUpdateManyWithoutPerformedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    RoleId?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CreateSubsribers?: SubscriberUncheckedUpdateManyWithoutCreatedByNestedInput
    UpdateSubsribers?: SubscriberUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdSubscriptions?: SubscriptionUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedSubscriptions?: SubscriptionUncheckedUpdateManyWithoutUpdatedByNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutPerformedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    Name: string
    Email: string
    PasswordHash: string
    RoleId: number
    CreatedAt: Date | string
    UpdatedAt: Date | string
  }

  export type UserUpdateManyMutationInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    RoleId?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleCreateInput = {
    Name: string
    users?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: number
    Name: string
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    Name?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: number
    Name: string
  }

  export type RoleUpdateManyMutationInput = {
    Name?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
  }

  export type SubscriberCreateInput = {
    Name: string
    Email: string
    CreatedAt: Date | string
    UpdatedAt: Date | string
    CreatedBy: UserCreateNestedOneWithoutCreateSubsribersInput
    UpdatedBy: UserCreateNestedOneWithoutUpdateSubsribersInput
    subscriptions?: SubscriptionCreateNestedManyWithoutSubscriberInput
  }

  export type SubscriberUncheckedCreateInput = {
    id?: number
    Name: string
    Email: string
    CreatedByUserId: number
    UpdatedByUserId: number
    CreatedAt: Date | string
    UpdatedAt: Date | string
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutSubscriberInput
  }

  export type SubscriberUpdateInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: UserUpdateOneRequiredWithoutCreateSubsribersNestedInput
    UpdatedBy?: UserUpdateOneRequiredWithoutUpdateSubsribersNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutSubscriberNestedInput
  }

  export type SubscriberUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    CreatedByUserId?: IntFieldUpdateOperationsInput | number
    UpdatedByUserId?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutSubscriberNestedInput
  }

  export type SubscriberCreateManyInput = {
    id?: number
    Name: string
    Email: string
    CreatedByUserId: number
    UpdatedByUserId: number
    CreatedAt: Date | string
    UpdatedAt: Date | string
  }

  export type SubscriberUpdateManyMutationInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriberUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    CreatedByUserId?: IntFieldUpdateOperationsInput | number
    UpdatedByUserId?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateInput = {
    StartDate: Date | string
    EndDate: Date | string
    Status: string
    CreatedAt: Date | string
    UpdatedAt: Date | string
    CreatedBy: UserCreateNestedOneWithoutCreatedSubscriptionsInput
    UpdatedBy: UserCreateNestedOneWithoutUpdatedSubscriptionsInput
    subscriber: SubscriberCreateNestedOneWithoutSubscriptionsInput
    alerts?: AlertCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateInput = {
    id?: number
    SubscripterId: number
    StartDate: Date | string
    EndDate: Date | string
    Status: string
    CreatedByUserId: number
    UpdatedByUserId: number
    CreatedAt: Date | string
    UpdatedAt: Date | string
    alerts?: AlertUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUpdateInput = {
    StartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    EndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: UserUpdateOneRequiredWithoutCreatedSubscriptionsNestedInput
    UpdatedBy?: UserUpdateOneRequiredWithoutUpdatedSubscriptionsNestedInput
    subscriber?: SubscriberUpdateOneRequiredWithoutSubscriptionsNestedInput
    alerts?: AlertUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    SubscripterId?: IntFieldUpdateOperationsInput | number
    StartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    EndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: StringFieldUpdateOperationsInput | string
    CreatedByUserId?: IntFieldUpdateOperationsInput | number
    UpdatedByUserId?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alerts?: AlertUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionCreateManyInput = {
    id?: number
    SubscripterId: number
    StartDate: Date | string
    EndDate: Date | string
    Status: string
    CreatedByUserId: number
    UpdatedByUserId: number
    CreatedAt: Date | string
    UpdatedAt: Date | string
  }

  export type SubscriptionUpdateManyMutationInput = {
    StartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    EndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    SubscripterId?: IntFieldUpdateOperationsInput | number
    StartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    EndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: StringFieldUpdateOperationsInput | string
    CreatedByUserId?: IntFieldUpdateOperationsInput | number
    UpdatedByUserId?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertCreateInput = {
    Type: string
    Seen: boolean
    CreatedAt: Date | string
    subscription: SubscriptionCreateNestedOneWithoutAlertsInput
  }

  export type AlertUncheckedCreateInput = {
    id?: number
    SubscriptionId: number
    Type: string
    Seen: boolean
    CreatedAt: Date | string
  }

  export type AlertUpdateInput = {
    Type?: StringFieldUpdateOperationsInput | string
    Seen?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUpdateOneRequiredWithoutAlertsNestedInput
  }

  export type AlertUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    SubscriptionId?: IntFieldUpdateOperationsInput | number
    Type?: StringFieldUpdateOperationsInput | string
    Seen?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertCreateManyInput = {
    id?: number
    SubscriptionId: number
    Type: string
    Seen: boolean
    CreatedAt: Date | string
  }

  export type AlertUpdateManyMutationInput = {
    Type?: StringFieldUpdateOperationsInput | string
    Seen?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    SubscriptionId?: IntFieldUpdateOperationsInput | number
    Type?: StringFieldUpdateOperationsInput | string
    Seen?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateInput = {
    action: string
    entity: string
    entityId: number
    timestamp: Date | string
    performedBy: UserCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateInput = {
    id?: number
    action: string
    entity: string
    entityId: number
    performedByUserId: number
    timestamp: Date | string
  }

  export type AuditLogUpdateInput = {
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    performedBy?: UserUpdateOneRequiredWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: IntFieldUpdateOperationsInput | number
    performedByUserId?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: number
    action: string
    entity: string
    entityId: number
    performedByUserId: number
    timestamp: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: IntFieldUpdateOperationsInput | number
    performedByUserId?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type SubscriberListRelationFilter = {
    every?: SubscriberWhereInput
    some?: SubscriberWhereInput
    none?: SubscriberWhereInput
  }

  export type SubscriptionListRelationFilter = {
    every?: SubscriptionWhereInput
    some?: SubscriptionWhereInput
    none?: SubscriptionWhereInput
  }

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput
    some?: AuditLogWhereInput
    none?: AuditLogWhereInput
  }

  export type SubscriberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    Name?: SortOrder
    Email?: SortOrder
    PasswordHash?: SortOrder
    RoleId?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    RoleId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    Name?: SortOrder
    Email?: SortOrder
    PasswordHash?: SortOrder
    RoleId?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    Name?: SortOrder
    Email?: SortOrder
    PasswordHash?: SortOrder
    RoleId?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    RoleId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleOrderByRelevanceInput = {
    fields: RoleOrderByRelevanceFieldEnum | RoleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    Name?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    Name?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    Name?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SubscriberOrderByRelevanceInput = {
    fields: SubscriberOrderByRelevanceFieldEnum | SubscriberOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SubscriberCountOrderByAggregateInput = {
    id?: SortOrder
    Name?: SortOrder
    Email?: SortOrder
    CreatedByUserId?: SortOrder
    UpdatedByUserId?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type SubscriberAvgOrderByAggregateInput = {
    id?: SortOrder
    CreatedByUserId?: SortOrder
    UpdatedByUserId?: SortOrder
  }

  export type SubscriberMaxOrderByAggregateInput = {
    id?: SortOrder
    Name?: SortOrder
    Email?: SortOrder
    CreatedByUserId?: SortOrder
    UpdatedByUserId?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type SubscriberMinOrderByAggregateInput = {
    id?: SortOrder
    Name?: SortOrder
    Email?: SortOrder
    CreatedByUserId?: SortOrder
    UpdatedByUserId?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type SubscriberSumOrderByAggregateInput = {
    id?: SortOrder
    CreatedByUserId?: SortOrder
    UpdatedByUserId?: SortOrder
  }

  export type SubscriberScalarRelationFilter = {
    is?: SubscriberWhereInput
    isNot?: SubscriberWhereInput
  }

  export type AlertListRelationFilter = {
    every?: AlertWhereInput
    some?: AlertWhereInput
    none?: AlertWhereInput
  }

  export type AlertOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubscriptionOrderByRelevanceInput = {
    fields: SubscriptionOrderByRelevanceFieldEnum | SubscriptionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    SubscripterId?: SortOrder
    StartDate?: SortOrder
    EndDate?: SortOrder
    Status?: SortOrder
    CreatedByUserId?: SortOrder
    UpdatedByUserId?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type SubscriptionAvgOrderByAggregateInput = {
    id?: SortOrder
    SubscripterId?: SortOrder
    CreatedByUserId?: SortOrder
    UpdatedByUserId?: SortOrder
  }

  export type SubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    SubscripterId?: SortOrder
    StartDate?: SortOrder
    EndDate?: SortOrder
    Status?: SortOrder
    CreatedByUserId?: SortOrder
    UpdatedByUserId?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type SubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    SubscripterId?: SortOrder
    StartDate?: SortOrder
    EndDate?: SortOrder
    Status?: SortOrder
    CreatedByUserId?: SortOrder
    UpdatedByUserId?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type SubscriptionSumOrderByAggregateInput = {
    id?: SortOrder
    SubscripterId?: SortOrder
    CreatedByUserId?: SortOrder
    UpdatedByUserId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SubscriptionScalarRelationFilter = {
    is?: SubscriptionWhereInput
    isNot?: SubscriptionWhereInput
  }

  export type AlertOrderByRelevanceInput = {
    fields: AlertOrderByRelevanceFieldEnum | AlertOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AlertCountOrderByAggregateInput = {
    id?: SortOrder
    SubscriptionId?: SortOrder
    Type?: SortOrder
    Seen?: SortOrder
    CreatedAt?: SortOrder
  }

  export type AlertAvgOrderByAggregateInput = {
    id?: SortOrder
    SubscriptionId?: SortOrder
  }

  export type AlertMaxOrderByAggregateInput = {
    id?: SortOrder
    SubscriptionId?: SortOrder
    Type?: SortOrder
    Seen?: SortOrder
    CreatedAt?: SortOrder
  }

  export type AlertMinOrderByAggregateInput = {
    id?: SortOrder
    SubscriptionId?: SortOrder
    Type?: SortOrder
    Seen?: SortOrder
    CreatedAt?: SortOrder
  }

  export type AlertSumOrderByAggregateInput = {
    id?: SortOrder
    SubscriptionId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AuditLogOrderByRelevanceInput = {
    fields: AuditLogOrderByRelevanceFieldEnum | AuditLogOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    performedByUserId?: SortOrder
    timestamp?: SortOrder
  }

  export type AuditLogAvgOrderByAggregateInput = {
    id?: SortOrder
    entityId?: SortOrder
    performedByUserId?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    performedByUserId?: SortOrder
    timestamp?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    performedByUserId?: SortOrder
    timestamp?: SortOrder
  }

  export type AuditLogSumOrderByAggregateInput = {
    id?: SortOrder
    entityId?: SortOrder
    performedByUserId?: SortOrder
  }

  export type RoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    connect?: RoleWhereUniqueInput
  }

  export type SubscriberCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<SubscriberCreateWithoutCreatedByInput, SubscriberUncheckedCreateWithoutCreatedByInput> | SubscriberCreateWithoutCreatedByInput[] | SubscriberUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: SubscriberCreateOrConnectWithoutCreatedByInput | SubscriberCreateOrConnectWithoutCreatedByInput[]
    createMany?: SubscriberCreateManyCreatedByInputEnvelope
    connect?: SubscriberWhereUniqueInput | SubscriberWhereUniqueInput[]
  }

  export type SubscriberCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<SubscriberCreateWithoutUpdatedByInput, SubscriberUncheckedCreateWithoutUpdatedByInput> | SubscriberCreateWithoutUpdatedByInput[] | SubscriberUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: SubscriberCreateOrConnectWithoutUpdatedByInput | SubscriberCreateOrConnectWithoutUpdatedByInput[]
    createMany?: SubscriberCreateManyUpdatedByInputEnvelope
    connect?: SubscriberWhereUniqueInput | SubscriberWhereUniqueInput[]
  }

  export type SubscriptionCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<SubscriptionCreateWithoutCreatedByInput, SubscriptionUncheckedCreateWithoutCreatedByInput> | SubscriptionCreateWithoutCreatedByInput[] | SubscriptionUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutCreatedByInput | SubscriptionCreateOrConnectWithoutCreatedByInput[]
    createMany?: SubscriptionCreateManyCreatedByInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type SubscriptionCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<SubscriptionCreateWithoutUpdatedByInput, SubscriptionUncheckedCreateWithoutUpdatedByInput> | SubscriptionCreateWithoutUpdatedByInput[] | SubscriptionUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUpdatedByInput | SubscriptionCreateOrConnectWithoutUpdatedByInput[]
    createMany?: SubscriptionCreateManyUpdatedByInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type AuditLogCreateNestedManyWithoutPerformedByInput = {
    create?: XOR<AuditLogCreateWithoutPerformedByInput, AuditLogUncheckedCreateWithoutPerformedByInput> | AuditLogCreateWithoutPerformedByInput[] | AuditLogUncheckedCreateWithoutPerformedByInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutPerformedByInput | AuditLogCreateOrConnectWithoutPerformedByInput[]
    createMany?: AuditLogCreateManyPerformedByInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type SubscriberUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<SubscriberCreateWithoutCreatedByInput, SubscriberUncheckedCreateWithoutCreatedByInput> | SubscriberCreateWithoutCreatedByInput[] | SubscriberUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: SubscriberCreateOrConnectWithoutCreatedByInput | SubscriberCreateOrConnectWithoutCreatedByInput[]
    createMany?: SubscriberCreateManyCreatedByInputEnvelope
    connect?: SubscriberWhereUniqueInput | SubscriberWhereUniqueInput[]
  }

  export type SubscriberUncheckedCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<SubscriberCreateWithoutUpdatedByInput, SubscriberUncheckedCreateWithoutUpdatedByInput> | SubscriberCreateWithoutUpdatedByInput[] | SubscriberUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: SubscriberCreateOrConnectWithoutUpdatedByInput | SubscriberCreateOrConnectWithoutUpdatedByInput[]
    createMany?: SubscriberCreateManyUpdatedByInputEnvelope
    connect?: SubscriberWhereUniqueInput | SubscriberWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<SubscriptionCreateWithoutCreatedByInput, SubscriptionUncheckedCreateWithoutCreatedByInput> | SubscriptionCreateWithoutCreatedByInput[] | SubscriptionUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutCreatedByInput | SubscriptionCreateOrConnectWithoutCreatedByInput[]
    createMany?: SubscriptionCreateManyCreatedByInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<SubscriptionCreateWithoutUpdatedByInput, SubscriptionUncheckedCreateWithoutUpdatedByInput> | SubscriptionCreateWithoutUpdatedByInput[] | SubscriptionUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUpdatedByInput | SubscriptionCreateOrConnectWithoutUpdatedByInput[]
    createMany?: SubscriptionCreateManyUpdatedByInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutPerformedByInput = {
    create?: XOR<AuditLogCreateWithoutPerformedByInput, AuditLogUncheckedCreateWithoutPerformedByInput> | AuditLogCreateWithoutPerformedByInput[] | AuditLogUncheckedCreateWithoutPerformedByInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutPerformedByInput | AuditLogCreateOrConnectWithoutPerformedByInput[]
    createMany?: AuditLogCreateManyPerformedByInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RoleUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    upsert?: RoleUpsertWithoutUsersInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUsersInput, RoleUpdateWithoutUsersInput>, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type SubscriberUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<SubscriberCreateWithoutCreatedByInput, SubscriberUncheckedCreateWithoutCreatedByInput> | SubscriberCreateWithoutCreatedByInput[] | SubscriberUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: SubscriberCreateOrConnectWithoutCreatedByInput | SubscriberCreateOrConnectWithoutCreatedByInput[]
    upsert?: SubscriberUpsertWithWhereUniqueWithoutCreatedByInput | SubscriberUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: SubscriberCreateManyCreatedByInputEnvelope
    set?: SubscriberWhereUniqueInput | SubscriberWhereUniqueInput[]
    disconnect?: SubscriberWhereUniqueInput | SubscriberWhereUniqueInput[]
    delete?: SubscriberWhereUniqueInput | SubscriberWhereUniqueInput[]
    connect?: SubscriberWhereUniqueInput | SubscriberWhereUniqueInput[]
    update?: SubscriberUpdateWithWhereUniqueWithoutCreatedByInput | SubscriberUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: SubscriberUpdateManyWithWhereWithoutCreatedByInput | SubscriberUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: SubscriberScalarWhereInput | SubscriberScalarWhereInput[]
  }

  export type SubscriberUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<SubscriberCreateWithoutUpdatedByInput, SubscriberUncheckedCreateWithoutUpdatedByInput> | SubscriberCreateWithoutUpdatedByInput[] | SubscriberUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: SubscriberCreateOrConnectWithoutUpdatedByInput | SubscriberCreateOrConnectWithoutUpdatedByInput[]
    upsert?: SubscriberUpsertWithWhereUniqueWithoutUpdatedByInput | SubscriberUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: SubscriberCreateManyUpdatedByInputEnvelope
    set?: SubscriberWhereUniqueInput | SubscriberWhereUniqueInput[]
    disconnect?: SubscriberWhereUniqueInput | SubscriberWhereUniqueInput[]
    delete?: SubscriberWhereUniqueInput | SubscriberWhereUniqueInput[]
    connect?: SubscriberWhereUniqueInput | SubscriberWhereUniqueInput[]
    update?: SubscriberUpdateWithWhereUniqueWithoutUpdatedByInput | SubscriberUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: SubscriberUpdateManyWithWhereWithoutUpdatedByInput | SubscriberUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: SubscriberScalarWhereInput | SubscriberScalarWhereInput[]
  }

  export type SubscriptionUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<SubscriptionCreateWithoutCreatedByInput, SubscriptionUncheckedCreateWithoutCreatedByInput> | SubscriptionCreateWithoutCreatedByInput[] | SubscriptionUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutCreatedByInput | SubscriptionCreateOrConnectWithoutCreatedByInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutCreatedByInput | SubscriptionUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: SubscriptionCreateManyCreatedByInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutCreatedByInput | SubscriptionUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutCreatedByInput | SubscriptionUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type SubscriptionUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUpdatedByInput, SubscriptionUncheckedCreateWithoutUpdatedByInput> | SubscriptionCreateWithoutUpdatedByInput[] | SubscriptionUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUpdatedByInput | SubscriptionCreateOrConnectWithoutUpdatedByInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutUpdatedByInput | SubscriptionUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: SubscriptionCreateManyUpdatedByInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutUpdatedByInput | SubscriptionUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutUpdatedByInput | SubscriptionUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type AuditLogUpdateManyWithoutPerformedByNestedInput = {
    create?: XOR<AuditLogCreateWithoutPerformedByInput, AuditLogUncheckedCreateWithoutPerformedByInput> | AuditLogCreateWithoutPerformedByInput[] | AuditLogUncheckedCreateWithoutPerformedByInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutPerformedByInput | AuditLogCreateOrConnectWithoutPerformedByInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutPerformedByInput | AuditLogUpsertWithWhereUniqueWithoutPerformedByInput[]
    createMany?: AuditLogCreateManyPerformedByInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutPerformedByInput | AuditLogUpdateWithWhereUniqueWithoutPerformedByInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutPerformedByInput | AuditLogUpdateManyWithWhereWithoutPerformedByInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SubscriberUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<SubscriberCreateWithoutCreatedByInput, SubscriberUncheckedCreateWithoutCreatedByInput> | SubscriberCreateWithoutCreatedByInput[] | SubscriberUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: SubscriberCreateOrConnectWithoutCreatedByInput | SubscriberCreateOrConnectWithoutCreatedByInput[]
    upsert?: SubscriberUpsertWithWhereUniqueWithoutCreatedByInput | SubscriberUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: SubscriberCreateManyCreatedByInputEnvelope
    set?: SubscriberWhereUniqueInput | SubscriberWhereUniqueInput[]
    disconnect?: SubscriberWhereUniqueInput | SubscriberWhereUniqueInput[]
    delete?: SubscriberWhereUniqueInput | SubscriberWhereUniqueInput[]
    connect?: SubscriberWhereUniqueInput | SubscriberWhereUniqueInput[]
    update?: SubscriberUpdateWithWhereUniqueWithoutCreatedByInput | SubscriberUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: SubscriberUpdateManyWithWhereWithoutCreatedByInput | SubscriberUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: SubscriberScalarWhereInput | SubscriberScalarWhereInput[]
  }

  export type SubscriberUncheckedUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<SubscriberCreateWithoutUpdatedByInput, SubscriberUncheckedCreateWithoutUpdatedByInput> | SubscriberCreateWithoutUpdatedByInput[] | SubscriberUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: SubscriberCreateOrConnectWithoutUpdatedByInput | SubscriberCreateOrConnectWithoutUpdatedByInput[]
    upsert?: SubscriberUpsertWithWhereUniqueWithoutUpdatedByInput | SubscriberUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: SubscriberCreateManyUpdatedByInputEnvelope
    set?: SubscriberWhereUniqueInput | SubscriberWhereUniqueInput[]
    disconnect?: SubscriberWhereUniqueInput | SubscriberWhereUniqueInput[]
    delete?: SubscriberWhereUniqueInput | SubscriberWhereUniqueInput[]
    connect?: SubscriberWhereUniqueInput | SubscriberWhereUniqueInput[]
    update?: SubscriberUpdateWithWhereUniqueWithoutUpdatedByInput | SubscriberUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: SubscriberUpdateManyWithWhereWithoutUpdatedByInput | SubscriberUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: SubscriberScalarWhereInput | SubscriberScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<SubscriptionCreateWithoutCreatedByInput, SubscriptionUncheckedCreateWithoutCreatedByInput> | SubscriptionCreateWithoutCreatedByInput[] | SubscriptionUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutCreatedByInput | SubscriptionCreateOrConnectWithoutCreatedByInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutCreatedByInput | SubscriptionUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: SubscriptionCreateManyCreatedByInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutCreatedByInput | SubscriptionUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutCreatedByInput | SubscriptionUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUpdatedByInput, SubscriptionUncheckedCreateWithoutUpdatedByInput> | SubscriptionCreateWithoutUpdatedByInput[] | SubscriptionUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUpdatedByInput | SubscriptionCreateOrConnectWithoutUpdatedByInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutUpdatedByInput | SubscriptionUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: SubscriptionCreateManyUpdatedByInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutUpdatedByInput | SubscriptionUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutUpdatedByInput | SubscriptionUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutPerformedByNestedInput = {
    create?: XOR<AuditLogCreateWithoutPerformedByInput, AuditLogUncheckedCreateWithoutPerformedByInput> | AuditLogCreateWithoutPerformedByInput[] | AuditLogUncheckedCreateWithoutPerformedByInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutPerformedByInput | AuditLogCreateOrConnectWithoutPerformedByInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutPerformedByInput | AuditLogUpsertWithWhereUniqueWithoutPerformedByInput[]
    createMany?: AuditLogCreateManyPerformedByInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutPerformedByInput | AuditLogUpdateWithWhereUniqueWithoutPerformedByInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutPerformedByInput | AuditLogUpdateManyWithWhereWithoutPerformedByInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCreateSubsribersInput = {
    create?: XOR<UserCreateWithoutCreateSubsribersInput, UserUncheckedCreateWithoutCreateSubsribersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreateSubsribersInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUpdateSubsribersInput = {
    create?: XOR<UserCreateWithoutUpdateSubsribersInput, UserUncheckedCreateWithoutUpdateSubsribersInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdateSubsribersInput
    connect?: UserWhereUniqueInput
  }

  export type SubscriptionCreateNestedManyWithoutSubscriberInput = {
    create?: XOR<SubscriptionCreateWithoutSubscriberInput, SubscriptionUncheckedCreateWithoutSubscriberInput> | SubscriptionCreateWithoutSubscriberInput[] | SubscriptionUncheckedCreateWithoutSubscriberInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutSubscriberInput | SubscriptionCreateOrConnectWithoutSubscriberInput[]
    createMany?: SubscriptionCreateManySubscriberInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedManyWithoutSubscriberInput = {
    create?: XOR<SubscriptionCreateWithoutSubscriberInput, SubscriptionUncheckedCreateWithoutSubscriberInput> | SubscriptionCreateWithoutSubscriberInput[] | SubscriptionUncheckedCreateWithoutSubscriberInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutSubscriberInput | SubscriptionCreateOrConnectWithoutSubscriberInput[]
    createMany?: SubscriptionCreateManySubscriberInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCreateSubsribersNestedInput = {
    create?: XOR<UserCreateWithoutCreateSubsribersInput, UserUncheckedCreateWithoutCreateSubsribersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreateSubsribersInput
    upsert?: UserUpsertWithoutCreateSubsribersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreateSubsribersInput, UserUpdateWithoutCreateSubsribersInput>, UserUncheckedUpdateWithoutCreateSubsribersInput>
  }

  export type UserUpdateOneRequiredWithoutUpdateSubsribersNestedInput = {
    create?: XOR<UserCreateWithoutUpdateSubsribersInput, UserUncheckedCreateWithoutUpdateSubsribersInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdateSubsribersInput
    upsert?: UserUpsertWithoutUpdateSubsribersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUpdateSubsribersInput, UserUpdateWithoutUpdateSubsribersInput>, UserUncheckedUpdateWithoutUpdateSubsribersInput>
  }

  export type SubscriptionUpdateManyWithoutSubscriberNestedInput = {
    create?: XOR<SubscriptionCreateWithoutSubscriberInput, SubscriptionUncheckedCreateWithoutSubscriberInput> | SubscriptionCreateWithoutSubscriberInput[] | SubscriptionUncheckedCreateWithoutSubscriberInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutSubscriberInput | SubscriptionCreateOrConnectWithoutSubscriberInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutSubscriberInput | SubscriptionUpsertWithWhereUniqueWithoutSubscriberInput[]
    createMany?: SubscriptionCreateManySubscriberInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutSubscriberInput | SubscriptionUpdateWithWhereUniqueWithoutSubscriberInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutSubscriberInput | SubscriptionUpdateManyWithWhereWithoutSubscriberInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateManyWithoutSubscriberNestedInput = {
    create?: XOR<SubscriptionCreateWithoutSubscriberInput, SubscriptionUncheckedCreateWithoutSubscriberInput> | SubscriptionCreateWithoutSubscriberInput[] | SubscriptionUncheckedCreateWithoutSubscriberInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutSubscriberInput | SubscriptionCreateOrConnectWithoutSubscriberInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutSubscriberInput | SubscriptionUpsertWithWhereUniqueWithoutSubscriberInput[]
    createMany?: SubscriptionCreateManySubscriberInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutSubscriberInput | SubscriptionUpdateWithWhereUniqueWithoutSubscriberInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutSubscriberInput | SubscriptionUpdateManyWithWhereWithoutSubscriberInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCreatedSubscriptionsInput = {
    create?: XOR<UserCreateWithoutCreatedSubscriptionsInput, UserUncheckedCreateWithoutCreatedSubscriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedSubscriptionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUpdatedSubscriptionsInput = {
    create?: XOR<UserCreateWithoutUpdatedSubscriptionsInput, UserUncheckedCreateWithoutUpdatedSubscriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdatedSubscriptionsInput
    connect?: UserWhereUniqueInput
  }

  export type SubscriberCreateNestedOneWithoutSubscriptionsInput = {
    create?: XOR<SubscriberCreateWithoutSubscriptionsInput, SubscriberUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: SubscriberCreateOrConnectWithoutSubscriptionsInput
    connect?: SubscriberWhereUniqueInput
  }

  export type AlertCreateNestedManyWithoutSubscriptionInput = {
    create?: XOR<AlertCreateWithoutSubscriptionInput, AlertUncheckedCreateWithoutSubscriptionInput> | AlertCreateWithoutSubscriptionInput[] | AlertUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutSubscriptionInput | AlertCreateOrConnectWithoutSubscriptionInput[]
    createMany?: AlertCreateManySubscriptionInputEnvelope
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
  }

  export type AlertUncheckedCreateNestedManyWithoutSubscriptionInput = {
    create?: XOR<AlertCreateWithoutSubscriptionInput, AlertUncheckedCreateWithoutSubscriptionInput> | AlertCreateWithoutSubscriptionInput[] | AlertUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutSubscriptionInput | AlertCreateOrConnectWithoutSubscriptionInput[]
    createMany?: AlertCreateManySubscriptionInputEnvelope
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCreatedSubscriptionsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedSubscriptionsInput, UserUncheckedCreateWithoutCreatedSubscriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedSubscriptionsInput
    upsert?: UserUpsertWithoutCreatedSubscriptionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedSubscriptionsInput, UserUpdateWithoutCreatedSubscriptionsInput>, UserUncheckedUpdateWithoutCreatedSubscriptionsInput>
  }

  export type UserUpdateOneRequiredWithoutUpdatedSubscriptionsNestedInput = {
    create?: XOR<UserCreateWithoutUpdatedSubscriptionsInput, UserUncheckedCreateWithoutUpdatedSubscriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdatedSubscriptionsInput
    upsert?: UserUpsertWithoutUpdatedSubscriptionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUpdatedSubscriptionsInput, UserUpdateWithoutUpdatedSubscriptionsInput>, UserUncheckedUpdateWithoutUpdatedSubscriptionsInput>
  }

  export type SubscriberUpdateOneRequiredWithoutSubscriptionsNestedInput = {
    create?: XOR<SubscriberCreateWithoutSubscriptionsInput, SubscriberUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: SubscriberCreateOrConnectWithoutSubscriptionsInput
    upsert?: SubscriberUpsertWithoutSubscriptionsInput
    connect?: SubscriberWhereUniqueInput
    update?: XOR<XOR<SubscriberUpdateToOneWithWhereWithoutSubscriptionsInput, SubscriberUpdateWithoutSubscriptionsInput>, SubscriberUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type AlertUpdateManyWithoutSubscriptionNestedInput = {
    create?: XOR<AlertCreateWithoutSubscriptionInput, AlertUncheckedCreateWithoutSubscriptionInput> | AlertCreateWithoutSubscriptionInput[] | AlertUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutSubscriptionInput | AlertCreateOrConnectWithoutSubscriptionInput[]
    upsert?: AlertUpsertWithWhereUniqueWithoutSubscriptionInput | AlertUpsertWithWhereUniqueWithoutSubscriptionInput[]
    createMany?: AlertCreateManySubscriptionInputEnvelope
    set?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    disconnect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    delete?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    update?: AlertUpdateWithWhereUniqueWithoutSubscriptionInput | AlertUpdateWithWhereUniqueWithoutSubscriptionInput[]
    updateMany?: AlertUpdateManyWithWhereWithoutSubscriptionInput | AlertUpdateManyWithWhereWithoutSubscriptionInput[]
    deleteMany?: AlertScalarWhereInput | AlertScalarWhereInput[]
  }

  export type AlertUncheckedUpdateManyWithoutSubscriptionNestedInput = {
    create?: XOR<AlertCreateWithoutSubscriptionInput, AlertUncheckedCreateWithoutSubscriptionInput> | AlertCreateWithoutSubscriptionInput[] | AlertUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutSubscriptionInput | AlertCreateOrConnectWithoutSubscriptionInput[]
    upsert?: AlertUpsertWithWhereUniqueWithoutSubscriptionInput | AlertUpsertWithWhereUniqueWithoutSubscriptionInput[]
    createMany?: AlertCreateManySubscriptionInputEnvelope
    set?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    disconnect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    delete?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    update?: AlertUpdateWithWhereUniqueWithoutSubscriptionInput | AlertUpdateWithWhereUniqueWithoutSubscriptionInput[]
    updateMany?: AlertUpdateManyWithWhereWithoutSubscriptionInput | AlertUpdateManyWithWhereWithoutSubscriptionInput[]
    deleteMany?: AlertScalarWhereInput | AlertScalarWhereInput[]
  }

  export type SubscriptionCreateNestedOneWithoutAlertsInput = {
    create?: XOR<SubscriptionCreateWithoutAlertsInput, SubscriptionUncheckedCreateWithoutAlertsInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutAlertsInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type SubscriptionUpdateOneRequiredWithoutAlertsNestedInput = {
    create?: XOR<SubscriptionCreateWithoutAlertsInput, SubscriptionUncheckedCreateWithoutAlertsInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutAlertsInput
    upsert?: SubscriptionUpsertWithoutAlertsInput
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutAlertsInput, SubscriptionUpdateWithoutAlertsInput>, SubscriptionUncheckedUpdateWithoutAlertsInput>
  }

  export type UserCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAuditLogsNestedInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    upsert?: UserUpsertWithoutAuditLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuditLogsInput, UserUpdateWithoutAuditLogsInput>, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type RoleCreateWithoutUsersInput = {
    Name: string
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    id?: number
    Name: string
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type SubscriberCreateWithoutCreatedByInput = {
    Name: string
    Email: string
    CreatedAt: Date | string
    UpdatedAt: Date | string
    UpdatedBy: UserCreateNestedOneWithoutUpdateSubsribersInput
    subscriptions?: SubscriptionCreateNestedManyWithoutSubscriberInput
  }

  export type SubscriberUncheckedCreateWithoutCreatedByInput = {
    id?: number
    Name: string
    Email: string
    UpdatedByUserId: number
    CreatedAt: Date | string
    UpdatedAt: Date | string
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutSubscriberInput
  }

  export type SubscriberCreateOrConnectWithoutCreatedByInput = {
    where: SubscriberWhereUniqueInput
    create: XOR<SubscriberCreateWithoutCreatedByInput, SubscriberUncheckedCreateWithoutCreatedByInput>
  }

  export type SubscriberCreateManyCreatedByInputEnvelope = {
    data: SubscriberCreateManyCreatedByInput | SubscriberCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type SubscriberCreateWithoutUpdatedByInput = {
    Name: string
    Email: string
    CreatedAt: Date | string
    UpdatedAt: Date | string
    CreatedBy: UserCreateNestedOneWithoutCreateSubsribersInput
    subscriptions?: SubscriptionCreateNestedManyWithoutSubscriberInput
  }

  export type SubscriberUncheckedCreateWithoutUpdatedByInput = {
    id?: number
    Name: string
    Email: string
    CreatedByUserId: number
    CreatedAt: Date | string
    UpdatedAt: Date | string
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutSubscriberInput
  }

  export type SubscriberCreateOrConnectWithoutUpdatedByInput = {
    where: SubscriberWhereUniqueInput
    create: XOR<SubscriberCreateWithoutUpdatedByInput, SubscriberUncheckedCreateWithoutUpdatedByInput>
  }

  export type SubscriberCreateManyUpdatedByInputEnvelope = {
    data: SubscriberCreateManyUpdatedByInput | SubscriberCreateManyUpdatedByInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionCreateWithoutCreatedByInput = {
    StartDate: Date | string
    EndDate: Date | string
    Status: string
    CreatedAt: Date | string
    UpdatedAt: Date | string
    UpdatedBy: UserCreateNestedOneWithoutUpdatedSubscriptionsInput
    subscriber: SubscriberCreateNestedOneWithoutSubscriptionsInput
    alerts?: AlertCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateWithoutCreatedByInput = {
    id?: number
    SubscripterId: number
    StartDate: Date | string
    EndDate: Date | string
    Status: string
    UpdatedByUserId: number
    CreatedAt: Date | string
    UpdatedAt: Date | string
    alerts?: AlertUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionCreateOrConnectWithoutCreatedByInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutCreatedByInput, SubscriptionUncheckedCreateWithoutCreatedByInput>
  }

  export type SubscriptionCreateManyCreatedByInputEnvelope = {
    data: SubscriptionCreateManyCreatedByInput | SubscriptionCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionCreateWithoutUpdatedByInput = {
    StartDate: Date | string
    EndDate: Date | string
    Status: string
    CreatedAt: Date | string
    UpdatedAt: Date | string
    CreatedBy: UserCreateNestedOneWithoutCreatedSubscriptionsInput
    subscriber: SubscriberCreateNestedOneWithoutSubscriptionsInput
    alerts?: AlertCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateWithoutUpdatedByInput = {
    id?: number
    SubscripterId: number
    StartDate: Date | string
    EndDate: Date | string
    Status: string
    CreatedByUserId: number
    CreatedAt: Date | string
    UpdatedAt: Date | string
    alerts?: AlertUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionCreateOrConnectWithoutUpdatedByInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutUpdatedByInput, SubscriptionUncheckedCreateWithoutUpdatedByInput>
  }

  export type SubscriptionCreateManyUpdatedByInputEnvelope = {
    data: SubscriptionCreateManyUpdatedByInput | SubscriptionCreateManyUpdatedByInput[]
    skipDuplicates?: boolean
  }

  export type AuditLogCreateWithoutPerformedByInput = {
    action: string
    entity: string
    entityId: number
    timestamp: Date | string
  }

  export type AuditLogUncheckedCreateWithoutPerformedByInput = {
    id?: number
    action: string
    entity: string
    entityId: number
    timestamp: Date | string
  }

  export type AuditLogCreateOrConnectWithoutPerformedByInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutPerformedByInput, AuditLogUncheckedCreateWithoutPerformedByInput>
  }

  export type AuditLogCreateManyPerformedByInputEnvelope = {
    data: AuditLogCreateManyPerformedByInput | AuditLogCreateManyPerformedByInput[]
    skipDuplicates?: boolean
  }

  export type RoleUpsertWithoutUsersInput = {
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateWithoutUsersInput = {
    Name?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
  }

  export type SubscriberUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: SubscriberWhereUniqueInput
    update: XOR<SubscriberUpdateWithoutCreatedByInput, SubscriberUncheckedUpdateWithoutCreatedByInput>
    create: XOR<SubscriberCreateWithoutCreatedByInput, SubscriberUncheckedCreateWithoutCreatedByInput>
  }

  export type SubscriberUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: SubscriberWhereUniqueInput
    data: XOR<SubscriberUpdateWithoutCreatedByInput, SubscriberUncheckedUpdateWithoutCreatedByInput>
  }

  export type SubscriberUpdateManyWithWhereWithoutCreatedByInput = {
    where: SubscriberScalarWhereInput
    data: XOR<SubscriberUpdateManyMutationInput, SubscriberUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type SubscriberScalarWhereInput = {
    AND?: SubscriberScalarWhereInput | SubscriberScalarWhereInput[]
    OR?: SubscriberScalarWhereInput[]
    NOT?: SubscriberScalarWhereInput | SubscriberScalarWhereInput[]
    id?: IntFilter<"Subscriber"> | number
    Name?: StringFilter<"Subscriber"> | string
    Email?: StringFilter<"Subscriber"> | string
    CreatedByUserId?: IntFilter<"Subscriber"> | number
    UpdatedByUserId?: IntFilter<"Subscriber"> | number
    CreatedAt?: DateTimeFilter<"Subscriber"> | Date | string
    UpdatedAt?: DateTimeFilter<"Subscriber"> | Date | string
  }

  export type SubscriberUpsertWithWhereUniqueWithoutUpdatedByInput = {
    where: SubscriberWhereUniqueInput
    update: XOR<SubscriberUpdateWithoutUpdatedByInput, SubscriberUncheckedUpdateWithoutUpdatedByInput>
    create: XOR<SubscriberCreateWithoutUpdatedByInput, SubscriberUncheckedCreateWithoutUpdatedByInput>
  }

  export type SubscriberUpdateWithWhereUniqueWithoutUpdatedByInput = {
    where: SubscriberWhereUniqueInput
    data: XOR<SubscriberUpdateWithoutUpdatedByInput, SubscriberUncheckedUpdateWithoutUpdatedByInput>
  }

  export type SubscriberUpdateManyWithWhereWithoutUpdatedByInput = {
    where: SubscriberScalarWhereInput
    data: XOR<SubscriberUpdateManyMutationInput, SubscriberUncheckedUpdateManyWithoutUpdatedByInput>
  }

  export type SubscriptionUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: SubscriptionWhereUniqueInput
    update: XOR<SubscriptionUpdateWithoutCreatedByInput, SubscriptionUncheckedUpdateWithoutCreatedByInput>
    create: XOR<SubscriptionCreateWithoutCreatedByInput, SubscriptionUncheckedCreateWithoutCreatedByInput>
  }

  export type SubscriptionUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: SubscriptionWhereUniqueInput
    data: XOR<SubscriptionUpdateWithoutCreatedByInput, SubscriptionUncheckedUpdateWithoutCreatedByInput>
  }

  export type SubscriptionUpdateManyWithWhereWithoutCreatedByInput = {
    where: SubscriptionScalarWhereInput
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type SubscriptionScalarWhereInput = {
    AND?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    OR?: SubscriptionScalarWhereInput[]
    NOT?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    id?: IntFilter<"Subscription"> | number
    SubscripterId?: IntFilter<"Subscription"> | number
    StartDate?: DateTimeFilter<"Subscription"> | Date | string
    EndDate?: DateTimeFilter<"Subscription"> | Date | string
    Status?: StringFilter<"Subscription"> | string
    CreatedByUserId?: IntFilter<"Subscription"> | number
    UpdatedByUserId?: IntFilter<"Subscription"> | number
    CreatedAt?: DateTimeFilter<"Subscription"> | Date | string
    UpdatedAt?: DateTimeFilter<"Subscription"> | Date | string
  }

  export type SubscriptionUpsertWithWhereUniqueWithoutUpdatedByInput = {
    where: SubscriptionWhereUniqueInput
    update: XOR<SubscriptionUpdateWithoutUpdatedByInput, SubscriptionUncheckedUpdateWithoutUpdatedByInput>
    create: XOR<SubscriptionCreateWithoutUpdatedByInput, SubscriptionUncheckedCreateWithoutUpdatedByInput>
  }

  export type SubscriptionUpdateWithWhereUniqueWithoutUpdatedByInput = {
    where: SubscriptionWhereUniqueInput
    data: XOR<SubscriptionUpdateWithoutUpdatedByInput, SubscriptionUncheckedUpdateWithoutUpdatedByInput>
  }

  export type SubscriptionUpdateManyWithWhereWithoutUpdatedByInput = {
    where: SubscriptionScalarWhereInput
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyWithoutUpdatedByInput>
  }

  export type AuditLogUpsertWithWhereUniqueWithoutPerformedByInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutPerformedByInput, AuditLogUncheckedUpdateWithoutPerformedByInput>
    create: XOR<AuditLogCreateWithoutPerformedByInput, AuditLogUncheckedCreateWithoutPerformedByInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutPerformedByInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutPerformedByInput, AuditLogUncheckedUpdateWithoutPerformedByInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutPerformedByInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutPerformedByInput>
  }

  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    OR?: AuditLogScalarWhereInput[]
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    id?: IntFilter<"AuditLog"> | number
    action?: StringFilter<"AuditLog"> | string
    entity?: StringFilter<"AuditLog"> | string
    entityId?: IntFilter<"AuditLog"> | number
    performedByUserId?: IntFilter<"AuditLog"> | number
    timestamp?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type UserCreateWithoutRoleInput = {
    Name: string
    Email: string
    PasswordHash: string
    CreatedAt: Date | string
    UpdatedAt: Date | string
    CreateSubsribers?: SubscriberCreateNestedManyWithoutCreatedByInput
    UpdateSubsribers?: SubscriberCreateNestedManyWithoutUpdatedByInput
    createdSubscriptions?: SubscriptionCreateNestedManyWithoutCreatedByInput
    updatedSubscriptions?: SubscriptionCreateNestedManyWithoutUpdatedByInput
    auditLogs?: AuditLogCreateNestedManyWithoutPerformedByInput
  }

  export type UserUncheckedCreateWithoutRoleInput = {
    id?: number
    Name: string
    Email: string
    PasswordHash: string
    CreatedAt: Date | string
    UpdatedAt: Date | string
    CreateSubsribers?: SubscriberUncheckedCreateNestedManyWithoutCreatedByInput
    UpdateSubsribers?: SubscriberUncheckedCreateNestedManyWithoutUpdatedByInput
    createdSubscriptions?: SubscriptionUncheckedCreateNestedManyWithoutCreatedByInput
    updatedSubscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUpdatedByInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutPerformedByInput
  }

  export type UserCreateOrConnectWithoutRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserCreateManyRoleInputEnvelope = {
    data: UserCreateManyRoleInput | UserCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
  }

  export type UserUpdateManyWithWhereWithoutRoleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    Name?: StringFilter<"User"> | string
    Email?: StringFilter<"User"> | string
    PasswordHash?: StringFilter<"User"> | string
    RoleId?: IntFilter<"User"> | number
    CreatedAt?: DateTimeFilter<"User"> | Date | string
    UpdatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserCreateWithoutCreateSubsribersInput = {
    Name: string
    Email: string
    PasswordHash: string
    CreatedAt: Date | string
    UpdatedAt: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    UpdateSubsribers?: SubscriberCreateNestedManyWithoutUpdatedByInput
    createdSubscriptions?: SubscriptionCreateNestedManyWithoutCreatedByInput
    updatedSubscriptions?: SubscriptionCreateNestedManyWithoutUpdatedByInput
    auditLogs?: AuditLogCreateNestedManyWithoutPerformedByInput
  }

  export type UserUncheckedCreateWithoutCreateSubsribersInput = {
    id?: number
    Name: string
    Email: string
    PasswordHash: string
    RoleId: number
    CreatedAt: Date | string
    UpdatedAt: Date | string
    UpdateSubsribers?: SubscriberUncheckedCreateNestedManyWithoutUpdatedByInput
    createdSubscriptions?: SubscriptionUncheckedCreateNestedManyWithoutCreatedByInput
    updatedSubscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUpdatedByInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutPerformedByInput
  }

  export type UserCreateOrConnectWithoutCreateSubsribersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreateSubsribersInput, UserUncheckedCreateWithoutCreateSubsribersInput>
  }

  export type UserCreateWithoutUpdateSubsribersInput = {
    Name: string
    Email: string
    PasswordHash: string
    CreatedAt: Date | string
    UpdatedAt: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    CreateSubsribers?: SubscriberCreateNestedManyWithoutCreatedByInput
    createdSubscriptions?: SubscriptionCreateNestedManyWithoutCreatedByInput
    updatedSubscriptions?: SubscriptionCreateNestedManyWithoutUpdatedByInput
    auditLogs?: AuditLogCreateNestedManyWithoutPerformedByInput
  }

  export type UserUncheckedCreateWithoutUpdateSubsribersInput = {
    id?: number
    Name: string
    Email: string
    PasswordHash: string
    RoleId: number
    CreatedAt: Date | string
    UpdatedAt: Date | string
    CreateSubsribers?: SubscriberUncheckedCreateNestedManyWithoutCreatedByInput
    createdSubscriptions?: SubscriptionUncheckedCreateNestedManyWithoutCreatedByInput
    updatedSubscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUpdatedByInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutPerformedByInput
  }

  export type UserCreateOrConnectWithoutUpdateSubsribersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUpdateSubsribersInput, UserUncheckedCreateWithoutUpdateSubsribersInput>
  }

  export type SubscriptionCreateWithoutSubscriberInput = {
    StartDate: Date | string
    EndDate: Date | string
    Status: string
    CreatedAt: Date | string
    UpdatedAt: Date | string
    CreatedBy: UserCreateNestedOneWithoutCreatedSubscriptionsInput
    UpdatedBy: UserCreateNestedOneWithoutUpdatedSubscriptionsInput
    alerts?: AlertCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateWithoutSubscriberInput = {
    id?: number
    StartDate: Date | string
    EndDate: Date | string
    Status: string
    CreatedByUserId: number
    UpdatedByUserId: number
    CreatedAt: Date | string
    UpdatedAt: Date | string
    alerts?: AlertUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionCreateOrConnectWithoutSubscriberInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutSubscriberInput, SubscriptionUncheckedCreateWithoutSubscriberInput>
  }

  export type SubscriptionCreateManySubscriberInputEnvelope = {
    data: SubscriptionCreateManySubscriberInput | SubscriptionCreateManySubscriberInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCreateSubsribersInput = {
    update: XOR<UserUpdateWithoutCreateSubsribersInput, UserUncheckedUpdateWithoutCreateSubsribersInput>
    create: XOR<UserCreateWithoutCreateSubsribersInput, UserUncheckedCreateWithoutCreateSubsribersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreateSubsribersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreateSubsribersInput, UserUncheckedUpdateWithoutCreateSubsribersInput>
  }

  export type UserUpdateWithoutCreateSubsribersInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    UpdateSubsribers?: SubscriberUpdateManyWithoutUpdatedByNestedInput
    createdSubscriptions?: SubscriptionUpdateManyWithoutCreatedByNestedInput
    updatedSubscriptions?: SubscriptionUpdateManyWithoutUpdatedByNestedInput
    auditLogs?: AuditLogUpdateManyWithoutPerformedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCreateSubsribersInput = {
    id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    RoleId?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdateSubsribers?: SubscriberUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdSubscriptions?: SubscriptionUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedSubscriptions?: SubscriptionUncheckedUpdateManyWithoutUpdatedByNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutPerformedByNestedInput
  }

  export type UserUpsertWithoutUpdateSubsribersInput = {
    update: XOR<UserUpdateWithoutUpdateSubsribersInput, UserUncheckedUpdateWithoutUpdateSubsribersInput>
    create: XOR<UserCreateWithoutUpdateSubsribersInput, UserUncheckedCreateWithoutUpdateSubsribersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUpdateSubsribersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUpdateSubsribersInput, UserUncheckedUpdateWithoutUpdateSubsribersInput>
  }

  export type UserUpdateWithoutUpdateSubsribersInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    CreateSubsribers?: SubscriberUpdateManyWithoutCreatedByNestedInput
    createdSubscriptions?: SubscriptionUpdateManyWithoutCreatedByNestedInput
    updatedSubscriptions?: SubscriptionUpdateManyWithoutUpdatedByNestedInput
    auditLogs?: AuditLogUpdateManyWithoutPerformedByNestedInput
  }

  export type UserUncheckedUpdateWithoutUpdateSubsribersInput = {
    id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    RoleId?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CreateSubsribers?: SubscriberUncheckedUpdateManyWithoutCreatedByNestedInput
    createdSubscriptions?: SubscriptionUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedSubscriptions?: SubscriptionUncheckedUpdateManyWithoutUpdatedByNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutPerformedByNestedInput
  }

  export type SubscriptionUpsertWithWhereUniqueWithoutSubscriberInput = {
    where: SubscriptionWhereUniqueInput
    update: XOR<SubscriptionUpdateWithoutSubscriberInput, SubscriptionUncheckedUpdateWithoutSubscriberInput>
    create: XOR<SubscriptionCreateWithoutSubscriberInput, SubscriptionUncheckedCreateWithoutSubscriberInput>
  }

  export type SubscriptionUpdateWithWhereUniqueWithoutSubscriberInput = {
    where: SubscriptionWhereUniqueInput
    data: XOR<SubscriptionUpdateWithoutSubscriberInput, SubscriptionUncheckedUpdateWithoutSubscriberInput>
  }

  export type SubscriptionUpdateManyWithWhereWithoutSubscriberInput = {
    where: SubscriptionScalarWhereInput
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyWithoutSubscriberInput>
  }

  export type UserCreateWithoutCreatedSubscriptionsInput = {
    Name: string
    Email: string
    PasswordHash: string
    CreatedAt: Date | string
    UpdatedAt: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    CreateSubsribers?: SubscriberCreateNestedManyWithoutCreatedByInput
    UpdateSubsribers?: SubscriberCreateNestedManyWithoutUpdatedByInput
    updatedSubscriptions?: SubscriptionCreateNestedManyWithoutUpdatedByInput
    auditLogs?: AuditLogCreateNestedManyWithoutPerformedByInput
  }

  export type UserUncheckedCreateWithoutCreatedSubscriptionsInput = {
    id?: number
    Name: string
    Email: string
    PasswordHash: string
    RoleId: number
    CreatedAt: Date | string
    UpdatedAt: Date | string
    CreateSubsribers?: SubscriberUncheckedCreateNestedManyWithoutCreatedByInput
    UpdateSubsribers?: SubscriberUncheckedCreateNestedManyWithoutUpdatedByInput
    updatedSubscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUpdatedByInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutPerformedByInput
  }

  export type UserCreateOrConnectWithoutCreatedSubscriptionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedSubscriptionsInput, UserUncheckedCreateWithoutCreatedSubscriptionsInput>
  }

  export type UserCreateWithoutUpdatedSubscriptionsInput = {
    Name: string
    Email: string
    PasswordHash: string
    CreatedAt: Date | string
    UpdatedAt: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    CreateSubsribers?: SubscriberCreateNestedManyWithoutCreatedByInput
    UpdateSubsribers?: SubscriberCreateNestedManyWithoutUpdatedByInput
    createdSubscriptions?: SubscriptionCreateNestedManyWithoutCreatedByInput
    auditLogs?: AuditLogCreateNestedManyWithoutPerformedByInput
  }

  export type UserUncheckedCreateWithoutUpdatedSubscriptionsInput = {
    id?: number
    Name: string
    Email: string
    PasswordHash: string
    RoleId: number
    CreatedAt: Date | string
    UpdatedAt: Date | string
    CreateSubsribers?: SubscriberUncheckedCreateNestedManyWithoutCreatedByInput
    UpdateSubsribers?: SubscriberUncheckedCreateNestedManyWithoutUpdatedByInput
    createdSubscriptions?: SubscriptionUncheckedCreateNestedManyWithoutCreatedByInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutPerformedByInput
  }

  export type UserCreateOrConnectWithoutUpdatedSubscriptionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUpdatedSubscriptionsInput, UserUncheckedCreateWithoutUpdatedSubscriptionsInput>
  }

  export type SubscriberCreateWithoutSubscriptionsInput = {
    Name: string
    Email: string
    CreatedAt: Date | string
    UpdatedAt: Date | string
    CreatedBy: UserCreateNestedOneWithoutCreateSubsribersInput
    UpdatedBy: UserCreateNestedOneWithoutUpdateSubsribersInput
  }

  export type SubscriberUncheckedCreateWithoutSubscriptionsInput = {
    id?: number
    Name: string
    Email: string
    CreatedByUserId: number
    UpdatedByUserId: number
    CreatedAt: Date | string
    UpdatedAt: Date | string
  }

  export type SubscriberCreateOrConnectWithoutSubscriptionsInput = {
    where: SubscriberWhereUniqueInput
    create: XOR<SubscriberCreateWithoutSubscriptionsInput, SubscriberUncheckedCreateWithoutSubscriptionsInput>
  }

  export type AlertCreateWithoutSubscriptionInput = {
    Type: string
    Seen: boolean
    CreatedAt: Date | string
  }

  export type AlertUncheckedCreateWithoutSubscriptionInput = {
    id?: number
    Type: string
    Seen: boolean
    CreatedAt: Date | string
  }

  export type AlertCreateOrConnectWithoutSubscriptionInput = {
    where: AlertWhereUniqueInput
    create: XOR<AlertCreateWithoutSubscriptionInput, AlertUncheckedCreateWithoutSubscriptionInput>
  }

  export type AlertCreateManySubscriptionInputEnvelope = {
    data: AlertCreateManySubscriptionInput | AlertCreateManySubscriptionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCreatedSubscriptionsInput = {
    update: XOR<UserUpdateWithoutCreatedSubscriptionsInput, UserUncheckedUpdateWithoutCreatedSubscriptionsInput>
    create: XOR<UserCreateWithoutCreatedSubscriptionsInput, UserUncheckedCreateWithoutCreatedSubscriptionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedSubscriptionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedSubscriptionsInput, UserUncheckedUpdateWithoutCreatedSubscriptionsInput>
  }

  export type UserUpdateWithoutCreatedSubscriptionsInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    CreateSubsribers?: SubscriberUpdateManyWithoutCreatedByNestedInput
    UpdateSubsribers?: SubscriberUpdateManyWithoutUpdatedByNestedInput
    updatedSubscriptions?: SubscriptionUpdateManyWithoutUpdatedByNestedInput
    auditLogs?: AuditLogUpdateManyWithoutPerformedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedSubscriptionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    RoleId?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CreateSubsribers?: SubscriberUncheckedUpdateManyWithoutCreatedByNestedInput
    UpdateSubsribers?: SubscriberUncheckedUpdateManyWithoutUpdatedByNestedInput
    updatedSubscriptions?: SubscriptionUncheckedUpdateManyWithoutUpdatedByNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutPerformedByNestedInput
  }

  export type UserUpsertWithoutUpdatedSubscriptionsInput = {
    update: XOR<UserUpdateWithoutUpdatedSubscriptionsInput, UserUncheckedUpdateWithoutUpdatedSubscriptionsInput>
    create: XOR<UserCreateWithoutUpdatedSubscriptionsInput, UserUncheckedCreateWithoutUpdatedSubscriptionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUpdatedSubscriptionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUpdatedSubscriptionsInput, UserUncheckedUpdateWithoutUpdatedSubscriptionsInput>
  }

  export type UserUpdateWithoutUpdatedSubscriptionsInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    CreateSubsribers?: SubscriberUpdateManyWithoutCreatedByNestedInput
    UpdateSubsribers?: SubscriberUpdateManyWithoutUpdatedByNestedInput
    createdSubscriptions?: SubscriptionUpdateManyWithoutCreatedByNestedInput
    auditLogs?: AuditLogUpdateManyWithoutPerformedByNestedInput
  }

  export type UserUncheckedUpdateWithoutUpdatedSubscriptionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    RoleId?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CreateSubsribers?: SubscriberUncheckedUpdateManyWithoutCreatedByNestedInput
    UpdateSubsribers?: SubscriberUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdSubscriptions?: SubscriptionUncheckedUpdateManyWithoutCreatedByNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutPerformedByNestedInput
  }

  export type SubscriberUpsertWithoutSubscriptionsInput = {
    update: XOR<SubscriberUpdateWithoutSubscriptionsInput, SubscriberUncheckedUpdateWithoutSubscriptionsInput>
    create: XOR<SubscriberCreateWithoutSubscriptionsInput, SubscriberUncheckedCreateWithoutSubscriptionsInput>
    where?: SubscriberWhereInput
  }

  export type SubscriberUpdateToOneWithWhereWithoutSubscriptionsInput = {
    where?: SubscriberWhereInput
    data: XOR<SubscriberUpdateWithoutSubscriptionsInput, SubscriberUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type SubscriberUpdateWithoutSubscriptionsInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: UserUpdateOneRequiredWithoutCreateSubsribersNestedInput
    UpdatedBy?: UserUpdateOneRequiredWithoutUpdateSubsribersNestedInput
  }

  export type SubscriberUncheckedUpdateWithoutSubscriptionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    CreatedByUserId?: IntFieldUpdateOperationsInput | number
    UpdatedByUserId?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertUpsertWithWhereUniqueWithoutSubscriptionInput = {
    where: AlertWhereUniqueInput
    update: XOR<AlertUpdateWithoutSubscriptionInput, AlertUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<AlertCreateWithoutSubscriptionInput, AlertUncheckedCreateWithoutSubscriptionInput>
  }

  export type AlertUpdateWithWhereUniqueWithoutSubscriptionInput = {
    where: AlertWhereUniqueInput
    data: XOR<AlertUpdateWithoutSubscriptionInput, AlertUncheckedUpdateWithoutSubscriptionInput>
  }

  export type AlertUpdateManyWithWhereWithoutSubscriptionInput = {
    where: AlertScalarWhereInput
    data: XOR<AlertUpdateManyMutationInput, AlertUncheckedUpdateManyWithoutSubscriptionInput>
  }

  export type AlertScalarWhereInput = {
    AND?: AlertScalarWhereInput | AlertScalarWhereInput[]
    OR?: AlertScalarWhereInput[]
    NOT?: AlertScalarWhereInput | AlertScalarWhereInput[]
    id?: IntFilter<"Alert"> | number
    SubscriptionId?: IntFilter<"Alert"> | number
    Type?: StringFilter<"Alert"> | string
    Seen?: BoolFilter<"Alert"> | boolean
    CreatedAt?: DateTimeFilter<"Alert"> | Date | string
  }

  export type SubscriptionCreateWithoutAlertsInput = {
    StartDate: Date | string
    EndDate: Date | string
    Status: string
    CreatedAt: Date | string
    UpdatedAt: Date | string
    CreatedBy: UserCreateNestedOneWithoutCreatedSubscriptionsInput
    UpdatedBy: UserCreateNestedOneWithoutUpdatedSubscriptionsInput
    subscriber: SubscriberCreateNestedOneWithoutSubscriptionsInput
  }

  export type SubscriptionUncheckedCreateWithoutAlertsInput = {
    id?: number
    SubscripterId: number
    StartDate: Date | string
    EndDate: Date | string
    Status: string
    CreatedByUserId: number
    UpdatedByUserId: number
    CreatedAt: Date | string
    UpdatedAt: Date | string
  }

  export type SubscriptionCreateOrConnectWithoutAlertsInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutAlertsInput, SubscriptionUncheckedCreateWithoutAlertsInput>
  }

  export type SubscriptionUpsertWithoutAlertsInput = {
    update: XOR<SubscriptionUpdateWithoutAlertsInput, SubscriptionUncheckedUpdateWithoutAlertsInput>
    create: XOR<SubscriptionCreateWithoutAlertsInput, SubscriptionUncheckedCreateWithoutAlertsInput>
    where?: SubscriptionWhereInput
  }

  export type SubscriptionUpdateToOneWithWhereWithoutAlertsInput = {
    where?: SubscriptionWhereInput
    data: XOR<SubscriptionUpdateWithoutAlertsInput, SubscriptionUncheckedUpdateWithoutAlertsInput>
  }

  export type SubscriptionUpdateWithoutAlertsInput = {
    StartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    EndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: UserUpdateOneRequiredWithoutCreatedSubscriptionsNestedInput
    UpdatedBy?: UserUpdateOneRequiredWithoutUpdatedSubscriptionsNestedInput
    subscriber?: SubscriberUpdateOneRequiredWithoutSubscriptionsNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutAlertsInput = {
    id?: IntFieldUpdateOperationsInput | number
    SubscripterId?: IntFieldUpdateOperationsInput | number
    StartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    EndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: StringFieldUpdateOperationsInput | string
    CreatedByUserId?: IntFieldUpdateOperationsInput | number
    UpdatedByUserId?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutAuditLogsInput = {
    Name: string
    Email: string
    PasswordHash: string
    CreatedAt: Date | string
    UpdatedAt: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    CreateSubsribers?: SubscriberCreateNestedManyWithoutCreatedByInput
    UpdateSubsribers?: SubscriberCreateNestedManyWithoutUpdatedByInput
    createdSubscriptions?: SubscriptionCreateNestedManyWithoutCreatedByInput
    updatedSubscriptions?: SubscriptionCreateNestedManyWithoutUpdatedByInput
  }

  export type UserUncheckedCreateWithoutAuditLogsInput = {
    id?: number
    Name: string
    Email: string
    PasswordHash: string
    RoleId: number
    CreatedAt: Date | string
    UpdatedAt: Date | string
    CreateSubsribers?: SubscriberUncheckedCreateNestedManyWithoutCreatedByInput
    UpdateSubsribers?: SubscriberUncheckedCreateNestedManyWithoutUpdatedByInput
    createdSubscriptions?: SubscriptionUncheckedCreateNestedManyWithoutCreatedByInput
    updatedSubscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUpdatedByInput
  }

  export type UserCreateOrConnectWithoutAuditLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
  }

  export type UserUpsertWithoutAuditLogsInput = {
    update: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type UserUpdateWithoutAuditLogsInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    CreateSubsribers?: SubscriberUpdateManyWithoutCreatedByNestedInput
    UpdateSubsribers?: SubscriberUpdateManyWithoutUpdatedByNestedInput
    createdSubscriptions?: SubscriptionUpdateManyWithoutCreatedByNestedInput
    updatedSubscriptions?: SubscriptionUpdateManyWithoutUpdatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutAuditLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    RoleId?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CreateSubsribers?: SubscriberUncheckedUpdateManyWithoutCreatedByNestedInput
    UpdateSubsribers?: SubscriberUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdSubscriptions?: SubscriptionUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedSubscriptions?: SubscriptionUncheckedUpdateManyWithoutUpdatedByNestedInput
  }

  export type SubscriberCreateManyCreatedByInput = {
    id?: number
    Name: string
    Email: string
    UpdatedByUserId: number
    CreatedAt: Date | string
    UpdatedAt: Date | string
  }

  export type SubscriberCreateManyUpdatedByInput = {
    id?: number
    Name: string
    Email: string
    CreatedByUserId: number
    CreatedAt: Date | string
    UpdatedAt: Date | string
  }

  export type SubscriptionCreateManyCreatedByInput = {
    id?: number
    SubscripterId: number
    StartDate: Date | string
    EndDate: Date | string
    Status: string
    UpdatedByUserId: number
    CreatedAt: Date | string
    UpdatedAt: Date | string
  }

  export type SubscriptionCreateManyUpdatedByInput = {
    id?: number
    SubscripterId: number
    StartDate: Date | string
    EndDate: Date | string
    Status: string
    CreatedByUserId: number
    CreatedAt: Date | string
    UpdatedAt: Date | string
  }

  export type AuditLogCreateManyPerformedByInput = {
    id?: number
    action: string
    entity: string
    entityId: number
    timestamp: Date | string
  }

  export type SubscriberUpdateWithoutCreatedByInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedBy?: UserUpdateOneRequiredWithoutUpdateSubsribersNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutSubscriberNestedInput
  }

  export type SubscriberUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    UpdatedByUserId?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutSubscriberNestedInput
  }

  export type SubscriberUncheckedUpdateManyWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    UpdatedByUserId?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriberUpdateWithoutUpdatedByInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: UserUpdateOneRequiredWithoutCreateSubsribersNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutSubscriberNestedInput
  }

  export type SubscriberUncheckedUpdateWithoutUpdatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    CreatedByUserId?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutSubscriberNestedInput
  }

  export type SubscriberUncheckedUpdateManyWithoutUpdatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    CreatedByUserId?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUpdateWithoutCreatedByInput = {
    StartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    EndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedBy?: UserUpdateOneRequiredWithoutUpdatedSubscriptionsNestedInput
    subscriber?: SubscriberUpdateOneRequiredWithoutSubscriptionsNestedInput
    alerts?: AlertUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    SubscripterId?: IntFieldUpdateOperationsInput | number
    StartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    EndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: StringFieldUpdateOperationsInput | string
    UpdatedByUserId?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alerts?: AlertUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateManyWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    SubscripterId?: IntFieldUpdateOperationsInput | number
    StartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    EndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: StringFieldUpdateOperationsInput | string
    UpdatedByUserId?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUpdateWithoutUpdatedByInput = {
    StartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    EndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: UserUpdateOneRequiredWithoutCreatedSubscriptionsNestedInput
    subscriber?: SubscriberUpdateOneRequiredWithoutSubscriptionsNestedInput
    alerts?: AlertUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutUpdatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    SubscripterId?: IntFieldUpdateOperationsInput | number
    StartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    EndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: StringFieldUpdateOperationsInput | string
    CreatedByUserId?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alerts?: AlertUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateManyWithoutUpdatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    SubscripterId?: IntFieldUpdateOperationsInput | number
    StartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    EndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: StringFieldUpdateOperationsInput | string
    CreatedByUserId?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUpdateWithoutPerformedByInput = {
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateWithoutPerformedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyWithoutPerformedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyRoleInput = {
    id?: number
    Name: string
    Email: string
    PasswordHash: string
    CreatedAt: Date | string
    UpdatedAt: Date | string
  }

  export type UserUpdateWithoutRoleInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CreateSubsribers?: SubscriberUpdateManyWithoutCreatedByNestedInput
    UpdateSubsribers?: SubscriberUpdateManyWithoutUpdatedByNestedInput
    createdSubscriptions?: SubscriptionUpdateManyWithoutCreatedByNestedInput
    updatedSubscriptions?: SubscriptionUpdateManyWithoutUpdatedByNestedInput
    auditLogs?: AuditLogUpdateManyWithoutPerformedByNestedInput
  }

  export type UserUncheckedUpdateWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CreateSubsribers?: SubscriberUncheckedUpdateManyWithoutCreatedByNestedInput
    UpdateSubsribers?: SubscriberUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdSubscriptions?: SubscriptionUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedSubscriptions?: SubscriptionUncheckedUpdateManyWithoutUpdatedByNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutPerformedByNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateManySubscriberInput = {
    id?: number
    StartDate: Date | string
    EndDate: Date | string
    Status: string
    CreatedByUserId: number
    UpdatedByUserId: number
    CreatedAt: Date | string
    UpdatedAt: Date | string
  }

  export type SubscriptionUpdateWithoutSubscriberInput = {
    StartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    EndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedBy?: UserUpdateOneRequiredWithoutCreatedSubscriptionsNestedInput
    UpdatedBy?: UserUpdateOneRequiredWithoutUpdatedSubscriptionsNestedInput
    alerts?: AlertUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutSubscriberInput = {
    id?: IntFieldUpdateOperationsInput | number
    StartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    EndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: StringFieldUpdateOperationsInput | string
    CreatedByUserId?: IntFieldUpdateOperationsInput | number
    UpdatedByUserId?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alerts?: AlertUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateManyWithoutSubscriberInput = {
    id?: IntFieldUpdateOperationsInput | number
    StartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    EndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: StringFieldUpdateOperationsInput | string
    CreatedByUserId?: IntFieldUpdateOperationsInput | number
    UpdatedByUserId?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertCreateManySubscriptionInput = {
    id?: number
    Type: string
    Seen: boolean
    CreatedAt: Date | string
  }

  export type AlertUpdateWithoutSubscriptionInput = {
    Type?: StringFieldUpdateOperationsInput | string
    Seen?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertUncheckedUpdateWithoutSubscriptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    Type?: StringFieldUpdateOperationsInput | string
    Seen?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertUncheckedUpdateManyWithoutSubscriptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    Type?: StringFieldUpdateOperationsInput | string
    Seen?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}