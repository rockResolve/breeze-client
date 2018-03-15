import { BreezeEvent } from './event';
import { AbstractDataServiceAdapter} from './abstract-data-service-adapter';
import { DataService, JsonResultsAdapter, INodeContext } from './data-service';
import { DataType  } from './data-type';
import { EntityAction } from './entity-action';
import { EntityAspect, ComplexAspect, IEntity, IStructuralObject } from './entity-aspect';
import { EntityKey } from './entity-key';
import { EntityManager, ISaveContext, ISaveBundle, IHttpResponse, IKeyMapping, IServerError, ISaveResult } from './entity-manager';
import { EntityQuery, FilterQueryOp, BooleanQueryOp, OrderByClause, ExpandClause, SelectClause } from './entity-query';
import { EntityState } from './entity-state';
import { InterfaceRegistry, IAjaxAdapter, IDataServiceAdapter, IModelLibraryAdapter, IChangeRequestInterceptor, IUriBuilderAdapter, InterfaceRegistryConfig } from './interface-registry';
import { KeyGenerator } from './key-generator';
import { LocalQueryComparisonOptions } from './local-query-comparison-options';
import { MappingContext } from './mapping-context';
import { MetadataStore, EntityType, ComplexType, StructuralType, DataProperty, EntityProperty, NavigationProperty, AutoGeneratedKeyType   } from './entity-metadata';
import { NamingConvention } from './naming-convention';
import { Predicate, IVisitContext, IVisitor, IExpressionContext, UnaryPredicate, BinaryPredicate, AnyAllPredicate, AndOrPredicate, LitExpr, FnExpr, PropExpr } from './predicate';
import { QueryOptions,  FetchStrategy, MergeStrategy } from './query-options';
import { SaveOptions } from './save-options';
import { ValidationError, Validator } from './validate';
import { ValidationOptions } from './validation-options';
import { assertParam, assertConfig, Param } from './assert-param';
import { config, IBaseAdapter } from './config';
import { core } from './core';
import { makeRelationArray, makePrimitiveArray, makeComplexArray } from './array';

import { BreezeConfig } from './config';
export { BreezeConfig } from './config';
// import { IComplexArray } from './complex-array';
// import { IConfigParam } from './assert-param';
// import { IRelationArray } from './relation-array';


export {
  AbstractDataServiceAdapter,
  AndOrPredicate,
  AnyAllPredicate,
  AutoGeneratedKeyType,
  BinaryPredicate,
  // BreezeEvent, TODO: not needed here - exposed on breeze obj
  ComplexAspect,
  ComplexType,
  DataProperty,
  DataService,
  DataType,
  EntityAction,
  EntityAspect,
  EntityKey,
  EntityManager,
  EntityProperty,
  EntityQuery,
  EntityState,
  EntityType,
  ExpandClause,
  FetchStrategy,
  FilterQueryOp,
  FnExpr,
  IAjaxAdapter,
  IBaseAdapter,
  IChangeRequestInterceptor,
  IDataServiceAdapter,
  IEntity,
  IExpressionContext,
  IHttpResponse,
  IKeyMapping,
  IModelLibraryAdapter,
  InterfaceRegistry,
  InterfaceRegistryConfig,
  INodeContext,
  ISaveBundle,
  ISaveContext,
  ISaveResult,
  IServerError,
  IStructuralObject,
  IUriBuilderAdapter,
  IVisitContext,
  IVisitor,
  JsonResultsAdapter,
  KeyGenerator,
  LitExpr,
  LocalQueryComparisonOptions,
  MappingContext,
  MergeStrategy,
  MetadataStore,
  NamingConvention,
  NavigationProperty,
  OrderByClause,
  Param,
  Predicate,
  PropExpr,
  QueryOptions,
  SaveOptions,
  SelectClause,
  StructuralType,
  UnaryPredicate,
  Validator,
  ValidationError,
  ValidationOptions,
  assertConfig,
  assertParam,
  config,
  core,
  makeComplexArray,
  makePrimitiveArray,
  makeRelationArray,
};

// create a breeze variable here
export const breeze = {
  AbstractDataServiceAdapter: AbstractDataServiceAdapter,
  AutoGeneratedKeyType: AutoGeneratedKeyType,
  BooleanQueryOp: BooleanQueryOp,
  ComplexAspect: ComplexAspect,
  ComplexType: ComplexType,
  DataProperty: DataProperty,
  DataService: DataService,
  DataType: DataType,
  EntityAction: EntityAction,
  EntityAspect: EntityAspect,
  EntityKey: EntityKey,
  EntityManager: EntityManager,
  EntityQuery: EntityQuery,
  EntityState: EntityState,
  EntityType: EntityType,
  Event: BreezeEvent,
  FetchStrategy: FetchStrategy,
  FilterQueryOp: FilterQueryOp,
  InterfaceRegistry: InterfaceRegistry,
  JsonResultsAdapter: JsonResultsAdapter,
  KeyGenerator: KeyGenerator,
  LocalQueryComparisonOptions: LocalQueryComparisonOptions,
  MergeStrategy: MergeStrategy,
  MetadataStore: MetadataStore,
  NamingConvention: NamingConvention,
  NavigationProperty: NavigationProperty,
  OrderByClause: OrderByClause, // for testing only
  Predicate: Predicate,
  QueryOptions: QueryOptions,
  SaveOptions: SaveOptions,
  ValidationError: ValidationError,
  ValidationOptions: ValidationOptions,
  Validator,
  assertConfig: null,
  assertParam: null,
  config: config,
  core: core,
  makeComplexArray: makeComplexArray,
  makePrimitiveArray: makePrimitiveArray,
  makeRelationArray: makeRelationArray,
  version: "2.0.0-alpha.3"
};

breeze.assertConfig = assertConfig as any;
breeze.assertParam = assertParam as any;

/** @hidden @internal */
declare var window: any;

/** @hidden @internal */
declare var global: any;

/** @hidden @internal */
let win: any;
try {
  win = window ? window : (global ? global.window : undefined);
} catch (e) {

}
if (win) {
  win.breeze = breeze;
}