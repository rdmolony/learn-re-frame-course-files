goog.provide('day8.re_frame_10x.db');
goog.require('cljs.core');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.core');
goog.require('day8.re_frame_10x.utils.localstorage');
day8.re_frame_10x.db.init_db = (function day8$re_frame_10x$db$init_db(debug_QMARK_){
var panel_width_PERCENT_ = day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("panel-width-ratio",0.35);
var show_panel_QMARK_ = day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("show-panel",true);
var selected_tab = day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("selected-tab",new cljs.core.Keyword(null,"event","event",301435442));
var filter_items = day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("filter-items",cljs.core.PersistentVector.EMPTY);
var app_db_paths = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("app-db-paths",cljs.core.PersistentArrayMap.EMPTY));
var json_ml_paths = day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("app-db-json-ml-expansions",cljs.core.PersistentHashSet.EMPTY);
var external_window_QMARK_ = day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("external-window?",false);
var external_window_dimensions = day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("external-window-dimensions",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(800),new cljs.core.Keyword(null,"height","height",1025178622),(800),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0)], null));
var show_epoch_traces_QMARK_ = day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("show-epoch-traces?",true);
var using_trace_QMARK_ = day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("using-trace?",true);
var ignored_events = day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("ignored-events",cljs.core.PersistentArrayMap.EMPTY);
var low_level_trace = day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("low-level-trace",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent","reagent",2131627322),true,new cljs.core.Keyword(null,"re-frame","re-frame",-1039473033),true], null));
var filtered_view_trace = day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("filtered-view-trace",(function (){var id1 = cljs.core.random_uuid();
var id2 = cljs.core.random_uuid();
return cljs.core.PersistentArrayMap.createAsIfByAssoc([id1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id1,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499),"re-com.box",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"re-com.box","re-com.box",-858521688,null),new cljs.core.Keyword(null,"sort","sort",953465918),(0)], null),id2,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id2,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499),"re-com.input-text",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"re-com.input-text","re-com.input-text",-1695951110,null),new cljs.core.Keyword(null,"sort","sort",953465918),(1)], null)]);
})());
var num_epochs = day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("retained-epochs",(25));
var follows_events_QMARK_ = day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("app-db-follows-events?",true);
var categories = day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("categories",new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sub","run","sub/run",-1821315581),null,new cljs.core.Keyword("sub","create","sub/create",-1301317560),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),null], null), null));
if(cljs.core.truth_(using_trace_QMARK_)){
var G__23612_23650 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("global","enable-tracing","global/enable-tracing",-1791988359)], null);
(mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__23612_23650) : mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.call(null,G__23612_23650));
} else {
}

var G__23613_23652 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808),panel_width_PERCENT_], null);
(mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__23613_23652) : mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.call(null,G__23613_23652));

var G__23614_23654 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","show-panel?","settings/show-panel?",-194286945),show_panel_QMARK_], null);
(mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__23614_23654) : mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.call(null,G__23614_23654));

var G__23615_23655 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","selected-tab","settings/selected-tab",-124010089),selected_tab], null);
(mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__23615_23655) : mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.call(null,G__23615_23655));

var G__23616_23656 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","set-ignored-events","settings/set-ignored-events",-10379659),ignored_events], null);
(mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__23616_23656) : mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.call(null,G__23616_23656));

var G__23617_23657 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","set-filtered-view-trace","settings/set-filtered-view-trace",-803299732),filtered_view_trace], null);
(mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__23617_23657) : mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.call(null,G__23617_23657));

var G__23618_23658 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","set-low-level-trace","settings/set-low-level-trace",-664705158),low_level_trace], null);
(mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__23618_23658) : mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.call(null,G__23618_23658));

var G__23619_23659 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","set-number-of-retained-epochs","settings/set-number-of-retained-epochs",-1910736736),num_epochs], null);
(mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__23619_23659) : mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.call(null,G__23619_23659));

var G__23620_23661 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","app-db-follows-events?","settings/app-db-follows-events?",-115495889),follows_events_QMARK_], null);
(mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__23620_23661) : mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.call(null,G__23620_23661));

var G__23621_23662 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","debug?","settings/debug?",-128490920),debug_QMARK_], null);
(mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__23621_23662) : mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.call(null,G__23621_23662));

if(cljs.core.truth_(external_window_QMARK_)){
var G__23622_23664 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("global","launch-external","global/launch-external",821773827)], null);
(mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__23622_23664) : mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.call(null,G__23622_23664));
} else {
}

var G__23623_23666 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","external-window-dimensions","settings/external-window-dimensions",-501632461),external_window_dimensions], null);
(mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__23623_23666) : mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.call(null,G__23623_23666));

var G__23624_23669 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","filter-items","traces/filter-items",977390347),filter_items], null);
(mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__23624_23669) : mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.call(null,G__23624_23669));

var G__23625_23670 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","set-categories","traces/set-categories",-1873940666),categories], null);
(mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__23625_23670) : mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.call(null,G__23625_23670));

var G__23626_23672 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("trace-panel","update-show-epoch-traces?","trace-panel/update-show-epoch-traces?",-1935503516),show_epoch_traces_QMARK_], null);
(mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__23626_23672) : mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.call(null,G__23626_23672));

var G__23629_23673 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","paths","app-db/paths",-1600032730),app_db_paths], null);
(mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__23629_23673) : mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.call(null,G__23629_23673));

var G__23630_23674 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","set-json-ml-paths","app-db/set-json-ml-paths",582043654),json_ml_paths], null);
(mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__23630_23674) : mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.call(null,G__23630_23674));

var G__23631_23675 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("global","add-unload-hook","global/add-unload-hook",1304719430)], null);
(mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__23631_23675) : mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.call(null,G__23631_23675));

var G__23632 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","reagent-id","app-db/reagent-id",916858371)], null);
return (mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__23632) : mranderson048.re_frame.v0v10v6.re_frame.core.dispatch.call(null,G__23632));
});

//# sourceMappingURL=day8.re_frame_10x.db.js.map