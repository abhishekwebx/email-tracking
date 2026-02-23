(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
"[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/@lexical/react/LexicalComposerContext.dev.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LexicalComposerContext",
    ()=>LexicalComposerContext,
    "createLexicalComposerContext",
    ()=>createLexicalComposerContext,
    "useLexicalComposerContext",
    ()=>useLexicalComposerContext
]);
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ // Do not require this module directly! Use normal `invariant` calls.
function formatDevErrorMessage(message) {
    throw new Error(message);
}
const LexicalComposerContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function createLexicalComposerContext(parent, theme) {
    let parentContext = null;
    if (parent != null) {
        parentContext = parent[1];
    }
    function getTheme() {
        if (theme != null) {
            return theme;
        }
        return parentContext != null ? parentContext.getTheme() : null;
    }
    return {
        getTheme
    };
}
function useLexicalComposerContext() {
    const composerContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LexicalComposerContext);
    if (composerContext == null) {
        {
            formatDevErrorMessage(`LexicalComposerContext.useLexicalComposerContext: cannot find a LexicalComposerContext`);
        }
    }
    return composerContext;
}
;
}),
"[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/lexical/Lexical.dev.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "$addUpdateTag",
    ()=>$addUpdateTag,
    "$applyNodeReplacement",
    ()=>$applyNodeReplacement,
    "$caretFromPoint",
    ()=>$caretFromPoint,
    "$caretRangeFromSelection",
    ()=>$caretRangeFromSelection,
    "$cloneWithProperties",
    ()=>$cloneWithProperties,
    "$cloneWithPropertiesEphemeral",
    ()=>$cloneWithPropertiesEphemeral,
    "$comparePointCaretNext",
    ()=>$comparePointCaretNext,
    "$copyNode",
    ()=>$copyNode,
    "$create",
    ()=>$create,
    "$createLineBreakNode",
    ()=>$createLineBreakNode,
    "$createNodeSelection",
    ()=>$createNodeSelection,
    "$createParagraphNode",
    ()=>$createParagraphNode,
    "$createPoint",
    ()=>$createPoint,
    "$createRangeSelection",
    ()=>$createRangeSelection,
    "$createRangeSelectionFromDom",
    ()=>$createRangeSelectionFromDom,
    "$createTabNode",
    ()=>$createTabNode,
    "$createTextNode",
    ()=>$createTextNode,
    "$extendCaretToRange",
    ()=>$extendCaretToRange,
    "$findMatchingParent",
    ()=>$findMatchingParent,
    "$getAdjacentChildCaret",
    ()=>$getAdjacentChildCaret,
    "$getAdjacentNode",
    ()=>$getAdjacentNode,
    "$getAdjacentSiblingOrParentSiblingCaret",
    ()=>$getAdjacentSiblingOrParentSiblingCaret,
    "$getCaretInDirection",
    ()=>$getCaretInDirection,
    "$getCaretRange",
    ()=>$getCaretRange,
    "$getCaretRangeInDirection",
    ()=>$getCaretRangeInDirection,
    "$getCharacterOffsets",
    ()=>$getCharacterOffsets,
    "$getChildCaret",
    ()=>$getChildCaret,
    "$getChildCaretAtIndex",
    ()=>$getChildCaretAtIndex,
    "$getChildCaretOrSelf",
    ()=>$getChildCaretOrSelf,
    "$getCollapsedCaretRange",
    ()=>$getCollapsedCaretRange,
    "$getCommonAncestor",
    ()=>$getCommonAncestor,
    "$getCommonAncestorResultBranchOrder",
    ()=>$getCommonAncestorResultBranchOrder,
    "$getEditor",
    ()=>$getEditor,
    "$getNearestNodeFromDOMNode",
    ()=>$getNearestNodeFromDOMNode,
    "$getNearestRootOrShadowRoot",
    ()=>$getNearestRootOrShadowRoot,
    "$getNodeByKey",
    ()=>$getNodeByKey,
    "$getNodeByKeyOrThrow",
    ()=>$getNodeByKeyOrThrow,
    "$getNodeFromDOMNode",
    ()=>$getNodeFromDOMNode,
    "$getPreviousSelection",
    ()=>$getPreviousSelection,
    "$getRoot",
    ()=>$getRoot,
    "$getSelection",
    ()=>$getSelection,
    "$getSiblingCaret",
    ()=>$getSiblingCaret,
    "$getState",
    ()=>$getState,
    "$getStateChange",
    ()=>$getStateChange,
    "$getTextContent",
    ()=>$getTextContent,
    "$getTextNodeOffset",
    ()=>$getTextNodeOffset,
    "$getTextPointCaret",
    ()=>$getTextPointCaret,
    "$getTextPointCaretSlice",
    ()=>$getTextPointCaretSlice,
    "$getWritableNodeState",
    ()=>$getWritableNodeState,
    "$hasAncestor",
    ()=>$hasAncestor,
    "$hasUpdateTag",
    ()=>$hasUpdateTag,
    "$insertNodes",
    ()=>$insertNodes,
    "$isBlockElementNode",
    ()=>$isBlockElementNode,
    "$isChildCaret",
    ()=>$isChildCaret,
    "$isDecoratorNode",
    ()=>$isDecoratorNode,
    "$isEditorState",
    ()=>$isEditorState,
    "$isElementNode",
    ()=>$isElementNode,
    "$isExtendableTextPointCaret",
    ()=>$isExtendableTextPointCaret,
    "$isInlineElementOrDecoratorNode",
    ()=>$isInlineElementOrDecoratorNode,
    "$isLeafNode",
    ()=>$isLeafNode,
    "$isLineBreakNode",
    ()=>$isLineBreakNode,
    "$isNodeCaret",
    ()=>$isNodeCaret,
    "$isNodeSelection",
    ()=>$isNodeSelection,
    "$isParagraphNode",
    ()=>$isParagraphNode,
    "$isRangeSelection",
    ()=>$isRangeSelection,
    "$isRootNode",
    ()=>$isRootNode,
    "$isRootOrShadowRoot",
    ()=>$isRootOrShadowRoot,
    "$isSiblingCaret",
    ()=>$isSiblingCaret,
    "$isTabNode",
    ()=>$isTabNode,
    "$isTextNode",
    ()=>$isTextNode,
    "$isTextPointCaret",
    ()=>$isTextPointCaret,
    "$isTextPointCaretSlice",
    ()=>$isTextPointCaretSlice,
    "$isTokenOrSegmented",
    ()=>$isTokenOrSegmented,
    "$isTokenOrTab",
    ()=>$isTokenOrTab,
    "$nodesOfType",
    ()=>$nodesOfType,
    "$normalizeCaret",
    ()=>$normalizeCaret,
    "$normalizeSelection__EXPERIMENTAL",
    ()=>$normalizeSelection,
    "$onUpdate",
    ()=>$onUpdate,
    "$parseSerializedNode",
    ()=>$parseSerializedNode,
    "$removeTextFromCaretRange",
    ()=>$removeTextFromCaretRange,
    "$rewindSiblingCaret",
    ()=>$rewindSiblingCaret,
    "$selectAll",
    ()=>$selectAll,
    "$setCompositionKey",
    ()=>$setCompositionKey,
    "$setPointFromCaret",
    ()=>$setPointFromCaret,
    "$setSelection",
    ()=>$setSelection,
    "$setSelectionFromCaretRange",
    ()=>$setSelectionFromCaretRange,
    "$setState",
    ()=>$setState,
    "$splitAtPointCaretNext",
    ()=>$splitAtPointCaretNext,
    "$splitNode",
    ()=>$splitNode,
    "$updateRangeSelectionFromCaretRange",
    ()=>$updateRangeSelectionFromCaretRange,
    "ArtificialNode__DO_NOT_USE",
    ()=>ArtificialNode__DO_NOT_USE,
    "BEFORE_INPUT_COMMAND",
    ()=>BEFORE_INPUT_COMMAND,
    "BLUR_COMMAND",
    ()=>BLUR_COMMAND,
    "CAN_REDO_COMMAND",
    ()=>CAN_REDO_COMMAND,
    "CAN_UNDO_COMMAND",
    ()=>CAN_UNDO_COMMAND,
    "CLEAR_EDITOR_COMMAND",
    ()=>CLEAR_EDITOR_COMMAND,
    "CLEAR_HISTORY_COMMAND",
    ()=>CLEAR_HISTORY_COMMAND,
    "CLICK_COMMAND",
    ()=>CLICK_COMMAND,
    "COLLABORATION_TAG",
    ()=>COLLABORATION_TAG,
    "COMMAND_PRIORITY_CRITICAL",
    ()=>COMMAND_PRIORITY_CRITICAL,
    "COMMAND_PRIORITY_EDITOR",
    ()=>COMMAND_PRIORITY_EDITOR,
    "COMMAND_PRIORITY_HIGH",
    ()=>COMMAND_PRIORITY_HIGH,
    "COMMAND_PRIORITY_LOW",
    ()=>COMMAND_PRIORITY_LOW,
    "COMMAND_PRIORITY_NORMAL",
    ()=>COMMAND_PRIORITY_NORMAL,
    "COMPOSITION_END_COMMAND",
    ()=>COMPOSITION_END_COMMAND,
    "COMPOSITION_START_COMMAND",
    ()=>COMPOSITION_START_COMMAND,
    "CONTROLLED_TEXT_INSERTION_COMMAND",
    ()=>CONTROLLED_TEXT_INSERTION_COMMAND,
    "COPY_COMMAND",
    ()=>COPY_COMMAND,
    "CUT_COMMAND",
    ()=>CUT_COMMAND,
    "DELETE_CHARACTER_COMMAND",
    ()=>DELETE_CHARACTER_COMMAND,
    "DELETE_LINE_COMMAND",
    ()=>DELETE_LINE_COMMAND,
    "DELETE_WORD_COMMAND",
    ()=>DELETE_WORD_COMMAND,
    "DRAGEND_COMMAND",
    ()=>DRAGEND_COMMAND,
    "DRAGOVER_COMMAND",
    ()=>DRAGOVER_COMMAND,
    "DRAGSTART_COMMAND",
    ()=>DRAGSTART_COMMAND,
    "DROP_COMMAND",
    ()=>DROP_COMMAND,
    "DecoratorNode",
    ()=>DecoratorNode,
    "ElementNode",
    ()=>ElementNode,
    "FOCUS_COMMAND",
    ()=>FOCUS_COMMAND,
    "FORMAT_ELEMENT_COMMAND",
    ()=>FORMAT_ELEMENT_COMMAND,
    "FORMAT_TEXT_COMMAND",
    ()=>FORMAT_TEXT_COMMAND,
    "HISTORIC_TAG",
    ()=>HISTORIC_TAG,
    "HISTORY_MERGE_TAG",
    ()=>HISTORY_MERGE_TAG,
    "HISTORY_PUSH_TAG",
    ()=>HISTORY_PUSH_TAG,
    "INDENT_CONTENT_COMMAND",
    ()=>INDENT_CONTENT_COMMAND,
    "INPUT_COMMAND",
    ()=>INPUT_COMMAND,
    "INSERT_LINE_BREAK_COMMAND",
    ()=>INSERT_LINE_BREAK_COMMAND,
    "INSERT_PARAGRAPH_COMMAND",
    ()=>INSERT_PARAGRAPH_COMMAND,
    "INSERT_TAB_COMMAND",
    ()=>INSERT_TAB_COMMAND,
    "INTERNAL_$isBlock",
    ()=>INTERNAL_$isBlock,
    "IS_ALL_FORMATTING",
    ()=>IS_ALL_FORMATTING,
    "IS_BOLD",
    ()=>IS_BOLD,
    "IS_CODE",
    ()=>IS_CODE,
    "IS_HIGHLIGHT",
    ()=>IS_HIGHLIGHT,
    "IS_ITALIC",
    ()=>IS_ITALIC,
    "IS_STRIKETHROUGH",
    ()=>IS_STRIKETHROUGH,
    "IS_SUBSCRIPT",
    ()=>IS_SUBSCRIPT,
    "IS_SUPERSCRIPT",
    ()=>IS_SUPERSCRIPT,
    "IS_UNDERLINE",
    ()=>IS_UNDERLINE,
    "KEY_ARROW_DOWN_COMMAND",
    ()=>KEY_ARROW_DOWN_COMMAND,
    "KEY_ARROW_LEFT_COMMAND",
    ()=>KEY_ARROW_LEFT_COMMAND,
    "KEY_ARROW_RIGHT_COMMAND",
    ()=>KEY_ARROW_RIGHT_COMMAND,
    "KEY_ARROW_UP_COMMAND",
    ()=>KEY_ARROW_UP_COMMAND,
    "KEY_BACKSPACE_COMMAND",
    ()=>KEY_BACKSPACE_COMMAND,
    "KEY_DELETE_COMMAND",
    ()=>KEY_DELETE_COMMAND,
    "KEY_DOWN_COMMAND",
    ()=>KEY_DOWN_COMMAND,
    "KEY_ENTER_COMMAND",
    ()=>KEY_ENTER_COMMAND,
    "KEY_ESCAPE_COMMAND",
    ()=>KEY_ESCAPE_COMMAND,
    "KEY_MODIFIER_COMMAND",
    ()=>KEY_MODIFIER_COMMAND,
    "KEY_SPACE_COMMAND",
    ()=>KEY_SPACE_COMMAND,
    "KEY_TAB_COMMAND",
    ()=>KEY_TAB_COMMAND,
    "LineBreakNode",
    ()=>LineBreakNode,
    "MOVE_TO_END",
    ()=>MOVE_TO_END,
    "MOVE_TO_START",
    ()=>MOVE_TO_START,
    "NODE_STATE_KEY",
    ()=>NODE_STATE_KEY,
    "OUTDENT_CONTENT_COMMAND",
    ()=>OUTDENT_CONTENT_COMMAND,
    "PASTE_COMMAND",
    ()=>PASTE_COMMAND,
    "PASTE_TAG",
    ()=>PASTE_TAG,
    "ParagraphNode",
    ()=>ParagraphNode,
    "REDO_COMMAND",
    ()=>REDO_COMMAND,
    "REMOVE_TEXT_COMMAND",
    ()=>REMOVE_TEXT_COMMAND,
    "RootNode",
    ()=>RootNode,
    "SELECTION_CHANGE_COMMAND",
    ()=>SELECTION_CHANGE_COMMAND,
    "SELECTION_INSERT_CLIPBOARD_NODES_COMMAND",
    ()=>SELECTION_INSERT_CLIPBOARD_NODES_COMMAND,
    "SELECT_ALL_COMMAND",
    ()=>SELECT_ALL_COMMAND,
    "SKIP_COLLAB_TAG",
    ()=>SKIP_COLLAB_TAG,
    "SKIP_DOM_SELECTION_TAG",
    ()=>SKIP_DOM_SELECTION_TAG,
    "SKIP_SCROLL_INTO_VIEW_TAG",
    ()=>SKIP_SCROLL_INTO_VIEW_TAG,
    "SKIP_SELECTION_FOCUS_TAG",
    ()=>SKIP_SELECTION_FOCUS_TAG,
    "TEXT_TYPE_TO_FORMAT",
    ()=>TEXT_TYPE_TO_FORMAT,
    "TabNode",
    ()=>TabNode,
    "TextNode",
    ()=>TextNode,
    "UNDO_COMMAND",
    ()=>UNDO_COMMAND,
    "addClassNamesToElement",
    ()=>addClassNamesToElement,
    "buildImportMap",
    ()=>buildImportMap,
    "configExtension",
    ()=>configExtension,
    "createCommand",
    ()=>createCommand,
    "createEditor",
    ()=>createEditor,
    "createSharedNodeState",
    ()=>createSharedNodeState,
    "createState",
    ()=>createState,
    "declarePeerDependency",
    ()=>declarePeerDependency,
    "defineExtension",
    ()=>defineExtension,
    "flipDirection",
    ()=>flipDirection,
    "getDOMOwnerDocument",
    ()=>getDOMOwnerDocument,
    "getDOMSelection",
    ()=>getDOMSelection,
    "getDOMSelectionFromTarget",
    ()=>getDOMSelectionFromTarget,
    "getDOMTextNode",
    ()=>getDOMTextNode,
    "getEditorPropertyFromDOMNode",
    ()=>getEditorPropertyFromDOMNode,
    "getNearestEditorFromDOMNode",
    ()=>getNearestEditorFromDOMNode,
    "getRegisteredNode",
    ()=>getRegisteredNode,
    "getRegisteredNodeOrThrow",
    ()=>getRegisteredNodeOrThrow,
    "getStaticNodeConfig",
    ()=>getStaticNodeConfig,
    "getTextDirection",
    ()=>getTextDirection,
    "getTransformSetFromKlass",
    ()=>getTransformSetFromKlass,
    "isBlockDomNode",
    ()=>isBlockDomNode,
    "isCurrentlyReadOnlyMode",
    ()=>isCurrentlyReadOnlyMode,
    "isDOMDocumentNode",
    ()=>isDOMDocumentNode,
    "isDOMNode",
    ()=>isDOMNode,
    "isDOMTextNode",
    ()=>isDOMTextNode,
    "isDOMUnmanaged",
    ()=>isDOMUnmanaged,
    "isDocumentFragment",
    ()=>isDocumentFragment,
    "isExactShortcutMatch",
    ()=>isExactShortcutMatch,
    "isHTMLAnchorElement",
    ()=>isHTMLAnchorElement,
    "isHTMLElement",
    ()=>isHTMLElement,
    "isInlineDomNode",
    ()=>isInlineDomNode,
    "isLexicalEditor",
    ()=>isLexicalEditor,
    "isModifierMatch",
    ()=>isModifierMatch,
    "isSelectionCapturedInDecoratorInput",
    ()=>isSelectionCapturedInDecoratorInput,
    "isSelectionWithinEditor",
    ()=>isSelectionWithinEditor,
    "makeStepwiseIterator",
    ()=>makeStepwiseIterator,
    "mergeRegister",
    ()=>mergeRegister,
    "normalizeClassNames",
    ()=>normalizeClassNames,
    "removeClassNamesFromElement",
    ()=>removeClassNamesFromElement,
    "removeFromParent",
    ()=>removeFromParent,
    "resetRandomKey",
    ()=>resetRandomKey,
    "safeCast",
    ()=>safeCast,
    "setDOMUnmanaged",
    ()=>setDOMUnmanaged,
    "setNodeIndentFromDOM",
    ()=>setNodeIndentFromDOM,
    "shallowMergeConfig",
    ()=>shallowMergeConfig
]);
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ /**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ // Do not require this module directly! Use normal `invariant` calls.
function formatDevErrorMessage(message) {
    throw new Error(message);
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ const CAN_USE_DOM = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined';
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ const documentMode = CAN_USE_DOM && 'documentMode' in document ? document.documentMode : null;
const IS_APPLE = CAN_USE_DOM && /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const IS_FIREFOX = CAN_USE_DOM && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent);
const CAN_USE_BEFORE_INPUT = CAN_USE_DOM && 'InputEvent' in window && !documentMode ? 'getTargetRanges' in new window.InputEvent('input') : false;
const IS_SAFARI = CAN_USE_DOM && /Version\/[\d.]+.*Safari/.test(navigator.userAgent);
const IS_IOS = CAN_USE_DOM && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
const IS_ANDROID = CAN_USE_DOM && /Android/.test(navigator.userAgent);
// Keep these in case we need to use them in the future.
// export const IS_WINDOWS: boolean = CAN_USE_DOM && /Win/.test(navigator.platform);
const IS_CHROME = CAN_USE_DOM && /^(?=.*Chrome).*/i.test(navigator.userAgent);
// export const canUseTextInputEvent: boolean = CAN_USE_DOM && 'TextEvent' in window && !documentMode;
const IS_ANDROID_CHROME = CAN_USE_DOM && IS_ANDROID && IS_CHROME;
const IS_APPLE_WEBKIT = CAN_USE_DOM && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && IS_APPLE && !IS_CHROME;
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ // DOM
const DOM_ELEMENT_TYPE = 1;
const DOM_TEXT_TYPE = 3;
const DOM_DOCUMENT_TYPE = 9;
const DOM_DOCUMENT_FRAGMENT_TYPE = 11;
// Reconciling
const NO_DIRTY_NODES = 0;
const HAS_DIRTY_NODES = 1;
const FULL_RECONCILE = 2;
// Text node modes
const IS_NORMAL = 0;
const IS_TOKEN = 1;
const IS_SEGMENTED = 2;
// IS_INERT = 3
// Text node formatting
const IS_BOLD = 1;
const IS_ITALIC = 1 << 1;
const IS_STRIKETHROUGH = 1 << 2;
const IS_UNDERLINE = 1 << 3;
const IS_CODE = 1 << 4;
const IS_SUBSCRIPT = 1 << 5;
const IS_SUPERSCRIPT = 1 << 6;
const IS_HIGHLIGHT = 1 << 7;
const IS_LOWERCASE = 1 << 8;
const IS_UPPERCASE = 1 << 9;
const IS_CAPITALIZE = 1 << 10;
const IS_ALL_FORMATTING = IS_BOLD | IS_ITALIC | IS_STRIKETHROUGH | IS_UNDERLINE | IS_CODE | IS_SUBSCRIPT | IS_SUPERSCRIPT | IS_HIGHLIGHT | IS_LOWERCASE | IS_UPPERCASE | IS_CAPITALIZE;
// Text node details
const IS_DIRECTIONLESS = 1;
const IS_UNMERGEABLE = 1 << 1;
// Element node formatting
const IS_ALIGN_LEFT = 1;
const IS_ALIGN_CENTER = 2;
const IS_ALIGN_RIGHT = 3;
const IS_ALIGN_JUSTIFY = 4;
const IS_ALIGN_START = 5;
const IS_ALIGN_END = 6;
// Reconciliation
const NON_BREAKING_SPACE = '\u00A0';
const ZERO_WIDTH_SPACE = '\u200b';
// For iOS/Safari we use a non breaking space, otherwise the cursor appears
// overlapping the composed text.
const COMPOSITION_SUFFIX = IS_SAFARI || IS_IOS || IS_APPLE_WEBKIT ? NON_BREAKING_SPACE : ZERO_WIDTH_SPACE;
const DOUBLE_LINE_BREAK = '\n\n';
// For FF, we need to use a non-breaking space, or it gets composition
// in a stuck state.
const COMPOSITION_START_CHAR = IS_FIREFOX ? NON_BREAKING_SPACE : COMPOSITION_SUFFIX;
const RTL = '\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC';
const LTR = 'A-Za-z\u00C0-\u00D6\u00D8-\u00F6' + '\u00F8-\u02B8\u0300-\u0590\u0800-\u1FFF\u200E\u2C00-\uFB1C' + '\uFE00-\uFE6F\uFEFD-\uFFFF';
// eslint-disable-next-line no-misleading-character-class
const RTL_REGEX = new RegExp('^[^' + LTR + ']*[' + RTL + ']');
// eslint-disable-next-line no-misleading-character-class
const LTR_REGEX = new RegExp('^[^' + RTL + ']*[' + LTR + ']');
const TEXT_TYPE_TO_FORMAT = {
    bold: IS_BOLD,
    capitalize: IS_CAPITALIZE,
    code: IS_CODE,
    highlight: IS_HIGHLIGHT,
    italic: IS_ITALIC,
    lowercase: IS_LOWERCASE,
    strikethrough: IS_STRIKETHROUGH,
    subscript: IS_SUBSCRIPT,
    superscript: IS_SUPERSCRIPT,
    underline: IS_UNDERLINE,
    uppercase: IS_UPPERCASE
};
const DETAIL_TYPE_TO_DETAIL = {
    directionless: IS_DIRECTIONLESS,
    unmergeable: IS_UNMERGEABLE
};
const ELEMENT_TYPE_TO_FORMAT = {
    center: IS_ALIGN_CENTER,
    end: IS_ALIGN_END,
    justify: IS_ALIGN_JUSTIFY,
    left: IS_ALIGN_LEFT,
    right: IS_ALIGN_RIGHT,
    start: IS_ALIGN_START
};
const ELEMENT_FORMAT_TO_TYPE = {
    [IS_ALIGN_CENTER]: 'center',
    [IS_ALIGN_END]: 'end',
    [IS_ALIGN_JUSTIFY]: 'justify',
    [IS_ALIGN_LEFT]: 'left',
    [IS_ALIGN_RIGHT]: 'right',
    [IS_ALIGN_START]: 'start'
};
const TEXT_MODE_TO_TYPE = {
    normal: IS_NORMAL,
    segmented: IS_SEGMENTED,
    token: IS_TOKEN
};
const TEXT_TYPE_TO_MODE = {
    [IS_NORMAL]: 'normal',
    [IS_SEGMENTED]: 'segmented',
    [IS_TOKEN]: 'token'
};
const NODE_STATE_KEY = '$';
const PROTOTYPE_CONFIG_METHOD = '$config';
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ function $garbageCollectDetachedDecorators(editor, pendingEditorState) {
    const currentDecorators = editor._decorators;
    const pendingDecorators = editor._pendingDecorators;
    let decorators = pendingDecorators || currentDecorators;
    const nodeMap = pendingEditorState._nodeMap;
    let key;
    for(key in decorators){
        if (!nodeMap.has(key)) {
            if (decorators === currentDecorators) {
                decorators = cloneDecorators(editor);
            }
            delete decorators[key];
        }
    }
}
function $garbageCollectDetachedDeepChildNodes(node, parentKey, prevNodeMap, nodeMap, nodeMapDelete, dirtyNodes) {
    let child = node.getFirstChild();
    while(child !== null){
        const childKey = child.__key;
        // TODO Revise condition below, redundant? LexicalNode already cleans up children when moving Nodes
        if (child.__parent === parentKey) {
            if ($isElementNode(child)) {
                $garbageCollectDetachedDeepChildNodes(child, childKey, prevNodeMap, nodeMap, nodeMapDelete, dirtyNodes);
            }
            // If we have created a node and it was dereferenced, then also
            // remove it from out dirty nodes Set.
            if (!prevNodeMap.has(childKey)) {
                dirtyNodes.delete(childKey);
            }
            nodeMapDelete.push(childKey);
        }
        child = child.getNextSibling();
    }
}
function $garbageCollectDetachedNodes(prevEditorState, editorState, dirtyLeaves, dirtyElements) {
    const prevNodeMap = prevEditorState._nodeMap;
    const nodeMap = editorState._nodeMap;
    // Store dirtyElements in a queue for later deletion; deleting dirty subtrees too early will
    // hinder accessing .__next on child nodes
    const nodeMapDelete = [];
    for (const [nodeKey] of dirtyElements){
        const node = nodeMap.get(nodeKey);
        if (node !== undefined) {
            // Garbage collect node and its children if they exist
            if (!node.isAttached()) {
                if ($isElementNode(node)) {
                    $garbageCollectDetachedDeepChildNodes(node, nodeKey, prevNodeMap, nodeMap, nodeMapDelete, dirtyElements);
                }
                // If we have created a node and it was dereferenced, then also
                // remove it from out dirty nodes Set.
                if (!prevNodeMap.has(nodeKey)) {
                    dirtyElements.delete(nodeKey);
                }
                nodeMapDelete.push(nodeKey);
            }
        }
    }
    for (const nodeKey of nodeMapDelete){
        nodeMap.delete(nodeKey);
    }
    for (const nodeKey of dirtyLeaves){
        const node = nodeMap.get(nodeKey);
        if (node !== undefined && !node.isAttached()) {
            if (!prevNodeMap.has(nodeKey)) {
                dirtyLeaves.delete(nodeKey);
            }
            nodeMap.delete(nodeKey);
        }
    }
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ // The time between a text entry event and the mutation observer firing.
const TEXT_MUTATION_VARIANCE = 100;
let isProcessingMutations = false;
let lastTextEntryTimeStamp = 0;
function getIsProcessingMutations() {
    return isProcessingMutations;
}
function updateTimeStamp(event) {
    lastTextEntryTimeStamp = event.timeStamp;
}
function initTextEntryListener(editor) {
    if (lastTextEntryTimeStamp === 0) {
        getWindow(editor).addEventListener('textInput', updateTimeStamp, true);
    }
}
function isManagedLineBreak(dom, target, editor) {
    const isBR = dom.nodeName === 'BR';
    const lexicalLineBreak = target.__lexicalLineBreak;
    return lexicalLineBreak && (dom === lexicalLineBreak || isBR && dom.previousSibling === lexicalLineBreak) || isBR && getNodeKeyFromDOMNode(dom, editor) !== undefined;
}
function getLastSelection(editor) {
    return editor.getEditorState().read(()=>{
        const selection = $getSelection();
        return selection !== null ? selection.clone() : null;
    });
}
function $handleTextMutation(target, node, editor) {
    const domSelection = getDOMSelection(getWindow(editor));
    let anchorOffset = null;
    let focusOffset = null;
    if (domSelection !== null && domSelection.anchorNode === target) {
        anchorOffset = domSelection.anchorOffset;
        focusOffset = domSelection.focusOffset;
    }
    const text = target.nodeValue;
    if (text !== null) {
        $updateTextNodeFromDOMContent(node, text, anchorOffset, focusOffset, false);
    }
}
function shouldUpdateTextNodeFromMutation(selection, targetDOM, targetNode) {
    if ($isRangeSelection(selection)) {
        const anchorNode = selection.anchor.getNode();
        if (anchorNode.is(targetNode) && selection.format !== anchorNode.getFormat()) {
            return false;
        }
    }
    return isDOMTextNode(targetDOM) && targetNode.isAttached();
}
function $getNearestManagedNodePairFromDOMNode(startingDOM, editor, editorState, rootElement) {
    for(let dom = startingDOM; dom && !isDOMUnmanaged(dom); dom = getParentElement(dom)){
        const key = getNodeKeyFromDOMNode(dom, editor);
        if (key !== undefined) {
            const node = $getNodeByKey(key, editorState);
            if (node) {
                // All decorator nodes are unmanaged
                return $isDecoratorNode(node) || !isHTMLElement(dom) ? undefined : [
                    dom,
                    node
                ];
            }
        } else if (dom === rootElement) {
            return [
                rootElement,
                internalGetRoot(editorState)
            ];
        }
    }
}
function flushMutations(editor, mutations, observer) {
    isProcessingMutations = true;
    const shouldFlushTextMutations = performance.now() - lastTextEntryTimeStamp > TEXT_MUTATION_VARIANCE;
    try {
        updateEditorSync(editor, ()=>{
            const selection = $getSelection() || getLastSelection(editor);
            const badDOMTargets = new Map();
            const rootElement = editor.getRootElement();
            // We use the current editor state, as that reflects what is
            // actually "on screen".
            const currentEditorState = editor._editorState;
            const blockCursorElement = editor._blockCursorElement;
            let shouldRevertSelection = false;
            let possibleTextForFirefoxPaste = '';
            for(let i = 0; i < mutations.length; i++){
                const mutation = mutations[i];
                const type = mutation.type;
                const targetDOM = mutation.target;
                const pair = $getNearestManagedNodePairFromDOMNode(targetDOM, editor, currentEditorState, rootElement);
                if (!pair) {
                    continue;
                }
                const [nodeDOM, targetNode] = pair;
                if (type === 'characterData') {
                    // Text mutations are deferred and passed to mutation listeners to be
                    // processed outside of the Lexical engine.
                    if (// TODO there is an edge case here if a mutation happens too quickly
                    //      after text input, it may never be handled since we do not
                    //      track the ignored mutations in any way
                    shouldFlushTextMutations && $isTextNode(targetNode) && isDOMTextNode(targetDOM) && shouldUpdateTextNodeFromMutation(selection, targetDOM, targetNode)) {
                        $handleTextMutation(targetDOM, targetNode, editor);
                    }
                } else if (type === 'childList') {
                    shouldRevertSelection = true;
                    // We attempt to "undo" any changes that have occurred outside
                    // of Lexical. We want Lexical's editor state to be source of truth.
                    // To the user, these will look like no-ops.
                    const addedDOMs = mutation.addedNodes;
                    for(let s = 0; s < addedDOMs.length; s++){
                        const addedDOM = addedDOMs[s];
                        const node = $getNodeFromDOMNode(addedDOM);
                        const parentDOM = addedDOM.parentNode;
                        if (parentDOM != null && addedDOM !== blockCursorElement && node === null && !isManagedLineBreak(addedDOM, parentDOM, editor)) {
                            if (IS_FIREFOX) {
                                const possibleText = (isHTMLElement(addedDOM) ? addedDOM.innerText : null) || addedDOM.nodeValue;
                                if (possibleText) {
                                    possibleTextForFirefoxPaste += possibleText;
                                }
                            }
                            parentDOM.removeChild(addedDOM);
                        }
                    }
                    const removedDOMs = mutation.removedNodes;
                    const removedDOMsLength = removedDOMs.length;
                    if (removedDOMsLength > 0) {
                        let unremovedBRs = 0;
                        for(let s = 0; s < removedDOMsLength; s++){
                            const removedDOM = removedDOMs[s];
                            if (isManagedLineBreak(removedDOM, targetDOM, editor) || blockCursorElement === removedDOM) {
                                targetDOM.appendChild(removedDOM);
                                unremovedBRs++;
                            }
                        }
                        if (removedDOMsLength !== unremovedBRs) {
                            badDOMTargets.set(nodeDOM, targetNode);
                        }
                    }
                }
            }
            // Now we process each of the unique target nodes, attempting
            // to restore their contents back to the source of truth, which
            // is Lexical's "current" editor state. This is basically like
            // an internal revert on the DOM.
            if (badDOMTargets.size > 0) {
                for (const [nodeDOM, targetNode] of badDOMTargets){
                    targetNode.reconcileObservedMutation(nodeDOM, editor);
                }
            }
            // Capture all the mutations made during this function. This
            // also prevents us having to process them on the next cycle
            // of onMutation, as these mutations were made by us.
            const records = observer.takeRecords();
            // Check for any random auto-added <br> elements, and remove them.
            // These get added by the browser when we undo the above mutations
            // and this can lead to a broken UI.
            if (records.length > 0) {
                for(let i = 0; i < records.length; i++){
                    const record = records[i];
                    const addedNodes = record.addedNodes;
                    const target = record.target;
                    for(let s = 0; s < addedNodes.length; s++){
                        const addedDOM = addedNodes[s];
                        const parentDOM = addedDOM.parentNode;
                        if (parentDOM != null && addedDOM.nodeName === 'BR' && !isManagedLineBreak(addedDOM, target, editor)) {
                            parentDOM.removeChild(addedDOM);
                        }
                    }
                }
                // Clear any of those removal mutations
                observer.takeRecords();
            }
            if (selection !== null) {
                if (shouldRevertSelection) {
                    $setSelection(selection);
                }
                if (IS_FIREFOX && isFirefoxClipboardEvents(editor)) {
                    selection.insertRawText(possibleTextForFirefoxPaste);
                }
            }
        });
    } finally{
        isProcessingMutations = false;
    }
}
function flushRootMutations(editor) {
    const observer = editor._observer;
    if (observer !== null) {
        const mutations = observer.takeRecords();
        flushMutations(editor, mutations, observer);
    }
}
function initMutationObserver(editor) {
    initTextEntryListener(editor);
    editor._observer = new MutationObserver((mutations, observer)=>{
        flushMutations(editor, mutations, observer);
    });
}
/**
 * Get the value type (V) from a StateConfig
 */ /**
 * Get the key type (K) from a StateConfig
 */ /**
 * A value type, or an updater for that value type. For use with
 * {@link $setState} or any user-defined wrappers around it.
 */ /**
 * A type alias to make it easier to define setter methods on your node class
 *
 * @example
 * ```ts
 * const fooState = createState("foo", { parse: ... });
 * class MyClass extends TextNode {
 *   // ...
 *   setFoo(valueOrUpdater: StateValueOrUpdater<typeof fooState>): this {
 *     return $setState(this, fooState, valueOrUpdater);
 *   }
 * }
 * ```
 */ /* eslint-disable @typescript-eslint/no-explicit-any */ /* eslint-enable @typescript-eslint/no-explicit-any */ /**
 * The NodeState JSON produced by this LexicalNode
 */ /**
 * Configure a value to be used with StateConfig.
 *
 * The value type should be inferred from the definition of parse.
 *
 * If the value type is not JSON serializable, then unparse must also be provided.
 *
 * Values should be treated as immutable, much like React.useState. Mutating
 * stored values directly will cause unpredictable behavior, is not supported,
 * and may trigger errors in the future.
 *
 * @example
 * ```ts
 * const numberOrNullState = createState('numberOrNull', {parse: (v) => typeof v === 'number' ? v : null});
 * //    ^? State<'numberOrNull', StateValueConfig<number | null>>
 * const numberState = createState('number', {parse: (v) => typeof v === 'number' ? v : 0});
 * //    ^? State<'number', StateValueConfig<number>>
 * ```
 *
 * Only the parse option is required, it is generally not useful to
 * override `unparse` or `isEqual`. However, if you are using
 * non-primitive types such as Array, Object, Date, or something
 * more exotic then you would want to override this. In these
 * cases you might want to reach for third party libraries.
 *
 * @example
 * ```ts
 * const isoDateState = createState('isoDate', {
 *   parse: (v): null | Date => {
 *     const date = typeof v === 'string' ? new Date(v) : null;
 *     return date && !isNaN(date.valueOf()) ? date : null;
 *   }
 *   isEqual: (a, b) => a === b || (a && b && a.valueOf() === b.valueOf()),
 *   unparse: (v) => v && v.toString()
 * });
 * ```
 *
 * You may find it easier to write a parse function using libraries like
 * zod, valibot, ajv, Effect, TypeBox, etc. perhaps with a wrapper function.
 */ /**
 * The return value of {@link createState}, for use with
 * {@link $getState} and {@link $setState}.
 */ class StateConfig {
    /** The string key used when serializing this state to JSON */ key;
    /** The parse function from the StateValueConfig passed to createState */ parse;
    /**
   * The unparse function from the StateValueConfig passed to createState,
   * with a default that is simply a pass-through that assumes the value is
   * JSON serializable.
   */ unparse;
    /**
   * An equality function from the StateValueConfig, with a default of
   * Object.is.
   */ isEqual;
    /**
   * The result of `stateValueConfig.parse(undefined)`, which is computed only
   * once and used as the default value. When the current value `isEqual` to
   * the `defaultValue`, it will not be serialized to JSON.
   */ defaultValue;
    constructor(key, stateValueConfig){
        this.key = key;
        this.parse = stateValueConfig.parse.bind(stateValueConfig);
        this.unparse = (stateValueConfig.unparse || coerceToJSON).bind(stateValueConfig);
        this.isEqual = (stateValueConfig.isEqual || Object.is).bind(stateValueConfig);
        this.defaultValue = this.parse(undefined);
    }
}
/**
 * For advanced use cases, using this type is not recommended unless
 * it is required (due to TypeScript's lack of features like
 * higher-kinded types).
 *
 * A {@link StateConfig} type with any key and any value that can be
 * used in situations where the key and value type can not be known,
 * such as in a generic constraint when working with a collection of
 * StateConfig.
 *
 * {@link StateConfigKey} and {@link StateConfigValue} will be
 * useful when this is used as a generic constraint.
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
/**
 * Create a StateConfig for the given string key and StateValueConfig.
 *
 * The key must be locally unique. In dev you will get a key collision error
 * when you use two separate StateConfig on the same node with the same key.
 *
 * The returned StateConfig value should be used with {@link $getState} and
 * {@link $setState}.
 *
 * @param key The key to use
 * @param valueConfig Configuration for the value type
 * @returns a StateConfig
 *
 * @__NO_SIDE_EFFECTS__
 */ function createState(key, valueConfig) {
    return new StateConfig(key, valueConfig);
}
/**
 * The accessor for working with node state. This will read the value for the
 * state on the given node, and will return `stateConfig.defaultValue` if the
 * state has never been set on this node.
 *
 * The `version` parameter is optional and should generally be `'latest'`,
 * consistent with the behavior of other node methods and functions,
 * but for certain use cases such as `updateDOM` you may have a need to
 * use `'direct'` to read the state from a previous version of the node.
 *
 * For very advanced use cases, you can expect that 'direct' does not
 * require an editor state, just like directly accessing other properties
 * of a node without an accessor (e.g. `textNode.__text`).
 *
 * @param node Any LexicalNode
 * @param stateConfig The configuration of the state to read
 * @param version The default value 'latest' will read the latest version of the node state, 'direct' will read the version that is stored on this LexicalNode which not reflect the version used in the current editor state
 * @returns The current value from the state, or the default value provided by the configuration.
 */ function $getState(node, stateConfig, version = 'latest') {
    const latestOrDirectNode = version === 'latest' ? node.getLatest() : node;
    const state = latestOrDirectNode.__state;
    if (state) {
        $checkCollision(node, stateConfig, state);
        return state.getValue(stateConfig);
    }
    return stateConfig.defaultValue;
}
/**
 * Given two versions of a node and a stateConfig, compare their state values
 * using `$getState(nodeVersion, stateConfig, 'direct')`.
 * If the values are equal according to `stateConfig.isEqual`, return `null`,
 * otherwise return `[value, prevValue]`.
 *
 * This is useful for implementing updateDOM. Note that the `'direct'`
 * version argument is used for both nodes.
 *
 * @param node Any LexicalNode
 * @param prevNode A previous version of node
 * @param stateConfig The configuration of the state to read
 * @returns `[value, prevValue]` if changed, otherwise `null`
 */ function $getStateChange(node, prevNode, stateConfig) {
    const value = $getState(node, stateConfig, 'direct');
    const prevValue = $getState(prevNode, stateConfig, 'direct');
    return stateConfig.isEqual(value, prevValue) ? null : [
        value,
        prevValue
    ];
}
/**
 * Set the state defined by stateConfig on node. Like with `React.useState`
 * you may directly specify the value or use an updater function that will
 * be called with the previous value of the state on that node (which will
 * be the `stateConfig.defaultValue` if not set).
 *
 * When an updater function is used, the node will only be marked dirty if
 * `stateConfig.isEqual(prevValue, value)` is false.
 *
 * @example
 * ```ts
 * const toggle = createState('toggle', {parse: Boolean});
 * // set it direction
 * $setState(node, counterState, true);
 * // use an updater
 * $setState(node, counterState, (prev) => !prev);
 * ```
 *
 * @param node The LexicalNode to set the state on
 * @param stateConfig The configuration for this state
 * @param valueOrUpdater The value or updater function
 * @returns node
 */ function $setState(node, stateConfig, valueOrUpdater) {
    errorOnReadOnly();
    let value;
    if (typeof valueOrUpdater === 'function') {
        const latest = node.getLatest();
        const prevValue = $getState(latest, stateConfig);
        value = valueOrUpdater(prevValue);
        if (stateConfig.isEqual(prevValue, value)) {
            return latest;
        }
    } else {
        value = valueOrUpdater;
    }
    const writable = node.getWritable();
    const state = $getWritableNodeState(writable);
    $checkCollision(node, stateConfig, state);
    state.updateFromKnown(stateConfig, value);
    return writable;
}
/**
 * @internal
 *
 * Register the config to this node's sharedConfigMap and throw an exception in
 * `true` when a collision is detected.
 */ function $checkCollision(node, stateConfig, state) {
    {
        const collision = state.sharedNodeState.sharedConfigMap.get(stateConfig.key);
        if (collision !== undefined && collision !== stateConfig) {
            {
                formatDevErrorMessage(`$setState: State key collision ${JSON.stringify(stateConfig.key)} detected in ${node.constructor.name} node with type ${node.getType()} and key ${node.getKey()}. Only one StateConfig with a given key should be used on a node.`);
            }
        }
    }
}
/**
 * @internal
 *
 * Opaque state to be stored on the editor's RegisterNode for use by NodeState
 */ /**
 * @internal
 *
 * Create the state to store on RegisteredNode
 */ function createSharedNodeState(nodeConfig) {
    const sharedConfigMap = new Map();
    const flatKeys = new Set();
    for(let klass = typeof nodeConfig === 'function' ? nodeConfig : nodeConfig.replace; klass.prototype && klass.prototype.getType !== undefined; klass = Object.getPrototypeOf(klass)){
        const { ownNodeConfig } = getStaticNodeConfig(klass);
        if (ownNodeConfig && ownNodeConfig.stateConfigs) {
            for (const requiredStateConfig of ownNodeConfig.stateConfigs){
                let stateConfig;
                if ('stateConfig' in requiredStateConfig) {
                    stateConfig = requiredStateConfig.stateConfig;
                    if (requiredStateConfig.flat) {
                        flatKeys.add(stateConfig.key);
                    }
                } else {
                    stateConfig = requiredStateConfig;
                }
                sharedConfigMap.set(stateConfig.key, stateConfig);
            }
        }
    }
    return {
        flatKeys,
        sharedConfigMap
    };
}
/**
 * @internal
 *
 * A Map of string keys to state configurations to be shared across nodes
 * and/or node versions.
 */ /**
 * @internal
 */ class NodeState {
    /**
   * @internal
   *
   * Track the (versioned) node that this NodeState was created for, to
   * facilitate copy-on-write for NodeState. When a LexicalNode is cloned,
   * it will *reference* the NodeState from its prevNode. From the nextNode
   * you can continue to read state without copying, but the first $setState
   * will trigger a copy of the prevNode's NodeState with the node property
   * updated.
   */ node;
    /**
   * @internal
   *
   * State that has already been parsed in a get state, so it is safe. (can be returned with
   * just a cast since the proof was given before).
   *
   * Note that it uses StateConfig, so in addition to (1) the CURRENT VALUE, it has access to
   * (2) the State key (3) the DEFAULT VALUE and (4) the PARSE FUNCTION
   */ knownState;
    /**
   * @internal
   *
   * A copy of serializedNode[NODE_STATE_KEY] that is made when JSON is
   * imported but has not been parsed yet.
   *
   * It stays here until a get state requires us to parse it, and since we
   * then know the value is safe we move it to knownState.
   *
   * Note that since only string keys are used here, we can only allow this
   * state to pass-through on export or on the next version since there is
   * no known value configuration. This pass-through is to support scenarios
   * where multiple versions of the editor code are working in parallel so
   * an old version of your code doesnt erase metadata that was
   * set by a newer version of your code.
   */ unknownState;
    /**
   * @internal
   *
   * This sharedNodeState is preserved across all instances of a given
   * node type in an editor and remains writable. It is how keys are resolved
   * to configuration.
   */ sharedNodeState;
    /**
   * @internal
   *
   * The count of known or unknown keys in this state, ignoring the
   * intersection between the two sets.
   */ size;
    /**
   * @internal
   */ constructor(node, sharedNodeState, unknownState = undefined, knownState = new Map(), size = undefined){
        this.node = node;
        this.sharedNodeState = sharedNodeState;
        this.unknownState = unknownState;
        this.knownState = knownState;
        const { sharedConfigMap } = this.sharedNodeState;
        const computedSize = size !== undefined ? size : computeSize(sharedConfigMap, unknownState, knownState);
        {
            if (!(size === undefined || computedSize === size)) {
                formatDevErrorMessage(`NodeState: size != computedSize (${String(size)} != ${String(computedSize)})`);
            }
            for (const stateConfig of knownState.keys()){
                if (!sharedConfigMap.has(stateConfig.key)) {
                    formatDevErrorMessage(`NodeState: sharedConfigMap missing knownState key ${stateConfig.key}`);
                }
            }
        }
        this.size = computedSize;
    }
    /**
   * @internal
   *
   * Get the value from knownState, or parse it from unknownState
   * if it contains the given key.
   *
   * Updates the sharedConfigMap when no known state is found.
   * Updates unknownState and knownState when an unknownState is parsed.
   */ getValue(stateConfig) {
        const known = this.knownState.get(stateConfig);
        if (known !== undefined) {
            return known;
        }
        this.sharedNodeState.sharedConfigMap.set(stateConfig.key, stateConfig);
        let parsed = stateConfig.defaultValue;
        if (this.unknownState && stateConfig.key in this.unknownState) {
            const jsonValue = this.unknownState[stateConfig.key];
            if (jsonValue !== undefined) {
                parsed = stateConfig.parse(jsonValue);
            }
            // Only update if the key was unknown
            this.updateFromKnown(stateConfig, parsed);
        }
        return parsed;
    }
    /**
   * @internal
   *
   * Used only for advanced use cases, such as collab. The intent here is to
   * allow you to diff states with a more stable interface than the properties
   * of this class.
   */ getInternalState() {
        return [
            this.unknownState,
            this.knownState
        ];
    }
    /**
   * Encode this NodeState to JSON in the format that its node expects.
   * This returns `{[NODE_STATE_KEY]?: UnknownStateRecord}` rather than
   * `UnknownStateRecord | undefined` so that we can support flattening
   * specific entries in the future when nodes can declare what
   * their required StateConfigs are.
   */ toJSON() {
        const state = {
            ...this.unknownState
        };
        const flatState = {};
        for (const [stateConfig, v] of this.knownState){
            if (stateConfig.isEqual(v, stateConfig.defaultValue)) {
                delete state[stateConfig.key];
            } else {
                state[stateConfig.key] = stateConfig.unparse(v);
            }
        }
        for (const key of this.sharedNodeState.flatKeys){
            if (key in state) {
                flatState[key] = state[key];
                delete state[key];
            }
        }
        if (undefinedIfEmpty(state)) {
            flatState[NODE_STATE_KEY] = state;
        }
        return flatState;
    }
    /**
   * @internal
   *
   * A NodeState is writable when the node to update matches
   * the node associated with the NodeState. This basically
   * mirrors how the EditorState NodeMap works, but in a
   * bottom-up organization rather than a top-down organization.
   *
   * This allows us to implement the same "copy on write"
   * pattern for state, without having the state version
   * update every time the node version changes (e.g. when
   * its parent or siblings change).
   *
   * @param node The node to associate with the state
   * @returns The next writable state
   */ getWritable(node) {
        if (this.node === node) {
            return this;
        }
        const { sharedNodeState, unknownState } = this;
        const nextKnownState = new Map(this.knownState);
        return new NodeState(node, sharedNodeState, parseAndPruneNextUnknownState(sharedNodeState.sharedConfigMap, nextKnownState, unknownState), nextKnownState, this.size);
    }
    /** @internal */ updateFromKnown(stateConfig, value) {
        const key = stateConfig.key;
        this.sharedNodeState.sharedConfigMap.set(key, stateConfig);
        const { knownState, unknownState } = this;
        if (!(knownState.has(stateConfig) || unknownState && key in unknownState)) {
            if (unknownState) {
                delete unknownState[key];
                this.unknownState = undefinedIfEmpty(unknownState);
            }
            this.size++;
        }
        knownState.set(stateConfig, value);
    }
    /**
   * @internal
   *
   * This is intended for advanced use cases only, such
   * as collab or dev tools.
   *
   * Update a single key value pair from unknown state,
   * parsing it if the key is known to this node. This is
   * basically like updateFromJSON, but the effect is
   * isolated to a single entry.
   *
   * @param k The string key from an UnknownStateRecord
   * @param v The unknown value from an UnknownStateRecord
   */ updateFromUnknown(k, v) {
        const stateConfig = this.sharedNodeState.sharedConfigMap.get(k);
        if (stateConfig) {
            this.updateFromKnown(stateConfig, stateConfig.parse(v));
        } else {
            this.unknownState = this.unknownState || {};
            if (!(k in this.unknownState)) {
                this.size++;
            }
            this.unknownState[k] = v;
        }
    }
    /**
   * @internal
   *
   * Reset all existing state to default or empty values,
   * and perform any updates from the given unknownState.
   *
   * This is used when initializing a node's state from JSON,
   * or when resetting a node's state from JSON.
   *
   * @param unknownState The new state in serialized form
   */ updateFromJSON(unknownState) {
        const { knownState } = this;
        // Reset all known state to defaults
        for (const stateConfig of knownState.keys()){
            knownState.set(stateConfig, stateConfig.defaultValue);
        }
        // Since we are resetting all state to this new record,
        // the size starts at the number of known keys
        // and will be updated as we traverse the new state
        this.size = knownState.size;
        this.unknownState = undefined;
        if (unknownState) {
            for (const [k, v] of Object.entries(unknownState)){
                this.updateFromUnknown(k, v);
            }
        }
    }
}
/**
 * @internal
 *
 * Only for direct use in very advanced integrations, such as lexical-yjs.
 * Typically you would only use {@link createState}, {@link $getState}, and
 * {@link $setState}. This is effectively the preamble for {@link $setState}.
 */ function $getWritableNodeState(node) {
    const writable = node.getWritable();
    const state = writable.__state ? writable.__state.getWritable(writable) : new NodeState(writable, $getSharedNodeState(writable));
    writable.__state = state;
    return state;
}
/**
 * @internal
 *
 * Get the SharedNodeState for a node on this editor
 */ function $getSharedNodeState(node) {
    return node.__state ? node.__state.sharedNodeState : getRegisteredNodeOrThrow($getEditor(), node.getType()).sharedNodeState;
}
/**
 * @internal
 *
 * This is used to implement LexicalNode.updateFromJSON and is
 * not intended to be exported from the package.
 *
 * @param node any LexicalNode
 * @param unknownState undefined or a serialized State
 * @returns A writable version of node, with the state set.
 */ function $updateStateFromJSON(node, serialized) {
    const writable = node.getWritable();
    const unknownState = serialized[NODE_STATE_KEY];
    let parseState = unknownState;
    for (const k of $getSharedNodeState(writable).flatKeys){
        if (k in serialized) {
            if (parseState === undefined || parseState === unknownState) {
                parseState = {
                    ...unknownState
                };
            }
            parseState[k] = serialized[k];
        }
    }
    if (writable.__state || parseState) {
        $getWritableNodeState(node).updateFromJSON(parseState);
    }
    return writable;
}
/**
 * @internal
 *
 * Return true if the two nodes have equivalent NodeState, to be used
 * to determine when TextNode are being merged, not a lot of use cases
 * otherwise.
 */ function nodeStatesAreEquivalent(a, b) {
    if (a === b) {
        return true;
    }
    if (a && b && a.size !== b.size) {
        return false;
    }
    const keys = new Set();
    return !(a && hasUnequalMapEntry(keys, a, b) || b && hasUnequalMapEntry(keys, b, a) || a && hasUnequalRecordEntry(keys, a, b) || b && hasUnequalRecordEntry(keys, b, a));
}
/**
 * Compute the number of distinct keys that will be in a NodeState
 */ function computeSize(sharedConfigMap, unknownState, knownState) {
    let size = knownState.size;
    if (unknownState) {
        for(const k in unknownState){
            const sharedConfig = sharedConfigMap.get(k);
            if (!sharedConfig || !knownState.has(sharedConfig)) {
                size++;
            }
        }
    }
    return size;
}
/**
 * @internal
 *
 * Return obj if it is an object with at least one property, otherwise
 * return undefined.
 */ function undefinedIfEmpty(obj) {
    if (obj) {
        for(const key in obj){
            return obj;
        }
    }
    return undefined;
}
/**
 * @internal
 *
 * Cast the given v to unknown
 */ function coerceToJSON(v) {
    return v;
}
/**
 * @internal
 *
 * Parse all knowable values in an UnknownStateRecord into nextKnownState
 * and return the unparsed values in a new UnknownStateRecord. Returns
 * undefined if no unknown values remain.
 */ function parseAndPruneNextUnknownState(sharedConfigMap, nextKnownState, unknownState) {
    let nextUnknownState = undefined;
    if (unknownState) {
        for (const [k, v] of Object.entries(unknownState)){
            const stateConfig = sharedConfigMap.get(k);
            if (stateConfig) {
                if (!nextKnownState.has(stateConfig)) {
                    nextKnownState.set(stateConfig, stateConfig.parse(v));
                }
            } else {
                nextUnknownState = nextUnknownState || {};
                nextUnknownState[k] = v;
            }
        }
    }
    return nextUnknownState;
}
/**
 * @internal
 *
 * Compare each entry of sourceState.knownState that is not in keys to
 * otherState (or the default value if otherState is undefined.
 * Note that otherState will return the defaultValue as well if it
 * has never been set. Any checked entry's key will be added to keys.
 *
 * @returns true if any difference is found, false otherwise
 */ function hasUnequalMapEntry(keys, sourceState, otherState) {
    for (const [stateConfig, value] of sourceState.knownState){
        if (keys.has(stateConfig.key)) {
            continue;
        }
        keys.add(stateConfig.key);
        const otherValue = otherState ? otherState.getValue(stateConfig) : stateConfig.defaultValue;
        if (otherValue !== value && !stateConfig.isEqual(otherValue, value)) {
            return true;
        }
    }
    return false;
}
/**
 * @internal
 *
 * Compare each entry of sourceState.unknownState that is not in keys to
 * otherState.unknownState (or undefined if otherState is undefined).
 * Any checked entry's key will be added to keys.
 *
 * Notably since we have already checked hasUnequalMapEntry on both sides,
 * we do not do any parsing or checking of knownState.
 *
 * @returns true if any difference is found, false otherwise
 */ function hasUnequalRecordEntry(keys, sourceState, otherState) {
    const { unknownState } = sourceState;
    const otherUnknownState = otherState ? otherState.unknownState : undefined;
    if (unknownState) {
        for (const [key, value] of Object.entries(unknownState)){
            if (keys.has(key)) {
                continue;
            }
            keys.add(key);
            const otherValue = otherUnknownState ? otherUnknownState[key] : undefined;
            if (value !== otherValue) {
                return true;
            }
        }
    }
    return false;
}
/**
 * @internal
 *
 * Clones the NodeState for a given node. Handles aliasing if the state references the from node.
 */ function $cloneNodeState(from, to) {
    const state = from.__state;
    return state && state.node === from ? state.getWritable(to) : state;
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ function $canSimpleTextNodesBeMerged(node1, node2) {
    const node1Mode = node1.__mode;
    const node1Format = node1.__format;
    const node1Style = node1.__style;
    const node2Mode = node2.__mode;
    const node2Format = node2.__format;
    const node2Style = node2.__style;
    const node1State = node1.__state;
    const node2State = node2.__state;
    return (node1Mode === null || node1Mode === node2Mode) && (node1Format === null || node1Format === node2Format) && (node1Style === null || node1Style === node2Style) && (node1.__state === null || node1State === node2State || nodeStatesAreEquivalent(node1State, node2State));
}
function $mergeTextNodes(node1, node2) {
    const writableNode1 = node1.mergeWithSibling(node2);
    const normalizedNodes = getActiveEditor()._normalizedNodes;
    normalizedNodes.add(node1.__key);
    normalizedNodes.add(node2.__key);
    return writableNode1;
}
function $normalizeTextNode(textNode) {
    let node = textNode;
    if (node.__text === '' && node.isSimpleText() && !node.isUnmergeable()) {
        node.remove();
        return;
    }
    // Backward
    let previousNode;
    while((previousNode = node.getPreviousSibling()) !== null && $isTextNode(previousNode) && previousNode.isSimpleText() && !previousNode.isUnmergeable()){
        if (previousNode.__text === '') {
            previousNode.remove();
        } else if ($canSimpleTextNodesBeMerged(previousNode, node)) {
            node = $mergeTextNodes(previousNode, node);
            break;
        } else {
            break;
        }
    }
    // Forward
    let nextNode;
    while((nextNode = node.getNextSibling()) !== null && $isTextNode(nextNode) && nextNode.isSimpleText() && !nextNode.isUnmergeable()){
        if (nextNode.__text === '') {
            nextNode.remove();
        } else if ($canSimpleTextNodesBeMerged(node, nextNode)) {
            node = $mergeTextNodes(node, nextNode);
            break;
        } else {
            break;
        }
    }
}
function $normalizeSelection(selection) {
    $normalizePoint(selection.anchor);
    $normalizePoint(selection.focus);
    return selection;
}
function $normalizePoint(point) {
    while(point.type === 'element'){
        const node = point.getNode();
        const offset = point.offset;
        let nextNode;
        let nextOffsetAtEnd;
        if (offset === node.getChildrenSize()) {
            nextNode = node.getChildAtIndex(offset - 1);
            nextOffsetAtEnd = true;
        } else {
            nextNode = node.getChildAtIndex(offset);
            nextOffsetAtEnd = false;
        }
        if ($isTextNode(nextNode)) {
            point.set(nextNode.__key, nextOffsetAtEnd ? nextNode.getTextContentSize() : 0, 'text', true);
            break;
        } else if (!$isElementNode(nextNode)) {
            break;
        }
        point.set(nextNode.__key, nextOffsetAtEnd ? nextNode.getChildrenSize() : 0, 'element', true);
    }
}
let subTreeTextContent = '';
let subTreeTextFormat = null;
let subTreeTextStyle = null;
let activeEditorConfig;
let activeEditor$1;
let activeEditorNodes;
let treatAllNodesAsDirty = false;
let activeEditorStateReadOnly = false;
let activeMutationListeners;
let activeDirtyElements;
let activeDirtyLeaves;
let activePrevNodeMap;
let activeNextNodeMap;
let activePrevKeyToDOMMap;
let mutatedNodes;
function destroyNode(key, parentDOM) {
    const node = activePrevNodeMap.get(key);
    if (parentDOM !== null) {
        const dom = getPrevElementByKeyOrThrow(key);
        if (dom.parentNode === parentDOM) {
            parentDOM.removeChild(dom);
        }
    }
    // This logic is really important, otherwise we will leak DOM nodes
    // when their corresponding LexicalNodes are removed from the editor state.
    if (!activeNextNodeMap.has(key)) {
        activeEditor$1._keyToDOMMap.delete(key);
    }
    if ($isElementNode(node)) {
        const children = createChildrenArray(node, activePrevNodeMap);
        destroyChildren(children, 0, children.length - 1, null);
    }
    if (node !== undefined) {
        setMutatedNode(mutatedNodes, activeEditorNodes, activeMutationListeners, node, 'destroyed');
    }
}
function destroyChildren(children, _startIndex, endIndex, dom) {
    for(let startIndex = _startIndex; startIndex <= endIndex; ++startIndex){
        const child = children[startIndex];
        if (child !== undefined) {
            destroyNode(child, dom);
        }
    }
}
function setTextAlign(domStyle, value) {
    domStyle.setProperty('text-align', value);
}
const DEFAULT_INDENT_VALUE = '40px';
function setElementIndent(dom, indent) {
    const indentClassName = activeEditorConfig.theme.indent;
    if (typeof indentClassName === 'string') {
        const elementHasClassName = dom.classList.contains(indentClassName);
        if (indent > 0 && !elementHasClassName) {
            dom.classList.add(indentClassName);
        } else if (indent < 1 && elementHasClassName) {
            dom.classList.remove(indentClassName);
        }
    }
    const indentationBaseValue = getComputedStyle(dom).getPropertyValue('--lexical-indent-base-value') || DEFAULT_INDENT_VALUE;
    dom.style.setProperty('padding-inline-start', indent === 0 ? '' : `calc(${indent} * ${indentationBaseValue})`);
}
function setElementFormat(dom, format) {
    const domStyle = dom.style;
    if (format === 0) {
        setTextAlign(domStyle, '');
    } else if (format === IS_ALIGN_LEFT) {
        setTextAlign(domStyle, 'left');
    } else if (format === IS_ALIGN_CENTER) {
        setTextAlign(domStyle, 'center');
    } else if (format === IS_ALIGN_RIGHT) {
        setTextAlign(domStyle, 'right');
    } else if (format === IS_ALIGN_JUSTIFY) {
        setTextAlign(domStyle, 'justify');
    } else if (format === IS_ALIGN_START) {
        setTextAlign(domStyle, 'start');
    } else if (format === IS_ALIGN_END) {
        setTextAlign(domStyle, 'end');
    }
}
function $getReconciledDirection(node) {
    const direction = node.__dir;
    if (direction !== null) {
        return direction;
    }
    if ($isRootNode(node)) {
        return null;
    }
    const parent = node.getParentOrThrow();
    if (!$isRootNode(parent) || parent.__dir !== null) {
        return null;
    }
    return 'auto';
}
function $setElementDirection(dom, node) {
    const direction = $getReconciledDirection(node);
    if (direction !== null) {
        dom.dir = direction;
    } else {
        dom.removeAttribute('dir');
    }
}
function $createNode(key, slot) {
    const node = activeNextNodeMap.get(key);
    if (node === undefined) {
        {
            formatDevErrorMessage(`createNode: node does not exist in nodeMap`);
        }
    }
    const dom = node.createDOM(activeEditorConfig, activeEditor$1);
    storeDOMWithKey(key, dom, activeEditor$1);
    // This helps preserve the text, and stops spell check tools from
    // merging or break the spans (which happens if they are missing
    // this attribute).
    if ($isTextNode(node)) {
        dom.setAttribute('data-lexical-text', 'true');
    } else if ($isDecoratorNode(node)) {
        dom.setAttribute('data-lexical-decorator', 'true');
    }
    if ($isElementNode(node)) {
        const indent = node.__indent;
        const childrenSize = node.__size;
        $setElementDirection(dom, node);
        if (indent !== 0) {
            setElementIndent(dom, indent);
        }
        if (childrenSize !== 0) {
            const endIndex = childrenSize - 1;
            const children = createChildrenArray(node, activeNextNodeMap);
            $createChildren(children, node, 0, endIndex, node.getDOMSlot(dom));
        }
        const format = node.__format;
        if (format !== 0) {
            setElementFormat(dom, format);
        }
        if (!node.isInline()) {
            reconcileElementTerminatingLineBreak(null, node, dom);
        }
    } else {
        const text = node.getTextContent();
        if ($isDecoratorNode(node)) {
            const decorator = node.decorate(activeEditor$1, activeEditorConfig);
            if (decorator !== null) {
                reconcileDecorator(key, decorator);
            }
            // Decorators are always non editable
            dom.contentEditable = 'false';
        }
        subTreeTextContent += text;
    }
    if (slot !== null) {
        slot.insertChild(dom);
    }
    {
        // Freeze the node in DEV to prevent accidental mutations
        Object.freeze(node);
    }
    setMutatedNode(mutatedNodes, activeEditorNodes, activeMutationListeners, node, 'created');
    return dom;
}
function $createChildren(children, element, _startIndex, endIndex, slot) {
    const previousSubTreeTextContent = subTreeTextContent;
    subTreeTextContent = '';
    let startIndex = _startIndex;
    for(; startIndex <= endIndex; ++startIndex){
        $createNode(children[startIndex], slot);
        const node = activeNextNodeMap.get(children[startIndex]);
        if (node !== null && $isTextNode(node)) {
            if (subTreeTextFormat === null) {
                subTreeTextFormat = node.getFormat();
                subTreeTextStyle = node.getStyle();
            }
        } else if (// inline $textContentRequiresDoubleLinebreakAtEnd
        $isElementNode(node) && startIndex < endIndex && !node.isInline()) {
            subTreeTextContent += DOUBLE_LINE_BREAK;
        }
    }
    const dom = slot.element;
    dom.__lexicalTextContent = subTreeTextContent;
    subTreeTextContent = previousSubTreeTextContent + subTreeTextContent;
}
function isLastChildLineBreakOrDecorator(element, nodeMap) {
    if (element) {
        const lastKey = element.__last;
        if (lastKey) {
            const node = nodeMap.get(lastKey);
            if (node) {
                return $isLineBreakNode(node) ? 'line-break' : $isDecoratorNode(node) && node.isInline() ? 'decorator' : null;
            }
        }
        return 'empty';
    }
    return null;
}
// If we end an element with a LineBreakNode, then we need to add an additional <br>
function reconcileElementTerminatingLineBreak(prevElement, nextElement, dom) {
    const prevLineBreak = isLastChildLineBreakOrDecorator(prevElement, activePrevNodeMap);
    const nextLineBreak = isLastChildLineBreakOrDecorator(nextElement, activeNextNodeMap);
    if (prevLineBreak !== nextLineBreak) {
        nextElement.getDOMSlot(dom).setManagedLineBreak(nextLineBreak);
    }
}
function reconcileTextFormat(element) {
    if (subTreeTextFormat != null && subTreeTextFormat !== element.__textFormat && !activeEditorStateReadOnly) {
        element.setTextFormat(subTreeTextFormat);
    }
}
function reconcileTextStyle(element) {
    if (subTreeTextStyle != null && subTreeTextStyle !== element.__textStyle && !activeEditorStateReadOnly) {
        element.setTextStyle(subTreeTextStyle);
    }
}
function $reconcileChildrenWithDirection(prevElement, nextElement, dom) {
    subTreeTextFormat = null;
    subTreeTextStyle = null;
    $reconcileChildren(prevElement, nextElement, nextElement.getDOMSlot(dom));
    reconcileTextFormat(nextElement);
    reconcileTextStyle(nextElement);
}
function createChildrenArray(element, nodeMap) {
    const children = [];
    let nodeKey = element.__first;
    while(nodeKey !== null){
        const node = nodeMap.get(nodeKey);
        if (node === undefined) {
            {
                formatDevErrorMessage(`createChildrenArray: node does not exist in nodeMap`);
            }
        }
        children.push(nodeKey);
        nodeKey = node.__next;
    }
    return children;
}
function $reconcileChildren(prevElement, nextElement, slot) {
    const previousSubTreeTextContent = subTreeTextContent;
    const prevChildrenSize = prevElement.__size;
    const nextChildrenSize = nextElement.__size;
    subTreeTextContent = '';
    const dom = slot.element;
    if (prevChildrenSize === 1 && nextChildrenSize === 1) {
        const prevFirstChildKey = prevElement.__first;
        const nextFirstChildKey = nextElement.__first;
        if (prevFirstChildKey === nextFirstChildKey) {
            $reconcileNode(prevFirstChildKey, dom);
        } else {
            const lastDOM = getPrevElementByKeyOrThrow(prevFirstChildKey);
            const replacementDOM = $createNode(nextFirstChildKey, null);
            try {
                dom.replaceChild(replacementDOM, lastDOM);
            } catch (error) {
                if (typeof error === 'object' && error != null) {
                    const msg = `${error.toString()} Parent: ${dom.tagName}, new child: {tag: ${replacementDOM.tagName} key: ${nextFirstChildKey}}, old child: {tag: ${lastDOM.tagName}, key: ${prevFirstChildKey}}.`;
                    throw new Error(msg);
                } else {
                    throw error;
                }
            }
            destroyNode(prevFirstChildKey, null);
        }
        const nextChildNode = activeNextNodeMap.get(nextFirstChildKey);
        if ($isTextNode(nextChildNode)) {
            if (subTreeTextFormat === null) {
                subTreeTextFormat = nextChildNode.getFormat();
                subTreeTextStyle = nextChildNode.getStyle();
            }
        }
    } else {
        const prevChildren = createChildrenArray(prevElement, activePrevNodeMap);
        const nextChildren = createChildrenArray(nextElement, activeNextNodeMap);
        if (!(prevChildren.length === prevChildrenSize)) {
            formatDevErrorMessage(`$reconcileChildren: prevChildren.length !== prevChildrenSize`);
        }
        if (!(nextChildren.length === nextChildrenSize)) {
            formatDevErrorMessage(`$reconcileChildren: nextChildren.length !== nextChildrenSize`);
        }
        if (prevChildrenSize === 0) {
            if (nextChildrenSize !== 0) {
                $createChildren(nextChildren, nextElement, 0, nextChildrenSize - 1, slot);
            }
        } else if (nextChildrenSize === 0) {
            if (prevChildrenSize !== 0) {
                const canUseFastPath = slot.after == null && slot.before == null && slot.element.__lexicalLineBreak == null;
                destroyChildren(prevChildren, 0, prevChildrenSize - 1, canUseFastPath ? null : dom);
                if (canUseFastPath) {
                    // Fast path for removing DOM nodes
                    dom.textContent = '';
                }
            }
        } else {
            $reconcileNodeChildren(nextElement, prevChildren, nextChildren, prevChildrenSize, nextChildrenSize, slot);
        }
    }
    dom.__lexicalTextContent = subTreeTextContent;
    subTreeTextContent = previousSubTreeTextContent + subTreeTextContent;
}
function $reconcileNode(key, parentDOM) {
    const prevNode = activePrevNodeMap.get(key);
    let nextNode = activeNextNodeMap.get(key);
    if (prevNode === undefined || nextNode === undefined) {
        {
            formatDevErrorMessage(`reconcileNode: prevNode or nextNode does not exist in nodeMap`);
        }
    }
    const isDirty = treatAllNodesAsDirty || activeDirtyLeaves.has(key) || activeDirtyElements.has(key);
    const dom = getElementByKeyOrThrow(activeEditor$1, key);
    // If the node key points to the same instance in both states
    // and isn't dirty, we just update the text content cache
    // and return the existing DOM Node.
    if (prevNode === nextNode && !isDirty) {
        let text;
        if ($isElementNode(prevNode)) {
            const previousSubTreeTextContent = dom.__lexicalTextContent;
            if (typeof previousSubTreeTextContent === 'string') {
                text = previousSubTreeTextContent;
            } else {
                text = prevNode.getTextContent();
                dom.__lexicalTextContent = text;
            }
        } else {
            text = prevNode.getTextContent();
        }
        subTreeTextContent += text;
        return dom;
    }
    // If the node key doesn't point to the same instance in both maps,
    // it was cloned. If it's also dirty, we mark it as mutated.
    if (prevNode !== nextNode && isDirty) {
        setMutatedNode(mutatedNodes, activeEditorNodes, activeMutationListeners, nextNode, 'updated');
    }
    // Update node. If it returns true, we need to unmount and re-create the node
    if (nextNode.updateDOM(prevNode, dom, activeEditorConfig)) {
        const replacementDOM = $createNode(key, null);
        if (parentDOM === null) {
            {
                formatDevErrorMessage(`reconcileNode: parentDOM is null`);
            }
        }
        parentDOM.replaceChild(replacementDOM, dom);
        destroyNode(key, null);
        return replacementDOM;
    }
    if ($isElementNode(prevNode)) {
        if (!$isElementNode(nextNode)) {
            formatDevErrorMessage(`Node with key ${key} changed from ElementNode to !ElementNode`);
        }
        const nextIndent = nextNode.__indent;
        if (treatAllNodesAsDirty || nextIndent !== prevNode.__indent) {
            setElementIndent(dom, nextIndent);
        }
        const nextFormat = nextNode.__format;
        if (treatAllNodesAsDirty || nextFormat !== prevNode.__format) {
            setElementFormat(dom, nextFormat);
        }
        if (isDirty) {
            $reconcileChildrenWithDirection(prevNode, nextNode, dom);
            if (!$isRootNode(nextNode) && !nextNode.isInline()) {
                reconcileElementTerminatingLineBreak(prevNode, nextNode, dom);
            }
        } else {
            const previousSubTreeTextContent = dom.__lexicalTextContent;
            let text;
            if (typeof previousSubTreeTextContent === 'string') {
                text = previousSubTreeTextContent;
            } else {
                text = prevNode.getTextContent();
                dom.__lexicalTextContent = text;
            }
            subTreeTextContent += text;
        }
        if (treatAllNodesAsDirty || nextNode.__dir !== prevNode.__dir) {
            $setElementDirection(dom, nextNode);
            if (// Root node direction changing from set to unset (or vice versa)
            // changes how children's direction is calculated.
            $isRootNode(nextNode) && // Can skip if all children already reconciled.
            !treatAllNodesAsDirty) {
                for (const child of nextNode.getChildren()){
                    if ($isElementNode(child)) {
                        const childDom = getElementByKeyOrThrow(activeEditor$1, child.getKey());
                        $setElementDirection(childDom, child);
                    }
                }
            }
        }
    } else {
        const text = nextNode.getTextContent();
        if ($isDecoratorNode(nextNode)) {
            const decorator = nextNode.decorate(activeEditor$1, activeEditorConfig);
            if (decorator !== null) {
                reconcileDecorator(key, decorator);
            }
        }
        subTreeTextContent += text;
    }
    if (!activeEditorStateReadOnly && $isRootNode(nextNode) && nextNode.__cachedText !== subTreeTextContent) {
        // Cache the latest text content.
        const nextRootNode = nextNode.getWritable();
        nextRootNode.__cachedText = subTreeTextContent;
        // This invariant from #8099 is left commented out for performance reasons
        // if (true) {
        //   const computedTextContent =
        //     ElementNode.prototype.getTextContent.call(nextRootNode);
        //   devInvariant(
        //     computedTextContent === subTreeTextContent,
        //     'LexicalReconciler: Computed nextRootNode.getTextContent() does not match nextRootNode.__cachedText %s !== %s (dom.__lexicalTextContent %s)',
        //     JSON.stringify(computedTextContent),
        //     JSON.stringify(subTreeTextContent),
        //     JSON.stringify(dom.__lexicalTextContent),
        //   );
        // }
        nextNode = nextRootNode;
    }
    {
        // Freeze the node in DEV to prevent accidental mutations
        Object.freeze(nextNode);
    }
    return dom;
}
function reconcileDecorator(key, decorator) {
    let pendingDecorators = activeEditor$1._pendingDecorators;
    const currentDecorators = activeEditor$1._decorators;
    if (pendingDecorators === null) {
        if (currentDecorators[key] === decorator) {
            return;
        }
        pendingDecorators = cloneDecorators(activeEditor$1);
    }
    pendingDecorators[key] = decorator;
}
function getNextSibling(element) {
    let nextSibling = element.nextSibling;
    if (nextSibling !== null && nextSibling === activeEditor$1._blockCursorElement) {
        nextSibling = nextSibling.nextSibling;
    }
    return nextSibling;
}
function childrenSet(children, start) {
    const s = new Set();
    for(let i = start; i < children.length; i++){
        s.add(children[i]);
    }
    return s;
}
function $reconcileNodeChildren(nextElement, prevChildren, nextChildren, prevChildrenLength, nextChildrenLength, slot) {
    const prevEndIndex = prevChildrenLength - 1;
    const nextEndIndex = nextChildrenLength - 1;
    let prevChildrenSet;
    let nextChildrenSet;
    let siblingDOM = slot.getFirstChild();
    let prevIndex = 0;
    let nextIndex = 0;
    while(prevIndex <= prevEndIndex && nextIndex <= nextEndIndex){
        const prevKey = prevChildren[prevIndex];
        const nextKey = nextChildren[nextIndex];
        if (prevKey === nextKey) {
            siblingDOM = getNextSibling($reconcileNode(nextKey, slot.element));
            prevIndex++;
            nextIndex++;
        } else {
            if (nextChildrenSet === undefined) {
                nextChildrenSet = childrenSet(nextChildren, nextIndex);
            }
            if (prevChildrenSet === undefined) {
                prevChildrenSet = childrenSet(prevChildren, prevIndex);
            } else if (!prevChildrenSet.has(prevKey)) {
                // continue if prevKey has already been moved
                prevIndex++;
                continue;
            }
            if (!nextChildrenSet.has(prevKey)) {
                // Remove prev and continue
                siblingDOM = getNextSibling(getPrevElementByKeyOrThrow(prevKey));
                destroyNode(prevKey, slot.element);
                prevIndex++;
                prevChildrenSet.delete(prevKey);
                continue;
            }
            if (!prevChildrenSet.has(nextKey)) {
                // Create next
                $createNode(nextKey, slot.withBefore(siblingDOM));
                nextIndex++;
            } else {
                // Move next
                const childDOM = getElementByKeyOrThrow(activeEditor$1, nextKey);
                if (childDOM !== siblingDOM) {
                    slot.withBefore(siblingDOM).insertChild(childDOM);
                }
                siblingDOM = getNextSibling($reconcileNode(nextKey, slot.element));
                prevIndex++;
                nextIndex++;
            }
        }
        const node = activeNextNodeMap.get(nextKey);
        if (node !== null && $isTextNode(node)) {
            if (subTreeTextFormat === null) {
                subTreeTextFormat = node.getFormat();
                subTreeTextStyle = node.getStyle();
            }
        } else if (// inline $textContentRequiresDoubleLinebreakAtEnd
        $isElementNode(node) && nextIndex <= nextEndIndex && !node.isInline()) {
            subTreeTextContent += DOUBLE_LINE_BREAK;
        }
    }
    const appendNewChildren = prevIndex > prevEndIndex;
    const removeOldChildren = nextIndex > nextEndIndex;
    if (appendNewChildren && !removeOldChildren) {
        const previousNode = nextChildren[nextEndIndex + 1];
        const insertDOM = previousNode === undefined ? null : activeEditor$1.getElementByKey(previousNode);
        $createChildren(nextChildren, nextElement, nextIndex, nextEndIndex, slot.withBefore(insertDOM));
    } else if (removeOldChildren && !appendNewChildren) {
        destroyChildren(prevChildren, prevIndex, prevEndIndex, slot.element);
    }
}
function $reconcileRoot(prevEditorState, nextEditorState, editor, dirtyType, dirtyElements, dirtyLeaves) {
    // We cache text content to make retrieval more efficient.
    // The cache must be rebuilt during reconciliation to account for any changes.
    subTreeTextContent = '';
    // Rather than pass around a load of arguments through the stack recursively
    // we instead set them as bindings within the scope of the module.
    treatAllNodesAsDirty = dirtyType === FULL_RECONCILE;
    activeEditor$1 = editor;
    activeEditorConfig = editor._config;
    activeEditorNodes = editor._nodes;
    activeMutationListeners = activeEditor$1._listeners.mutation;
    activeDirtyElements = dirtyElements;
    activeDirtyLeaves = dirtyLeaves;
    activePrevNodeMap = prevEditorState._nodeMap;
    activeNextNodeMap = nextEditorState._nodeMap;
    activeEditorStateReadOnly = nextEditorState._readOnly;
    activePrevKeyToDOMMap = new Map(editor._keyToDOMMap);
    // We keep track of mutated nodes so we can trigger mutation
    // listeners later in the update cycle.
    const currentMutatedNodes = new Map();
    mutatedNodes = currentMutatedNodes;
    $reconcileNode('root', null);
    // We don't want a bunch of void checks throughout the scope
    // so instead we make it seem that these values are always set.
    // We also want to make sure we clear them down, otherwise we
    // can leak memory.
    // @ts-ignore
    activeEditor$1 = undefined;
    // @ts-ignore
    activeEditorNodes = undefined;
    // @ts-ignore
    activeDirtyElements = undefined;
    // @ts-ignore
    activeDirtyLeaves = undefined;
    // @ts-ignore
    activePrevNodeMap = undefined;
    // @ts-ignore
    activeNextNodeMap = undefined;
    // @ts-ignore
    activeEditorConfig = undefined;
    // @ts-ignore
    activePrevKeyToDOMMap = undefined;
    // @ts-ignore
    mutatedNodes = undefined;
    return currentMutatedNodes;
}
function storeDOMWithKey(key, dom, editor) {
    const keyToDOMMap = editor._keyToDOMMap;
    setNodeKeyOnDOMNode(dom, editor, key);
    keyToDOMMap.set(key, dom);
}
function getPrevElementByKeyOrThrow(key) {
    const element = activePrevKeyToDOMMap.get(key);
    if (element === undefined) {
        {
            formatDevErrorMessage(`Reconciliation: could not find DOM element for node key ${key}`);
        }
    }
    return element;
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ /*@__INLINE__*/ function warnOnlyOnce(message) {
    {
        let run = false;
        return ()=>{
            if (!run) {
                console.warn(message);
            }
            run = true;
        };
    }
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ /**
 * Crete a command that can be used with `editor.dispatchCommand` and
 * `editor.registerCommand`. Commands are used by unique reference, not by
 * name.
 *
 * @param type A string to identify the command, very helpful for debugging
 * @returns A new LexicalCommand
 *
 * @__NO_SIDE_EFFECTS__
 */ function createCommand(type) {
    return {
        type
    };
}
const SELECTION_CHANGE_COMMAND = createCommand('SELECTION_CHANGE_COMMAND');
const SELECTION_INSERT_CLIPBOARD_NODES_COMMAND = createCommand('SELECTION_INSERT_CLIPBOARD_NODES_COMMAND');
const CLICK_COMMAND = createCommand('CLICK_COMMAND');
const BEFORE_INPUT_COMMAND = createCommand('BEFORE_INPUT_COMMAND');
const INPUT_COMMAND = createCommand('INPUT_COMMAND');
const COMPOSITION_START_COMMAND = createCommand('COMPOSITION_START_COMMAND');
const COMPOSITION_END_COMMAND = createCommand('COMPOSITION_END_COMMAND');
/**
 * Dispatched to delete a character, the payload will be `true` if the deletion
 * is backwards (backspace or delete on macOS) and `false` if forwards
 * (delete or Fn+Delete on macOS).
 */ const DELETE_CHARACTER_COMMAND = createCommand('DELETE_CHARACTER_COMMAND');
/**
 * Dispatched to insert a line break. With a false payload the
 * cursor moves to the new line (Shift+Enter), with a true payload the cursor
 * does not move (Ctrl+O on macOS).
 */ const INSERT_LINE_BREAK_COMMAND = createCommand('INSERT_LINE_BREAK_COMMAND');
const INSERT_PARAGRAPH_COMMAND = createCommand('INSERT_PARAGRAPH_COMMAND');
const CONTROLLED_TEXT_INSERTION_COMMAND = createCommand('CONTROLLED_TEXT_INSERTION_COMMAND');
const PASTE_COMMAND = createCommand('PASTE_COMMAND');
const REMOVE_TEXT_COMMAND = createCommand('REMOVE_TEXT_COMMAND');
/**
 * Dispatched to delete a word, the payload will be `true` if the deletion is
 * backwards (Ctrl+Backspace or Opt+Delete on macOS), and `false` if
 * forwards (Ctrl+Delete or Fn+Opt+Delete on macOS).
 */ const DELETE_WORD_COMMAND = createCommand('DELETE_WORD_COMMAND');
/**
 * Dispatched to delete a line, the payload will be `true` if the deletion is
 * backwards (Cmd+Delete on macOS), and `false` if forwards
 * (Fn+Cmd+Delete on macOS).
 */ const DELETE_LINE_COMMAND = createCommand('DELETE_LINE_COMMAND');
/**
 * Dispatched to format the selected text.
 */ const FORMAT_TEXT_COMMAND = createCommand('FORMAT_TEXT_COMMAND');
/**
 * Dispatched on undo (Cmd+Z on macOS, Ctrl+Z elsewhere).
 */ const UNDO_COMMAND = createCommand('UNDO_COMMAND');
/**
 * Dispatched on redo (Shift+Cmd+Z on macOS, Shift+Ctrl+Z or Ctrl+Y elsewhere).
 */ const REDO_COMMAND = createCommand('REDO_COMMAND');
/**
 * Dispatched when any key is pressed.
 */ const KEY_DOWN_COMMAND = createCommand('KEYDOWN_COMMAND');
/**
 * Dispatched when the `'ArrowRight'` key is pressed.
 * The shift modifier key may also be down.
 */ const KEY_ARROW_RIGHT_COMMAND = createCommand('KEY_ARROW_RIGHT_COMMAND');
/**
 * Dispatched when the move to end keyboard shortcut is pressed,
 * (Cmd+Right on macOS; Ctrl+Right elsewhere).
 */ const MOVE_TO_END = createCommand('MOVE_TO_END');
/**
 * Dispatched when the `'ArrowLeft'` key is pressed.
 * The shift modifier key may also be down.
 */ const KEY_ARROW_LEFT_COMMAND = createCommand('KEY_ARROW_LEFT_COMMAND');
/**
 * Dispatched when the move to start keyboard shortcut is pressed,
 * (Cmd+Left on macOS; Ctrl+Left elsewhere).
 */ const MOVE_TO_START = createCommand('MOVE_TO_START');
/**
 * Dispatched when the `'ArrowUp'` key is pressed.
 * The shift and/or alt (option) modifier keys may also be down.
 */ const KEY_ARROW_UP_COMMAND = createCommand('KEY_ARROW_UP_COMMAND');
/**
 * Dispatched when the `'ArrowDown'` key is pressed.
 * The shift and/or alt (option) modifier keys may also be down.
 */ const KEY_ARROW_DOWN_COMMAND = createCommand('KEY_ARROW_DOWN_COMMAND');
/**
 * Dispatched when the enter key is pressed, may also be called with a null
 * payload when the intent is to insert a newline. The shift modifier key
 * must be down, any other modifier keys may also be down.
 */ const KEY_ENTER_COMMAND = createCommand('KEY_ENTER_COMMAND');
/**
 * Dispatched whenever the space (`' '`) key is pressed, any modifier
 * keys may be down.
 */ const KEY_SPACE_COMMAND = createCommand('KEY_SPACE_COMMAND');
/**
 * Dispatched whenever the `'Backspace'` key is pressed, the shift
 * modifier key may be down.
 */ const KEY_BACKSPACE_COMMAND = createCommand('KEY_BACKSPACE_COMMAND');
/**
 * Dispatched whenever the `'Escape'` key is pressed, any modifier
 * keys may be down.
 */ const KEY_ESCAPE_COMMAND = createCommand('KEY_ESCAPE_COMMAND');
/**
 * Dispatched whenever the `'Delete'` key is pressed (Fn+Delete on macOS).
 */ const KEY_DELETE_COMMAND = createCommand('KEY_DELETE_COMMAND');
/**
 * Dispatched whenever the `'Tab'` key is pressed. The shift modifier key
 * may be down.
 */ const KEY_TAB_COMMAND = createCommand('KEY_TAB_COMMAND');
const INSERT_TAB_COMMAND = createCommand('INSERT_TAB_COMMAND');
const INDENT_CONTENT_COMMAND = createCommand('INDENT_CONTENT_COMMAND');
const OUTDENT_CONTENT_COMMAND = createCommand('OUTDENT_CONTENT_COMMAND');
const DROP_COMMAND = createCommand('DROP_COMMAND');
const FORMAT_ELEMENT_COMMAND = createCommand('FORMAT_ELEMENT_COMMAND');
const DRAGSTART_COMMAND = createCommand('DRAGSTART_COMMAND');
const DRAGOVER_COMMAND = createCommand('DRAGOVER_COMMAND');
const DRAGEND_COMMAND = createCommand('DRAGEND_COMMAND');
/**
 * Dispatched on a copy event, either via the clipboard or a KeyboardEvent
 * (Cmd+C on macOS, Ctrl+C elsewhere).
 */ const COPY_COMMAND = createCommand('COPY_COMMAND');
/**
 * Dispatched on a cut event, either via the clipboard or a KeyboardEvent
 * (Cmd+X on macOS, Ctrl+X elsewhere).
 */ const CUT_COMMAND = createCommand('CUT_COMMAND');
/**
 * Dispatched on the select all keyboard shortcut
 * (Cmd+A on macOS, Ctrl+A elsehwere).
 */ const SELECT_ALL_COMMAND = createCommand('SELECT_ALL_COMMAND');
const CLEAR_EDITOR_COMMAND = createCommand('CLEAR_EDITOR_COMMAND');
const CLEAR_HISTORY_COMMAND = createCommand('CLEAR_HISTORY_COMMAND');
const CAN_REDO_COMMAND = createCommand('CAN_REDO_COMMAND');
const CAN_UNDO_COMMAND = createCommand('CAN_UNDO_COMMAND');
const FOCUS_COMMAND = createCommand('FOCUS_COMMAND');
const BLUR_COMMAND = createCommand('BLUR_COMMAND');
/**
 * @deprecated in v0.31.0, use KEY_DOWN_COMMAND and check for modifiers
 * directly.
 *
 * Dispatched after any KeyboardEvent when modifiers are pressed
 */ const KEY_MODIFIER_COMMAND = createCommand('KEY_MODIFIER_COMMAND');
const PASS_THROUGH_COMMAND = Object.freeze({});
const ANDROID_COMPOSITION_LATENCY = 30;
const rootElementEvents = [
    [
        'keydown',
        onKeyDown
    ],
    [
        'pointerdown',
        onPointerDown
    ],
    [
        'compositionstart',
        onCompositionStart
    ],
    [
        'compositionend',
        onCompositionEnd
    ],
    [
        'input',
        onInput
    ],
    [
        'click',
        onClick
    ],
    [
        'cut',
        PASS_THROUGH_COMMAND
    ],
    [
        'copy',
        PASS_THROUGH_COMMAND
    ],
    [
        'dragstart',
        PASS_THROUGH_COMMAND
    ],
    [
        'dragover',
        PASS_THROUGH_COMMAND
    ],
    [
        'dragend',
        PASS_THROUGH_COMMAND
    ],
    [
        'paste',
        PASS_THROUGH_COMMAND
    ],
    [
        'focus',
        PASS_THROUGH_COMMAND
    ],
    [
        'blur',
        PASS_THROUGH_COMMAND
    ],
    [
        'drop',
        PASS_THROUGH_COMMAND
    ]
];
if (CAN_USE_BEFORE_INPUT) {
    rootElementEvents.push([
        'beforeinput',
        (event, editor)=>onBeforeInput(event, editor)
    ]);
}
let lastKeyDownTimeStamp = 0;
let lastKeyCode = null;
let lastBeforeInputInsertTextTimeStamp = 0;
let unprocessedBeforeInputData = null;
// Node can be moved between documents (for example using createPortal), so we
// need to track the document each root element was originally registered on.
const rootElementToDocument = new WeakMap();
const rootElementsRegistered = new WeakMap();
let isSelectionChangeFromDOMUpdate = false;
let isSelectionChangeFromMouseDown = false;
let isInsertLineBreak = false;
let isFirefoxEndingComposition = false;
let isSafariEndingComposition = false;
let safariEndCompositionEventData = '';
let postDeleteSelectionToRestore = null;
let collapsedSelectionFormat = [
    0,
    '',
    0,
    'root',
    0
];
// This function is used to determine if Lexical should attempt to override
// the default browser behavior for insertion of text and use its own internal
// heuristics. This is an extremely important function, and makes much of Lexical
// work as intended between different browsers and across word, line and character
// boundary/formats. It also is important for text replacement, node schemas and
// composition mechanics.
function $shouldPreventDefaultAndInsertText(selection, domTargetRange, text, timeStamp, isBeforeInput) {
    const anchor = selection.anchor;
    const focus = selection.focus;
    const anchorNode = anchor.getNode();
    const editor = getActiveEditor();
    const domSelection = getDOMSelection(getWindow(editor));
    const domAnchorNode = domSelection !== null ? domSelection.anchorNode : null;
    const anchorKey = anchor.key;
    const backingAnchorElement = editor.getElementByKey(anchorKey);
    const textLength = text.length;
    return anchorKey !== focus.key || // If we're working with a non-text node.
    !$isTextNode(anchorNode) || // If we are replacing a range with a single character or grapheme, and not composing.
    (!isBeforeInput && (!CAN_USE_BEFORE_INPUT || // We check to see if there has been
    // a recent beforeinput event for "textInput". If there has been one in the last
    // 50ms then we proceed as normal. However, if there is not, then this is likely
    // a dangling `input` event caused by execCommand('insertText').
    lastBeforeInputInsertTextTimeStamp < timeStamp + 50) || anchorNode.isDirty() && textLength < 2 || // TODO consider if there are other scenarios when multiple code units
    //      should be addressed here
    doesContainSurrogatePair(text)) && anchor.offset !== focus.offset && !anchorNode.isComposing() || // Any non standard text node.
    $isTokenOrSegmented(anchorNode) || // If the text length is more than a single character and we're either
    // dealing with this in "beforeinput" or where the node has already recently
    // been changed (thus is dirty).
    anchorNode.isDirty() && textLength > 1 || // If the DOM selection element is not the same as the backing node during beforeinput.
    (isBeforeInput || !CAN_USE_BEFORE_INPUT) && backingAnchorElement !== null && !anchorNode.isComposing() && domAnchorNode !== getDOMTextNode(backingAnchorElement) || // If TargetRange is not the same as the DOM selection; browser trying to edit random parts
    // of the editor.
    domSelection !== null && domTargetRange !== null && (!domTargetRange.collapsed || domTargetRange.startContainer !== domSelection.anchorNode || domTargetRange.startOffset !== domSelection.anchorOffset) || // Check if we're changing from bold to italics, or some other format.
    anchorNode.getFormat() !== selection.format || anchorNode.getStyle() !== selection.style || // One last set of heuristics to check against.
    $shouldInsertTextAfterOrBeforeTextNode(selection, anchorNode);
}
function shouldSkipSelectionChange(domNode, offset) {
    return isDOMTextNode(domNode) && domNode.nodeValue !== null && offset !== 0 && offset !== domNode.nodeValue.length;
}
function onSelectionChange(domSelection, editor, isActive) {
    const { anchorNode: anchorDOM, anchorOffset, focusNode: focusDOM, focusOffset } = domSelection;
    if (isSelectionChangeFromDOMUpdate) {
        isSelectionChangeFromDOMUpdate = false;
        // If native DOM selection is on a DOM element, then
        // we should continue as usual, as Lexical's selection
        // may have normalized to a better child. If the DOM
        // element is a text node, we can safely apply this
        // optimization and skip the selection change entirely.
        // We also need to check if the offset is at the boundary,
        // because in this case, we might need to normalize to a
        // sibling instead.
        if (shouldSkipSelectionChange(anchorDOM, anchorOffset) && shouldSkipSelectionChange(focusDOM, focusOffset) && !postDeleteSelectionToRestore) {
            return;
        }
    }
    updateEditorSync(editor, ()=>{
        // Non-active editor don't need any extra logic for selection, it only needs update
        // to reconcile selection (set it to null) to ensure that only one editor has non-null selection.
        if (!isActive) {
            $setSelection(null);
            return;
        }
        if (!isSelectionWithinEditor(editor, anchorDOM, focusDOM)) {
            return;
        }
        let selection = $getSelection();
        // Restore selection in the event of incorrect rightward shift after deletion
        if (postDeleteSelectionToRestore && $isRangeSelection(selection) && selection.isCollapsed()) {
            const curAnchor = selection.anchor;
            const prevAnchor = postDeleteSelectionToRestore.anchor;
            if (// Rightward shift in same node
            curAnchor.key === prevAnchor.key && curAnchor.offset === prevAnchor.offset + 1 || // Or rightward shift into sibling node
            curAnchor.offset === 1 && prevAnchor.getNode().is(curAnchor.getNode().getPreviousSibling())) {
                // Restore selection
                selection = postDeleteSelectionToRestore.clone();
                $setSelection(selection);
            }
        }
        postDeleteSelectionToRestore = null;
        // Update the selection format
        if ($isRangeSelection(selection)) {
            const anchor = selection.anchor;
            const anchorNode = anchor.getNode();
            if (selection.isCollapsed()) {
                // Badly interpreted range selection when collapsed - #1482
                if (domSelection.type === 'Range' && domSelection.anchorNode === domSelection.focusNode) {
                    selection.dirty = true;
                }
                // If we have marked a collapsed selection format, and we're
                // within the given time range – then attempt to use that format
                // instead of getting the format from the anchor node.
                const windowEvent = getWindow(editor).event;
                const currentTimeStamp = windowEvent ? windowEvent.timeStamp : performance.now();
                const [lastFormat, lastStyle, lastOffset, lastKey, timeStamp] = collapsedSelectionFormat;
                const root = $getRoot();
                const isRootTextContentEmpty = editor.isComposing() === false && root.getTextContent() === '';
                if (currentTimeStamp < timeStamp + 200 && anchor.offset === lastOffset && anchor.key === lastKey) {
                    $updateSelectionFormatStyle(selection, lastFormat, lastStyle);
                } else {
                    if (anchor.type === 'text') {
                        if (!$isTextNode(anchorNode)) {
                            formatDevErrorMessage(`Point.getNode() must return TextNode when type is text`);
                        }
                        $updateSelectionFormatStyleFromTextNode(selection, anchorNode);
                    } else if (anchor.type === 'element' && !isRootTextContentEmpty) {
                        if (!$isElementNode(anchorNode)) {
                            formatDevErrorMessage(`Point.getNode() must return ElementNode when type is element`);
                        }
                        const lastNode = anchor.getNode();
                        if (// This previously applied to all ParagraphNode
                        lastNode.isEmpty()) {
                            $updateSelectionFormatStyleFromElementNode(selection, lastNode);
                        } else {
                            $updateSelectionFormatStyle(selection, 0, '');
                        }
                    }
                }
            } else {
                const anchorKey = anchor.key;
                const focus = selection.focus;
                const focusKey = focus.key;
                const nodes = selection.getNodes();
                const nodesLength = nodes.length;
                const isBackward = selection.isBackward();
                const startOffset = isBackward ? focusOffset : anchorOffset;
                const endOffset = isBackward ? anchorOffset : focusOffset;
                const startKey = isBackward ? focusKey : anchorKey;
                const endKey = isBackward ? anchorKey : focusKey;
                let combinedFormat = IS_ALL_FORMATTING;
                let hasTextNodes = false;
                for(let i = 0; i < nodesLength; i++){
                    const node = nodes[i];
                    const textContentSize = node.getTextContentSize();
                    if ($isTextNode(node) && textContentSize !== 0 && // Exclude empty text nodes at boundaries resulting from user's selection
                    !(i === 0 && node.__key === startKey && startOffset === textContentSize || i === nodesLength - 1 && node.__key === endKey && endOffset === 0)) {
                        // TODO: what about style?
                        hasTextNodes = true;
                        combinedFormat &= node.getFormat();
                        if (combinedFormat === 0) {
                            break;
                        }
                    }
                }
                selection.format = hasTextNodes ? combinedFormat : 0;
            }
        }
        dispatchCommand(editor, SELECTION_CHANGE_COMMAND, undefined);
    });
}
function $updateSelectionFormatStyle(selection, format, style) {
    if (selection.format !== format || selection.style !== style) {
        selection.format = format;
        selection.style = style;
        selection.dirty = true;
    }
}
function $updateSelectionFormatStyleFromTextNode(selection, node) {
    const format = node.getFormat();
    const style = node.getStyle();
    $updateSelectionFormatStyle(selection, format, style);
}
function $updateSelectionFormatStyleFromElementNode(selection, node) {
    const format = node.getTextFormat();
    const style = node.getTextStyle();
    $updateSelectionFormatStyle(selection, format, style);
}
// This is a work-around is mainly Chrome specific bug where if you select
// the contents of an empty block, you cannot easily unselect anything.
// This results in a tiny selection box that looks buggy/broken. This can
// also help other browsers when selection might "appear" lost, when it
// really isn't.
function onClick(event, editor) {
    updateEditorSync(editor, ()=>{
        const selection = $getSelection();
        const domSelection = getDOMSelection(getWindow(editor));
        const lastSelection = $getPreviousSelection();
        if (domSelection) {
            if ($isRangeSelection(selection)) {
                const anchor = selection.anchor;
                const anchorNode = anchor.getNode();
                if (anchor.type === 'element' && anchor.offset === 0 && selection.isCollapsed() && !$isRootNode(anchorNode) && $getRoot().getChildrenSize() === 1 && anchorNode.getTopLevelElementOrThrow().isEmpty() && lastSelection !== null && selection.is(lastSelection)) {
                    domSelection.removeAllRanges();
                    selection.dirty = true;
                } else if (event.detail === 3 && !selection.isCollapsed()) {
                    // Triple click causing selection to overflow into the nearest element. In that
                    // case visually it looks like a single element content is selected, focus node
                    // is actually at the beginning of the next element (if present) and any manipulations
                    // with selection (formatting) are affecting second element as well
                    const focus = selection.focus;
                    const focusNode = focus.getNode();
                    if (anchorNode !== focusNode) {
                        const parentNode = $findMatchingParent(anchorNode, (node)=>$isElementNode(node) && !node.isInline());
                        if ($isElementNode(parentNode)) {
                            parentNode.select(0);
                        }
                    }
                }
            } else if (event.pointerType === 'touch' || event.pointerType === 'pen') {
                // This is used to update the selection on touch devices (including Apple Pencil) when the user clicks on text after a
                // node selection. See isSelectionChangeFromMouseDown for the inverse
                const domAnchorNode = domSelection.anchorNode;
                // If the user is attempting to click selection back onto text, then
                // we should attempt create a range selection.
                // When we click on an empty paragraph node or the end of a paragraph that ends
                // with an image/poll, the nodeType will be ELEMENT_NODE
                if (isHTMLElement(domAnchorNode) || isDOMTextNode(domAnchorNode)) {
                    const newSelection = $internalCreateRangeSelection(lastSelection, domSelection, editor, event);
                    $setSelection(newSelection);
                }
            }
        }
        dispatchCommand(editor, CLICK_COMMAND, event);
    });
}
function onPointerDown(event, editor) {
    // TODO implement text drag & drop
    const target = event.target;
    const pointerType = event.pointerType;
    if (isDOMNode(target) && pointerType !== 'touch' && pointerType !== 'pen' && event.button === 0) {
        updateEditorSync(editor, ()=>{
            // Drag & drop should not recompute selection until mouse up; otherwise the initially
            // selected content is lost.
            if (!$isSelectionCapturedInDecorator(target)) {
                isSelectionChangeFromMouseDown = true;
            }
        });
    }
}
function getTargetRange(event) {
    if (!event.getTargetRanges) {
        return null;
    }
    const targetRanges = event.getTargetRanges();
    if (targetRanges.length === 0) {
        return null;
    }
    return targetRanges[0];
}
function $canRemoveText(anchorNode, focusNode) {
    return anchorNode !== focusNode || $isElementNode(anchorNode) || $isElementNode(focusNode) || !$isTokenOrTab(anchorNode) || !$isTokenOrTab(focusNode);
}
function isPossiblyAndroidKeyPress(timeStamp) {
    return lastKeyCode === 'MediaLast' && timeStamp < lastKeyDownTimeStamp + ANDROID_COMPOSITION_LATENCY;
}
function registerDefaultCommandHandlers(editor) {
    editor.registerCommand(BEFORE_INPUT_COMMAND, $handleBeforeInput, COMMAND_PRIORITY_EDITOR);
    editor.registerCommand(INPUT_COMMAND, $handleInput, COMMAND_PRIORITY_EDITOR);
    editor.registerCommand(COMPOSITION_START_COMMAND, $handleCompositionStart, COMMAND_PRIORITY_EDITOR);
    editor.registerCommand(COMPOSITION_END_COMMAND, $handleCompositionEnd, COMMAND_PRIORITY_EDITOR);
    editor.registerCommand(KEY_DOWN_COMMAND, $handleKeyDown, COMMAND_PRIORITY_EDITOR);
}
function onBeforeInput(event, editor) {
    const inputType = event.inputType;
    // We let the browser do its own thing for composition.
    if (inputType === 'deleteCompositionText' || // If we're pasting in FF, we shouldn't get this event
    // as the `paste` event should have triggered, unless the
    // user has dom.event.clipboardevents.enabled disabled in
    // about:config. In that case, we need to process the
    // pasted content in the DOM mutation phase.
    IS_FIREFOX && isFirefoxClipboardEvents(editor)) {
        return;
    } else if (inputType === 'insertCompositionText') {
        return;
    }
    dispatchCommand(editor, BEFORE_INPUT_COMMAND, event);
}
function $handleBeforeInput(event) {
    const inputType = event.inputType;
    const targetRange = getTargetRange(event);
    const editor = getActiveEditor();
    const selection = $getSelection();
    if (inputType === 'deleteContentBackward') {
        if (selection === null) {
            // Use previous selection
            const prevSelection = $getPreviousSelection();
            if (!$isRangeSelection(prevSelection)) {
                return true;
            }
            $setSelection(prevSelection.clone());
        }
        if ($isRangeSelection(selection)) {
            const isSelectionAnchorSameAsFocus = selection.anchor.key === selection.focus.key;
            if (isPossiblyAndroidKeyPress(event.timeStamp) && editor.isComposing() && isSelectionAnchorSameAsFocus) {
                $setCompositionKey(null);
                lastKeyDownTimeStamp = 0;
                // Fixes an Android bug where selection flickers when backspacing
                setTimeout(()=>{
                    updateEditorSync(editor, ()=>{
                        $setCompositionKey(null);
                    });
                }, ANDROID_COMPOSITION_LATENCY);
                if ($isRangeSelection(selection)) {
                    const anchorNode = selection.anchor.getNode();
                    anchorNode.markDirty();
                    if (!$isTextNode(anchorNode)) {
                        formatDevErrorMessage(`Anchor node must be a TextNode`);
                    }
                    $updateSelectionFormatStyleFromTextNode(selection, anchorNode);
                }
            } else {
                $setCompositionKey(null);
                event.preventDefault();
                // Chromium Android at the moment seems to ignore the preventDefault
                // on 'deleteContentBackward' and still deletes the content. Which leads
                // to multiple deletions. So we let the browser handle the deletion in this case.
                const selectedNode = selection.anchor.getNode();
                const selectedNodeText = selectedNode.getTextContent();
                // When the target node has `canInsertTextAfter` set to false, the first deletion
                // doesn't have an effect, so we need to handle it with Lexical.
                const selectedNodeCanInsertTextAfter = selectedNode.canInsertTextAfter();
                const hasSelectedAllTextInNode = selection.anchor.offset === 0 && selection.focus.offset === selectedNodeText.length;
                let shouldLetBrowserHandleDelete = IS_ANDROID_CHROME && isSelectionAnchorSameAsFocus && !hasSelectedAllTextInNode && selectedNodeCanInsertTextAfter;
                // Check if selection is collapsed and if the previous node is a decorator node
                // If so, the browser will not be able to handle the deletion
                if (shouldLetBrowserHandleDelete && selection.isCollapsed()) {
                    shouldLetBrowserHandleDelete = !$isDecoratorNode($getAdjacentNode(selection.anchor, true));
                }
                if (!shouldLetBrowserHandleDelete) {
                    dispatchCommand(editor, DELETE_CHARACTER_COMMAND, true);
                    // When deleting across paragraphs, Chrome on Android incorrectly shifts the selection rightwards
                    // We save the correct selection to restore later during handling of selectionchange event
                    const selectionAfterDelete = $getSelection();
                    if (IS_ANDROID_CHROME && $isRangeSelection(selectionAfterDelete) && selectionAfterDelete.isCollapsed()) {
                        postDeleteSelectionToRestore = selectionAfterDelete;
                        // Cleanup in case selectionchange does not fire
                        setTimeout(()=>postDeleteSelectionToRestore = null);
                    }
                }
            }
            return true;
        }
    }
    if (!$isRangeSelection(selection)) {
        return true;
    }
    const data = event.data;
    // This represents the case when two beforeinput events are triggered at the same time (without a
    // full event loop ending at input). This happens with MacOS with the default keyboard settings,
    // a combination of autocorrection + autocapitalization.
    // Having Lexical run everything in controlled mode would fix the issue without additional code
    // but this would kill the massive performance win from the most common typing event.
    // Alternatively, when this happens we can prematurely update our EditorState based on the DOM
    // content, a job that would usually be the input event's responsibility.
    if (unprocessedBeforeInputData !== null) {
        $updateSelectedTextFromDOM(false, editor, unprocessedBeforeInputData);
    }
    if ((!selection.dirty || unprocessedBeforeInputData !== null) && selection.isCollapsed() && !$isRootNode(selection.anchor.getNode()) && targetRange !== null) {
        selection.applyDOMRange(targetRange);
    }
    unprocessedBeforeInputData = null;
    const anchor = selection.anchor;
    const focus = selection.focus;
    const anchorNode = anchor.getNode();
    const focusNode = focus.getNode();
    if (inputType === 'insertText' || inputType === 'insertTranspose') {
        if (data === '\n') {
            event.preventDefault();
            dispatchCommand(editor, INSERT_LINE_BREAK_COMMAND, false);
        } else if (data === DOUBLE_LINE_BREAK) {
            event.preventDefault();
            dispatchCommand(editor, INSERT_PARAGRAPH_COMMAND, undefined);
        } else if (data == null && event.dataTransfer) {
            // Gets around a Safari text replacement bug.
            const text = event.dataTransfer.getData('text/plain');
            event.preventDefault();
            selection.insertRawText(text);
        } else if (data != null && $shouldPreventDefaultAndInsertText(selection, targetRange, data, event.timeStamp, true)) {
            event.preventDefault();
            dispatchCommand(editor, CONTROLLED_TEXT_INSERTION_COMMAND, data);
        } else {
            unprocessedBeforeInputData = data;
        }
        lastBeforeInputInsertTextTimeStamp = event.timeStamp;
        return true;
    }
    // Prevent the browser from carrying out
    // the input event, so we can control the
    // output.
    event.preventDefault();
    switch(inputType){
        case 'insertFromYank':
        case 'insertFromDrop':
        case 'insertReplacementText':
            {
                dispatchCommand(editor, CONTROLLED_TEXT_INSERTION_COMMAND, event);
                break;
            }
        case 'insertFromComposition':
            {
                // This is the end of composition
                $setCompositionKey(null);
                dispatchCommand(editor, CONTROLLED_TEXT_INSERTION_COMMAND, event);
                break;
            }
        case 'insertLineBreak':
            {
                // Used for Android
                $setCompositionKey(null);
                dispatchCommand(editor, INSERT_LINE_BREAK_COMMAND, false);
                break;
            }
        case 'insertParagraph':
            {
                // Used for Android
                $setCompositionKey(null);
                // Safari does not provide the type "insertLineBreak".
                // So instead, we need to infer it from the keyboard event.
                // We do not apply this logic to iOS to allow newline auto-capitalization
                // work without creating linebreaks when pressing Enter
                if (isInsertLineBreak && !IS_IOS) {
                    isInsertLineBreak = false;
                    dispatchCommand(editor, INSERT_LINE_BREAK_COMMAND, false);
                } else {
                    dispatchCommand(editor, INSERT_PARAGRAPH_COMMAND, undefined);
                }
                break;
            }
        case 'insertFromPaste':
        case 'insertFromPasteAsQuotation':
            {
                dispatchCommand(editor, PASTE_COMMAND, event);
                break;
            }
        case 'deleteByComposition':
            {
                if ($canRemoveText(anchorNode, focusNode)) {
                    dispatchCommand(editor, REMOVE_TEXT_COMMAND, event);
                }
                break;
            }
        case 'deleteByDrag':
        case 'deleteByCut':
            {
                dispatchCommand(editor, REMOVE_TEXT_COMMAND, event);
                break;
            }
        case 'deleteContent':
            {
                dispatchCommand(editor, DELETE_CHARACTER_COMMAND, false);
                break;
            }
        case 'deleteWordBackward':
            {
                dispatchCommand(editor, DELETE_WORD_COMMAND, true);
                break;
            }
        case 'deleteWordForward':
            {
                dispatchCommand(editor, DELETE_WORD_COMMAND, false);
                break;
            }
        case 'deleteHardLineBackward':
        case 'deleteSoftLineBackward':
            {
                dispatchCommand(editor, DELETE_LINE_COMMAND, true);
                break;
            }
        case 'deleteContentForward':
        case 'deleteHardLineForward':
        case 'deleteSoftLineForward':
            {
                dispatchCommand(editor, DELETE_LINE_COMMAND, false);
                break;
            }
        case 'formatStrikeThrough':
            {
                dispatchCommand(editor, FORMAT_TEXT_COMMAND, 'strikethrough');
                break;
            }
        case 'formatBold':
            {
                dispatchCommand(editor, FORMAT_TEXT_COMMAND, 'bold');
                break;
            }
        case 'formatItalic':
            {
                dispatchCommand(editor, FORMAT_TEXT_COMMAND, 'italic');
                break;
            }
        case 'formatUnderline':
            {
                dispatchCommand(editor, FORMAT_TEXT_COMMAND, 'underline');
                break;
            }
        case 'historyUndo':
            {
                dispatchCommand(editor, UNDO_COMMAND, undefined);
                break;
            }
        case 'historyRedo':
            {
                dispatchCommand(editor, REDO_COMMAND, undefined);
                break;
            }
    }
    return true;
}
function onInput(event, editor) {
    // Note that the MutationObserver may or may not have already fired,
    // but the the DOM and selection may have already changed.
    // See also:
    // - https://github.com/facebook/lexical/issues/7028
    // - https://github.com/facebook/lexical/pull/794
    // We don't want the onInput to bubble, in the case of nested editors.
    event.stopPropagation();
    updateEditorSync(editor, ()=>{
        editor.dispatchCommand(INPUT_COMMAND, event);
    }, {
        event
    });
    unprocessedBeforeInputData = null;
}
function $handleInput(event) {
    if (isHTMLElement(event.target) && $isSelectionCapturedInDecorator(event.target)) {
        return true;
    }
    const editor = getActiveEditor();
    const selection = $getSelection();
    const data = event.data;
    const targetRange = getTargetRange(event);
    if (data != null && $isRangeSelection(selection) && $shouldPreventDefaultAndInsertText(selection, targetRange, data, event.timeStamp, false)) {
        // Given we're over-riding the default behavior, we will need
        // to ensure to disable composition before dispatching the
        // insertText command for when changing the sequence for FF.
        if (isFirefoxEndingComposition) {
            $onCompositionEndImpl(editor, data);
            isFirefoxEndingComposition = false;
        }
        const anchor = selection.anchor;
        const anchorNode = anchor.getNode();
        const domSelection = getDOMSelection(getWindow(editor));
        if (domSelection === null) {
            return true;
        }
        const isBackward = selection.isBackward();
        const startOffset = isBackward ? selection.anchor.offset : selection.focus.offset;
        const endOffset = isBackward ? selection.focus.offset : selection.anchor.offset;
        // If the content is the same as inserted, then don't dispatch an insertion.
        // Given onInput doesn't take the current selection (it uses the previous)
        // we can compare that against what the DOM currently says.
        if (!CAN_USE_BEFORE_INPUT || selection.isCollapsed() || !$isTextNode(anchorNode) || domSelection.anchorNode === null || anchorNode.getTextContent().slice(0, startOffset) + data + anchorNode.getTextContent().slice(startOffset + endOffset) !== getAnchorTextFromDOM(domSelection.anchorNode)) {
            dispatchCommand(editor, CONTROLLED_TEXT_INSERTION_COMMAND, data);
        }
        const textLength = data.length;
        // Another hack for FF, as it's possible that the IME is still
        // open, even though compositionend has already fired (sigh).
        if (IS_FIREFOX && textLength > 1 && event.inputType === 'insertCompositionText' && !editor.isComposing()) {
            selection.anchor.offset -= textLength;
        }
        // This ensures consistency on Android.
        if (!IS_SAFARI && !IS_IOS && !IS_APPLE_WEBKIT && editor.isComposing()) {
            lastKeyDownTimeStamp = 0;
            $setCompositionKey(null);
        }
    } else {
        const characterData = data !== null ? data : undefined;
        $updateSelectedTextFromDOM(false, editor, characterData);
        // onInput always fires after onCompositionEnd for FF.
        if (isFirefoxEndingComposition) {
            $onCompositionEndImpl(editor, data || undefined);
            isFirefoxEndingComposition = false;
        }
    }
    // Also flush any other mutations that might have occurred
    // since the change.
    $flushMutations();
    return true;
}
function onCompositionStart(event, editor) {
    dispatchCommand(editor, COMPOSITION_START_COMMAND, event);
}
function $handleCompositionStart(event) {
    const editor = getActiveEditor();
    const selection = $getSelection();
    if ($isRangeSelection(selection) && !editor.isComposing()) {
        const anchor = selection.anchor;
        const node = selection.anchor.getNode();
        $setCompositionKey(anchor.key);
        if (// If it has been 30ms since the last keydown, then we should
        // apply the empty space heuristic. We can't do this for Safari,
        // as the keydown fires after composition start.
        event.timeStamp < lastKeyDownTimeStamp + ANDROID_COMPOSITION_LATENCY || // FF has issues around composing multibyte characters, so we also
        // need to invoke the empty space heuristic below.
        anchor.type === 'element' || !selection.isCollapsed() || node.getFormat() !== selection.format || $isTextNode(node) && node.getStyle() !== selection.style) {
            // We insert a zero width character, ready for the composition
            // to get inserted into the new node we create. If
            // we don't do this, Safari will fail on us because
            // there is no text node matching the selection.
            dispatchCommand(editor, CONTROLLED_TEXT_INSERTION_COMMAND, COMPOSITION_START_CHAR);
        }
    }
    return true;
}
function $handleCompositionEnd(event) {
    const editor = getActiveEditor();
    $onCompositionEndImpl(editor, event.data);
    return true;
}
function $onCompositionEndImpl(editor, data) {
    const compositionKey = editor._compositionKey;
    $setCompositionKey(null);
    // Handle termination of composition.
    if (compositionKey !== null && data != null) {
        // Composition can sometimes move to an adjacent DOM node when backspacing.
        // So check for the empty case.
        if (data === '') {
            const node = $getNodeByKey(compositionKey);
            const textNode = getDOMTextNode(editor.getElementByKey(compositionKey));
            if (textNode !== null && textNode.nodeValue !== null && $isTextNode(node)) {
                $updateTextNodeFromDOMContent(node, textNode.nodeValue, null, null, true);
            }
            return;
        }
        // Composition can sometimes be that of a new line. In which case, we need to
        // handle that accordingly.
        if (data[data.length - 1] === '\n') {
            const selection = $getSelection();
            if ($isRangeSelection(selection)) {
                // If the last character is a line break, we also need to insert
                // a line break.
                const focus = selection.focus;
                selection.anchor.set(focus.key, focus.offset, focus.type);
                dispatchCommand(editor, KEY_ENTER_COMMAND, null);
                return;
            }
        }
    }
    $updateSelectedTextFromDOM(true, editor, data);
}
function onCompositionEnd(event, editor) {
    // Firefox fires onCompositionEnd before onInput, but Chrome/Webkit,
    // fire onInput before onCompositionEnd. To ensure the sequence works
    // like Chrome/Webkit we use the isFirefoxEndingComposition flag to
    // defer handling of onCompositionEnd in Firefox till we have processed
    // the logic in onInput.
    if (IS_FIREFOX) {
        isFirefoxEndingComposition = true;
    } else if (!IS_IOS && (IS_SAFARI || IS_APPLE_WEBKIT)) {
        // Fix：https://github.com/facebook/lexical/pull/7061
        // In safari, onCompositionEnd triggers before keydown
        // This will cause an extra character to be deleted when exiting the IME
        // Therefore, a flag is used to mark that the keydown event is triggered after onCompositionEnd
        // Ensure that an extra character is not deleted due to the backspace event being triggered in the keydown event.
        isSafariEndingComposition = true;
        safariEndCompositionEventData = event.data;
    } else {
        dispatchCommand(editor, COMPOSITION_END_COMMAND, event);
    }
}
function onKeyDown(event, editor) {
    lastKeyDownTimeStamp = event.timeStamp;
    lastKeyCode = event.key;
    if (editor.isComposing()) {
        return;
    }
    dispatchCommand(editor, KEY_DOWN_COMMAND, event);
}
function $handleKeyDown(event) {
    const editor = getActiveEditor();
    if (event.key == null) {
        return true;
    }
    if (isSafariEndingComposition && isBackspace(event)) {
        updateEditorSync(editor, ()=>{
            $onCompositionEndImpl(editor, safariEndCompositionEventData);
        });
        isSafariEndingComposition = false;
        safariEndCompositionEventData = '';
        return true;
    }
    if (isMoveForward(event)) {
        dispatchCommand(editor, KEY_ARROW_RIGHT_COMMAND, event);
    } else if (isMoveToEnd(event)) {
        dispatchCommand(editor, MOVE_TO_END, event);
    } else if (isMoveBackward(event)) {
        dispatchCommand(editor, KEY_ARROW_LEFT_COMMAND, event);
    } else if (isMoveToStart(event)) {
        dispatchCommand(editor, MOVE_TO_START, event);
    } else if (isMoveUp(event)) {
        dispatchCommand(editor, KEY_ARROW_UP_COMMAND, event);
    } else if (isMoveDown(event)) {
        dispatchCommand(editor, KEY_ARROW_DOWN_COMMAND, event);
    } else if (isLineBreak(event)) {
        isInsertLineBreak = true;
        dispatchCommand(editor, KEY_ENTER_COMMAND, event);
    } else if (isSpace(event)) {
        dispatchCommand(editor, KEY_SPACE_COMMAND, event);
    } else if (isOpenLineBreak(event)) {
        event.preventDefault();
        isInsertLineBreak = true;
        dispatchCommand(editor, INSERT_LINE_BREAK_COMMAND, true);
    } else if (isParagraph(event)) {
        isInsertLineBreak = false;
        dispatchCommand(editor, KEY_ENTER_COMMAND, event);
    } else if (isDeleteBackward(event)) {
        if (isBackspace(event)) {
            dispatchCommand(editor, KEY_BACKSPACE_COMMAND, event);
        } else {
            event.preventDefault();
            dispatchCommand(editor, DELETE_CHARACTER_COMMAND, true);
        }
    } else if (isEscape(event)) {
        dispatchCommand(editor, KEY_ESCAPE_COMMAND, event);
    } else if (isDeleteForward(event)) {
        if (isDelete(event)) {
            dispatchCommand(editor, KEY_DELETE_COMMAND, event);
        } else {
            event.preventDefault();
            dispatchCommand(editor, DELETE_CHARACTER_COMMAND, false);
        }
    } else if (isDeleteWordBackward(event)) {
        event.preventDefault();
        dispatchCommand(editor, DELETE_WORD_COMMAND, true);
    } else if (isDeleteWordForward(event)) {
        event.preventDefault();
        dispatchCommand(editor, DELETE_WORD_COMMAND, false);
    } else if (isDeleteLineBackward(event)) {
        event.preventDefault();
        dispatchCommand(editor, DELETE_LINE_COMMAND, true);
    } else if (isDeleteLineForward(event)) {
        event.preventDefault();
        dispatchCommand(editor, DELETE_LINE_COMMAND, false);
    } else if (isBold(event)) {
        event.preventDefault();
        dispatchCommand(editor, FORMAT_TEXT_COMMAND, 'bold');
    } else if (isUnderline(event)) {
        event.preventDefault();
        dispatchCommand(editor, FORMAT_TEXT_COMMAND, 'underline');
    } else if (isItalic(event)) {
        event.preventDefault();
        dispatchCommand(editor, FORMAT_TEXT_COMMAND, 'italic');
    } else if (isTab(event)) {
        dispatchCommand(editor, KEY_TAB_COMMAND, event);
    } else if (isUndo(event)) {
        event.preventDefault();
        dispatchCommand(editor, UNDO_COMMAND, undefined);
    } else if (isRedo(event)) {
        event.preventDefault();
        dispatchCommand(editor, REDO_COMMAND, undefined);
    } else {
        const prevSelection = editor._editorState._selection;
        if (prevSelection !== null && !$isRangeSelection(prevSelection)) {
            // Only RangeSelection can use the native cut/copy/select all
            if (isCopy(event)) {
                event.preventDefault();
                dispatchCommand(editor, COPY_COMMAND, event);
            } else if (isCut(event)) {
                event.preventDefault();
                dispatchCommand(editor, CUT_COMMAND, event);
            } else if (isSelectAll(event)) {
                event.preventDefault();
                dispatchCommand(editor, SELECT_ALL_COMMAND, event);
            }
        } else if (isSelectAll(event)) {
            event.preventDefault();
            dispatchCommand(editor, SELECT_ALL_COMMAND, event);
        }
    }
    if (isModifier(event)) {
        editor.dispatchCommand(KEY_MODIFIER_COMMAND, event);
    }
    return true;
}
function getRootElementRemoveHandles(rootElement) {
    // @ts-expect-error: internal field
    let eventHandles = rootElement.__lexicalEventHandles;
    if (eventHandles === undefined) {
        eventHandles = [];
        // @ts-expect-error: internal field
        rootElement.__lexicalEventHandles = eventHandles;
    }
    return eventHandles;
}
// Mapping root editors to their active nested editors, contains nested editors
// mapping only, so if root editor is selected map will have no reference to free up memory
const activeNestedEditorsMap = new Map();
function onDocumentSelectionChange(event) {
    const domSelection = getDOMSelectionFromTarget(event.target);
    if (domSelection === null) {
        return;
    }
    const nextActiveEditor = getNearestEditorFromDOMNode(domSelection.anchorNode);
    if (nextActiveEditor === null) {
        return;
    }
    if (isSelectionChangeFromMouseDown) {
        isSelectionChangeFromMouseDown = false;
        updateEditorSync(nextActiveEditor, ()=>{
            const lastSelection = $getPreviousSelection();
            const domAnchorNode = domSelection.anchorNode;
            if (isHTMLElement(domAnchorNode) || isDOMTextNode(domAnchorNode)) {
                // If the user is attempting to click selection back onto text, then
                // we should attempt create a range selection.
                // When we click on an empty paragraph node or the end of a paragraph that ends
                // with an image/poll, the nodeType will be ELEMENT_NODE
                const newSelection = $internalCreateRangeSelection(lastSelection, domSelection, nextActiveEditor, event);
                $setSelection(newSelection);
            }
        });
    }
    // When editor receives selection change event, we're checking if
    // it has any sibling editors (within same parent editor) that were active
    // before, and trigger selection change on it to nullify selection.
    const editors = getEditorsToPropagate(nextActiveEditor);
    const rootEditor = editors[editors.length - 1];
    const rootEditorKey = rootEditor._key;
    const activeNestedEditor = activeNestedEditorsMap.get(rootEditorKey);
    const prevActiveEditor = activeNestedEditor || rootEditor;
    if (prevActiveEditor !== nextActiveEditor) {
        onSelectionChange(domSelection, prevActiveEditor, false);
    }
    onSelectionChange(domSelection, nextActiveEditor, true);
    // If newly selected editor is nested, then add it to the map, clean map otherwise
    if (nextActiveEditor !== rootEditor) {
        activeNestedEditorsMap.set(rootEditorKey, nextActiveEditor);
    } else if (activeNestedEditor) {
        activeNestedEditorsMap.delete(rootEditorKey);
    }
}
function stopLexicalPropagation(event) {
    // We attach a special property to ensure the same event doesn't re-fire
    // for parent editors.
    // @ts-ignore
    event._lexicalHandled = true;
}
function hasStoppedLexicalPropagation(event) {
    // @ts-ignore
    const stopped = event._lexicalHandled === true;
    return stopped;
}
function addRootElementEvents(rootElement, editor) {
    // We only want to have a single global selectionchange event handler, shared
    // between all editor instances.
    const doc = rootElement.ownerDocument;
    rootElementToDocument.set(rootElement, doc);
    const documentRootElementsCount = rootElementsRegistered.get(doc) ?? 0;
    if (documentRootElementsCount < 1) {
        doc.addEventListener('selectionchange', onDocumentSelectionChange);
    }
    rootElementsRegistered.set(doc, documentRootElementsCount + 1);
    // @ts-expect-error: internal field
    rootElement.__lexicalEditor = editor;
    const removeHandles = getRootElementRemoveHandles(rootElement);
    for(let i = 0; i < rootElementEvents.length; i++){
        const [eventName, onEvent] = rootElementEvents[i];
        const eventHandler = typeof onEvent === 'function' ? (event)=>{
            if (hasStoppedLexicalPropagation(event)) {
                return;
            }
            stopLexicalPropagation(event);
            if (editor.isEditable() || eventName === 'click') {
                onEvent(event, editor);
            }
        } : (event)=>{
            if (hasStoppedLexicalPropagation(event)) {
                return;
            }
            stopLexicalPropagation(event);
            const isEditable = editor.isEditable();
            switch(eventName){
                case 'cut':
                    return isEditable && dispatchCommand(editor, CUT_COMMAND, event);
                case 'copy':
                    return dispatchCommand(editor, COPY_COMMAND, event);
                case 'paste':
                    return isEditable && dispatchCommand(editor, PASTE_COMMAND, event);
                case 'dragstart':
                    return isEditable && dispatchCommand(editor, DRAGSTART_COMMAND, event);
                case 'dragover':
                    return isEditable && dispatchCommand(editor, DRAGOVER_COMMAND, event);
                case 'dragend':
                    return isEditable && dispatchCommand(editor, DRAGEND_COMMAND, event);
                case 'focus':
                    return isEditable && dispatchCommand(editor, FOCUS_COMMAND, event);
                case 'blur':
                    {
                        return isEditable && dispatchCommand(editor, BLUR_COMMAND, event);
                    }
                case 'drop':
                    return isEditable && dispatchCommand(editor, DROP_COMMAND, event);
            }
        };
        rootElement.addEventListener(eventName, eventHandler);
        removeHandles.push(()=>{
            rootElement.removeEventListener(eventName, eventHandler);
        });
    }
}
const rootElementNotRegisteredWarning = warnOnlyOnce('Root element not registered');
function removeRootElementEvents(rootElement) {
    const doc = rootElementToDocument.get(rootElement);
    if (doc === undefined) {
        rootElementNotRegisteredWarning();
        return;
    }
    const documentRootElementsCount = rootElementsRegistered.get(doc);
    if (documentRootElementsCount === undefined) {
        // This can happen if setRootElement() failed
        rootElementNotRegisteredWarning();
        return;
    }
    // We only want to have a single global selectionchange event handler, shared
    // between all editor instances.
    const newCount = documentRootElementsCount - 1;
    if (!(newCount >= 0)) {
        formatDevErrorMessage(`Root element count less than 0`);
    }
    rootElementToDocument.delete(rootElement);
    rootElementsRegistered.set(doc, newCount);
    if (newCount === 0) {
        doc.removeEventListener('selectionchange', onDocumentSelectionChange);
    }
    const editor = getEditorPropertyFromDOMNode(rootElement);
    if (isLexicalEditor(editor)) {
        cleanActiveNestedEditorsMap(editor);
        // @ts-expect-error: internal field
        rootElement.__lexicalEditor = null;
    } else if (editor) {
        {
            formatDevErrorMessage(`Attempted to remove event handlers from a node that does not belong to this build of Lexical`);
        }
    }
    const removeHandles = getRootElementRemoveHandles(rootElement);
    for(let i = 0; i < removeHandles.length; i++){
        removeHandles[i]();
    }
    // @ts-expect-error: internal field
    rootElement.__lexicalEventHandles = [];
}
function cleanActiveNestedEditorsMap(editor) {
    if (editor._parentEditor !== null) {
        // For nested editor cleanup map if this editor was marked as active
        const editors = getEditorsToPropagate(editor);
        const rootEditor = editors[editors.length - 1];
        const rootEditorKey = rootEditor._key;
        if (activeNestedEditorsMap.get(rootEditorKey) === editor) {
            activeNestedEditorsMap.delete(rootEditorKey);
        }
    } else {
        // For top-level editors cleanup map
        activeNestedEditorsMap.delete(editor._key);
    }
}
function markSelectionChangeFromDOMUpdate() {
    isSelectionChangeFromDOMUpdate = true;
}
function markCollapsedSelectionFormat(format, style, offset, key, timeStamp) {
    collapsedSelectionFormat = [
        format,
        style,
        offset,
        key,
        timeStamp
    ];
}
/**
 * The base type for all serialized nodes
 */ /**
 * EXPERIMENTAL
 * The configuration of a node returned by LexicalNode.$config()
 *
 * @example
 * ```ts
 * class CustomText extends TextNode {
 *   $config() {
 *     return this.config('custom-text', {extends: TextNode}};
 *   }
 * }
 * ```
 */ /**
 * This is the type of LexicalNode.$config() that can be
 * overridden by subclasses.
 */ /**
 * Used to extract the node and type from a StaticNodeConfigRecord
 */ /**
 * Any StaticNodeConfigValue (for generics and collections)
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
/**
 * @internal
 *
 * This is the more specific type than BaseStaticNodeConfig that a subclass
 * should return from $config()
 */ /**
 * Extract the type from a node based on its $config
 *
 * @example
 * ```ts
 * type TextNodeType = GetStaticNodeType<TextNode>;
 *      // ? 'text'
 * ```
 */ /**
 * The most precise type we can infer for the JSON that will
 * be produced by T.exportJSON().
 *
 * Do not use this for the return type of T.exportJSON()! It must be
 * a more generic type to be compatible with subclassing.
 */ /**
 * Omit the children, type, and version properties from the given SerializedLexicalNode definition.
 */ /** @internal */ function $removeNode(nodeToRemove, restoreSelection, preserveEmptyParent) {
    errorOnReadOnly();
    const key = nodeToRemove.__key;
    const parent = nodeToRemove.getParent();
    if (parent === null) {
        return;
    }
    const selection = $maybeMoveChildrenSelectionToParent(nodeToRemove);
    let selectionMoved = false;
    if ($isRangeSelection(selection) && restoreSelection) {
        const anchor = selection.anchor;
        const focus = selection.focus;
        if (anchor.key === key) {
            moveSelectionPointToSibling(anchor, nodeToRemove, parent, nodeToRemove.getPreviousSibling(), nodeToRemove.getNextSibling());
            selectionMoved = true;
        }
        if (focus.key === key) {
            moveSelectionPointToSibling(focus, nodeToRemove, parent, nodeToRemove.getPreviousSibling(), nodeToRemove.getNextSibling());
            selectionMoved = true;
        }
    } else if ($isNodeSelection(selection) && restoreSelection && nodeToRemove.isSelected()) {
        nodeToRemove.selectPrevious();
    }
    if ($isRangeSelection(selection) && restoreSelection && !selectionMoved) {
        // Doing this is O(n) so lets avoid it unless we need to do it
        const index = nodeToRemove.getIndexWithinParent();
        removeFromParent(nodeToRemove);
        $updateElementSelectionOnCreateDeleteNode(selection, parent, index, -1);
    } else {
        removeFromParent(nodeToRemove);
    }
    if (!preserveEmptyParent && !$isRootOrShadowRoot(parent) && !parent.canBeEmpty() && parent.isEmpty()) {
        $removeNode(parent, restoreSelection);
    }
    if (restoreSelection && selection && $isRootNode(parent) && parent.isEmpty()) {
        parent.selectEnd();
    }
}
/**
 * An identity function that will infer the type of DOM nodes
 * based on tag names to make it easier to construct a
 * DOMConversionMap.
 */ function buildImportMap(importMap) {
    return importMap;
}
const EPHEMERAL = Symbol.for('ephemeral');
/**
 * @internal
 * @param node any LexicalNode
 * @returns true if the node was created with {@link $cloneWithPropertiesEphemeral}
 */ function $isEphemeral(node) {
    return node[EPHEMERAL] || false;
}
/**
 * @internal
 * Mark this node as ephemeral, its instance always returns this
 * for getLatest and getWritable. It must not be added to an EditorState.
 */ function $markEphemeral(node) {
    node[EPHEMERAL] = true;
    return node;
}
class LexicalNode {
    /** @internal Allow us to look up the type including static props */ /** @internal */ __type;
    /** @internal */ //@ts-ignore We set the key in the constructor.
    __key;
    /** @internal */ __parent;
    /** @internal */ __prev;
    /** @internal */ __next;
    /** @internal */ __state;
    // Flow doesn't support abstract classes unfortunately, so we can't _force_
    // subclasses of Node to implement statics. All subclasses of Node should have
    // a static getType and clone method though. We define getType and clone here so we can call it
    // on any  Node, and we throw this error by default since the subclass should provide
    // their own implementation.
    /**
   * Returns the string type of this node. Every node must
   * implement this and it MUST BE UNIQUE amongst nodes registered
   * on the editor.
   *
   */ static getType() {
        const { ownNodeType } = getStaticNodeConfig(this);
        if (!(ownNodeType !== undefined)) {
            formatDevErrorMessage(`LexicalNode: Node ${this.name} does not implement .getType().`);
        }
        return ownNodeType;
    }
    /**
   * Clones this node, creating a new node with a different key
   * and adding it to the EditorState (but not attaching it anywhere!). All nodes must
   * implement this method.
   *
   */ static clone(_data) {
        {
            formatDevErrorMessage(`LexicalNode: Node ${this.name} does not implement .clone().`);
        }
    }
    /**
   * Override this to implement the new static node configuration protocol,
   * this method is called directly on the prototype and must not depend
   * on anything initialized in the constructor. Generally it should be
   * a trivial implementation.
   *
   * @example
   * ```ts
   * class MyNode extends TextNode {
   *   $config() {
   *     return this.config('my-node', {extends: TextNode});
   *   }
   * }
   * ```
   */ $config() {
        return {};
    }
    /**
   * This is a convenience method for $config that
   * aids in type inference. See {@link LexicalNode.$config}
   * for example usage.
   */ config(type, config) {
        const parentKlass = config.extends || Object.getPrototypeOf(this.constructor);
        Object.assign(config, {
            extends: parentKlass,
            type
        });
        return {
            [type]: config
        };
    }
    /**
   * Perform any state updates on the clone of prevNode that are not already
   * handled by the constructor call in the static clone method. If you have
   * state to update in your clone that is not handled directly by the
   * constructor, it is advisable to override this method but it is required
   * to include a call to `super.afterCloneFrom(prevNode)` in your
   * implementation. This is only intended to be called by
   * {@link $cloneWithProperties} function or via a super call.
   *
   * @example
   * ```ts
   * class ClassesTextNode extends TextNode {
   *   // Not shown: static getType, static importJSON, exportJSON, createDOM, updateDOM
   *   __classes = new Set<string>();
   *   static clone(node: ClassesTextNode): ClassesTextNode {
   *     // The inherited TextNode constructor is used here, so
   *     // classes is not set by this method.
   *     return new ClassesTextNode(node.__text, node.__key);
   *   }
   *   afterCloneFrom(node: this): void {
   *     // This calls TextNode.afterCloneFrom and LexicalNode.afterCloneFrom
   *     // for necessary state updates
   *     super.afterCloneFrom(node);
   *     this.__addClasses(node.__classes);
   *   }
   *   // This method is a private implementation detail, it is not
   *   // suitable for the public API because it does not call getWritable
   *   __addClasses(classNames: Iterable<string>): this {
   *     for (const className of classNames) {
   *       this.__classes.add(className);
   *     }
   *     return this;
   *   }
   *   addClass(...classNames: string[]): this {
   *     return this.getWritable().__addClasses(classNames);
   *   }
   *   removeClass(...classNames: string[]): this {
   *     const node = this.getWritable();
   *     for (const className of classNames) {
   *       this.__classes.delete(className);
   *     }
   *     return this;
   *   }
   *   getClasses(): Set<string> {
   *     return this.getLatest().__classes;
   *   }
   * }
   * ```
   *
   */ afterCloneFrom(prevNode) {
        if (this.__key === prevNode.__key) {
            this.__parent = prevNode.__parent;
            this.__next = prevNode.__next;
            this.__prev = prevNode.__prev;
            this.__state = prevNode.__state;
        } else if (prevNode.__state) {
            this.__state = prevNode.__state.getWritable(this);
        }
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static importDOM;
    constructor(key){
        this.__type = this.constructor.getType();
        this.__parent = null;
        this.__prev = null;
        this.__next = null;
        Object.defineProperty(this, '__state', {
            configurable: true,
            enumerable: false,
            value: undefined,
            writable: true
        });
        $setNodeKey(this, key);
        {
            if (this.__type !== 'root') {
                errorOnTypeKlassMismatch(this.__type, this.constructor);
            }
        }
    }
    // Getters and Traversers
    /**
   * Returns the string type of this node.
   */ getType() {
        return this.__type;
    }
    isInline() {
        {
            formatDevErrorMessage(`LexicalNode: Node ${this.constructor.name} does not implement .isInline().`);
        }
    }
    /**
   * Returns true if there is a path between this node and the RootNode, false otherwise.
   * This is a way of determining if the node is "attached" EditorState. Unattached nodes
   * won't be reconciled and will ultimately be cleaned up by the Lexical GC.
   */ isAttached() {
        let nodeKey = this.__key;
        while(nodeKey !== null){
            if (nodeKey === 'root') {
                return true;
            }
            const node = $getNodeByKey(nodeKey);
            if (node === null) {
                break;
            }
            nodeKey = node.__parent;
        }
        return false;
    }
    /**
   * Returns true if this node is contained within the provided Selection., false otherwise.
   * Relies on the algorithms implemented in {@link BaseSelection.getNodes} to determine
   * what's included.
   *
   * @param selection - The selection that we want to determine if the node is in.
   */ isSelected(selection) {
        const targetSelection = selection || $getSelection();
        if (targetSelection == null) {
            return false;
        }
        const isSelected = targetSelection.getNodes().some((n)=>n.__key === this.__key);
        if ($isTextNode(this)) {
            return isSelected;
        }
        // For inline images inside of element nodes.
        // Without this change the image will be selected if the cursor is before or after it.
        const isElementRangeSelection = $isRangeSelection(targetSelection) && targetSelection.anchor.type === 'element' && targetSelection.focus.type === 'element';
        if (isElementRangeSelection) {
            if (targetSelection.isCollapsed()) {
                return false;
            }
            const parentNode = this.getParent();
            if ($isDecoratorNode(this) && this.isInline() && parentNode) {
                const firstPoint = targetSelection.isBackward() ? targetSelection.focus : targetSelection.anchor;
                if (parentNode.is(firstPoint.getNode()) && firstPoint.offset === parentNode.getChildrenSize() && this.is(parentNode.getLastChild())) {
                    return false;
                }
            }
        }
        return isSelected;
    }
    /**
   * Returns this nodes key.
   */ getKey() {
        // Key is stable between copies
        return this.__key;
    }
    /**
   * Returns the zero-based index of this node within the parent.
   */ getIndexWithinParent() {
        const parent = this.getParent();
        if (parent === null) {
            return -1;
        }
        let node = parent.getFirstChild();
        let index = 0;
        while(node !== null){
            if (this.is(node)) {
                return index;
            }
            index++;
            node = node.getNextSibling();
        }
        return -1;
    }
    /**
   * Returns the parent of this node, or null if none is found.
   */ getParent() {
        const parent = this.getLatest().__parent;
        if (parent === null) {
            return null;
        }
        return $getNodeByKey(parent);
    }
    /**
   * Returns the parent of this node, or throws if none is found.
   */ getParentOrThrow() {
        const parent = this.getParent();
        if (parent === null) {
            {
                formatDevErrorMessage(`Expected node ${this.__key} to have a parent.`);
            }
        }
        return parent;
    }
    /**
   * Returns the highest (in the EditorState tree)
   * non-root ancestor of this node, or null if none is found. See {@link lexical!$isRootOrShadowRoot}
   * for more information on which Elements comprise "roots".
   */ getTopLevelElement() {
        let node = this;
        while(node !== null){
            const parent = node.getParent();
            if ($isRootOrShadowRoot(parent)) {
                if (!($isElementNode(node) || node === this && $isDecoratorNode(node))) {
                    formatDevErrorMessage(`Children of root nodes must be elements or decorators`);
                }
                return node;
            }
            node = parent;
        }
        return null;
    }
    /**
   * Returns the highest (in the EditorState tree)
   * non-root ancestor of this node, or throws if none is found. See {@link lexical!$isRootOrShadowRoot}
   * for more information on which Elements comprise "roots".
   */ getTopLevelElementOrThrow() {
        const parent = this.getTopLevelElement();
        if (parent === null) {
            {
                formatDevErrorMessage(`Expected node ${this.__key} to have a top parent element.`);
            }
        }
        return parent;
    }
    /**
   * Returns a list of the every ancestor of this node,
   * all the way up to the RootNode.
   *
   */ getParents() {
        const parents = [];
        let node = this.getParent();
        while(node !== null){
            parents.push(node);
            node = node.getParent();
        }
        return parents;
    }
    /**
   * Returns a list of the keys of every ancestor of this node,
   * all the way up to the RootNode.
   *
   */ getParentKeys() {
        const parents = [];
        let node = this.getParent();
        while(node !== null){
            parents.push(node.__key);
            node = node.getParent();
        }
        return parents;
    }
    /**
   * Returns the "previous" siblings - that is, the node that comes
   * before this one in the same parent.
   *
   */ getPreviousSibling() {
        const self = this.getLatest();
        const prevKey = self.__prev;
        return prevKey === null ? null : $getNodeByKey(prevKey);
    }
    /**
   * Returns the "previous" siblings - that is, the nodes that come between
   * this one and the first child of it's parent, inclusive.
   *
   */ getPreviousSiblings() {
        const siblings = [];
        const parent = this.getParent();
        if (parent === null) {
            return siblings;
        }
        let node = parent.getFirstChild();
        while(node !== null){
            if (node.is(this)) {
                break;
            }
            siblings.push(node);
            node = node.getNextSibling();
        }
        return siblings;
    }
    /**
   * Returns the "next" siblings - that is, the node that comes
   * after this one in the same parent
   *
   */ getNextSibling() {
        const self = this.getLatest();
        const nextKey = self.__next;
        return nextKey === null ? null : $getNodeByKey(nextKey);
    }
    /**
   * Returns all "next" siblings - that is, the nodes that come between this
   * one and the last child of it's parent, inclusive.
   *
   */ getNextSiblings() {
        const siblings = [];
        let node = this.getNextSibling();
        while(node !== null){
            siblings.push(node);
            node = node.getNextSibling();
        }
        return siblings;
    }
    /**
   * @deprecated use {@link $getCommonAncestor}
   *
   * Returns the closest common ancestor of this node and the provided one or null
   * if one cannot be found.
   *
   * @param node - the other node to find the common ancestor of.
   */ getCommonAncestor(node) {
        const a = $isElementNode(this) ? this : this.getParent();
        const b = $isElementNode(node) ? node : node.getParent();
        const result = a && b ? $getCommonAncestor(a, b) : null;
        return result ? result.commonAncestor /* TODO this type cast is a lie, but fixing it would break backwards compatibility */  : null;
    }
    /**
   * Returns true if the provided node is the exact same one as this node, from Lexical's perspective.
   * Always use this instead of referential equality.
   *
   * @param object - the node to perform the equality comparison on.
   */ is(object) {
        if (object == null) {
            return false;
        }
        return this.__key === object.__key;
    }
    /**
   * Returns true if this node logically precedes the target node in the
   * editor state, false otherwise (including if there is no common ancestor).
   *
   * Note that this notion of isBefore is based on post-order; a descendant
   * node is always before its ancestors. See also
   * {@link $getCommonAncestor} and {@link $comparePointCaretNext} for
   * more flexible ways to determine the relative positions of nodes.
   *
   * @param targetNode - the node we're testing to see if it's after this one.
   */ isBefore(targetNode) {
        const compare = $getCommonAncestor(this, targetNode);
        if (compare === null) {
            return false;
        }
        if (compare.type === 'descendant') {
            return true;
        }
        if (compare.type === 'branch') {
            return $getCommonAncestorResultBranchOrder(compare) === -1;
        }
        if (!(compare.type === 'same' || compare.type === 'ancestor')) {
            formatDevErrorMessage(`LexicalNode.isBefore: exhaustiveness check`);
        }
        return false;
    }
    /**
   * Returns true if this node is an ancestor of and distinct from the target node, false otherwise.
   *
   * @param targetNode - the would-be child node.
   */ isParentOf(targetNode) {
        const result = $getCommonAncestor(this, targetNode);
        return result !== null && result.type === 'ancestor';
    }
    // TO-DO: this function can be simplified a lot
    /**
   * Returns a list of nodes that are between this node and
   * the target node in the EditorState.
   *
   * @param targetNode - the node that marks the other end of the range of nodes to be returned.
   */ getNodesBetween(targetNode) {
        const isBefore = this.isBefore(targetNode);
        const nodes = [];
        const visited = new Set();
        let node = this;
        while(true){
            if (node === null) {
                break;
            }
            const key = node.__key;
            if (!visited.has(key)) {
                visited.add(key);
                nodes.push(node);
            }
            if (node === targetNode) {
                break;
            }
            const child = $isElementNode(node) ? isBefore ? node.getFirstChild() : node.getLastChild() : null;
            if (child !== null) {
                node = child;
                continue;
            }
            const nextSibling = isBefore ? node.getNextSibling() : node.getPreviousSibling();
            if (nextSibling !== null) {
                node = nextSibling;
                continue;
            }
            const parent = node.getParentOrThrow();
            if (!visited.has(parent.__key)) {
                nodes.push(parent);
            }
            if (parent === targetNode) {
                break;
            }
            let parentSibling = null;
            let ancestor = parent;
            do {
                if (ancestor === null) {
                    {
                        formatDevErrorMessage(`getNodesBetween: ancestor is null`);
                    }
                }
                parentSibling = isBefore ? ancestor.getNextSibling() : ancestor.getPreviousSibling();
                ancestor = ancestor.getParent();
                if (ancestor !== null) {
                    if (parentSibling === null && !visited.has(ancestor.__key)) {
                        nodes.push(ancestor);
                    }
                } else {
                    break;
                }
            }while (parentSibling === null)
            node = parentSibling;
        }
        if (!isBefore) {
            nodes.reverse();
        }
        return nodes;
    }
    /**
   * Returns true if this node has been marked dirty during this update cycle.
   *
   */ isDirty() {
        const editor = getActiveEditor();
        const dirtyLeaves = editor._dirtyLeaves;
        return dirtyLeaves !== null && dirtyLeaves.has(this.__key);
    }
    /**
   * Returns the latest version of the node from the active EditorState.
   * This is used to avoid getting values from stale node references.
   *
   */ getLatest() {
        if ($isEphemeral(this)) {
            return this;
        }
        const latest = $getNodeByKey(this.__key);
        if (latest === null) {
            {
                formatDevErrorMessage(`Lexical node does not exist in active editor state. Avoid using the same node references between nested closures from editorState.read/editor.update.`);
            }
        }
        return latest;
    }
    /**
   * Returns a mutable version of the node using {@link $cloneWithProperties}
   * if necessary. Will throw an error if called outside of a Lexical Editor
   * {@link LexicalEditor.update} callback.
   *
   */ getWritable() {
        if ($isEphemeral(this)) {
            return this;
        }
        errorOnReadOnly();
        const editorState = getActiveEditorState();
        const editor = getActiveEditor();
        const nodeMap = editorState._nodeMap;
        const key = this.__key;
        // Ensure we get the latest node from pending state
        const latestNode = this.getLatest();
        const cloneNotNeeded = editor._cloneNotNeeded;
        const selection = $getSelection();
        if (selection !== null) {
            selection.setCachedNodes(null);
        }
        if (cloneNotNeeded.has(key)) {
            // Transforms clear the dirty node set on each iteration to keep track on newly dirty nodes
            internalMarkNodeAsDirty(latestNode);
            return latestNode;
        }
        const mutableNode = $cloneWithProperties(latestNode);
        cloneNotNeeded.add(key);
        internalMarkNodeAsDirty(mutableNode);
        // Update reference in node map
        nodeMap.set(key, mutableNode);
        return mutableNode;
    }
    /**
   * Returns the text content of the node. Override this for
   * custom nodes that should have a representation in plain text
   * format (for copy + paste, for example)
   *
   */ getTextContent() {
        return '';
    }
    /**
   * Returns the length of the string produced by calling getTextContent on this node.
   *
   */ getTextContentSize() {
        return this.getTextContent().length;
    }
    // View
    /**
   * Called during the reconciliation process to determine which nodes
   * to insert into the DOM for this Lexical Node.
   *
   * This method must return exactly one HTMLElement. Nested elements are not supported.
   *
   * Do not attempt to update the Lexical EditorState during this phase of the update lifecycle.
   *
   * @param _config - allows access to things like the EditorTheme (to apply classes) during reconciliation.
   * @param _editor - allows access to the editor for context during reconciliation.
   *
   * */ createDOM(_config, _editor) {
        {
            formatDevErrorMessage(`createDOM: base method not extended`);
        }
    }
    /**
   * Called when a node changes and should update the DOM
   * in whatever way is necessary to make it align with any changes that might
   * have happened during the update.
   *
   * Returning "true" here will cause lexical to unmount and recreate the DOM node
   * (by calling createDOM). You would need to do this if the element tag changes,
   * for instance.
   *
   * */ updateDOM(_prevNode, _dom, _config) {
        {
            formatDevErrorMessage(`updateDOM: base method not extended`);
        }
    }
    /**
   * Controls how the this node is serialized to HTML. This is important for
   * copy and paste between Lexical and non-Lexical editors, or Lexical editors with different namespaces,
   * in which case the primary transfer format is HTML. It's also important if you're serializing
   * to HTML for any other reason via {@link @lexical/html!$generateHtmlFromNodes}. You could
   * also use this method to build your own HTML renderer.
   *
   * */ exportDOM(editor) {
        const element = this.createDOM(editor._config, editor);
        return {
            element
        };
    }
    /**
   * Controls how the this node is serialized to JSON. This is important for
   * copy and paste between Lexical editors sharing the same namespace. It's also important
   * if you're serializing to JSON for persistent storage somewhere.
   * See [Serialization & Deserialization](https://lexical.dev/docs/concepts/serialization#lexical---html).
   *
   * */ exportJSON() {
        // eslint-disable-next-line dot-notation
        const state = this.__state ? this.__state.toJSON() : undefined;
        return {
            type: this.__type,
            version: 1,
            ...state
        };
    }
    /**
   * Controls how the this node is deserialized from JSON. This is usually boilerplate,
   * but provides an abstraction between the node implementation and serialized interface that can
   * be important if you ever make breaking changes to a node schema (by adding or removing properties).
   * See [Serialization & Deserialization](https://lexical.dev/docs/concepts/serialization#lexical---html).
   *
   * */ static importJSON(_serializedNode) {
        {
            formatDevErrorMessage(`LexicalNode: Node ${this.name} does not implement .importJSON().`);
        }
    }
    /**
   * Update this LexicalNode instance from serialized JSON. It's recommended
   * to implement as much logic as possible in this method instead of the
   * static importJSON method, so that the functionality can be inherited in subclasses.
   *
   * The LexicalUpdateJSON utility type should be used to ignore any type, version,
   * or children properties in the JSON so that the extended JSON from subclasses
   * are acceptable parameters for the super call.
   *
   * If overridden, this method must call super.
   *
   * @example
   * ```ts
   * class MyTextNode extends TextNode {
   *   // ...
   *   static importJSON(serializedNode: SerializedMyTextNode): MyTextNode {
   *     return $createMyTextNode()
   *       .updateFromJSON(serializedNode);
   *   }
   *   updateFromJSON(
   *     serializedNode: LexicalUpdateJSON<SerializedMyTextNode>,
   *   ): this {
   *     return super.updateFromJSON(serializedNode)
   *       .setMyProperty(serializedNode.myProperty);
   *   }
   * }
   * ```
   **/ updateFromJSON(serializedNode) {
        return $updateStateFromJSON(this, serializedNode);
    }
    /**
   * @experimental
   *
   * Registers the returned function as a transform on the node during
   * Editor initialization. Most such use cases should be addressed via
   * the {@link LexicalEditor.registerNodeTransform} API.
   *
   * Experimental - use at your own risk.
   */ static transform() {
        return null;
    }
    // Setters and mutators
    /**
   * Removes this LexicalNode from the EditorState. If the node isn't re-inserted
   * somewhere, the Lexical garbage collector will eventually clean it up.
   *
   * @param preserveEmptyParent - If falsy, the node's parent will be removed if
   * it's empty after the removal operation. This is the default behavior, subject to
   * other node heuristics such as {@link ElementNode#canBeEmpty}
   * */ remove(preserveEmptyParent) {
        $removeNode(this, true, preserveEmptyParent);
    }
    /**
   * Replaces this LexicalNode with the provided node, optionally transferring the children
   * of the replaced node to the replacing node.
   *
   * @param replaceWith - The node to replace this one with.
   * @param includeChildren - Whether or not to transfer the children of this node to the replacing node.
   * */ replace(replaceWith, includeChildren) {
        errorOnReadOnly();
        let selection = $getSelection();
        if (selection !== null) {
            selection = selection.clone();
        }
        errorOnInsertTextNodeOnRoot(this, replaceWith);
        const self = this.getLatest();
        const toReplaceKey = this.__key;
        const key = replaceWith.__key;
        const writableReplaceWith = replaceWith.getWritable();
        const writableParent = this.getParentOrThrow().getWritable();
        const size = writableParent.__size;
        removeFromParent(writableReplaceWith);
        const prevSibling = self.getPreviousSibling();
        const nextSibling = self.getNextSibling();
        const prevKey = self.__prev;
        const nextKey = self.__next;
        const parentKey = self.__parent;
        $removeNode(self, false, true);
        if (prevSibling === null) {
            writableParent.__first = key;
        } else {
            const writablePrevSibling = prevSibling.getWritable();
            writablePrevSibling.__next = key;
        }
        writableReplaceWith.__prev = prevKey;
        if (nextSibling === null) {
            writableParent.__last = key;
        } else {
            const writableNextSibling = nextSibling.getWritable();
            writableNextSibling.__prev = key;
        }
        writableReplaceWith.__next = nextKey;
        writableReplaceWith.__parent = parentKey;
        writableParent.__size = size;
        if (includeChildren) {
            if (!($isElementNode(this) && $isElementNode(writableReplaceWith))) {
                formatDevErrorMessage(`includeChildren should only be true for ElementNodes`);
            }
            this.getChildren().forEach((child)=>{
                writableReplaceWith.append(child);
            });
        }
        if ($isRangeSelection(selection)) {
            $setSelection(selection);
            const anchor = selection.anchor;
            const focus = selection.focus;
            if (anchor.key === toReplaceKey) {
                $moveSelectionPointToEnd(anchor, writableReplaceWith);
            }
            if (focus.key === toReplaceKey) {
                $moveSelectionPointToEnd(focus, writableReplaceWith);
            }
        }
        if ($getCompositionKey() === toReplaceKey) {
            $setCompositionKey(key);
        }
        return writableReplaceWith;
    }
    /**
   * Inserts a node after this LexicalNode (as the next sibling).
   *
   * @param nodeToInsert - The node to insert after this one.
   * @param restoreSelection - Whether or not to attempt to resolve the
   * selection to the appropriate place after the operation is complete.
   * */ insertAfter(nodeToInsert, restoreSelection = true) {
        errorOnReadOnly();
        errorOnInsertTextNodeOnRoot(this, nodeToInsert);
        const writableSelf = this.getWritable();
        const writableNodeToInsert = nodeToInsert.getWritable();
        const oldParent = writableNodeToInsert.getParent();
        const selection = $getSelection();
        let elementAnchorSelectionOnNode = false;
        let elementFocusSelectionOnNode = false;
        if (oldParent !== null) {
            // TODO: this is O(n), can we improve?
            const oldIndex = nodeToInsert.getIndexWithinParent();
            removeFromParent(writableNodeToInsert);
            if ($isRangeSelection(selection)) {
                const oldParentKey = oldParent.__key;
                const anchor = selection.anchor;
                const focus = selection.focus;
                elementAnchorSelectionOnNode = anchor.type === 'element' && anchor.key === oldParentKey && anchor.offset === oldIndex + 1;
                elementFocusSelectionOnNode = focus.type === 'element' && focus.key === oldParentKey && focus.offset === oldIndex + 1;
            }
        }
        const nextSibling = this.getNextSibling();
        const writableParent = this.getParentOrThrow().getWritable();
        const insertKey = writableNodeToInsert.__key;
        const nextKey = writableSelf.__next;
        if (nextSibling === null) {
            writableParent.__last = insertKey;
        } else {
            const writableNextSibling = nextSibling.getWritable();
            writableNextSibling.__prev = insertKey;
        }
        writableParent.__size++;
        writableSelf.__next = insertKey;
        writableNodeToInsert.__next = nextKey;
        writableNodeToInsert.__prev = writableSelf.__key;
        writableNodeToInsert.__parent = writableSelf.__parent;
        if (restoreSelection && $isRangeSelection(selection)) {
            const index = this.getIndexWithinParent();
            $updateElementSelectionOnCreateDeleteNode(selection, writableParent, index + 1);
            const writableParentKey = writableParent.__key;
            if (elementAnchorSelectionOnNode) {
                selection.anchor.set(writableParentKey, index + 2, 'element');
            }
            if (elementFocusSelectionOnNode) {
                selection.focus.set(writableParentKey, index + 2, 'element');
            }
        }
        return nodeToInsert;
    }
    /**
   * Inserts a node before this LexicalNode (as the previous sibling).
   *
   * @param nodeToInsert - The node to insert before this one.
   * @param restoreSelection - Whether or not to attempt to resolve the
   * selection to the appropriate place after the operation is complete.
   * */ insertBefore(nodeToInsert, restoreSelection = true) {
        errorOnReadOnly();
        errorOnInsertTextNodeOnRoot(this, nodeToInsert);
        const writableSelf = this.getWritable();
        const writableNodeToInsert = nodeToInsert.getWritable();
        const insertKey = writableNodeToInsert.__key;
        removeFromParent(writableNodeToInsert);
        const prevSibling = this.getPreviousSibling();
        const writableParent = this.getParentOrThrow().getWritable();
        const prevKey = writableSelf.__prev;
        // TODO: this is O(n), can we improve?
        const index = this.getIndexWithinParent();
        if (prevSibling === null) {
            writableParent.__first = insertKey;
        } else {
            const writablePrevSibling = prevSibling.getWritable();
            writablePrevSibling.__next = insertKey;
        }
        writableParent.__size++;
        writableSelf.__prev = insertKey;
        writableNodeToInsert.__prev = prevKey;
        writableNodeToInsert.__next = writableSelf.__key;
        writableNodeToInsert.__parent = writableSelf.__parent;
        const selection = $getSelection();
        if (restoreSelection && $isRangeSelection(selection)) {
            const parent = this.getParentOrThrow();
            $updateElementSelectionOnCreateDeleteNode(selection, parent, index);
        }
        return nodeToInsert;
    }
    /**
   * Whether or not this node has a required parent. Used during copy + paste operations
   * to normalize nodes that would otherwise be orphaned. For example, ListItemNodes without
   * a ListNode parent or TextNodes with a ParagraphNode parent.
   *
   * */ isParentRequired() {
        return false;
    }
    /**
   * The creation logic for any required parent. Should be implemented if {@link isParentRequired} returns true.
   *
   * */ createParentElementNode() {
        return $createParagraphNode();
    }
    selectStart() {
        return this.selectPrevious();
    }
    selectEnd() {
        return this.selectNext(0, 0);
    }
    /**
   * Moves selection to the previous sibling of this node, at the specified offsets.
   *
   * @param anchorOffset - The anchor offset for selection.
   * @param focusOffset -  The focus offset for selection
   * */ selectPrevious(anchorOffset, focusOffset) {
        errorOnReadOnly();
        const prevSibling = this.getPreviousSibling();
        const parent = this.getParentOrThrow();
        if (prevSibling === null) {
            return parent.select(0, 0);
        }
        if ($isElementNode(prevSibling)) {
            return prevSibling.select();
        } else if (!$isTextNode(prevSibling)) {
            const index = prevSibling.getIndexWithinParent() + 1;
            return parent.select(index, index);
        }
        return prevSibling.select(anchorOffset, focusOffset);
    }
    /**
   * Moves selection to the next sibling of this node, at the specified offsets.
   *
   * @param anchorOffset - The anchor offset for selection.
   * @param focusOffset -  The focus offset for selection
   * */ selectNext(anchorOffset, focusOffset) {
        errorOnReadOnly();
        const nextSibling = this.getNextSibling();
        const parent = this.getParentOrThrow();
        if (nextSibling === null) {
            return parent.select();
        }
        if ($isElementNode(nextSibling)) {
            return nextSibling.select(0, 0);
        } else if (!$isTextNode(nextSibling)) {
            const index = nextSibling.getIndexWithinParent();
            return parent.select(index, index);
        }
        return nextSibling.select(anchorOffset, focusOffset);
    }
    /**
   * Marks a node dirty, triggering transforms and
   * forcing it to be reconciled during the update cycle.
   *
   * */ markDirty() {
        this.getWritable();
    }
    /**
   * @internal
   *
   * When the reconciler detects that a node was mutated, this method
   * may be called to restore the node to a known good state.
   */ reconcileObservedMutation(dom, editor) {
        this.markDirty();
    }
}
function errorOnTypeKlassMismatch(type, klass) {
    const registeredNode = getRegisteredNode(getActiveEditor(), type);
    // Common error - split in its own invariant
    if (registeredNode === undefined) {
        {
            formatDevErrorMessage(`Create node: Attempted to create node ${klass.name} that was not configured to be used on the editor.`);
        }
    }
    const editorKlass = registeredNode.klass;
    if (editorKlass !== klass) {
        {
            formatDevErrorMessage(`Create node: Type ${type} in node ${klass.name} does not match registered node ${editorKlass.name} with the same type`);
        }
    }
}
/**
 * Insert a series of nodes after this LexicalNode (as next siblings)
 *
 * @param firstToInsert - The first node to insert after this one.
 * @param lastToInsert - The last node to insert after this one. Must be a
 * later sibling of FirstNode. If not provided, it will be its last sibling.
 */ function insertRangeAfter(node, firstToInsert, lastToInsert) {
    const lastToInsert2 = firstToInsert.getParentOrThrow().getLastChild();
    let current = firstToInsert;
    const nodesToInsert = [
        firstToInsert
    ];
    while(current !== lastToInsert2){
        if (!current.getNextSibling()) {
            {
                formatDevErrorMessage(`insertRangeAfter: lastToInsert must be a later sibling of firstToInsert`);
            }
        }
        current = current.getNextSibling();
        nodesToInsert.push(current);
    }
    let currentNode = node;
    for (const nodeToInsert of nodesToInsert){
        currentNode = currentNode.insertAfter(nodeToInsert);
    }
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ /**
 * Common update tags used in Lexical. These tags can be used with editor.update() or $addUpdateTag()
 * to indicate the type/purpose of an update. Multiple tags can be used in a single update.
 */ /**
 * Indicates that the update is related to history operations (undo/redo)
 */ const HISTORIC_TAG = 'historic';
/**
 * Indicates that a new history entry should be pushed to the history stack
 */ const HISTORY_PUSH_TAG = 'history-push';
/**
 * Indicates that the current update should be merged with the previous history entry
 */ const HISTORY_MERGE_TAG = 'history-merge';
/**
 * Indicates that the update is related to a paste operation
 */ const PASTE_TAG = 'paste';
/**
 * Indicates that the update is related to collaborative editing
 */ const COLLABORATION_TAG = 'collaboration';
/**
 * Indicates that the update should skip collaborative sync
 */ const SKIP_COLLAB_TAG = 'skip-collab';
/**
 * Indicates that the update should skip scrolling the selection into view
 */ const SKIP_SCROLL_INTO_VIEW_TAG = 'skip-scroll-into-view';
/**
 * Indicates that the update should skip updating the DOM selection
 * This is useful when you want to make updates without changing the selection or focus
 */ const SKIP_DOM_SELECTION_TAG = 'skip-dom-selection';
/**
 * Indicates that after changing the selection, the editor should not focus itself
 * This tag is ignored if {@link SKIP_DOM_SELECTION_TAG} is used
 */ const SKIP_SELECTION_FOCUS_TAG = 'skip-selection-focus';
/**
 * The update was triggered by editor.focus()
 */ const FOCUS_TAG = 'focus';
/**
 * The set of known update tags to help with TypeScript suggestions.
 */ /**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ /** @noInheritDoc */ class LineBreakNode extends LexicalNode {
    /** @internal */ static getType() {
        return 'linebreak';
    }
    static clone(node) {
        return new LineBreakNode(node.__key);
    }
    constructor(key){
        super(key);
    }
    getTextContent() {
        return '\n';
    }
    createDOM() {
        return document.createElement('br');
    }
    updateDOM() {
        return false;
    }
    isInline() {
        return true;
    }
    static importDOM() {
        return {
            br: (node)=>{
                if (isOnlyChildInBlockNode(node) || isLastChildInBlockNode(node)) {
                    return null;
                }
                return {
                    conversion: $convertLineBreakElement,
                    priority: 0
                };
            }
        };
    }
    static importJSON(serializedLineBreakNode) {
        return $createLineBreakNode().updateFromJSON(serializedLineBreakNode);
    }
}
function $convertLineBreakElement(node) {
    return {
        node: $createLineBreakNode()
    };
}
function $createLineBreakNode() {
    return $applyNodeReplacement(new LineBreakNode());
}
function $isLineBreakNode(node) {
    return node instanceof LineBreakNode;
}
function isOnlyChildInBlockNode(node) {
    const parentElement = node.parentElement;
    if (parentElement !== null && isBlockDomNode(parentElement)) {
        const firstChild = parentElement.firstChild;
        if (firstChild === node || firstChild.nextSibling === node && isWhitespaceDomTextNode(firstChild)) {
            const lastChild = parentElement.lastChild;
            if (lastChild === node || lastChild.previousSibling === node && isWhitespaceDomTextNode(lastChild)) {
                return true;
            }
        }
    }
    return false;
}
function isLastChildInBlockNode(node) {
    const parentElement = node.parentElement;
    if (parentElement !== null && isBlockDomNode(parentElement)) {
        // check if node is first child, because only child dont count
        const firstChild = parentElement.firstChild;
        if (firstChild === node || firstChild.nextSibling === node && isWhitespaceDomTextNode(firstChild)) {
            return false;
        }
        // check if its last child
        const lastChild = parentElement.lastChild;
        if (lastChild === node || lastChild.previousSibling === node && isWhitespaceDomTextNode(lastChild)) {
            return true;
        }
    }
    return false;
}
function isWhitespaceDomTextNode(node) {
    return isDOMTextNode(node) && /^( |\t|\r?\n)+$/.test(node.textContent || '');
}
function getElementOuterTag(node, format) {
    if (format & IS_CODE) {
        return 'code';
    }
    if (format & IS_HIGHLIGHT) {
        return 'mark';
    }
    if (format & IS_SUBSCRIPT) {
        return 'sub';
    }
    if (format & IS_SUPERSCRIPT) {
        return 'sup';
    }
    return null;
}
function getElementInnerTag(node, format) {
    if (format & IS_BOLD) {
        return 'strong';
    }
    if (format & IS_ITALIC) {
        return 'em';
    }
    return 'span';
}
function setTextThemeClassNames(tag, prevFormat, nextFormat, dom, textClassNames) {
    const domClassList = dom.classList;
    // Firstly we handle the base theme.
    let classNames = getCachedClassNameArray(textClassNames, 'base');
    if (classNames !== undefined) {
        domClassList.add(...classNames);
    }
    // Secondly we handle the special case: underline + strikethrough.
    // We have to do this as we need a way to compose the fact that
    // the same CSS property will need to be used: text-decoration.
    // In an ideal world we shouldn't have to do this, but there's no
    // easy workaround for many atomic CSS systems today.
    classNames = getCachedClassNameArray(textClassNames, 'underlineStrikethrough');
    let hasUnderlineStrikethrough = false;
    const prevUnderlineStrikethrough = prevFormat & IS_UNDERLINE && prevFormat & IS_STRIKETHROUGH;
    const nextUnderlineStrikethrough = nextFormat & IS_UNDERLINE && nextFormat & IS_STRIKETHROUGH;
    if (classNames !== undefined) {
        if (nextUnderlineStrikethrough) {
            hasUnderlineStrikethrough = true;
            if (!prevUnderlineStrikethrough) {
                domClassList.add(...classNames);
            }
        } else if (prevUnderlineStrikethrough) {
            domClassList.remove(...classNames);
        }
    }
    for(const key in TEXT_TYPE_TO_FORMAT){
        const format = key;
        const flag = TEXT_TYPE_TO_FORMAT[format];
        classNames = getCachedClassNameArray(textClassNames, key);
        if (classNames !== undefined) {
            if (nextFormat & flag) {
                if (hasUnderlineStrikethrough && (key === 'underline' || key === 'strikethrough')) {
                    if (prevFormat & flag) {
                        domClassList.remove(...classNames);
                    }
                    continue;
                }
                if ((prevFormat & flag) === 0 || prevUnderlineStrikethrough && key === 'underline' || key === 'strikethrough') {
                    domClassList.add(...classNames);
                }
            } else if (prevFormat & flag) {
                domClassList.remove(...classNames);
            }
        }
    }
}
function diffComposedText(a, b) {
    const aLength = a.length;
    const bLength = b.length;
    let left = 0;
    let right = 0;
    while(left < aLength && left < bLength && a[left] === b[left]){
        left++;
    }
    while(right + left < aLength && right + left < bLength && a[aLength - right - 1] === b[bLength - right - 1]){
        right++;
    }
    return [
        left,
        aLength - left - right,
        b.slice(left, bLength - right)
    ];
}
function setTextContent(nextText, dom, node) {
    const firstChild = dom.firstChild;
    const isComposing = node.isComposing();
    // Always add a suffix if we're composing a node
    const suffix = isComposing ? COMPOSITION_SUFFIX : '';
    const text = nextText + suffix;
    if (firstChild == null) {
        dom.textContent = text;
    } else {
        const nodeValue = firstChild.nodeValue;
        if (nodeValue !== text) {
            if (isComposing || IS_FIREFOX) {
                // We also use the diff composed text for general text in FF to avoid
                // the spellcheck red line from flickering.
                const [index, remove, insert] = diffComposedText(nodeValue, text);
                if (remove !== 0) {
                    // @ts-expect-error
                    firstChild.deleteData(index, remove);
                }
                // @ts-expect-error
                firstChild.insertData(index, insert);
            } else {
                firstChild.nodeValue = text;
            }
        }
    }
}
function createTextInnerDOM(innerDOM, node, innerTag, format, text, config) {
    setTextContent(text, innerDOM, node);
    const theme = config.theme;
    // Apply theme class names
    const textClassNames = theme.text;
    if (textClassNames !== undefined) {
        setTextThemeClassNames(innerTag, 0, format, innerDOM, textClassNames);
    }
}
function wrapElementWith(element, tag) {
    const el = document.createElement(tag);
    el.appendChild(element);
    return el;
}
// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
/** @noInheritDoc */ // eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
class TextNode extends LexicalNode {
    /** @internal */ __text;
    /** @internal */ __format;
    /** @internal */ __style;
    /** @internal */ __mode;
    /** @internal */ __detail;
    static getType() {
        return 'text';
    }
    static clone(node) {
        return new TextNode(node.__text, node.__key);
    }
    afterCloneFrom(prevNode) {
        super.afterCloneFrom(prevNode);
        this.__text = prevNode.__text;
        this.__format = prevNode.__format;
        this.__style = prevNode.__style;
        this.__mode = prevNode.__mode;
        this.__detail = prevNode.__detail;
    }
    constructor(text = '', key){
        super(key);
        this.__text = text;
        this.__format = 0;
        this.__style = '';
        this.__mode = 0;
        this.__detail = 0;
    }
    /**
   * Returns a 32-bit integer that represents the TextFormatTypes currently applied to the
   * TextNode. You probably don't want to use this method directly - consider using TextNode.hasFormat instead.
   *
   * @returns a number representing the format of the text node.
   */ getFormat() {
        const self = this.getLatest();
        return self.__format;
    }
    /**
   * Returns a 32-bit integer that represents the TextDetailTypes currently applied to the
   * TextNode. You probably don't want to use this method directly - consider using TextNode.isDirectionless
   * or TextNode.isUnmergeable instead.
   *
   * @returns a number representing the detail of the text node.
   */ getDetail() {
        const self = this.getLatest();
        return self.__detail;
    }
    /**
   * Returns the mode (TextModeType) of the TextNode, which may be "normal", "token", or "segmented"
   *
   * @returns TextModeType.
   */ getMode() {
        const self = this.getLatest();
        return TEXT_TYPE_TO_MODE[self.__mode];
    }
    /**
   * Returns the styles currently applied to the node. This is analogous to CSSText in the DOM.
   *
   * @returns CSSText-like string of styles applied to the underlying DOM node.
   */ getStyle() {
        const self = this.getLatest();
        return self.__style;
    }
    /**
   * Returns whether or not the node is in "token" mode. TextNodes in token mode can be navigated through character-by-character
   * with a RangeSelection, but are deleted as a single entity (not individually by character).
   *
   * @returns true if the node is in token mode, false otherwise.
   */ isToken() {
        const self = this.getLatest();
        return self.__mode === IS_TOKEN;
    }
    /**
   *
   * @returns true if Lexical detects that an IME or other 3rd-party script is attempting to
   * mutate the TextNode, false otherwise.
   */ isComposing() {
        return this.__key === $getCompositionKey();
    }
    /**
   * Returns whether or not the node is in "segmented" mode. TextNodes in segmented mode can be navigated through character-by-character
   * with a RangeSelection, but are deleted in space-delimited "segments".
   *
   * @returns true if the node is in segmented mode, false otherwise.
   */ isSegmented() {
        const self = this.getLatest();
        return self.__mode === IS_SEGMENTED;
    }
    /**
   * Returns whether or not the node is "directionless". Directionless nodes don't respect changes between RTL and LTR modes.
   *
   * @returns true if the node is directionless, false otherwise.
   */ isDirectionless() {
        const self = this.getLatest();
        return (self.__detail & IS_DIRECTIONLESS) !== 0;
    }
    /**
   * Returns whether or not the node is unmergeable. In some scenarios, Lexical tries to merge
   * adjacent TextNodes into a single TextNode. If a TextNode is unmergeable, this won't happen.
   *
   * @returns true if the node is unmergeable, false otherwise.
   */ isUnmergeable() {
        const self = this.getLatest();
        return (self.__detail & IS_UNMERGEABLE) !== 0;
    }
    /**
   * Returns whether or not the node has the provided format applied. Use this with the human-readable TextFormatType
   * string values to get the format of a TextNode.
   *
   * @param type - the TextFormatType to check for.
   *
   * @returns true if the node has the provided format, false otherwise.
   */ hasFormat(type) {
        const formatFlag = TEXT_TYPE_TO_FORMAT[type];
        return (this.getFormat() & formatFlag) !== 0;
    }
    /**
   * Returns whether or not the node is simple text. Simple text is defined as a TextNode that has the string type "text"
   * (i.e., not a subclass) and has no mode applied to it (i.e., not segmented or token).
   *
   * @returns true if the node is simple text, false otherwise.
   */ isSimpleText() {
        return this.__type === 'text' && this.__mode === 0;
    }
    /**
   * Returns the text content of the node as a string.
   *
   * @returns a string representing the text content of the node.
   */ getTextContent() {
        const self = this.getLatest();
        return self.__text;
    }
    /**
   * Returns the format flags applied to the node as a 32-bit integer.
   *
   * @returns a number representing the TextFormatTypes applied to the node.
   */ getFormatFlags(type, alignWithFormat) {
        const self = this.getLatest();
        const format = self.__format;
        return toggleTextFormatType(format, type, alignWithFormat);
    }
    /**
   *
   * @returns true if the text node supports font styling, false otherwise.
   */ canHaveFormat() {
        return true;
    }
    /**
   * @returns true if the text node is inline, false otherwise.
   */ isInline() {
        return true;
    }
    // View
    createDOM(config, editor) {
        const format = this.__format;
        const outerTag = getElementOuterTag(this, format);
        const innerTag = getElementInnerTag(this, format);
        const tag = outerTag === null ? innerTag : outerTag;
        const dom = document.createElement(tag);
        let innerDOM = dom;
        if (this.hasFormat('code')) {
            dom.setAttribute('spellcheck', 'false');
        }
        if (outerTag !== null) {
            innerDOM = document.createElement(innerTag);
            dom.appendChild(innerDOM);
        }
        const text = this.__text;
        createTextInnerDOM(innerDOM, this, innerTag, format, text, config);
        const style = this.__style;
        if (style !== '') {
            dom.style.cssText = style;
        }
        return dom;
    }
    updateDOM(prevNode, dom, config) {
        const nextText = this.__text;
        const prevFormat = prevNode.__format;
        const nextFormat = this.__format;
        const prevOuterTag = getElementOuterTag(this, prevFormat);
        const nextOuterTag = getElementOuterTag(this, nextFormat);
        const prevInnerTag = getElementInnerTag(this, prevFormat);
        const nextInnerTag = getElementInnerTag(this, nextFormat);
        const prevTag = prevOuterTag === null ? prevInnerTag : prevOuterTag;
        const nextTag = nextOuterTag === null ? nextInnerTag : nextOuterTag;
        if (prevTag !== nextTag) {
            return true;
        }
        if (prevOuterTag === nextOuterTag && prevInnerTag !== nextInnerTag) {
            // should always be an element
            const prevInnerDOM = dom.firstChild;
            if (prevInnerDOM == null) {
                {
                    formatDevErrorMessage(`updateDOM: prevInnerDOM is null or undefined`);
                }
            }
            const nextInnerDOM = document.createElement(nextInnerTag);
            createTextInnerDOM(nextInnerDOM, this, nextInnerTag, nextFormat, nextText, config);
            dom.replaceChild(nextInnerDOM, prevInnerDOM);
            return false;
        }
        let innerDOM = dom;
        if (nextOuterTag !== null) {
            if (prevOuterTag !== null) {
                innerDOM = dom.firstChild;
                if (innerDOM == null) {
                    {
                        formatDevErrorMessage(`updateDOM: innerDOM is null or undefined`);
                    }
                }
            }
        }
        setTextContent(nextText, innerDOM, this);
        const theme = config.theme;
        // Apply theme class names
        const textClassNames = theme.text;
        if (textClassNames !== undefined && prevFormat !== nextFormat) {
            setTextThemeClassNames(nextInnerTag, prevFormat, nextFormat, innerDOM, textClassNames);
        }
        const prevStyle = prevNode.__style;
        const nextStyle = this.__style;
        if (prevStyle !== nextStyle) {
            dom.style.cssText = nextStyle;
        }
        return false;
    }
    static importDOM() {
        return {
            '#text': ()=>({
                    conversion: $convertTextDOMNode,
                    priority: 0
                }),
            b: ()=>({
                    conversion: convertBringAttentionToElement,
                    priority: 0
                }),
            code: ()=>({
                    conversion: convertTextFormatElement,
                    priority: 0
                }),
            em: ()=>({
                    conversion: convertTextFormatElement,
                    priority: 0
                }),
            i: ()=>({
                    conversion: convertTextFormatElement,
                    priority: 0
                }),
            mark: ()=>({
                    conversion: convertTextFormatElement,
                    priority: 0
                }),
            s: ()=>({
                    conversion: convertTextFormatElement,
                    priority: 0
                }),
            span: ()=>({
                    conversion: convertSpanElement,
                    priority: 0
                }),
            strong: ()=>({
                    conversion: convertTextFormatElement,
                    priority: 0
                }),
            sub: ()=>({
                    conversion: convertTextFormatElement,
                    priority: 0
                }),
            sup: ()=>({
                    conversion: convertTextFormatElement,
                    priority: 0
                }),
            u: ()=>({
                    conversion: convertTextFormatElement,
                    priority: 0
                })
        };
    }
    static importJSON(serializedNode) {
        return $createTextNode().updateFromJSON(serializedNode);
    }
    updateFromJSON(serializedNode) {
        return super.updateFromJSON(serializedNode).setTextContent(serializedNode.text).setFormat(serializedNode.format).setDetail(serializedNode.detail).setMode(serializedNode.mode).setStyle(serializedNode.style);
    }
    // This improves Lexical's basic text output in copy+paste plus
    // for headless mode where people might use Lexical to generate
    // HTML content and not have the ability to use CSS classes.
    exportDOM(editor) {
        let { element } = super.exportDOM(editor);
        if (!isHTMLElement(element)) {
            formatDevErrorMessage(`Expected TextNode createDOM to always return a HTMLElement`);
        }
        element.style.whiteSpace = 'pre-wrap';
        // Add text-transform styles for capitalization formats
        if (this.hasFormat('lowercase')) {
            element.style.textTransform = 'lowercase';
        } else if (this.hasFormat('uppercase')) {
            element.style.textTransform = 'uppercase';
        } else if (this.hasFormat('capitalize')) {
            element.style.textTransform = 'capitalize';
        }
        // This is the only way to properly add support for most clients,
        // even if it's semantically incorrect to have to resort to using
        // <b>, <u>, <s>, <i> elements.
        if (this.hasFormat('bold')) {
            element = wrapElementWith(element, 'b');
        }
        if (this.hasFormat('italic')) {
            element = wrapElementWith(element, 'i');
        }
        if (this.hasFormat('strikethrough')) {
            element = wrapElementWith(element, 's');
        }
        if (this.hasFormat('underline')) {
            element = wrapElementWith(element, 'u');
        }
        return {
            element
        };
    }
    exportJSON() {
        return {
            detail: this.getDetail(),
            format: this.getFormat(),
            mode: this.getMode(),
            style: this.getStyle(),
            text: this.getTextContent(),
            // As an exception here we invoke super at the end for historical reasons.
            // Namely, to preserve the order of the properties and not to break the tests
            // that use the serialized string representation.
            ...super.exportJSON()
        };
    }
    // Mutators
    selectionTransform(prevSelection, nextSelection) {
        return;
    }
    /**
   * Sets the node format to the provided TextFormatType or 32-bit integer. Note that the TextFormatType
   * version of the argument can only specify one format and doing so will remove all other formats that
   * may be applied to the node. For toggling behavior, consider using {@link TextNode.toggleFormat}
   *
   * @param format - TextFormatType or 32-bit integer representing the node format.
   *
   * @returns this TextNode.
   * // TODO 0.12 This should just be a `string`.
   */ setFormat(format) {
        const self = this.getWritable();
        self.__format = typeof format === 'string' ? TEXT_TYPE_TO_FORMAT[format] : format;
        return self;
    }
    /**
   * Sets the node detail to the provided TextDetailType or 32-bit integer. Note that the TextDetailType
   * version of the argument can only specify one detail value and doing so will remove all other detail values that
   * may be applied to the node. For toggling behavior, consider using {@link TextNode.toggleDirectionless}
   * or {@link TextNode.toggleUnmergeable}
   *
   * @param detail - TextDetailType or 32-bit integer representing the node detail.
   *
   * @returns this TextNode.
   * // TODO 0.12 This should just be a `string`.
   */ setDetail(detail) {
        const self = this.getWritable();
        self.__detail = typeof detail === 'string' ? DETAIL_TYPE_TO_DETAIL[detail] : detail;
        return self;
    }
    /**
   * Sets the node style to the provided CSSText-like string. Set this property as you
   * would an HTMLElement style attribute to apply inline styles to the underlying DOM Element.
   *
   * @param style - CSSText to be applied to the underlying HTMLElement.
   *
   * @returns this TextNode.
   */ setStyle(style) {
        const self = this.getWritable();
        self.__style = style;
        return self;
    }
    /**
   * Applies the provided format to this TextNode if it's not present. Removes it if it's present.
   * The subscript and superscript formats are mutually exclusive.
   * Prefer using this method to turn specific formats on and off.
   *
   * @param type - TextFormatType to toggle.
   *
   * @returns this TextNode.
   */ toggleFormat(type) {
        const format = this.getFormat();
        const newFormat = toggleTextFormatType(format, type, null);
        return this.setFormat(newFormat);
    }
    /**
   * Toggles the directionless detail value of the node. Prefer using this method over setDetail.
   *
   * @returns this TextNode.
   */ toggleDirectionless() {
        const self = this.getWritable();
        self.__detail ^= IS_DIRECTIONLESS;
        return self;
    }
    /**
   * Toggles the unmergeable detail value of the node. Prefer using this method over setDetail.
   *
   * @returns this TextNode.
   */ toggleUnmergeable() {
        const self = this.getWritable();
        self.__detail ^= IS_UNMERGEABLE;
        return self;
    }
    /**
   * Sets the mode of the node.
   *
   * @returns this TextNode.
   */ setMode(type) {
        const mode = TEXT_MODE_TO_TYPE[type];
        if (this.__mode === mode) {
            return this;
        }
        const self = this.getWritable();
        self.__mode = mode;
        return self;
    }
    /**
   * Sets the text content of the node.
   *
   * @param text - the string to set as the text value of the node.
   *
   * @returns this TextNode.
   */ setTextContent(text) {
        if (this.__text === text) {
            return this;
        }
        const self = this.getWritable();
        self.__text = text;
        return self;
    }
    /**
   * Sets the current Lexical selection to be a RangeSelection with anchor and focus on this TextNode at the provided offsets.
   *
   * @param _anchorOffset - the offset at which the Selection anchor will be placed.
   * @param _focusOffset - the offset at which the Selection focus will be placed.
   *
   * @returns the new RangeSelection.
   */ select(_anchorOffset, _focusOffset) {
        errorOnReadOnly();
        let anchorOffset = _anchorOffset;
        let focusOffset = _focusOffset;
        const selection = $getSelection();
        const text = this.getTextContent();
        const key = this.__key;
        if (typeof text === 'string') {
            const lastOffset = text.length;
            if (anchorOffset === undefined) {
                anchorOffset = lastOffset;
            }
            if (focusOffset === undefined) {
                focusOffset = lastOffset;
            }
        } else {
            anchorOffset = 0;
            focusOffset = 0;
        }
        if (!$isRangeSelection(selection)) {
            return $internalMakeRangeSelection(key, anchorOffset, key, focusOffset, 'text', 'text');
        } else {
            const compositionKey = $getCompositionKey();
            if (compositionKey === selection.anchor.key || compositionKey === selection.focus.key) {
                $setCompositionKey(key);
            }
            selection.setTextNodeRange(this, anchorOffset, this, focusOffset);
        }
        return selection;
    }
    selectStart() {
        return this.select(0, 0);
    }
    selectEnd() {
        const size = this.getTextContentSize();
        return this.select(size, size);
    }
    /**
   * Inserts the provided text into this TextNode at the provided offset, deleting the number of characters
   * specified. Can optionally calculate a new selection after the operation is complete.
   *
   * @param offset - the offset at which the splice operation should begin.
   * @param delCount - the number of characters to delete, starting from the offset.
   * @param newText - the text to insert into the TextNode at the offset.
   * @param moveSelection - optional, whether or not to move selection to the end of the inserted substring.
   *
   * @returns this TextNode.
   */ spliceText(offset, delCount, newText, moveSelection) {
        const writableSelf = this.getWritable();
        const text = writableSelf.__text;
        const handledTextLength = newText.length;
        let index = offset;
        if (index < 0) {
            index = handledTextLength + index;
            if (index < 0) {
                index = 0;
            }
        }
        const selection = $getSelection();
        if (moveSelection && $isRangeSelection(selection)) {
            const newOffset = offset + handledTextLength;
            selection.setTextNodeRange(writableSelf, newOffset, writableSelf, newOffset);
        }
        const updatedText = text.slice(0, index) + newText + text.slice(index + delCount);
        writableSelf.__text = updatedText;
        return writableSelf;
    }
    /**
   * This method is meant to be overridden by TextNode subclasses to control the behavior of those nodes
   * when a user event would cause text to be inserted before them in the editor. If true, Lexical will attempt
   * to insert text into this node. If false, it will insert the text in a new sibling node.
   *
   * @returns true if text can be inserted before the node, false otherwise.
   */ canInsertTextBefore() {
        return true;
    }
    /**
   * This method is meant to be overridden by TextNode subclasses to control the behavior of those nodes
   * when a user event would cause text to be inserted after them in the editor. If true, Lexical will attempt
   * to insert text into this node. If false, it will insert the text in a new sibling node.
   *
   * @returns true if text can be inserted after the node, false otherwise.
   */ canInsertTextAfter() {
        return true;
    }
    /**
   * Splits this TextNode at the provided character offsets, forming new TextNodes from the substrings
   * formed by the split, and inserting those new TextNodes into the editor, replacing the one that was split.
   *
   * @param splitOffsets - rest param of the text content character offsets at which this node should be split.
   *
   * @returns an Array containing the newly-created TextNodes.
   */ splitText(...splitOffsets) {
        errorOnReadOnly();
        const self = this.getLatest();
        const textContent = self.getTextContent();
        if (textContent === '') {
            return [];
        }
        const key = self.__key;
        const compositionKey = $getCompositionKey();
        const textLength = textContent.length;
        splitOffsets.sort((a, b)=>a - b);
        splitOffsets.push(textLength);
        const parts = [];
        const splitOffsetsLength = splitOffsets.length;
        for(let start = 0, offsetIndex = 0; start < textLength && offsetIndex <= splitOffsetsLength; offsetIndex++){
            const end = splitOffsets[offsetIndex];
            if (end > start) {
                parts.push(textContent.slice(start, end));
                start = end;
            }
        }
        const partsLength = parts.length;
        if (partsLength === 1) {
            return [
                self
            ];
        }
        const firstPart = parts[0];
        const parent = self.getParent();
        let writableNode;
        const format = self.getFormat();
        const style = self.getStyle();
        const detail = self.__detail;
        let hasReplacedSelf = false;
        // Prepare to handle selection
        let startTextPoint = null;
        let endTextPoint = null;
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
            const [startPoint, endPoint] = selection.isBackward() ? [
                selection.focus,
                selection.anchor
            ] : [
                selection.anchor,
                selection.focus
            ];
            if (startPoint.type === 'text' && startPoint.key === key) {
                startTextPoint = startPoint;
            }
            if (endPoint.type === 'text' && endPoint.key === key) {
                endTextPoint = endPoint;
            }
        }
        if (self.isSegmented()) {
            // Create a new TextNode
            writableNode = $createTextNode(firstPart);
            writableNode.__format = format;
            writableNode.__style = style;
            writableNode.__detail = detail;
            writableNode.__state = $cloneNodeState(self, writableNode);
            hasReplacedSelf = true;
        } else {
            // For the first part, update the existing node
            writableNode = self.setTextContent(firstPart);
        }
        // Then handle all other parts
        const splitNodes = [
            writableNode
        ];
        for(let i = 1; i < partsLength; i++){
            const part = parts[i];
            const sibling = $createTextNode(part);
            sibling.__format = format;
            sibling.__style = style;
            sibling.__detail = detail;
            sibling.__state = $cloneNodeState(self, sibling);
            const siblingKey = sibling.__key;
            if (compositionKey === key) {
                $setCompositionKey(siblingKey);
            }
            splitNodes.push(sibling);
        }
        // Move the selection to the best location in the split string.
        // The end point is always left-biased, and the start point is
        // generally left biased unless the end point would land on a
        // later node in the split in which case it will prefer the start
        // of that node so they will tend to be on the same node.
        const originalStartOffset = startTextPoint ? startTextPoint.offset : null;
        const originalEndOffset = endTextPoint ? endTextPoint.offset : null;
        let startOffset = 0;
        for (const node of splitNodes){
            if (!(startTextPoint || endTextPoint)) {
                break;
            }
            const endOffset = startOffset + node.getTextContentSize();
            if (startTextPoint !== null && originalStartOffset !== null && originalStartOffset <= endOffset && originalStartOffset >= startOffset) {
                // Set the start point to the first valid node
                startTextPoint.set(node.getKey(), originalStartOffset - startOffset, 'text');
                if (originalStartOffset < endOffset) {
                    // The start isn't on a border so we can stop checking
                    startTextPoint = null;
                }
            }
            if (endTextPoint !== null && originalEndOffset !== null && originalEndOffset <= endOffset && originalEndOffset >= startOffset) {
                endTextPoint.set(node.getKey(), originalEndOffset - startOffset, 'text');
                break;
            }
            startOffset = endOffset;
        }
        // Insert the nodes into the parent's children
        if (parent !== null) {
            internalMarkSiblingsAsDirty(this);
            const writableParent = parent.getWritable();
            const insertionIndex = this.getIndexWithinParent();
            if (hasReplacedSelf) {
                writableParent.splice(insertionIndex, 0, splitNodes);
                this.remove();
            } else {
                writableParent.splice(insertionIndex, 1, splitNodes);
            }
            if ($isRangeSelection(selection)) {
                $updateElementSelectionOnCreateDeleteNode(selection, parent, insertionIndex, partsLength - 1);
            }
        }
        return splitNodes;
    }
    /**
   * Merges the target TextNode into this TextNode, removing the target node.
   *
   * @param target - the TextNode to merge into this one.
   *
   * @returns this TextNode.
   */ mergeWithSibling(target) {
        const isBefore = target === this.getPreviousSibling();
        if (!isBefore && target !== this.getNextSibling()) {
            {
                formatDevErrorMessage(`mergeWithSibling: sibling must be a previous or next sibling`);
            }
        }
        const key = this.__key;
        const targetKey = target.__key;
        const text = this.__text;
        const textLength = text.length;
        const compositionKey = $getCompositionKey();
        if (compositionKey === targetKey) {
            $setCompositionKey(key);
        }
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
            const anchor = selection.anchor;
            const focus = selection.focus;
            if (anchor !== null && anchor.key === targetKey) {
                adjustPointOffsetForMergedSibling(anchor, isBefore, key, target, textLength);
            }
            if (focus !== null && focus.key === targetKey) {
                adjustPointOffsetForMergedSibling(focus, isBefore, key, target, textLength);
            }
        }
        const targetText = target.__text;
        const newText = isBefore ? targetText + text : text + targetText;
        this.setTextContent(newText);
        const writableSelf = this.getWritable();
        target.remove();
        return writableSelf;
    }
    /**
   * This method is meant to be overridden by TextNode subclasses to control the behavior of those nodes
   * when used with the registerLexicalTextEntity function. If you're using registerLexicalTextEntity, the
   * node class that you create and replace matched text with should return true from this method.
   *
   * @returns true if the node is to be treated as a "text entity", false otherwise.
   */ isTextEntity() {
        return false;
    }
}
function convertSpanElement(domNode) {
    // domNode is a <span> since we matched it by nodeName
    const span = domNode;
    const style = span.style;
    return {
        forChild: applyTextFormatFromStyle(style),
        node: null
    };
}
function convertBringAttentionToElement(domNode) {
    // domNode is a <b> since we matched it by nodeName
    const b = domNode;
    // Google Docs wraps all copied HTML in a <b> with font-weight normal
    const hasNormalFontWeight = b.style.fontWeight === 'normal';
    return {
        forChild: applyTextFormatFromStyle(b.style, hasNormalFontWeight ? undefined : 'bold'),
        node: null
    };
}
const preParentCache = new WeakMap();
function isNodePre(node) {
    if (!isHTMLElement(node)) {
        return false;
    } else if (node.nodeName === 'PRE') {
        return true;
    }
    const whiteSpace = node.style.whiteSpace;
    return typeof whiteSpace === 'string' && whiteSpace.startsWith('pre');
}
function findParentPreDOMNode(node) {
    let cached;
    let parent = node.parentNode;
    const visited = [
        node
    ];
    while(parent !== null && (cached = preParentCache.get(parent)) === undefined && !isNodePre(parent)){
        visited.push(parent);
        parent = parent.parentNode;
    }
    const resultNode = cached === undefined ? parent : cached;
    for(let i = 0; i < visited.length; i++){
        preParentCache.set(visited[i], resultNode);
    }
    return resultNode;
}
function $convertTextDOMNode(domNode) {
    const domNode_ = domNode;
    const parentDom = domNode.parentElement;
    if (!(parentDom !== null)) {
        formatDevErrorMessage(`Expected parentElement of Text not to be null`);
    }
    let textContent = domNode_.textContent || '';
    // No collapse and preserve segment break for pre, pre-wrap and pre-line
    if (findParentPreDOMNode(domNode_) !== null) {
        const parts = textContent.split(/(\r?\n|\t)/);
        const nodes = [];
        const length = parts.length;
        for(let i = 0; i < length; i++){
            const part = parts[i];
            if (part === '\n' || part === '\r\n') {
                nodes.push($createLineBreakNode());
            } else if (part === '\t') {
                nodes.push($createTabNode());
            } else if (part !== '') {
                nodes.push($createTextNode(part));
            }
        }
        return {
            node: nodes
        };
    }
    textContent = textContent.replace(/\r/g, '').replace(/[ \t\n]+/g, ' ');
    if (textContent === '') {
        return {
            node: null
        };
    }
    if (textContent[0] === ' ') {
        // Traverse backward while in the same line. If content contains new line or tab -> potential
        // delete, other elements can borrow from this one. Deletion depends on whether it's also the
        // last space (see next condition: textContent[textContent.length - 1] === ' '))
        let previousText = domNode_;
        let isStartOfLine = true;
        while(previousText !== null && (previousText = findTextInLine(previousText, false)) !== null){
            const previousTextContent = previousText.textContent || '';
            if (previousTextContent.length > 0) {
                if (/[ \t\n]$/.test(previousTextContent)) {
                    textContent = textContent.slice(1);
                }
                isStartOfLine = false;
                break;
            }
        }
        if (isStartOfLine) {
            textContent = textContent.slice(1);
        }
    }
    if (textContent[textContent.length - 1] === ' ') {
        // Traverse forward while in the same line, preserve if next inline will require a space
        let nextText = domNode_;
        let isEndOfLine = true;
        while(nextText !== null && (nextText = findTextInLine(nextText, true)) !== null){
            const nextTextContent = (nextText.textContent || '').replace(/^( |\t|\r?\n)+/, '');
            if (nextTextContent.length > 0) {
                isEndOfLine = false;
                break;
            }
        }
        if (isEndOfLine) {
            textContent = textContent.slice(0, textContent.length - 1);
        }
    }
    if (textContent === '') {
        return {
            node: null
        };
    }
    return {
        node: $createTextNode(textContent)
    };
}
function findTextInLine(text, forward) {
    let node = text;
    // eslint-disable-next-line no-constant-condition
    while(true){
        let sibling;
        while((sibling = forward ? node.nextSibling : node.previousSibling) === null){
            const parentElement = node.parentElement;
            if (parentElement === null) {
                return null;
            }
            node = parentElement;
        }
        node = sibling;
        if (isHTMLElement(node)) {
            const display = node.style.display;
            if (display === '' && !isInlineDomNode(node) || display !== '' && !display.startsWith('inline')) {
                return null;
            }
        }
        let descendant = node;
        while((descendant = forward ? node.firstChild : node.lastChild) !== null){
            node = descendant;
        }
        if (isDOMTextNode(node)) {
            return node;
        } else if (node.nodeName === 'BR') {
            return null;
        }
    }
}
const nodeNameToTextFormat = {
    code: 'code',
    em: 'italic',
    i: 'italic',
    mark: 'highlight',
    s: 'strikethrough',
    strong: 'bold',
    sub: 'subscript',
    sup: 'superscript',
    u: 'underline'
};
function convertTextFormatElement(domNode) {
    const format = nodeNameToTextFormat[domNode.nodeName.toLowerCase()];
    if (format === undefined) {
        return {
            node: null
        };
    }
    return {
        forChild: applyTextFormatFromStyle(domNode.style, format),
        node: null
    };
}
function $createTextNode(text = '') {
    return $applyNodeReplacement(new TextNode(text));
}
function $isTextNode(node) {
    return node instanceof TextNode;
}
function applyTextFormatFromStyle(style, shouldApply) {
    const fontWeight = style.fontWeight;
    const textDecoration = style.textDecoration.split(' ');
    // Google Docs uses span tags + font-weight for bold text
    const hasBoldFontWeight = fontWeight === '700' || fontWeight === 'bold';
    // Google Docs uses span tags + text-decoration: line-through for strikethrough text
    const hasLinethroughTextDecoration = textDecoration.includes('line-through');
    // Google Docs uses span tags + font-style for italic text
    const hasItalicFontStyle = style.fontStyle === 'italic';
    // Google Docs uses span tags + text-decoration: underline for underline text
    const hasUnderlineTextDecoration = textDecoration.includes('underline');
    // Google Docs uses span tags + vertical-align to specify subscript and superscript
    const verticalAlign = style.verticalAlign;
    return (lexicalNode)=>{
        if (!$isTextNode(lexicalNode)) {
            return lexicalNode;
        }
        if (hasBoldFontWeight && !lexicalNode.hasFormat('bold')) {
            lexicalNode.toggleFormat('bold');
        }
        if (hasLinethroughTextDecoration && !lexicalNode.hasFormat('strikethrough')) {
            lexicalNode.toggleFormat('strikethrough');
        }
        if (hasItalicFontStyle && !lexicalNode.hasFormat('italic')) {
            lexicalNode.toggleFormat('italic');
        }
        if (hasUnderlineTextDecoration && !lexicalNode.hasFormat('underline')) {
            lexicalNode.toggleFormat('underline');
        }
        if (verticalAlign === 'sub' && !lexicalNode.hasFormat('subscript')) {
            lexicalNode.toggleFormat('subscript');
        }
        if (verticalAlign === 'super' && !lexicalNode.hasFormat('superscript')) {
            lexicalNode.toggleFormat('superscript');
        }
        if (shouldApply && !lexicalNode.hasFormat(shouldApply)) {
            lexicalNode.toggleFormat(shouldApply);
        }
        return lexicalNode;
    };
}
/** @noInheritDoc */ class TabNode extends TextNode {
    static getType() {
        return 'tab';
    }
    static clone(node) {
        return new TabNode(node.__key);
    }
    constructor(key){
        super('\t', key);
        this.__detail = IS_UNMERGEABLE;
    }
    static importDOM() {
        return null;
    }
    createDOM(config) {
        const dom = super.createDOM(config);
        const classNames = getCachedClassNameArray(config.theme, 'tab');
        if (classNames !== undefined) {
            const domClassList = dom.classList;
            domClassList.add(...classNames);
        }
        return dom;
    }
    static importJSON(serializedTabNode) {
        return $createTabNode().updateFromJSON(serializedTabNode);
    }
    setTextContent(text) {
        if (!(text === '\t' || text === '')) {
            formatDevErrorMessage(`TabNode does not support setTextContent`);
        }
        return super.setTextContent('\t');
    }
    spliceText(offset, delCount, newText, moveSelection) {
        if (!(newText === '' && delCount === 0 || newText === '\t' && delCount === 1)) {
            formatDevErrorMessage(`TabNode does not support spliceText`);
        }
        return this;
    }
    setDetail(detail) {
        if (!(detail === IS_UNMERGEABLE)) {
            formatDevErrorMessage(`TabNode does not support setDetail`);
        }
        return this;
    }
    setMode(type) {
        if (!(type === 'normal')) {
            formatDevErrorMessage(`TabNode does not support setMode`);
        }
        return this;
    }
    canInsertTextBefore() {
        return false;
    }
    canInsertTextAfter() {
        return false;
    }
}
function $createTabNode() {
    return $applyNodeReplacement(new TabNode());
}
function $isTabNode(node) {
    return node instanceof TabNode;
}
class Point {
    key;
    offset;
    type;
    _selection;
    constructor(key, offset, type){
        {
            // This prevents a circular reference error when serialized as JSON,
            // which happens on unit test failures
            Object.defineProperty(this, '_selection', {
                enumerable: false,
                writable: true
            });
        }
        this._selection = null;
        this.key = key;
        this.offset = offset;
        this.type = type;
    }
    is(point) {
        return this.key === point.key && this.offset === point.offset && this.type === point.type;
    }
    isBefore(b) {
        if (this.key === b.key) {
            return this.offset < b.offset;
        }
        const aCaret = $normalizeCaret($caretFromPoint(this, 'next'));
        const bCaret = $normalizeCaret($caretFromPoint(b, 'next'));
        return $comparePointCaretNext(aCaret, bCaret) < 0;
    }
    getNode() {
        const key = this.key;
        const node = $getNodeByKey(key);
        if (node === null) {
            {
                formatDevErrorMessage(`Point.getNode: node not found`);
            }
        }
        return node;
    }
    set(key, offset, type, onlyIfChanged) {
        const selection = this._selection;
        const oldKey = this.key;
        if (onlyIfChanged && this.key === key && this.offset === offset && this.type === type) {
            return;
        }
        this.key = key;
        this.offset = offset;
        this.type = type;
        {
            const node = $getNodeByKey(key);
            if (!(type === 'text' ? $isTextNode(node) : $isElementNode(node))) {
                formatDevErrorMessage(`PointType.set: node with key ${key} is ${node ? node.__type : '[not found]'} and can not be used for a ${type} point`);
            }
        }
        if (!isCurrentlyReadOnlyMode()) {
            if ($getCompositionKey() === oldKey) {
                $setCompositionKey(key);
            }
            if (selection !== null) {
                selection.setCachedNodes(null);
                selection.dirty = true;
            }
        }
    }
}
function $createPoint(key, offset, type) {
    // @ts-expect-error: intentionally cast as we use a class for perf reasons
    return new Point(key, offset, type);
}
function selectPointOnNode(point, node) {
    let key = node.__key;
    let offset = point.offset;
    let type = 'element';
    if ($isTextNode(node)) {
        type = 'text';
        const textContentLength = node.getTextContentSize();
        if (offset > textContentLength) {
            offset = textContentLength;
        }
    } else if (!$isElementNode(node)) {
        const nextSibling = node.getNextSibling();
        if ($isTextNode(nextSibling)) {
            key = nextSibling.__key;
            offset = 0;
            type = 'text';
        } else {
            const parentNode = node.getParent();
            if (parentNode) {
                key = parentNode.__key;
                offset = node.getIndexWithinParent() + 1;
            }
        }
    }
    point.set(key, offset, type);
}
function $moveSelectionPointToEnd(point, node) {
    if ($isElementNode(node)) {
        const lastNode = node.getLastDescendant();
        if ($isElementNode(lastNode) || $isTextNode(lastNode)) {
            selectPointOnNode(point, lastNode);
        } else {
            selectPointOnNode(point, node);
        }
    } else {
        selectPointOnNode(point, node);
    }
}
function $transferStartingElementPointToTextPoint(start, end, format, style) {
    const element = start.getNode();
    const placementNode = element.getChildAtIndex(start.offset);
    const textNode = $createTextNode();
    textNode.setFormat(format);
    textNode.setStyle(style);
    if ($isParagraphNode(placementNode)) {
        placementNode.splice(0, 0, [
            textNode
        ]);
    } else {
        const target = $isRootNode(element) ? $createParagraphNode().append(textNode) : textNode;
        if (placementNode === null) {
            element.append(target);
        } else {
            placementNode.insertBefore(target);
        }
    }
    // Transfer the element point to a text point.
    if (start.is(end)) {
        end.set(textNode.__key, 0, 'text');
    }
    start.set(textNode.__key, 0, 'text');
}
class NodeSelection {
    _nodes;
    _cachedNodes;
    dirty;
    constructor(objects){
        this._cachedNodes = null;
        this._nodes = objects;
        this.dirty = false;
    }
    getCachedNodes() {
        return this._cachedNodes;
    }
    setCachedNodes(nodes) {
        this._cachedNodes = nodes;
    }
    is(selection) {
        if (!$isNodeSelection(selection)) {
            return false;
        }
        const a = this._nodes;
        const b = selection._nodes;
        return a.size === b.size && Array.from(a).every((key)=>b.has(key));
    }
    isCollapsed() {
        return false;
    }
    isBackward() {
        return false;
    }
    getStartEndPoints() {
        return null;
    }
    add(key) {
        this.dirty = true;
        this._nodes.add(key);
        this._cachedNodes = null;
    }
    delete(key) {
        this.dirty = true;
        this._nodes.delete(key);
        this._cachedNodes = null;
    }
    clear() {
        this.dirty = true;
        this._nodes.clear();
        this._cachedNodes = null;
    }
    has(key) {
        return this._nodes.has(key);
    }
    clone() {
        return new NodeSelection(new Set(this._nodes));
    }
    extract() {
        return this.getNodes();
    }
    insertRawText(text) {
    // Do nothing?
    }
    insertText() {
    // Do nothing?
    }
    insertNodes(nodes) {
        const selectedNodes = this.getNodes();
        const selectedNodesLength = selectedNodes.length;
        const lastSelectedNode = selectedNodes[selectedNodesLength - 1];
        let selectionAtEnd;
        // Insert nodes
        if ($isTextNode(lastSelectedNode)) {
            selectionAtEnd = lastSelectedNode.select();
        } else {
            const index = lastSelectedNode.getIndexWithinParent() + 1;
            selectionAtEnd = lastSelectedNode.getParentOrThrow().select(index, index);
        }
        selectionAtEnd.insertNodes(nodes);
        // Remove selected nodes
        for(let i = 0; i < selectedNodesLength; i++){
            selectedNodes[i].remove();
        }
    }
    getNodes() {
        const cachedNodes = this._cachedNodes;
        if (cachedNodes !== null) {
            return cachedNodes;
        }
        const objects = this._nodes;
        const nodes = [];
        for (const object of objects){
            const node = $getNodeByKey(object);
            if (node !== null) {
                nodes.push(node);
            }
        }
        if (!isCurrentlyReadOnlyMode()) {
            this._cachedNodes = nodes;
        }
        return nodes;
    }
    getTextContent() {
        const nodes = this.getNodes();
        let textContent = '';
        for(let i = 0; i < nodes.length; i++){
            textContent += nodes[i].getTextContent();
        }
        return textContent;
    }
    /**
   * Remove all nodes in the NodeSelection. If there were any nodes,
   * replace the selection with a new RangeSelection at the previous
   * location of the first node.
   */ deleteNodes() {
        const nodes = this.getNodes();
        if (($getSelection() || $getPreviousSelection()) === this && nodes[0]) {
            const firstCaret = $getSiblingCaret(nodes[0], 'next');
            $setSelectionFromCaretRange($getCaretRange(firstCaret, firstCaret));
        }
        for (const node of nodes){
            node.remove();
        }
    }
}
function $isRangeSelection(x) {
    return x instanceof RangeSelection;
}
class RangeSelection {
    format;
    style;
    anchor;
    focus;
    _cachedNodes;
    dirty;
    constructor(anchor, focus, format, style){
        this.anchor = anchor;
        this.focus = focus;
        anchor._selection = this;
        focus._selection = this;
        this._cachedNodes = null;
        this.format = format;
        this.style = style;
        this.dirty = false;
    }
    getCachedNodes() {
        return this._cachedNodes;
    }
    setCachedNodes(nodes) {
        this._cachedNodes = nodes;
    }
    /**
   * Used to check if the provided selections is equal to this one by value,
   * including anchor, focus, format, and style properties.
   * @param selection - the Selection to compare this one to.
   * @returns true if the Selections are equal, false otherwise.
   */ is(selection) {
        if (!$isRangeSelection(selection)) {
            return false;
        }
        return this.anchor.is(selection.anchor) && this.focus.is(selection.focus) && this.format === selection.format && this.style === selection.style;
    }
    /**
   * Returns whether the Selection is "collapsed", meaning the anchor and focus are
   * the same node and have the same offset.
   *
   * @returns true if the Selection is collapsed, false otherwise.
   */ isCollapsed() {
        return this.anchor.is(this.focus);
    }
    /**
   * Gets all the nodes in the Selection. Uses caching to make it generally suitable
   * for use in hot paths.
   *
   * See also the {@link CaretRange} APIs (starting with
   * {@link $caretRangeFromSelection}), which are likely to provide a better
   * foundation for any operation where partial selection is relevant
   * (e.g. the anchor or focus are inside an ElementNode and TextNode)
   *
   * @returns an Array containing all the nodes in the Selection
   */ getNodes() {
        const cachedNodes = this._cachedNodes;
        if (cachedNodes !== null) {
            return cachedNodes;
        }
        const range = $getCaretRangeInDirection($caretRangeFromSelection(this), 'next');
        const nodes = $getNodesFromCaretRangeCompat(range);
        {
            if (this.isCollapsed() && nodes.length > 1) {
                {
                    formatDevErrorMessage(`RangeSelection.getNodes() returned ${String(nodes.length)} > 1 nodes in a collapsed selection`);
                }
            }
        }
        if (!isCurrentlyReadOnlyMode()) {
            this._cachedNodes = nodes;
        }
        return nodes;
    }
    /**
   * Sets this Selection to be of type "text" at the provided anchor and focus values.
   *
   * @param anchorNode - the anchor node to set on the Selection
   * @param anchorOffset - the offset to set on the Selection
   * @param focusNode - the focus node to set on the Selection
   * @param focusOffset - the focus offset to set on the Selection
   */ setTextNodeRange(anchorNode, anchorOffset, focusNode, focusOffset) {
        this.anchor.set(anchorNode.__key, anchorOffset, 'text');
        this.focus.set(focusNode.__key, focusOffset, 'text');
    }
    /**
   * Gets the (plain) text content of all the nodes in the selection.
   *
   * @returns a string representing the text content of all the nodes in the Selection
   */ getTextContent() {
        const nodes = this.getNodes();
        if (nodes.length === 0) {
            return '';
        }
        const firstNode = nodes[0];
        const lastNode = nodes[nodes.length - 1];
        const anchor = this.anchor;
        const focus = this.focus;
        const isBefore = anchor.isBefore(focus);
        const [anchorOffset, focusOffset] = $getCharacterOffsets(this);
        let textContent = '';
        let prevWasElement = true;
        for(let i = 0; i < nodes.length; i++){
            const node = nodes[i];
            if ($isElementNode(node) && !node.isInline()) {
                if (!prevWasElement) {
                    textContent += '\n';
                }
                if (node.isEmpty()) {
                    prevWasElement = false;
                } else {
                    prevWasElement = true;
                }
            } else {
                prevWasElement = false;
                if ($isTextNode(node)) {
                    let text = node.getTextContent();
                    if (node === firstNode) {
                        if (node === lastNode) {
                            if (anchor.type !== 'element' || focus.type !== 'element' || focus.offset === anchor.offset) {
                                text = anchorOffset < focusOffset ? text.slice(anchorOffset, focusOffset) : text.slice(focusOffset, anchorOffset);
                            }
                        } else {
                            text = isBefore ? text.slice(anchorOffset) : text.slice(focusOffset);
                        }
                    } else if (node === lastNode) {
                        text = isBefore ? text.slice(0, focusOffset) : text.slice(0, anchorOffset);
                    }
                    textContent += text;
                } else if (($isDecoratorNode(node) || $isLineBreakNode(node)) && (node !== lastNode || !this.isCollapsed())) {
                    textContent += node.getTextContent();
                }
            }
        }
        return textContent;
    }
    /**
   * Attempts to map a DOM selection range onto this Lexical Selection,
   * setting the anchor, focus, and type accordingly
   *
   * @param range a DOM Selection range conforming to the StaticRange interface.
   */ applyDOMRange(range) {
        const editor = getActiveEditor();
        const currentEditorState = editor.getEditorState();
        const lastSelection = currentEditorState._selection;
        const resolvedSelectionPoints = $internalResolveSelectionPoints(range.startContainer, range.startOffset, range.endContainer, range.endOffset, editor, lastSelection);
        if (resolvedSelectionPoints === null) {
            return;
        }
        const [anchorPoint, focusPoint] = resolvedSelectionPoints;
        this.anchor.set(anchorPoint.key, anchorPoint.offset, anchorPoint.type, true);
        this.focus.set(focusPoint.key, focusPoint.offset, focusPoint.type, true);
        // Firefox will use an element point rather than a text point in some cases,
        // so we normalize for that
        $normalizeSelection(this);
    }
    /**
   * Creates a new RangeSelection, copying over all the property values from this one.
   *
   * @returns a new RangeSelection with the same property values as this one.
   */ clone() {
        const anchor = this.anchor;
        const focus = this.focus;
        const selection = new RangeSelection($createPoint(anchor.key, anchor.offset, anchor.type), $createPoint(focus.key, focus.offset, focus.type), this.format, this.style);
        return selection;
    }
    /**
   * Toggles the provided format on all the TextNodes in the Selection.
   *
   * @param format a string TextFormatType to toggle on the TextNodes in the selection
   */ toggleFormat(format) {
        this.format = toggleTextFormatType(this.format, format, null);
        this.dirty = true;
    }
    /**
   * Sets the value of the format property on the Selection
   *
   * @param format - the format to set at the value of the format property.
   */ setFormat(format) {
        this.format = format;
        this.dirty = true;
    }
    /**
   * Sets the value of the style property on the Selection
   *
   * @param style - the style to set at the value of the style property.
   */ setStyle(style) {
        this.style = style;
        this.dirty = true;
    }
    /**
   * Returns whether the provided TextFormatType is present on the Selection. This will be true if any node in the Selection
   * has the specified format.
   *
   * @param type the TextFormatType to check for.
   * @returns true if the provided format is currently toggled on on the Selection, false otherwise.
   */ hasFormat(type) {
        const formatFlag = TEXT_TYPE_TO_FORMAT[type];
        return (this.format & formatFlag) !== 0;
    }
    /**
   * Attempts to insert the provided text into the EditorState at the current Selection.
   * converts tabs, newlines, and carriage returns into LexicalNodes.
   *
   * @param text the text to insert into the Selection
   */ insertRawText(text) {
        const parts = text.split(/(\r?\n|\t)/);
        const nodes = [];
        const length = parts.length;
        for(let i = 0; i < length; i++){
            const part = parts[i];
            if (part === '\n' || part === '\r\n') {
                nodes.push($createLineBreakNode());
            } else if (part === '\t') {
                nodes.push($createTabNode());
            } else {
                nodes.push($createTextNode(part));
            }
        }
        this.insertNodes(nodes);
    }
    /**
   * Insert the provided text into the EditorState at the current Selection.
   *
   * @param text the text to insert into the Selection
   */ insertText(text) {
        // Now that "removeText" has been improved and does not depend on
        // insertText, insertText can be greatly simplified. The next
        // commented version is a WIP (about 5 tests fail).
        //
        // this.removeText();
        // if (text === '') {
        //   return;
        // }
        // const anchorNode = this.anchor.getNode();
        // const textNode = $createTextNode(text);
        // textNode.setFormat(this.format);
        // textNode.setStyle(this.style);
        // if ($isTextNode(anchorNode)) {
        //   const parent = anchorNode.getParentOrThrow();
        //   if (this.anchor.offset === 0) {
        //     if (parent.isInline() && !anchorNode.__prev) {
        //       parent.insertBefore(textNode);
        //     } else {
        //       anchorNode.insertBefore(textNode);
        //     }
        //   } else if (this.anchor.offset === anchorNode.getTextContentSize()) {
        //     if (parent.isInline() && !anchorNode.__next) {
        //       parent.insertAfter(textNode);
        //     } else {
        //       anchorNode.insertAfter(textNode);
        //     }
        //   } else {
        //     const [before] = anchorNode.splitText(this.anchor.offset);
        //     before.insertAfter(textNode);
        //   }
        // } else {
        //   anchorNode.splice(this.anchor.offset, 0, [textNode]);
        // }
        // const nodeToSelect = textNode.isAttached() ? textNode : anchorNode;
        // nodeToSelect.selectEnd();
        // // When composing, we need to adjust the anchor offset so that
        // // we correctly replace that right range.
        // if (
        //   textNode.isComposing() &&
        //   this.anchor.type === 'text' &&
        //   anchorNode.getTextContent() !== ''
        // ) {
        //   this.anchor.offset -= text.length;
        // }
        const anchor = this.anchor;
        const focus = this.focus;
        const format = this.format;
        const style = this.style;
        let firstPoint = anchor;
        let endPoint = focus;
        if (!this.isCollapsed() && focus.isBefore(anchor)) {
            firstPoint = focus;
            endPoint = anchor;
        }
        if (firstPoint.type === 'element') {
            $transferStartingElementPointToTextPoint(firstPoint, endPoint, format, style);
        }
        if (endPoint.type === 'element') {
            $setPointFromCaret(endPoint, $normalizeCaret($caretFromPoint(endPoint, 'next')));
        }
        const startOffset = firstPoint.offset;
        let endOffset = endPoint.offset;
        const selectedNodes = this.getNodes();
        const selectedNodesLength = selectedNodes.length;
        let firstNode = selectedNodes[0];
        if (!$isTextNode(firstNode)) {
            {
                formatDevErrorMessage(`insertText: first node is not a text node`);
            }
        }
        const firstNodeText = firstNode.getTextContent();
        const firstNodeTextLength = firstNodeText.length;
        const firstNodeParent = firstNode.getParentOrThrow();
        const lastIndex = selectedNodesLength - 1;
        let lastNode = selectedNodes[lastIndex];
        if (selectedNodesLength === 1 && endPoint.type === 'element') {
            endOffset = firstNodeTextLength;
            endPoint.set(firstPoint.key, endOffset, 'text');
        }
        if (this.isCollapsed() && startOffset === firstNodeTextLength && ($isTokenOrSegmented(firstNode) || !firstNode.canInsertTextAfter() || !firstNodeParent.canInsertTextAfter() && firstNode.getNextSibling() === null)) {
            let nextSibling = firstNode.getNextSibling();
            if (!$isTextNode(nextSibling) || !nextSibling.canInsertTextBefore() || $isTokenOrSegmented(nextSibling)) {
                nextSibling = $createTextNode();
                nextSibling.setFormat(format);
                nextSibling.setStyle(style);
                if (!firstNodeParent.canInsertTextAfter()) {
                    firstNodeParent.insertAfter(nextSibling);
                } else {
                    firstNode.insertAfter(nextSibling);
                }
            }
            nextSibling.select(0, 0);
            firstNode = nextSibling;
            if (text !== '') {
                this.insertText(text);
                return;
            }
        } else if (this.isCollapsed() && startOffset === 0 && ($isTokenOrSegmented(firstNode) || !firstNode.canInsertTextBefore() || !firstNodeParent.canInsertTextBefore() && firstNode.getPreviousSibling() === null)) {
            let prevSibling = firstNode.getPreviousSibling();
            if (!$isTextNode(prevSibling) || $isTokenOrSegmented(prevSibling)) {
                prevSibling = $createTextNode();
                prevSibling.setFormat(format);
                if (!firstNodeParent.canInsertTextBefore()) {
                    firstNodeParent.insertBefore(prevSibling);
                } else {
                    firstNode.insertBefore(prevSibling);
                }
            }
            prevSibling.select();
            firstNode = prevSibling;
            if (text !== '') {
                this.insertText(text);
                return;
            }
        } else if (firstNode.isSegmented() && startOffset !== firstNodeTextLength) {
            const textNode = $createTextNode(firstNode.getTextContent());
            textNode.setFormat(format);
            firstNode.replace(textNode);
            firstNode = textNode;
        } else if (!this.isCollapsed() && text !== '') {
            // When the firstNode or lastNode parents are elements that
            // do not allow text to be inserted before or after, we first
            // clear the content. Then we normalize selection, then insert
            // the new content.
            const lastNodeParent = lastNode.getParent();
            if (!firstNodeParent.canInsertTextBefore() || !firstNodeParent.canInsertTextAfter() || $isElementNode(lastNodeParent) && (!lastNodeParent.canInsertTextBefore() || !lastNodeParent.canInsertTextAfter())) {
                this.insertText('');
                $normalizeSelectionPointsForBoundaries(this.anchor, this.focus, null);
                this.insertText(text);
                return;
            }
        }
        if (selectedNodesLength === 1) {
            if ($isTokenOrTab(firstNode)) {
                const textNode = $createTextNode(text);
                textNode.select();
                firstNode.replace(textNode);
                return;
            }
            const firstNodeFormat = firstNode.getFormat();
            const firstNodeStyle = firstNode.getStyle();
            if (startOffset === endOffset && (firstNodeFormat !== format || firstNodeStyle !== style)) {
                if (firstNode.getTextContent() === '') {
                    firstNode.setFormat(format);
                    firstNode.setStyle(style);
                } else {
                    const textNode = $createTextNode(text);
                    textNode.setFormat(format);
                    textNode.setStyle(style);
                    textNode.select();
                    if (startOffset === 0) {
                        firstNode.insertBefore(textNode, false);
                    } else {
                        const [targetNode] = firstNode.splitText(startOffset);
                        targetNode.insertAfter(textNode, false);
                    }
                    // When composing, we need to adjust the anchor offset so that
                    // we correctly replace that right range.
                    if (textNode.isComposing() && this.anchor.type === 'text') {
                        this.anchor.offset -= text.length;
                    }
                    return;
                }
            } else if ($isTabNode(firstNode)) {
                // We don't need to check for delCount because there is only the entire selected node case
                // that can hit here for content size 1 and with canInsertTextBeforeAfter false
                const textNode = $createTextNode(text);
                textNode.setFormat(format);
                textNode.setStyle(style);
                textNode.select();
                firstNode.replace(textNode);
                return;
            }
            const delCount = endOffset - startOffset;
            firstNode = firstNode.spliceText(startOffset, delCount, text, true);
            if (firstNode.getTextContent() === '') {
                firstNode.remove();
            } else if (this.anchor.type === 'text') {
                if (firstNode.isComposing()) {
                    // When composing, we need to adjust the anchor offset so that
                    // we correctly replace that right range.
                    this.anchor.offset -= text.length;
                } else {
                    this.format = firstNodeFormat;
                    this.style = firstNodeStyle;
                }
            }
        } else {
            const markedNodeKeysForKeep = new Set([
                ...firstNode.getParentKeys(),
                ...lastNode.getParentKeys()
            ]);
            // We have to get the parent elements before the next section,
            // as in that section we might mutate the lastNode.
            const firstElement = $isElementNode(firstNode) ? firstNode : firstNode.getParentOrThrow();
            let lastElement = $isElementNode(lastNode) ? lastNode : lastNode.getParentOrThrow();
            let lastElementChild = lastNode;
            // If the last element is inline, we should instead look at getting
            // the nodes of its parent, rather than itself. This behavior will
            // then better match how text node insertions work. We will need to
            // also update the last element's child accordingly as we do this.
            if (!firstElement.is(lastElement) && lastElement.isInline()) {
                // Keep traversing till we have a non-inline element parent.
                do {
                    lastElementChild = lastElement;
                    lastElement = lastElement.getParentOrThrow();
                }while (lastElement.isInline())
            }
            // Handle mutations to the last node.
            if (endPoint.type === 'text' && (endOffset !== 0 || lastNode.getTextContent() === '') || endPoint.type === 'element' && lastNode.getIndexWithinParent() < endOffset) {
                if ($isTextNode(lastNode) && !$isTokenOrTab(lastNode) && endOffset !== lastNode.getTextContentSize()) {
                    if (lastNode.isSegmented()) {
                        const textNode = $createTextNode(lastNode.getTextContent());
                        lastNode.replace(textNode);
                        lastNode = textNode;
                    }
                    // root node selections only select whole nodes, so no text splice is necessary
                    if (!$isRootNode(endPoint.getNode()) && endPoint.type === 'text') {
                        lastNode = lastNode.spliceText(0, endOffset, '');
                    }
                    markedNodeKeysForKeep.add(lastNode.__key);
                } else {
                    const lastNodeParent = lastNode.getParentOrThrow();
                    if (!lastNodeParent.canBeEmpty() && lastNodeParent.getChildrenSize() === 1) {
                        lastNodeParent.remove();
                    } else {
                        lastNode.remove();
                    }
                }
            } else {
                markedNodeKeysForKeep.add(lastNode.__key);
            }
            // Either move the remaining nodes of the last parent to after
            // the first child, or remove them entirely. If the last parent
            // is the same as the first parent, this logic also works.
            const lastNodeChildren = lastElement.getChildren();
            const selectedNodesSet = new Set(selectedNodes);
            const firstAndLastElementsAreEqual = firstElement.is(lastElement);
            // We choose a target to insert all nodes after. In the case of having
            // and inline starting parent element with a starting node that has no
            // siblings, we should insert after the starting parent element, otherwise
            // we will incorrectly merge into the starting parent element.
            // TODO: should we keep on traversing parents if we're inside another
            // nested inline element?
            const insertionTarget = firstElement.isInline() && firstNode.getNextSibling() === null ? firstElement : firstNode;
            for(let i = lastNodeChildren.length - 1; i >= 0; i--){
                const lastNodeChild = lastNodeChildren[i];
                if (lastNodeChild.is(firstNode) || $isElementNode(lastNodeChild) && lastNodeChild.isParentOf(firstNode)) {
                    break;
                }
                if (lastNodeChild.isAttached()) {
                    if (!selectedNodesSet.has(lastNodeChild) || lastNodeChild.is(lastElementChild)) {
                        if (!firstAndLastElementsAreEqual) {
                            insertionTarget.insertAfter(lastNodeChild, false);
                        }
                    } else {
                        lastNodeChild.remove();
                    }
                }
            }
            if (!firstAndLastElementsAreEqual) {
                // Check if we have already moved out all the nodes of the
                // last parent, and if so, traverse the parent tree and mark
                // them all as being able to deleted too.
                let parent = lastElement;
                let lastRemovedParent = null;
                while(parent !== null){
                    const children = parent.getChildren();
                    const childrenLength = children.length;
                    if (childrenLength === 0 || children[childrenLength - 1].is(lastRemovedParent)) {
                        markedNodeKeysForKeep.delete(parent.__key);
                        lastRemovedParent = parent;
                    }
                    parent = parent.getParent();
                }
            }
            // Ensure we do splicing after moving of nodes, as splicing
            // can have side-effects (in the case of hashtags).
            if (!$isTokenOrTab(firstNode)) {
                firstNode = firstNode.spliceText(startOffset, firstNodeTextLength - startOffset, text, true);
                if (firstNode.getTextContent() === '') {
                    firstNode.remove();
                } else if (this.anchor.type === 'text') {
                    if (firstNode.isComposing()) {
                        // When composing, we need to adjust the anchor offset so that
                        // we correctly replace that right range.
                        this.anchor.offset -= text.length;
                    } else {
                        this.format = firstNode.getFormat();
                        this.style = firstNode.getStyle();
                    }
                }
            } else if (startOffset === firstNodeTextLength) {
                firstNode.select();
            } else {
                const textNode = $createTextNode(text);
                textNode.select();
                firstNode.replace(textNode);
            }
            // Remove all selected nodes that haven't already been removed.
            for(let i = 1; i < selectedNodesLength; i++){
                const selectedNode = selectedNodes[i];
                const key = selectedNode.__key;
                if (!markedNodeKeysForKeep.has(key)) {
                    selectedNode.remove();
                }
            }
        }
    }
    /**
   * Removes the text in the Selection, adjusting the EditorState accordingly.
   */ removeText() {
        const isCurrentSelection = $getSelection() === this;
        const newRange = $removeTextFromCaretRange($caretRangeFromSelection(this));
        $updateRangeSelectionFromCaretRange(this, newRange);
        if (isCurrentSelection && $getSelection() !== this) {
            $setSelection(this);
        }
    }
    // TO-DO: Migrate this method to the new utility function $forEachSelectedTextNode (share similar logic)
    /**
   * Applies the provided format to the TextNodes in the Selection, splitting or
   * merging nodes as necessary.
   *
   * @param formatType the format type to apply to the nodes in the Selection.
   * @param alignWithFormat a 32-bit integer representing formatting flags to align with.
   */ formatText(formatType, alignWithFormat = null) {
        if (this.isCollapsed()) {
            this.toggleFormat(formatType);
            // When changing format, we should stop composition
            $setCompositionKey(null);
            return;
        }
        const selectedNodes = this.getNodes();
        const selectedTextNodes = [];
        for (const selectedNode of selectedNodes){
            if ($isTextNode(selectedNode)) {
                selectedTextNodes.push(selectedNode);
            }
        }
        const applyFormatToElements = (alignWith)=>{
            selectedNodes.forEach((node)=>{
                if ($isElementNode(node)) {
                    const newFormat = node.getFormatFlags(formatType, alignWith);
                    node.setTextFormat(newFormat);
                }
            });
        };
        const selectedTextNodesLength = selectedTextNodes.length;
        if (selectedTextNodesLength === 0) {
            this.toggleFormat(formatType);
            // When changing format, we should stop composition
            $setCompositionKey(null);
            applyFormatToElements(alignWithFormat);
            return;
        }
        const anchor = this.anchor;
        const focus = this.focus;
        const isBackward = this.isBackward();
        const startPoint = isBackward ? focus : anchor;
        const endPoint = isBackward ? anchor : focus;
        let firstIndex = 0;
        let firstNode = selectedTextNodes[0];
        let startOffset = startPoint.type === 'element' ? 0 : startPoint.offset;
        // In case selection started at the end of text node use next text node
        if (startPoint.type === 'text' && startOffset === firstNode.getTextContentSize()) {
            firstIndex = 1;
            firstNode = selectedTextNodes[1];
            startOffset = 0;
        }
        if (firstNode == null) {
            return;
        }
        const firstNextFormat = firstNode.getFormatFlags(formatType, alignWithFormat);
        applyFormatToElements(firstNextFormat);
        const lastIndex = selectedTextNodesLength - 1;
        let lastNode = selectedTextNodes[lastIndex];
        const endOffset = endPoint.type === 'text' ? endPoint.offset : lastNode.getTextContentSize();
        // Single node selected
        if (firstNode.is(lastNode)) {
            // No actual text is selected, so do nothing.
            if (startOffset === endOffset) {
                return;
            }
            // The entire node is selected or it is token, so just format it
            if ($isTokenOrSegmented(firstNode) || startOffset === 0 && endOffset === firstNode.getTextContentSize()) {
                firstNode.setFormat(firstNextFormat);
            } else {
                // Node is partially selected, so split it into two nodes
                // add style the selected one.
                const splitNodes = firstNode.splitText(startOffset, endOffset);
                const replacement = startOffset === 0 ? splitNodes[0] : splitNodes[1];
                replacement.setFormat(firstNextFormat);
                // Update selection only if starts/ends on text node
                if (startPoint.type === 'text') {
                    startPoint.set(replacement.__key, 0, 'text');
                }
                if (endPoint.type === 'text') {
                    endPoint.set(replacement.__key, endOffset - startOffset, 'text');
                }
            }
            this.format = firstNextFormat;
            return;
        }
        // Multiple nodes selected
        // The entire first node isn't selected, so split it
        if (startOffset !== 0 && !$isTokenOrSegmented(firstNode)) {
            [, firstNode] = firstNode.splitText(startOffset);
            startOffset = 0;
        }
        firstNode.setFormat(firstNextFormat);
        const lastNextFormat = lastNode.getFormatFlags(formatType, firstNextFormat);
        // If the offset is 0, it means no actual characters are selected,
        // so we skip formatting the last node altogether.
        if (endOffset > 0) {
            if (endOffset !== lastNode.getTextContentSize() && !$isTokenOrSegmented(lastNode)) {
                [lastNode] = lastNode.splitText(endOffset);
            }
            lastNode.setFormat(lastNextFormat);
        }
        // Process all text nodes in between
        for(let i = firstIndex + 1; i < lastIndex; i++){
            const textNode = selectedTextNodes[i];
            const nextFormat = textNode.getFormatFlags(formatType, lastNextFormat);
            textNode.setFormat(nextFormat);
        }
        // Update selection only if starts/ends on text node
        if (startPoint.type === 'text') {
            startPoint.set(firstNode.__key, startOffset, 'text');
        }
        if (endPoint.type === 'text') {
            endPoint.set(lastNode.__key, endOffset, 'text');
        }
        this.format = firstNextFormat | lastNextFormat;
    }
    /**
   * Attempts to "intelligently" insert an arbitrary list of Lexical nodes into the EditorState at the
   * current Selection according to a set of heuristics that determine how surrounding nodes
   * should be changed, replaced, or moved to accommodate the incoming ones.
   *
   * @param nodes - the nodes to insert
   */ insertNodes(nodes) {
        if (nodes.length === 0) {
            return;
        }
        if (!this.isCollapsed()) {
            this.removeText();
        }
        if (this.anchor.key === 'root') {
            this.insertParagraph();
            const selection = $getSelection();
            if (!$isRangeSelection(selection)) {
                formatDevErrorMessage(`Expected RangeSelection after insertParagraph`);
            }
            return selection.insertNodes(nodes);
        }
        const firstPoint = this.isBackward() ? this.focus : this.anchor;
        const firstNode = firstPoint.getNode();
        const firstBlock = $findMatchingParent(firstNode, INTERNAL_$isBlock);
        const last = nodes[nodes.length - 1];
        // CASE 1: insert inside a code block
        if ($isElementNode(firstBlock) && '__language' in firstBlock) {
            if ('__language' in nodes[0]) {
                this.insertText(nodes[0].getTextContent());
            } else {
                const index = $removeTextAndSplitBlock(this);
                firstBlock.splice(index, 0, nodes);
                last.selectEnd();
            }
            return;
        }
        // CASE 2: All elements of the array are inline
        const notInline = (node)=>($isElementNode(node) || $isDecoratorNode(node)) && !node.isInline();
        if (!nodes.some(notInline)) {
            if (!$isElementNode(firstBlock)) {
                formatDevErrorMessage(`Expected node ${firstNode.constructor.name} of type ${firstNode.getType()} to have a block ElementNode ancestor`);
            }
            const index = $removeTextAndSplitBlock(this);
            firstBlock.splice(index, 0, nodes);
            last.selectEnd();
            return;
        }
        // CASE 3: At least 1 element of the array is not inline
        const blocksParent = $wrapInlineNodes(nodes);
        const nodeToSelect = blocksParent.getLastDescendant();
        const blocks = blocksParent.getChildren();
        const isMergeable = (node)=>$isElementNode(node) && INTERNAL_$isBlock(node) && !node.isEmpty() && $isElementNode(firstBlock) && (!firstBlock.isEmpty() || firstBlock.canMergeWhenEmpty());
        const shouldInsert = !$isElementNode(firstBlock) || !firstBlock.isEmpty();
        const insertedParagraph = shouldInsert ? this.insertParagraph() : null;
        const lastToInsert = blocks[blocks.length - 1];
        let firstToInsert = blocks[0];
        if (isMergeable(firstToInsert)) {
            if (!$isElementNode(firstBlock)) {
                formatDevErrorMessage(`Expected node ${firstNode.constructor.name} of type ${firstNode.getType()} to have a block ElementNode ancestor`);
            }
            firstBlock.append(...firstToInsert.getChildren());
            firstToInsert = blocks[1];
        }
        if (firstToInsert) {
            if (!(firstBlock !== null)) {
                formatDevErrorMessage(`Expected node ${firstNode.constructor.name} of type ${firstNode.getType()} to have a block ancestor`);
            }
            insertRangeAfter(firstBlock, firstToInsert);
        }
        const lastInsertedBlock = $findMatchingParent(nodeToSelect, INTERNAL_$isBlock);
        if (insertedParagraph && $isElementNode(lastInsertedBlock) && (insertedParagraph.canMergeWhenEmpty() || INTERNAL_$isBlock(lastToInsert))) {
            lastInsertedBlock.append(...insertedParagraph.getChildren());
            insertedParagraph.remove();
        }
        if ($isElementNode(firstBlock) && firstBlock.isEmpty()) {
            firstBlock.remove();
        }
        nodeToSelect.selectEnd();
        // To understand this take a look at the test "can wrap post-linebreak nodes into new element"
        const lastChild = $isElementNode(firstBlock) ? firstBlock.getLastChild() : null;
        if ($isLineBreakNode(lastChild) && lastInsertedBlock !== firstBlock) {
            lastChild.remove();
        }
    }
    /**
   * Inserts a new ParagraphNode into the EditorState at the current Selection
   *
   * @returns the newly inserted node.
   */ insertParagraph() {
        if (this.anchor.key === 'root') {
            const paragraph = $createParagraphNode();
            $getRoot().splice(this.anchor.offset, 0, [
                paragraph
            ]);
            paragraph.select();
            return paragraph;
        }
        const index = $removeTextAndSplitBlock(this);
        const block = $findMatchingParent(this.anchor.getNode(), INTERNAL_$isBlock);
        if (!$isElementNode(block)) {
            formatDevErrorMessage(`Expected ancestor to be a block ElementNode`);
        }
        const firstToAppend = block.getChildAtIndex(index);
        const nodesToInsert = firstToAppend ? [
            firstToAppend,
            ...firstToAppend.getNextSiblings()
        ] : [];
        const newBlock = block.insertNewAfter(this, false);
        if (newBlock) {
            newBlock.append(...nodesToInsert);
            newBlock.selectStart();
            return newBlock;
        }
        // if newBlock is null, it means that block is of type CodeNode.
        return null;
    }
    /**
   * Inserts a logical linebreak, which may be a new LineBreakNode or a new ParagraphNode, into the EditorState at the
   * current Selection.
   */ insertLineBreak(selectStart) {
        const lineBreak = $createLineBreakNode();
        this.insertNodes([
            lineBreak
        ]);
        // this is used in MacOS with the command 'ctrl-O' (openLineBreak)
        if (selectStart) {
            const parent = lineBreak.getParentOrThrow();
            const index = lineBreak.getIndexWithinParent();
            parent.select(index, index);
        }
    }
    /**
   * Extracts the nodes in the Selection, splitting nodes where necessary
   * to get offset-level precision.
   *
   * @returns The nodes in the Selection
   */ extract() {
        const selectedNodes = [
            ...this.getNodes()
        ];
        const selectedNodesLength = selectedNodes.length;
        let firstNode = selectedNodes[0];
        let lastNode = selectedNodes[selectedNodesLength - 1];
        const [anchorOffset, focusOffset] = $getCharacterOffsets(this);
        const isBackward = this.isBackward();
        const [startPoint, endPoint] = isBackward ? [
            this.focus,
            this.anchor
        ] : [
            this.anchor,
            this.focus
        ];
        const [startOffset, endOffset] = isBackward ? [
            focusOffset,
            anchorOffset
        ] : [
            anchorOffset,
            focusOffset
        ];
        if (selectedNodesLength === 0) {
            return [];
        } else if (selectedNodesLength === 1) {
            if ($isTextNode(firstNode) && !this.isCollapsed()) {
                const splitNodes = firstNode.splitText(startOffset, endOffset);
                const node = startOffset === 0 ? splitNodes[0] : splitNodes[1];
                if (node) {
                    startPoint.set(node.getKey(), 0, 'text');
                    endPoint.set(node.getKey(), node.getTextContentSize(), 'text');
                    return [
                        node
                    ];
                }
                return [];
            }
            return [
                firstNode
            ];
        }
        if ($isTextNode(firstNode)) {
            if (startOffset === firstNode.getTextContentSize()) {
                selectedNodes.shift();
            } else if (startOffset !== 0) {
                [, firstNode] = firstNode.splitText(startOffset);
                selectedNodes[0] = firstNode;
                startPoint.set(firstNode.getKey(), 0, 'text');
            }
        }
        if ($isTextNode(lastNode)) {
            const lastNodeText = lastNode.getTextContent();
            const lastNodeTextLength = lastNodeText.length;
            if (endOffset === 0) {
                selectedNodes.pop();
            } else if (endOffset !== lastNodeTextLength) {
                [lastNode] = lastNode.splitText(endOffset);
                selectedNodes[selectedNodes.length - 1] = lastNode;
                endPoint.set(lastNode.getKey(), lastNode.getTextContentSize(), 'text');
            }
        }
        return selectedNodes;
    }
    /**
   * Modifies the Selection according to the parameters and a set of heuristics that account for
   * various node types. Can be used to safely move or extend selection by one logical "unit" without
   * dealing explicitly with all the possible node types.
   *
   * @param alter the type of modification to perform
   * @param isBackward whether or not selection is backwards
   * @param granularity the granularity at which to apply the modification
   */ modify(alter, isBackward, granularity) {
        if ($modifySelectionAroundDecoratorsAndBlocks(this, alter, isBackward, granularity)) {
            return;
        }
        const collapse = alter === 'move';
        const editor = getActiveEditor();
        const domSelection = getDOMSelection(getWindow(editor));
        if (!domSelection) {
            return;
        }
        const blockCursorElement = editor._blockCursorElement;
        const rootElement = editor._rootElement;
        const focusNode = this.focus.getNode();
        // Remove the block cursor element if it exists. This will ensure selection
        // works as intended. If we leave it in the DOM all sorts of strange bugs
        // occur. :/
        if (rootElement !== null && blockCursorElement !== null && $isElementNode(focusNode) && !focusNode.isInline() && !focusNode.canBeEmpty()) {
            removeDOMBlockCursorElement(blockCursorElement, editor, rootElement);
        }
        if (this.dirty) {
            let nextAnchorDOM = getElementByKeyOrThrow(editor, this.anchor.key);
            let nextFocusDOM = getElementByKeyOrThrow(editor, this.focus.key);
            if (this.anchor.type === 'text') {
                nextAnchorDOM = getDOMTextNode(nextAnchorDOM);
            }
            if (this.focus.type === 'text') {
                nextFocusDOM = getDOMTextNode(nextFocusDOM);
            }
            if (nextAnchorDOM && nextFocusDOM) {
                setDOMSelectionBaseAndExtent(domSelection, nextAnchorDOM, this.anchor.offset, nextFocusDOM, this.focus.offset);
            }
        }
        // We use the DOM selection.modify API here to "tell" us what the selection
        // will be. We then use it to update the Lexical selection accordingly. This
        // is much more reliable than waiting for a beforeinput and using the ranges
        // from getTargetRanges(), and is also better than trying to do it ourselves
        // using Intl.Segmenter or other workarounds that struggle with word segments
        // and line segments (especially with word wrapping and non-Roman languages).
        moveNativeSelection(domSelection, alter, isBackward ? 'backward' : 'forward', granularity);
        // Guard against no ranges
        if (domSelection.rangeCount > 0) {
            const range = domSelection.getRangeAt(0);
            // Apply the DOM selection to our Lexical selection.
            const anchorNode = this.anchor.getNode();
            const root = $isRootNode(anchorNode) ? anchorNode : $getNearestRootOrShadowRoot(anchorNode);
            this.applyDOMRange(range);
            this.dirty = true;
            if (!collapse) {
                // Validate selection; make sure that the new extended selection respects shadow roots
                const nodes = this.getNodes();
                const validNodes = [];
                let shrinkSelection = false;
                for(let i = 0; i < nodes.length; i++){
                    const nextNode = nodes[i];
                    if ($hasAncestor(nextNode, root)) {
                        validNodes.push(nextNode);
                    } else {
                        shrinkSelection = true;
                    }
                }
                if (shrinkSelection && validNodes.length > 0) {
                    // validNodes length check is a safeguard against an invalid selection; as getNodes()
                    // will return an empty array in this case
                    if (isBackward) {
                        const firstValidNode = validNodes[0];
                        if ($isElementNode(firstValidNode)) {
                            firstValidNode.selectStart();
                        } else {
                            firstValidNode.getParentOrThrow().selectStart();
                        }
                    } else {
                        const lastValidNode = validNodes[validNodes.length - 1];
                        if ($isElementNode(lastValidNode)) {
                            lastValidNode.selectEnd();
                        } else {
                            lastValidNode.getParentOrThrow().selectEnd();
                        }
                    }
                }
                // Because a range works on start and end, we might need to flip
                // the anchor and focus points to match what the DOM has, not what
                // the range has specifically.
                if (domSelection.anchorNode !== range.startContainer || domSelection.anchorOffset !== range.startOffset) {
                    $swapPoints(this);
                }
            }
        }
        if (granularity === 'lineboundary') {
            $modifySelectionAroundDecoratorsAndBlocks(this, alter, isBackward, granularity, 'decorators');
        }
    }
    /**
   * Helper for handling forward character and word deletion that prevents element nodes
   * like a table, columns layout being destroyed
   *
   * @param anchor the anchor
   * @param anchorNode the anchor node in the selection
   * @param isBackward whether or not selection is backwards
   */ forwardDeletion(anchor, anchorNode, isBackward) {
        if (!isBackward && (// Delete forward handle case
        anchor.type === 'element' && $isElementNode(anchorNode) && anchor.offset === anchorNode.getChildrenSize() || anchor.type === 'text' && anchor.offset === anchorNode.getTextContentSize())) {
            const parent = anchorNode.getParent();
            const nextSibling = anchorNode.getNextSibling() || (parent === null ? null : parent.getNextSibling());
            if ($isElementNode(nextSibling) && nextSibling.isShadowRoot()) {
                return true;
            }
        }
        return false;
    }
    /**
   * Performs one logical character deletion operation on the EditorState based on the current Selection.
   * Handles different node types.
   *
   * @param isBackward whether or not the selection is backwards.
   */ deleteCharacter(isBackward) {
        const wasCollapsed = this.isCollapsed();
        if (this.isCollapsed()) {
            const anchor = this.anchor;
            let anchorNode = anchor.getNode();
            if (this.forwardDeletion(anchor, anchorNode, isBackward)) {
                return;
            }
            const direction = isBackward ? 'previous' : 'next';
            const initialCaret = $caretFromPoint(anchor, direction);
            const initialRange = $extendCaretToRange(initialCaret);
            if (initialRange.getTextSlices().every((slice)=>slice === null || slice.distance === 0)) {
                // There's no text in the direction of the deletion so we can explore our options
                let state = {
                    type: 'initial'
                };
                for (const caret of initialRange.iterNodeCarets('shadowRoot')){
                    if ($isChildCaret(caret)) {
                        if (caret.origin.isInline()) ;
                        else if (caret.origin.isShadowRoot()) {
                            if (state.type === 'merge-block') {
                                break;
                            }
                            // Don't merge with a shadow root block
                            if ($isElementNode(initialRange.anchor.origin) && initialRange.anchor.origin.isEmpty()) {
                                // delete an empty paragraph like the DecoratorNode case
                                const normCaret = $normalizeCaret(caret);
                                $updateRangeSelectionFromCaretRange(this, $getCaretRange(normCaret, normCaret));
                                initialRange.anchor.origin.remove();
                            }
                            return;
                        } else if (state.type === 'merge-next-block' || state.type === 'merge-block') {
                            // Keep descending ChildCaret to find which block to merge with
                            state = {
                                block: state.block,
                                caret,
                                type: 'merge-block'
                            };
                        }
                    } else if (state.type === 'merge-block') {
                        break;
                    } else if ($isSiblingCaret(caret)) {
                        if ($isElementNode(caret.origin)) {
                            if (!caret.origin.isInline()) {
                                state = {
                                    block: caret.origin,
                                    type: 'merge-next-block'
                                };
                            } else if (!caret.origin.isParentOf(initialRange.anchor.origin)) {
                                break;
                            }
                            continue;
                        } else if ($isDecoratorNode(caret.origin)) {
                            if (caret.origin.isIsolated()) ;
                            else if (state.type === 'merge-next-block' && (caret.origin.isKeyboardSelectable() || !caret.origin.isInline()) && $isElementNode(initialRange.anchor.origin) && initialRange.anchor.origin.isEmpty()) {
                                // If the anchor is an empty element that is adjacent to a
                                // decorator then we remove the paragraph and select the
                                // decorator
                                initialRange.anchor.origin.remove();
                                const nodeSelection = $createNodeSelection();
                                nodeSelection.add(caret.origin.getKey());
                                $setSelection(nodeSelection);
                            } else {
                                // When the anchor is not an empty element then the
                                // adjacent decorator is removed
                                caret.origin.remove();
                            }
                            // always stop when a decorator is encountered
                            return;
                        }
                        break;
                    }
                }
                if (state.type === 'merge-block') {
                    const { caret, block } = state;
                    $updateRangeSelectionFromCaretRange(this, $getCaretRange(!caret.origin.isEmpty() && block.isEmpty() ? $rewindSiblingCaret($getSiblingCaret(block, caret.direction)) : initialRange.anchor, caret));
                    return this.removeText();
                }
            }
            // Handle the deletion around decorators.
            const focus = this.focus;
            this.modify('extend', isBackward, 'character');
            if (!this.isCollapsed()) {
                const focusNode = focus.type === 'text' ? focus.getNode() : null;
                anchorNode = anchor.type === 'text' ? anchor.getNode() : null;
                if (focusNode !== null && focusNode.isSegmented()) {
                    const offset = focus.offset;
                    const textContentSize = focusNode.getTextContentSize();
                    if (focusNode.is(anchorNode) || isBackward && offset !== textContentSize || !isBackward && offset !== 0) {
                        $removeSegment(focusNode, isBackward, offset);
                        return;
                    }
                } else if (anchorNode !== null && anchorNode.isSegmented()) {
                    const offset = anchor.offset;
                    const textContentSize = anchorNode.getTextContentSize();
                    if (anchorNode.is(focusNode) || isBackward && offset !== 0 || !isBackward && offset !== textContentSize) {
                        $removeSegment(anchorNode, isBackward, offset);
                        return;
                    }
                }
                $updateCaretSelectionForUnicodeCharacter(this, isBackward);
            } else if (isBackward && anchor.offset === 0) {
                // Special handling around rich text nodes
                if ($collapseAtStart(this, anchor.getNode())) {
                    return;
                }
            }
        }
        this.removeText();
        if (isBackward && !wasCollapsed && this.isCollapsed() && this.anchor.type === 'element' && this.anchor.offset === 0) {
            const anchorNode = this.anchor.getNode();
            if (anchorNode.isEmpty() && $isRootNode(anchorNode.getParent()) && anchorNode.getPreviousSibling() === null) {
                $collapseAtStart(this, anchorNode);
            }
        }
    }
    /**
   * Performs one logical line deletion operation on the EditorState based on the current Selection.
   * Handles different node types.
   *
   * @param isBackward whether or not the selection is backwards.
   */ deleteLine(isBackward) {
        if (this.isCollapsed()) {
            this.modify('extend', isBackward, 'lineboundary');
        }
        if (this.isCollapsed()) {
            // If the selection was already collapsed at the lineboundary,
            // use the deleteCharacter operation to handle all of the logic associated
            // with navigating through the parent element
            this.deleteCharacter(isBackward);
        } else {
            this.removeText();
        }
    }
    /**
   * Performs one logical word deletion operation on the EditorState based on the current Selection.
   * Handles different node types.
   *
   * @param isBackward whether or not the selection is backwards.
   */ deleteWord(isBackward) {
        if (this.isCollapsed()) {
            const anchor = this.anchor;
            const anchorNode = anchor.getNode();
            if (this.forwardDeletion(anchor, anchorNode, isBackward)) {
                return;
            }
            this.modify('extend', isBackward, 'word');
        }
        this.removeText();
    }
    /**
   * Returns whether the Selection is "backwards", meaning the focus
   * logically precedes the anchor in the EditorState.
   * @returns true if the Selection is backwards, false otherwise.
   */ isBackward() {
        return this.focus.isBefore(this.anchor);
    }
    getStartEndPoints() {
        return [
            this.anchor,
            this.focus
        ];
    }
}
function $isNodeSelection(x) {
    return x instanceof NodeSelection;
}
function getCharacterOffset(point) {
    const offset = point.offset;
    if (point.type === 'text') {
        return offset;
    }
    const parent = point.getNode();
    return offset === parent.getChildrenSize() ? parent.getTextContent().length : 0;
}
function $getCharacterOffsets(selection) {
    const anchorAndFocus = selection.getStartEndPoints();
    if (anchorAndFocus === null) {
        return [
            0,
            0
        ];
    }
    const [anchor, focus] = anchorAndFocus;
    if (anchor.type === 'element' && focus.type === 'element' && anchor.key === focus.key && anchor.offset === focus.offset) {
        return [
            0,
            0
        ];
    }
    return [
        getCharacterOffset(anchor),
        getCharacterOffset(focus)
    ];
}
function $collapseAtStart(selection, startNode) {
    for(let node = startNode; node; node = node.getParent()){
        if ($isElementNode(node)) {
            if (node.collapseAtStart(selection)) {
                return true;
            }
            if ($isRootOrShadowRoot(node)) {
                break;
            }
        }
        if (node.getPreviousSibling()) {
            break;
        }
    }
    return false;
}
function $swapPoints(selection) {
    const focus = selection.focus;
    const anchor = selection.anchor;
    const anchorKey = anchor.key;
    const anchorOffset = anchor.offset;
    const anchorType = anchor.type;
    anchor.set(focus.key, focus.offset, focus.type, true);
    focus.set(anchorKey, anchorOffset, anchorType, true);
}
function moveNativeSelection(domSelection, alter, direction, granularity) {
    // Selection.modify() method applies a change to the current selection or cursor position,
    // but is still non-standard in some browsers.
    domSelection.modify(alter, direction, granularity);
}
/**
 * Called by `RangeSelection.deleteCharacter` to determine if
 * `this.modify('extend', isBackward, 'character')` extended the selection
 * further than a user would expect for that operation.
 *
 * A short(?) JavaScript string vs. Unicode primer:
 *
 * Strings in JavaScript use an UTF-16 encoding, and the offsets into a
 * string are based on those UTF-16 *code units*. This is basically a
 * historical mistake (though logical at that time, decades ago), but
 * can never really be fixed for compatibility reasons.
 *
 * In Unicode, a *code point* is the combination of one or more *code units*.
 * and the range of a *code point* can fit into 21 bits.
 *
 * Every valid *code point* can be represented with one or two
 * *UTF-16 code units*. One unit is used when the code point is in the
 * Basic Multilingual Plane (BMP) and is `< 0xFFFF`. Anything outside
 * of that plane is encoded with a *surrogate pair* of *code units* and
 * `/[\uD800-\uDBFF][\uDC00-\uDFFF]/` is a regex that you could use to
 * find any valid *surrogate pair*. As far as Unicode is concerned, these
 * pairs represent a single *code point*, but in JavaScript, these pairs
 * have a length of 2 (`pair.charCodeAt(n)` is really returning a
 * UTF-16 *code unit*, not a unicode *code point*). It is possible to request
 * a *code point* with `pair.codePointAt(0)` and enumerate code points
 * in a string with `[...string]` but the offsets we work with, and
 * the string length, are based in *code units* so that functionality
 * is unfortunately not very useful here.
 *
 * This only gets us as far as *code points*. We now know that we must
 * consider that each *code point* can have a length of 1 or 2 in JavaScript
 * string distance. It gets even trickier because the visual representation
 * of a character is a *grapheme* (approximately what the user thinks of
 * as a character). A *grapheme* is one or more *code points*, and can
 * essentially be arbitrarily long, as there are many ways to combine
 * them.
 *
 * The `this.modify(…)` call has already extended our selection by one
 * *grapheme* in the direction we want to delete. Sounds great, it's done
 * a lot of awfully tricky work for us because this functionality has only
 * recently become available in JavaScript via `Intl.Segmenter`. The
 * problem is that in many cases the expected behavior of backspace or
 * delete is *not always to delete a whole grapheme*. In some languages
 * it's always expected that backspace ought to delete one code point, not the
 * whole grapheme. In other situations such as emoji that use variation
 * selectors you *do* want to delete the whole *grapheme*.
 *
 * In a few situations the behavior is even application dependent, such as
 * with latin languages where you have multiple ways to represent the same
 * character visually (e.g. a letter with an accent in one code point, or a
 * letter followed by a combining mark in a second code point); some apps will
 * delete the whole grapheme and others will delete only the combining mark,
 * probably based on whether they perform some sort of *normalization* on their
 * input to ensure that only one form is used when two sequences of code points
 * can represent the same visual character. Lexical currently chooses not
 * to perform any normalization so this type of combining marks will be
 * deleted as a *code point* without deleting the whole *grapheme*.
 *
 * See also:
 * https://www.unicode.org/versions/Unicode16.0.0/core-spec/chapter-2/#G25564
 * https://www.unicode.org/versions/Unicode16.0.0/core-spec/chapter-3/#G30602
 * https://www.unicode.org/versions/Unicode16.0.0/core-spec/chapter-3/#G49537
 * https://mathiasbynens.be/notes/javascript-unicode
 */ function $updateCaretSelectionForUnicodeCharacter(selection, isBackward) {
    const anchor = selection.anchor;
    const focus = selection.focus;
    const anchorNode = anchor.getNode();
    const focusNode = focus.getNode();
    if (anchorNode === focusNode && anchor.type === 'text' && focus.type === 'text') {
        // Handling of multibyte characters
        const anchorOffset = anchor.offset;
        const focusOffset = focus.offset;
        const isBefore = anchorOffset < focusOffset;
        const startOffset = isBefore ? anchorOffset : focusOffset;
        const endOffset = isBefore ? focusOffset : anchorOffset;
        const characterOffset = endOffset - 1;
        if (startOffset !== characterOffset) {
            const text = anchorNode.getTextContent().slice(startOffset, endOffset);
            if (shouldDeleteExactlyOneCodeUnit(text)) {
                if (isBackward) {
                    focus.set(focus.key, characterOffset, focus.type);
                } else {
                    anchor.set(anchor.key, characterOffset, anchor.type);
                }
            }
        }
    }
}
function shouldDeleteExactlyOneCodeUnit(text) {
    {
        if (!(text.length > 1)) {
            formatDevErrorMessage(`shouldDeleteExactlyOneCodeUnit: expecting to be called only with sequences of two or more code units`);
        }
    }
    return !(doesContainSurrogatePair(text) || doesContainEmoji(text));
}
/**
 * Given the wall of text in $updateCaretSelectionForUnicodeCharacter, you'd
 * think that the solution might be complex, but the only currently known
 * cases given the above constraints where we want to delete a whole grapheme
 * are when emoji is involved. Since ES6 we can use unicode character classes
 * in regexp which makes this simple.
 *
 * It may make sense to add to this heuristic in the future if other
 * edge cases are discovered, which is why detailed notes remain.
 *
 * This is implemented with runtime feature detection and will always
 * return false on pre-2020 platforms that do not have unicode character
 * class support.
 */ const doesContainEmoji = (()=>{
    try {
        const re = new RegExp('\\p{Emoji}', 'u');
        const test = re.test.bind(re);
        // Sanity check a few emoji to make sure the regexp was parsed
        // and works correctly. Any one of these should be sufficient,
        // but they're cheap and it only runs once.
        if (// Emoji in the BMP (heart) with variation selector
        test('\u2764\ufe0f') && // Emoji in the BMP (#) with variation selector
        test('#\ufe0f\u20e3') && // Emoji outside the BMP (thumbs up) that is encoded with a surrogate pair
        test('\ud83d\udc4d')) {
            return test;
        }
    } catch (_e) {
    // SyntaxError
    }
    // fallback, surrogate pair already checked
    return ()=>false;
})();
function $removeSegment(node, isBackward, offset) {
    const textNode = node;
    const textContent = textNode.getTextContent();
    const split = textContent.split(/(?=\s)/g);
    const splitLength = split.length;
    let segmentOffset = 0;
    let restoreOffset = 0;
    for(let i = 0; i < splitLength; i++){
        const text = split[i];
        const isLast = i === splitLength - 1;
        restoreOffset = segmentOffset;
        segmentOffset += text.length;
        if (isBackward && segmentOffset === offset || segmentOffset > offset || isLast) {
            split.splice(i, 1);
            if (isLast) {
                restoreOffset = undefined;
            }
            break;
        }
    }
    const nextTextContent = split.join('').trim();
    if (nextTextContent === '') {
        textNode.remove();
    } else {
        textNode.setTextContent(nextTextContent);
        textNode.select(restoreOffset, restoreOffset);
    }
}
function shouldResolveAncestor(resolvedElement, resolvedOffset, lastPoint) {
    const parent = resolvedElement.getParent();
    return lastPoint === null || parent === null || !parent.canBeEmpty() || parent !== lastPoint.getNode();
}
function $internalResolveSelectionPoint(dom, offset, lastPoint, editor) {
    let resolvedOffset = offset;
    let resolvedNode;
    // If we have selection on an element, we will
    // need to figure out (using the offset) what text
    // node should be selected.
    if (isHTMLElement(dom)) {
        // Resolve element to a ElementNode, or TextNode, or null
        let moveSelectionToEnd = false;
        // Given we're moving selection to another node, selection is
        // definitely dirty.
        // We use the anchor to find which child node to select
        const childNodes = dom.childNodes;
        const childNodesLength = childNodes.length;
        const blockCursorElement = editor._blockCursorElement;
        // If the anchor is the same as length, then this means we
        // need to select the very last text node.
        if (resolvedOffset === childNodesLength) {
            moveSelectionToEnd = true;
            resolvedOffset = childNodesLength - 1;
        }
        let childDOM = childNodes[resolvedOffset];
        let hasBlockCursor = false;
        if (childDOM === blockCursorElement) {
            childDOM = childNodes[resolvedOffset + 1];
            hasBlockCursor = true;
        } else if (blockCursorElement !== null) {
            const blockCursorElementParent = blockCursorElement.parentNode;
            if (dom === blockCursorElementParent) {
                const blockCursorOffset = Array.prototype.indexOf.call(blockCursorElementParent.children, blockCursorElement);
                if (offset > blockCursorOffset) {
                    resolvedOffset--;
                }
            }
        }
        resolvedNode = $getNodeFromDOM(childDOM);
        if ($isTextNode(resolvedNode)) {
            resolvedOffset = $getTextNodeOffset(resolvedNode, moveSelectionToEnd ? 'next' : 'previous');
        } else {
            let resolvedElement = $getNodeFromDOM(dom);
            // Ensure resolvedElement is actually a element.
            if (resolvedElement === null) {
                return null;
            }
            if ($isElementNode(resolvedElement)) {
                const elementDOM = editor.getElementByKey(resolvedElement.getKey());
                if (!(elementDOM !== null)) {
                    formatDevErrorMessage(`$internalResolveSelectionPoint: node in DOM but not keyToDOMMap`);
                }
                const slot = resolvedElement.getDOMSlot(elementDOM);
                [resolvedElement, resolvedOffset] = slot.resolveChildIndex(resolvedElement, elementDOM, dom, offset);
                // This is just a typescript workaround, it is true but lost due to mutability
                if (!$isElementNode(resolvedElement)) {
                    formatDevErrorMessage(`$internalResolveSelectionPoint: resolvedElement is not an ElementNode`);
                }
                if (moveSelectionToEnd && resolvedOffset >= resolvedElement.getChildrenSize()) {
                    resolvedOffset = Math.max(0, resolvedElement.getChildrenSize() - 1);
                }
                let child = resolvedElement.getChildAtIndex(resolvedOffset);
                if ($isElementNode(child) && shouldResolveAncestor(child, resolvedOffset, lastPoint)) {
                    const descendant = moveSelectionToEnd ? child.getLastDescendant() : child.getFirstDescendant();
                    if (descendant === null) {
                        resolvedElement = child;
                    } else {
                        child = descendant;
                        resolvedElement = $isElementNode(child) ? child : child.getParentOrThrow();
                    }
                    resolvedOffset = 0;
                }
                if ($isTextNode(child)) {
                    resolvedNode = child;
                    resolvedElement = null;
                    resolvedOffset = $getTextNodeOffset(child, moveSelectionToEnd ? 'next' : 'previous');
                } else if (child !== resolvedElement && moveSelectionToEnd && !hasBlockCursor) {
                    if (!$isElementNode(resolvedElement)) {
                        formatDevErrorMessage(`invariant`);
                    }
                    resolvedOffset = Math.min(resolvedElement.getChildrenSize(), resolvedOffset + 1);
                }
            } else {
                const index = resolvedElement.getIndexWithinParent();
                // When selecting decorators, there can be some selection issues when using resolvedOffset,
                // and instead we should be checking if we're using the offset
                if (offset === 0 && $isDecoratorNode(resolvedElement) && $getNodeFromDOM(dom) === resolvedElement) {
                    resolvedOffset = index;
                } else {
                    resolvedOffset = index + 1;
                }
                resolvedElement = resolvedElement.getParentOrThrow();
            }
            if ($isElementNode(resolvedElement)) {
                return $createPoint(resolvedElement.__key, resolvedOffset, 'element');
            }
        }
    } else {
        // TextNode or null
        resolvedNode = $getNodeFromDOM(dom);
    }
    if (!$isTextNode(resolvedNode)) {
        return null;
    }
    return $createPoint(resolvedNode.__key, $getTextNodeOffset(resolvedNode, resolvedOffset, 'clamp'), 'text');
}
function resolveSelectionPointOnBoundary(point, isBackward, isCollapsed) {
    const offset = point.offset;
    const node = point.getNode();
    if (offset === 0) {
        const prevSibling = node.getPreviousSibling();
        const parent = node.getParent();
        if (!isBackward) {
            if ($isElementNode(prevSibling) && !isCollapsed && prevSibling.isInline()) {
                point.set(prevSibling.__key, prevSibling.getChildrenSize(), 'element');
            } else if ($isTextNode(prevSibling)) {
                point.set(prevSibling.__key, prevSibling.getTextContent().length, 'text');
            }
        } else if ((isCollapsed || !isBackward) && prevSibling === null && $isElementNode(parent) && parent.isInline()) {
            const parentSibling = parent.getPreviousSibling();
            if ($isTextNode(parentSibling)) {
                point.set(parentSibling.__key, parentSibling.getTextContent().length, 'text');
            }
        }
    } else if (offset === node.getTextContent().length) {
        const nextSibling = node.getNextSibling();
        const parent = node.getParent();
        if (isBackward && $isElementNode(nextSibling) && nextSibling.isInline()) {
            point.set(nextSibling.__key, 0, 'element');
        } else if ((isCollapsed || isBackward) && nextSibling === null && $isElementNode(parent) && parent.isInline() && !parent.canInsertTextAfter()) {
            const parentSibling = parent.getNextSibling();
            if ($isTextNode(parentSibling)) {
                point.set(parentSibling.__key, 0, 'text');
            }
        }
    }
}
function $normalizeSelectionPointsForBoundaries(anchor, focus, lastSelection) {
    if (anchor.type === 'text' && focus.type === 'text') {
        const isBackward = anchor.isBefore(focus);
        const isCollapsed = anchor.is(focus);
        // Attempt to normalize the offset to the previous sibling if we're at the
        // start of a text node and the sibling is a text node or inline element.
        resolveSelectionPointOnBoundary(anchor, isBackward, isCollapsed);
        resolveSelectionPointOnBoundary(focus, !isBackward, isCollapsed);
        if (isCollapsed) {
            focus.set(anchor.key, anchor.offset, anchor.type);
        }
        const editor = getActiveEditor();
        if (editor.isComposing() && editor._compositionKey !== anchor.key && $isRangeSelection(lastSelection)) {
            const lastAnchor = lastSelection.anchor;
            const lastFocus = lastSelection.focus;
            anchor.set(lastAnchor.key, lastAnchor.offset, lastAnchor.type, true);
            focus.set(lastFocus.key, lastFocus.offset, lastFocus.type, true);
        }
    }
}
function $internalResolveSelectionPoints(anchorDOM, anchorOffset, focusDOM, focusOffset, editor, lastSelection) {
    if (anchorDOM === null || focusDOM === null || !isSelectionWithinEditor(editor, anchorDOM, focusDOM)) {
        return null;
    }
    const resolvedAnchorPoint = $internalResolveSelectionPoint(anchorDOM, anchorOffset, $isRangeSelection(lastSelection) ? lastSelection.anchor : null, editor);
    if (resolvedAnchorPoint === null) {
        return null;
    }
    const resolvedFocusPoint = $internalResolveSelectionPoint(focusDOM, focusOffset, $isRangeSelection(lastSelection) ? lastSelection.focus : null, editor);
    if (resolvedFocusPoint === null) {
        return null;
    }
    {
        $validatePoint('anchor', resolvedAnchorPoint);
        $validatePoint('focus', resolvedFocusPoint);
    }
    if (resolvedAnchorPoint.type === 'element' && resolvedFocusPoint.type === 'element') {
        const anchorNode = $getNodeFromDOM(anchorDOM);
        const focusNode = $getNodeFromDOM(focusDOM);
        // Ensure if we're selecting the content of a decorator that we
        // return null for this point, as it's not in the controlled scope
        // of Lexical.
        if ($isDecoratorNode(anchorNode) && $isDecoratorNode(focusNode)) {
            return null;
        }
    }
    // Handle normalization of selection when it is at the boundaries.
    $normalizeSelectionPointsForBoundaries(resolvedAnchorPoint, resolvedFocusPoint, lastSelection);
    return [
        resolvedAnchorPoint,
        resolvedFocusPoint
    ];
}
function $isBlockElementNode(node) {
    return $isElementNode(node) && !node.isInline();
}
// This is used to make a selection when the existing
// selection is null, i.e. forcing selection on the editor
// when it current exists outside the editor.
function $internalMakeRangeSelection(anchorKey, anchorOffset, focusKey, focusOffset, anchorType, focusType) {
    const editorState = getActiveEditorState();
    const selection = new RangeSelection($createPoint(anchorKey, anchorOffset, anchorType), $createPoint(focusKey, focusOffset, focusType), 0, '');
    selection.dirty = true;
    editorState._selection = selection;
    return selection;
}
function $createRangeSelection() {
    const anchor = $createPoint('root', 0, 'element');
    const focus = $createPoint('root', 0, 'element');
    return new RangeSelection(anchor, focus, 0, '');
}
function $createNodeSelection() {
    return new NodeSelection(new Set());
}
function $internalCreateSelection(editor, event) {
    const currentEditorState = editor.getEditorState();
    const lastSelection = currentEditorState._selection;
    const domSelection = getDOMSelection(getWindow(editor));
    if ($isRangeSelection(lastSelection) || lastSelection == null) {
        return $internalCreateRangeSelection(lastSelection, domSelection, editor, event);
    }
    return lastSelection.clone();
}
function $createRangeSelectionFromDom(domSelection, editor) {
    return $internalCreateRangeSelection(null, domSelection, editor, null);
}
function $internalCreateRangeSelection(lastSelection, domSelection, editor, event) {
    const windowObj = editor._window;
    if (windowObj === null) {
        return null;
    }
    // When we create a selection, we try to use the previous
    // selection where possible, unless an actual user selection
    // change has occurred. When we do need to create a new selection
    // we validate we can have text nodes for both anchor and focus
    // nodes. If that holds true, we then return that selection
    // as a mutable object that we use for the editor state for this
    // update cycle. If a selection gets changed, and requires a
    // update to native DOM selection, it gets marked as "dirty".
    // If the selection changes, but matches with the existing
    // DOM selection, then we only need to sync it. Otherwise,
    // we generally bail out of doing an update to selection during
    // reconciliation unless there are dirty nodes that need
    // reconciling.
    const windowEvent = event || windowObj.event;
    const eventType = windowEvent ? windowEvent.type : undefined;
    const isSelectionChange = eventType === 'selectionchange';
    const useDOMSelection = !getIsProcessingMutations() && (isSelectionChange || eventType === 'beforeinput' || eventType === 'compositionstart' || eventType === 'compositionend' || eventType === 'click' && windowEvent && windowEvent.detail === 3 || eventType === 'drop' || eventType === undefined);
    let anchorDOM, focusDOM, anchorOffset, focusOffset;
    if (!$isRangeSelection(lastSelection) || useDOMSelection) {
        if (domSelection === null) {
            return null;
        }
        anchorDOM = domSelection.anchorNode;
        focusDOM = domSelection.focusNode;
        anchorOffset = domSelection.anchorOffset;
        focusOffset = domSelection.focusOffset;
        if ((isSelectionChange || eventType === undefined) && $isRangeSelection(lastSelection) && !isSelectionWithinEditor(editor, anchorDOM, focusDOM)) {
            return lastSelection.clone();
        }
    } else {
        return lastSelection.clone();
    }
    // Let's resolve the text nodes from the offsets and DOM nodes we have from
    // native selection.
    const resolvedSelectionPoints = $internalResolveSelectionPoints(anchorDOM, anchorOffset, focusDOM, focusOffset, editor, lastSelection);
    if (resolvedSelectionPoints === null) {
        return null;
    }
    const [resolvedAnchorPoint, resolvedFocusPoint] = resolvedSelectionPoints;
    return new RangeSelection(resolvedAnchorPoint, resolvedFocusPoint, !$isRangeSelection(lastSelection) ? 0 : lastSelection.format, !$isRangeSelection(lastSelection) ? '' : lastSelection.style);
}
function $validatePoint(name, point) {
    const node = $getNodeByKey(point.key);
    if (!(node !== undefined)) {
        formatDevErrorMessage(`$validatePoint: ${name} key ${point.key} not found in current editorState`);
    }
    if (point.type === 'text') {
        if (!$isTextNode(node)) {
            formatDevErrorMessage(`$validatePoint: ${name} key ${point.key} is not a TextNode`);
        }
        const size = node.getTextContentSize();
        if (!(point.offset <= size)) {
            formatDevErrorMessage(`$validatePoint: ${name} point.offset > node.getTextContentSize() (${String(point.offset)} > ${String(size)})`);
        }
    } else {
        if (!$isElementNode(node)) {
            formatDevErrorMessage(`$validatePoint: ${name} key ${point.key} is not an ElementNode`);
        }
        const size = node.getChildrenSize();
        if (!(point.offset <= size)) {
            formatDevErrorMessage(`$validatePoint: ${name} point.offset > node.getChildrenSize() (${String(point.offset)} > ${String(size)})`);
        }
    }
}
function $getSelection() {
    const editorState = getActiveEditorState();
    return editorState._selection;
}
function $getPreviousSelection() {
    const editor = getActiveEditor();
    return editor._editorState._selection;
}
function $updateElementSelectionOnCreateDeleteNode(selection, parentNode, nodeOffset, times = 1) {
    const anchor = selection.anchor;
    const focus = selection.focus;
    const anchorNode = anchor.getNode();
    const focusNode = focus.getNode();
    if (!parentNode.is(anchorNode) && !parentNode.is(focusNode)) {
        return;
    }
    const parentKey = parentNode.__key;
    // Single node. We shift selection but never redimension it
    if (selection.isCollapsed()) {
        const selectionOffset = anchor.offset;
        if (nodeOffset <= selectionOffset && times > 0 || nodeOffset < selectionOffset && times < 0) {
            const newSelectionOffset = Math.max(0, selectionOffset + times);
            anchor.set(parentKey, newSelectionOffset, 'element');
            focus.set(parentKey, newSelectionOffset, 'element');
            // The new selection might point to text nodes, try to resolve them
            $updateSelectionResolveTextNodes(selection);
        }
    } else {
        // Multiple nodes selected. We shift or redimension selection
        const isBackward = selection.isBackward();
        const firstPoint = isBackward ? focus : anchor;
        const firstPointNode = firstPoint.getNode();
        const lastPoint = isBackward ? anchor : focus;
        const lastPointNode = lastPoint.getNode();
        if (parentNode.is(firstPointNode)) {
            const firstPointOffset = firstPoint.offset;
            if (nodeOffset <= firstPointOffset && times > 0 || nodeOffset < firstPointOffset && times < 0) {
                firstPoint.set(parentKey, Math.max(0, firstPointOffset + times), 'element');
            }
        }
        if (parentNode.is(lastPointNode)) {
            const lastPointOffset = lastPoint.offset;
            if (nodeOffset <= lastPointOffset && times > 0 || nodeOffset < lastPointOffset && times < 0) {
                lastPoint.set(parentKey, Math.max(0, lastPointOffset + times), 'element');
            }
        }
    }
    // The new selection might point to text nodes, try to resolve them
    $updateSelectionResolveTextNodes(selection);
}
function $updateSelectionResolveTextNodes(selection) {
    const anchor = selection.anchor;
    const anchorOffset = anchor.offset;
    const focus = selection.focus;
    const focusOffset = focus.offset;
    const anchorNode = anchor.getNode();
    const focusNode = focus.getNode();
    if (selection.isCollapsed()) {
        if (!$isElementNode(anchorNode)) {
            return;
        }
        const childSize = anchorNode.getChildrenSize();
        const anchorOffsetAtEnd = anchorOffset >= childSize;
        const child = anchorOffsetAtEnd ? anchorNode.getChildAtIndex(childSize - 1) : anchorNode.getChildAtIndex(anchorOffset);
        if ($isTextNode(child)) {
            let newOffset = 0;
            if (anchorOffsetAtEnd) {
                newOffset = child.getTextContentSize();
            }
            anchor.set(child.__key, newOffset, 'text');
            focus.set(child.__key, newOffset, 'text');
        }
        return;
    }
    if ($isElementNode(anchorNode)) {
        const childSize = anchorNode.getChildrenSize();
        const anchorOffsetAtEnd = anchorOffset >= childSize;
        const child = anchorOffsetAtEnd ? anchorNode.getChildAtIndex(childSize - 1) : anchorNode.getChildAtIndex(anchorOffset);
        if ($isTextNode(child)) {
            let newOffset = 0;
            if (anchorOffsetAtEnd) {
                newOffset = child.getTextContentSize();
            }
            anchor.set(child.__key, newOffset, 'text');
        }
    }
    if ($isElementNode(focusNode)) {
        const childSize = focusNode.getChildrenSize();
        const focusOffsetAtEnd = focusOffset >= childSize;
        const child = focusOffsetAtEnd ? focusNode.getChildAtIndex(childSize - 1) : focusNode.getChildAtIndex(focusOffset);
        if ($isTextNode(child)) {
            let newOffset = 0;
            if (focusOffsetAtEnd) {
                newOffset = child.getTextContentSize();
            }
            focus.set(child.__key, newOffset, 'text');
        }
    }
}
function applySelectionTransforms(nextEditorState, editor) {
    const prevEditorState = editor.getEditorState();
    const prevSelection = prevEditorState._selection;
    const nextSelection = nextEditorState._selection;
    if ($isRangeSelection(nextSelection)) {
        const anchor = nextSelection.anchor;
        const focus = nextSelection.focus;
        let anchorNode;
        if (anchor.type === 'text') {
            anchorNode = anchor.getNode();
            anchorNode.selectionTransform(prevSelection, nextSelection);
        }
        if (focus.type === 'text') {
            const focusNode = focus.getNode();
            if (anchorNode !== focusNode) {
                focusNode.selectionTransform(prevSelection, nextSelection);
            }
        }
    }
}
function moveSelectionPointToSibling(point, node, parent, prevSibling, nextSibling) {
    let siblingKey = null;
    let offset = 0;
    let type = null;
    if (prevSibling !== null) {
        siblingKey = prevSibling.__key;
        if ($isTextNode(prevSibling)) {
            offset = prevSibling.getTextContentSize();
            type = 'text';
        } else if ($isElementNode(prevSibling)) {
            offset = prevSibling.getChildrenSize();
            type = 'element';
        }
    } else {
        if (nextSibling !== null) {
            siblingKey = nextSibling.__key;
            if ($isTextNode(nextSibling)) {
                type = 'text';
            } else if ($isElementNode(nextSibling)) {
                type = 'element';
            }
        }
    }
    if (siblingKey !== null && type !== null) {
        point.set(siblingKey, offset, type);
    } else {
        offset = node.getIndexWithinParent();
        if (offset === -1) {
            // Move selection to end of parent
            offset = parent.getChildrenSize();
        }
        point.set(parent.__key, offset, 'element');
    }
}
function adjustPointOffsetForMergedSibling(point, isBefore, key, target, textLength) {
    if (point.type === 'text') {
        point.set(key, point.offset + (isBefore ? 0 : textLength), 'text');
    } else if (point.offset > target.getIndexWithinParent()) {
        point.set(point.key, point.offset - 1, 'element');
    }
}
function setDOMSelectionBaseAndExtent(domSelection, nextAnchorDOM, nextAnchorOffset, nextFocusDOM, nextFocusOffset) {
    // Apply the updated selection to the DOM. Note: this will trigger
    // a "selectionchange" event, although it will be asynchronous.
    try {
        domSelection.setBaseAndExtent(nextAnchorDOM, nextAnchorOffset, nextFocusDOM, nextFocusOffset);
    } catch (error) {
        // If we encounter an error, continue. This can sometimes
        // occur with FF and there's no good reason as to why it
        // should happen.
        {
            console.warn(error);
        }
    }
}
function updateDOMSelection(prevSelection, nextSelection, editor, domSelection, tags, rootElement, nodeCount) {
    const anchorDOMNode = domSelection.anchorNode;
    const focusDOMNode = domSelection.focusNode;
    const anchorOffset = domSelection.anchorOffset;
    const focusOffset = domSelection.focusOffset;
    const activeElement = document.activeElement;
    // TODO: make this not hard-coded, and add another config option
    // that makes this configurable.
    if (tags.has(COLLABORATION_TAG) && activeElement !== rootElement || activeElement !== null && isSelectionCapturedInDecoratorInput(activeElement)) {
        return;
    }
    if (!$isRangeSelection(nextSelection)) {
        // We don't remove selection if the prevSelection is null because
        // of editor.setRootElement(). If this occurs on init when the
        // editor is already focused, then this can cause the editor to
        // lose focus.
        if (prevSelection !== null && isSelectionWithinEditor(editor, anchorDOMNode, focusDOMNode)) {
            domSelection.removeAllRanges();
        }
        return;
    }
    const anchor = nextSelection.anchor;
    const focus = nextSelection.focus;
    const anchorKey = anchor.key;
    const focusKey = focus.key;
    const anchorDOM = getElementByKeyOrThrow(editor, anchorKey);
    const focusDOM = getElementByKeyOrThrow(editor, focusKey);
    const nextAnchorOffset = anchor.offset;
    const nextFocusOffset = focus.offset;
    const nextFormat = nextSelection.format;
    const nextStyle = nextSelection.style;
    const isCollapsed = nextSelection.isCollapsed();
    let nextAnchorNode = anchorDOM;
    let nextFocusNode = focusDOM;
    let anchorFormatOrStyleChanged = false;
    if (anchor.type === 'text') {
        nextAnchorNode = getDOMTextNode(anchorDOM);
        const anchorNode = anchor.getNode();
        anchorFormatOrStyleChanged = anchorNode.getFormat() !== nextFormat || anchorNode.getStyle() !== nextStyle;
    } else if ($isRangeSelection(prevSelection) && prevSelection.anchor.type === 'text') {
        anchorFormatOrStyleChanged = true;
    }
    if (focus.type === 'text') {
        nextFocusNode = getDOMTextNode(focusDOM);
    }
    // If we can't get an underlying text node for selection, then
    // we should avoid setting selection to something incorrect.
    if (nextAnchorNode === null || nextFocusNode === null) {
        return;
    }
    if (isCollapsed && (prevSelection === null || anchorFormatOrStyleChanged || $isRangeSelection(prevSelection) && (prevSelection.format !== nextFormat || prevSelection.style !== nextStyle))) {
        markCollapsedSelectionFormat(nextFormat, nextStyle, nextAnchorOffset, anchorKey, performance.now());
    }
    // Diff against the native DOM selection to ensure we don't do
    // an unnecessary selection update. We also skip this check if
    // we're moving selection to within an element, as this can
    // sometimes be problematic around scrolling.
    if (anchorOffset === nextAnchorOffset && focusOffset === nextFocusOffset && anchorDOMNode === nextAnchorNode && focusDOMNode === nextFocusNode && // Badly interpreted range selection when collapsed - #1482
    !(domSelection.type === 'Range' && isCollapsed)) {
        // If the root element does not have focus, ensure it has focus
        if (activeElement === null || !rootElement.contains(activeElement)) {
            if (!tags.has(SKIP_SELECTION_FOCUS_TAG)) {
                rootElement.focus({
                    preventScroll: true
                });
            }
        }
        if (anchor.type !== 'element') {
            return;
        }
    }
    // Apply the updated selection to the DOM. Note: this will trigger
    // a "selectionchange" event, although it will be asynchronous.
    setDOMSelectionBaseAndExtent(domSelection, nextAnchorNode, nextAnchorOffset, nextFocusNode, nextFocusOffset);
    // Firefox-specific fix: After setting DOM selection, ensure root element has focus
    // to maintain cursor visibility. Firefox requires focus to be on the root element
    // for the cursor to be visible, especially after operations like drag that may
    // cause focus loss. This is critical for collapsed selections (cursor).
    if (IS_FIREFOX && nextSelection.isCollapsed() && rootElement !== null && !tags.has(SKIP_SELECTION_FOCUS_TAG) && (document.activeElement === null || !rootElement.contains(document.activeElement))) {
        // Restore focus immediately to ensure cursor visibility
        rootElement.focus({
            preventScroll: true
        });
    // Note: We rely on the normal selection update mechanism to ensure the cursor
    // is visible. Using requestAnimationFrame here could cause race conditions where
    // another update changes the selection before the rAF callback executes.
    }
    if (!tags.has(SKIP_SCROLL_INTO_VIEW_TAG) && nextSelection.isCollapsed() && rootElement !== null && rootElement === document.activeElement) {
        const selectionTarget = $isRangeSelection(nextSelection) && nextSelection.anchor.type === 'element' ? nextAnchorNode.childNodes[nextAnchorOffset] || null : domSelection.rangeCount > 0 ? domSelection.getRangeAt(0) : null;
        if (selectionTarget !== null) {
            let selectionRect;
            if (selectionTarget instanceof Text) {
                const range = document.createRange();
                range.selectNode(selectionTarget);
                selectionRect = range.getBoundingClientRect();
            } else {
                selectionRect = selectionTarget.getBoundingClientRect();
            }
            scrollIntoViewIfNeeded(editor, selectionRect, rootElement);
        }
    }
    markSelectionChangeFromDOMUpdate();
}
function $insertNodes(nodes) {
    let selection = $getSelection() || $getPreviousSelection();
    if (selection === null) {
        selection = $getRoot().selectEnd();
    }
    selection.insertNodes(nodes);
}
function $getTextContent() {
    const selection = $getSelection();
    if (selection === null) {
        return '';
    }
    return selection.getTextContent();
}
function $removeTextAndSplitBlock(selection) {
    let selection_ = selection;
    if (!selection.isCollapsed()) {
        selection_.removeText();
    }
    // A new selection can originate as a result of node replacement, in which case is registered via
    // $setSelection
    const newSelection = $getSelection();
    if ($isRangeSelection(newSelection)) {
        selection_ = newSelection;
    }
    if (!$isRangeSelection(selection_)) {
        formatDevErrorMessage(`Unexpected dirty selection to be null`);
    }
    const anchor = selection_.anchor;
    let node = anchor.getNode();
    let offset = anchor.offset;
    while(!INTERNAL_$isBlock(node)){
        const prevNode = node;
        [node, offset] = $splitNodeAtPoint(node, offset);
        if (prevNode.is(node)) {
            break;
        }
    }
    return offset;
}
function $splitNodeAtPoint(node, offset) {
    const parent = node.getParent();
    if (!parent) {
        const paragraph = $createParagraphNode();
        $getRoot().append(paragraph);
        paragraph.select();
        return [
            $getRoot(),
            0
        ];
    }
    if ($isTextNode(node)) {
        const split = node.splitText(offset);
        if (split.length === 0) {
            return [
                parent,
                node.getIndexWithinParent()
            ];
        }
        const x = offset === 0 ? 0 : 1;
        const index = split[0].getIndexWithinParent() + x;
        return [
            parent,
            index
        ];
    }
    if (!$isElementNode(node) || offset === 0) {
        return [
            parent,
            node.getIndexWithinParent()
        ];
    }
    const firstToAppend = node.getChildAtIndex(offset);
    if (firstToAppend) {
        const insertPoint = new RangeSelection($createPoint(node.__key, offset, 'element'), $createPoint(node.__key, offset, 'element'), 0, '');
        const newElement = node.insertNewAfter(insertPoint);
        if (newElement) {
            newElement.append(firstToAppend, ...firstToAppend.getNextSiblings());
        }
    }
    return [
        parent,
        node.getIndexWithinParent() + 1
    ];
}
function $wrapInlineNodes(nodes) {
    // We temporarily insert the topLevelNodes into an arbitrary ElementNode,
    // since insertAfter does not work on nodes that have no parent (TO-DO: fix that).
    const virtualRoot = $createParagraphNode();
    let currentBlock = null;
    for(let i = 0; i < nodes.length; i++){
        const node = nodes[i];
        const isLineBreakNode = $isLineBreakNode(node);
        if (isLineBreakNode || $isDecoratorNode(node) && node.isInline() || $isElementNode(node) && node.isInline() || $isTextNode(node) || node.isParentRequired()) {
            if (currentBlock === null) {
                currentBlock = node.createParentElementNode();
                virtualRoot.append(currentBlock);
                // In the case of LineBreakNode, we just need to
                // add an empty ParagraphNode to the topLevelBlocks.
                if (isLineBreakNode) {
                    continue;
                }
            }
            if (currentBlock !== null) {
                currentBlock.append(node);
            }
        } else {
            virtualRoot.append(node);
            currentBlock = null;
        }
    }
    return virtualRoot;
}
/**
 * Get all nodes in a CaretRange in a way that complies with all of the
 * quirks of the original RangeSelection.getNodes().
 *
 * @param range The CaretRange
 */ function $getNodesFromCaretRangeCompat(// getNodes returned nodes in document order
range) {
    const nodes = [];
    const [beforeSlice, afterSlice] = range.getTextSlices();
    if (beforeSlice) {
        nodes.push(beforeSlice.caret.origin);
    }
    const seenAncestors = new Set();
    const seenElements = new Set();
    for (const caret of range){
        if ($isChildCaret(caret)) {
            // Emulate the leading under-selection behavior of getNodes by
            // ignoring the 'enter' of any ElementNode until we've seen a
            // SiblingCaret
            const { origin } = caret;
            if (nodes.length === 0) {
                seenAncestors.add(origin);
            } else {
                seenElements.add(origin);
                nodes.push(origin);
            }
        } else {
            const { origin } = caret;
            if (!$isElementNode(origin) || !seenElements.has(origin)) {
                nodes.push(origin);
            }
        }
    }
    if (afterSlice) {
        nodes.push(afterSlice.caret.origin);
    }
    // Emulate the trailing underselection behavior when the last offset of
    // an element is selected
    if ($isSiblingCaret(range.focus) && $isElementNode(range.focus.origin) && range.focus.getNodeAtCaret() === null) {
        for(let reverseCaret = $getChildCaret(range.focus.origin, 'previous'); $isChildCaret(reverseCaret) && seenAncestors.has(reverseCaret.origin) && !reverseCaret.origin.isEmpty() && reverseCaret.origin.is(nodes[nodes.length - 1]); reverseCaret = $getAdjacentChildCaret(reverseCaret)){
            seenAncestors.delete(reverseCaret.origin);
            nodes.pop();
        }
    }
    while(nodes.length > 1){
        const lastIncludedNode = nodes[nodes.length - 1];
        if ($isElementNode(lastIncludedNode)) {
            if (seenElements.has(lastIncludedNode) || lastIncludedNode.isEmpty() || seenAncestors.has(lastIncludedNode)) ;
            else {
                nodes.pop();
                continue;
            }
        }
        break;
    }
    if (nodes.length === 0 && range.isCollapsed()) {
        // Emulate the collapsed behavior of getNodes by returning the descendant
        const normCaret = $normalizeCaret(range.anchor);
        const flippedNormCaret = $normalizeCaret(range.anchor.getFlipped());
        const $getCandidate = (caret)=>$isTextPointCaret(caret) ? caret.origin : caret.getNodeAtCaret();
        const node = $getCandidate(normCaret) || $getCandidate(flippedNormCaret) || (range.anchor.getNodeAtCaret() ? normCaret.origin : flippedNormCaret.origin);
        nodes.push(node);
    }
    return nodes;
}
/**
 * @internal
 *
 * Modify the focus of the focus around possible decorators and blocks and return true
 * if the movement is done.
 */ function $modifySelectionAroundDecoratorsAndBlocks(selection, alter, isBackward, granularity, mode = 'decorators-and-blocks') {
    if (alter === 'move' && granularity === 'character' && !selection.isCollapsed()) {
        // moving left or right when the selection isn't collapsed will
        // just set the anchor to the focus or vice versa depending on
        // direction
        const [src, dst] = isBackward === selection.isBackward() ? [
            selection.focus,
            selection.anchor
        ] : [
            selection.anchor,
            selection.focus
        ];
        dst.set(src.key, src.offset, src.type);
        return true;
    }
    const initialFocus = $caretFromPoint(selection.focus, isBackward ? 'previous' : 'next');
    const isLineBoundary = granularity === 'lineboundary';
    const collapse = alter === 'move';
    let focus = initialFocus;
    let checkForBlock = mode === 'decorators-and-blocks';
    if (!$isExtendableTextPointCaret(focus)) {
        for (const siblingCaret of focus){
            checkForBlock = false;
            const { origin } = siblingCaret;
            if ($isDecoratorNode(origin) && !origin.isIsolated()) {
                focus = siblingCaret;
                if (isLineBoundary && origin.isInline()) {
                    continue;
                }
            }
            break;
        }
        if (checkForBlock) {
            for (const nextCaret of $extendCaretToRange(initialFocus).iterNodeCarets(alter === 'extend' ? 'shadowRoot' : 'root')){
                if ($isChildCaret(nextCaret)) {
                    if (!nextCaret.origin.isInline()) {
                        focus = nextCaret;
                    }
                } else if ($isElementNode(nextCaret.origin)) {
                    continue;
                } else if ($isDecoratorNode(nextCaret.origin) && !nextCaret.origin.isInline()) {
                    focus = nextCaret;
                }
                break;
            }
        }
    }
    if (focus === initialFocus) {
        return false;
    }
    // After this point checkForBlock is true if and only if we moved to a
    // different block, so we should stop regardless of the granularity
    if (collapse && !isLineBoundary && $isDecoratorNode(focus.origin) && focus.origin.isKeyboardSelectable()) {
        // Make it possible to move selection from range selection to
        // node selection on the node.
        const nodeSelection = $createNodeSelection();
        nodeSelection.add(focus.origin.getKey());
        $setSelection(nodeSelection);
        return true;
    }
    focus = $normalizeCaret(focus);
    if (collapse) {
        $setPointFromCaret(selection.anchor, focus);
    }
    $setPointFromCaret(selection.focus, focus);
    return checkForBlock || !isLineBoundary;
}
let activeEditorState = null;
let activeEditor = null;
let isReadOnlyMode = false;
let isAttemptingToRecoverFromReconcilerError = false;
let infiniteTransformCount = 0;
const observerOptions = {
    characterData: true,
    childList: true,
    subtree: true
};
function isCurrentlyReadOnlyMode() {
    return isReadOnlyMode || activeEditorState !== null && activeEditorState._readOnly;
}
function errorOnReadOnly() {
    if (isReadOnlyMode) {
        {
            formatDevErrorMessage(`Cannot use method in read-only mode.`);
        }
    }
}
function errorOnInfiniteTransforms() {
    if (infiniteTransformCount > 99) {
        {
            formatDevErrorMessage(`One or more transforms are endlessly triggering additional transforms. May have encountered infinite recursion caused by transforms that have their preconditions too lose and/or conflict with each other.`);
        }
    }
}
function getActiveEditorState() {
    if (activeEditorState === null) {
        {
            formatDevErrorMessage(`Unable to find an active editor state. State helpers or node methods can only be used synchronously during the callback of editor.update(), editor.read(), or editorState.read().${collectBuildInformation()}`);
        }
    }
    return activeEditorState;
}
function getActiveEditor() {
    if (activeEditor === null) {
        {
            formatDevErrorMessage(`Unable to find an active editor. This method can only be used synchronously during the callback of editor.update() or editor.read().${collectBuildInformation()}`);
        }
    }
    return activeEditor;
}
function collectBuildInformation() {
    let compatibleEditors = 0;
    const incompatibleEditors = new Set();
    const thisVersion = LexicalEditor.version;
    if (typeof window !== 'undefined') {
        for (const node of document.querySelectorAll('[contenteditable]')){
            const editor = getEditorPropertyFromDOMNode(node);
            if (isLexicalEditor(editor)) {
                compatibleEditors++;
            } else if (editor) {
                let version = String(editor.constructor.version || '<0.17.1');
                if (version === thisVersion) {
                    version += ' (separately built, likely a bundler configuration issue)';
                }
                incompatibleEditors.add(version);
            }
        }
    }
    let output = ` Detected on the page: ${compatibleEditors} compatible editor(s) with version ${thisVersion}`;
    if (incompatibleEditors.size) {
        output += ` and incompatible editors with versions ${Array.from(incompatibleEditors).join(', ')}`;
    }
    return output;
}
function internalGetActiveEditor() {
    return activeEditor;
}
function internalGetActiveEditorState() {
    return activeEditorState;
}
function $applyTransforms(editor, node, transformsCache) {
    const type = node.__type;
    const registeredNode = getRegisteredNodeOrThrow(editor, type);
    let transformsArr = transformsCache.get(type);
    if (transformsArr === undefined) {
        transformsArr = Array.from(registeredNode.transforms);
        transformsCache.set(type, transformsArr);
    }
    const transformsArrLength = transformsArr.length;
    for(let i = 0; i < transformsArrLength; i++){
        transformsArr[i](node);
        if (!node.isAttached()) {
            break;
        }
    }
}
function $isNodeValidForTransform(node, compositionKey) {
    return node !== undefined && // We don't want to transform nodes being composed
    node.__key !== compositionKey && node.isAttached();
}
function $normalizeAllDirtyTextNodes(editorState, editor) {
    const dirtyLeaves = editor._dirtyLeaves;
    const nodeMap = editorState._nodeMap;
    for (const nodeKey of dirtyLeaves){
        const node = nodeMap.get(nodeKey);
        if ($isTextNode(node) && node.isAttached() && node.isSimpleText() && !node.isUnmergeable()) {
            $normalizeTextNode(node);
        }
    }
}
function addTags(editor, tags) {
    if (!tags) {
        return;
    }
    const updateTags = editor._updateTags;
    let tags_ = tags;
    if (!Array.isArray(tags)) {
        tags_ = [
            tags
        ];
    }
    for (const tag of tags_){
        updateTags.add(tag);
    }
}
/**
 * Transform heuristic:
 * 1. We transform leaves first. If transforms generate additional dirty nodes we repeat step 1.
 * The reasoning behind this is that marking a leaf as dirty marks all its parent elements as dirty too.
 * 2. We transform elements. If element transforms generate additional dirty nodes we repeat step 1.
 * If element transforms only generate additional dirty elements we only repeat step 2.
 *
 * Note that to keep track of newly dirty nodes and subtrees we leverage the editor._dirtyNodes and
 * editor._subtrees which we reset in every loop.
 */ function $applyAllTransforms(editorState, editor) {
    const dirtyLeaves = editor._dirtyLeaves;
    const dirtyElements = editor._dirtyElements;
    const nodeMap = editorState._nodeMap;
    const compositionKey = $getCompositionKey();
    const transformsCache = new Map();
    let untransformedDirtyLeaves = dirtyLeaves;
    let untransformedDirtyLeavesLength = untransformedDirtyLeaves.size;
    let untransformedDirtyElements = dirtyElements;
    let untransformedDirtyElementsLength = untransformedDirtyElements.size;
    while(untransformedDirtyLeavesLength > 0 || untransformedDirtyElementsLength > 0){
        if (untransformedDirtyLeavesLength > 0) {
            // We leverage editor._dirtyLeaves to track the new dirty leaves after the transforms
            editor._dirtyLeaves = new Set();
            for (const nodeKey of untransformedDirtyLeaves){
                const node = nodeMap.get(nodeKey);
                if ($isTextNode(node) && node.isAttached() && node.isSimpleText() && !node.isUnmergeable()) {
                    $normalizeTextNode(node);
                }
                if (node !== undefined && $isNodeValidForTransform(node, compositionKey)) {
                    $applyTransforms(editor, node, transformsCache);
                }
                dirtyLeaves.add(nodeKey);
            }
            untransformedDirtyLeaves = editor._dirtyLeaves;
            untransformedDirtyLeavesLength = untransformedDirtyLeaves.size;
            // We want to prioritize node transforms over element transforms
            if (untransformedDirtyLeavesLength > 0) {
                infiniteTransformCount++;
                continue;
            }
        }
        // All dirty leaves have been processed. Let's do elements!
        // We have previously processed dirty leaves, so let's restart the editor leaves Set to track
        // new ones caused by element transforms
        editor._dirtyLeaves = new Set();
        editor._dirtyElements = new Map();
        // The root is always considered intentionally dirty if any attached node
        // is dirty and by deleting and re-inserting we will apply its transforms
        // last (e.g. its transform can be used as a sort of "update finalizer")
        const rootDirty = untransformedDirtyElements.delete('root');
        if (rootDirty) {
            untransformedDirtyElements.set('root', true);
        }
        for (const currentUntransformedDirtyElement of untransformedDirtyElements){
            const nodeKey = currentUntransformedDirtyElement[0];
            const intentionallyMarkedAsDirty = currentUntransformedDirtyElement[1];
            dirtyElements.set(nodeKey, intentionallyMarkedAsDirty);
            if (!intentionallyMarkedAsDirty) {
                continue;
            }
            const node = nodeMap.get(nodeKey);
            if (node !== undefined && $isNodeValidForTransform(node, compositionKey)) {
                $applyTransforms(editor, node, transformsCache);
            }
        }
        untransformedDirtyLeaves = editor._dirtyLeaves;
        untransformedDirtyLeavesLength = untransformedDirtyLeaves.size;
        untransformedDirtyElements = editor._dirtyElements;
        untransformedDirtyElementsLength = untransformedDirtyElements.size;
        infiniteTransformCount++;
    }
    editor._dirtyLeaves = dirtyLeaves;
    editor._dirtyElements = dirtyElements;
}
function $parseSerializedNode(serializedNode) {
    const internalSerializedNode = serializedNode;
    return $parseSerializedNodeImpl(internalSerializedNode, getActiveEditor()._nodes);
}
function $parseSerializedNodeImpl(serializedNode, registeredNodes) {
    const type = serializedNode.type;
    const registeredNode = registeredNodes.get(type);
    if (registeredNode === undefined) {
        {
            formatDevErrorMessage(`parseEditorState: type "${type}" + not found`);
        }
    }
    const nodeClass = registeredNode.klass;
    if (serializedNode.type !== nodeClass.getType()) {
        {
            formatDevErrorMessage(`LexicalNode: Node ${nodeClass.name} does not implement .importJSON().`);
        }
    }
    const node = nodeClass.importJSON(serializedNode);
    const children = serializedNode.children;
    if ($isElementNode(node) && Array.isArray(children)) {
        for(let i = 0; i < children.length; i++){
            const serializedJSONChildNode = children[i];
            const childNode = $parseSerializedNodeImpl(serializedJSONChildNode, registeredNodes);
            node.append(childNode);
        }
    }
    return node;
}
function parseEditorState(serializedEditorState, editor, updateFn) {
    const editorState = createEmptyEditorState();
    const previousActiveEditorState = activeEditorState;
    const previousReadOnlyMode = isReadOnlyMode;
    const previousActiveEditor = activeEditor;
    const previousDirtyElements = editor._dirtyElements;
    const previousDirtyLeaves = editor._dirtyLeaves;
    const previousCloneNotNeeded = editor._cloneNotNeeded;
    const previousDirtyType = editor._dirtyType;
    editor._dirtyElements = new Map();
    editor._dirtyLeaves = new Set();
    editor._cloneNotNeeded = new Set();
    editor._dirtyType = 0;
    activeEditorState = editorState;
    isReadOnlyMode = false;
    activeEditor = editor;
    setPendingNodeToClone(null);
    try {
        const registeredNodes = editor._nodes;
        const serializedNode = serializedEditorState.root;
        $parseSerializedNodeImpl(serializedNode, registeredNodes);
        if (updateFn) {
            updateFn();
        }
        // Make the editorState immutable
        editorState._readOnly = true;
        {
            handleDEVOnlyPendingUpdateGuarantees(editorState);
        }
    } catch (error) {
        if (error instanceof Error) {
            editor._onError(error);
        }
    } finally{
        editor._dirtyElements = previousDirtyElements;
        editor._dirtyLeaves = previousDirtyLeaves;
        editor._cloneNotNeeded = previousCloneNotNeeded;
        editor._dirtyType = previousDirtyType;
        activeEditorState = previousActiveEditorState;
        isReadOnlyMode = previousReadOnlyMode;
        activeEditor = previousActiveEditor;
    }
    return editorState;
}
// This technically isn't an update but given we need
// exposure to the module's active bindings, we have this
// function here
function readEditorState(editor, editorState, callbackFn) {
    const previousActiveEditorState = activeEditorState;
    const previousReadOnlyMode = isReadOnlyMode;
    const previousActiveEditor = activeEditor;
    activeEditorState = editorState;
    isReadOnlyMode = true;
    activeEditor = editor;
    try {
        return callbackFn();
    } finally{
        activeEditorState = previousActiveEditorState;
        isReadOnlyMode = previousReadOnlyMode;
        activeEditor = previousActiveEditor;
    }
}
function handleDEVOnlyPendingUpdateGuarantees(pendingEditorState) {
    // Given we can't Object.freeze the nodeMap as it's a Map,
    // we instead replace its set, clear and delete methods.
    const nodeMap = pendingEditorState._nodeMap;
    nodeMap.set = ()=>{
        throw new Error('Cannot call set() on a frozen Lexical node map');
    };
    nodeMap.clear = ()=>{
        throw new Error('Cannot call clear() on a frozen Lexical node map');
    };
    nodeMap.delete = ()=>{
        throw new Error('Cannot call delete() on a frozen Lexical node map');
    };
}
function $commitPendingUpdates(editor, recoveryEditorState) {
    const pendingEditorState = editor._pendingEditorState;
    const rootElement = editor._rootElement;
    const shouldSkipDOM = editor._headless || rootElement === null;
    if (pendingEditorState === null) {
        return;
    }
    // ======
    // Reconciliation has started.
    // ======
    const currentEditorState = editor._editorState;
    const currentSelection = currentEditorState._selection;
    const pendingSelection = pendingEditorState._selection;
    const needsUpdate = editor._dirtyType !== NO_DIRTY_NODES;
    const previousActiveEditorState = activeEditorState;
    const previousReadOnlyMode = isReadOnlyMode;
    const previousActiveEditor = activeEditor;
    const previouslyUpdating = editor._updating;
    const observer = editor._observer;
    let mutatedNodes = null;
    editor._pendingEditorState = null;
    editor._editorState = pendingEditorState;
    if (!shouldSkipDOM && needsUpdate && observer !== null) {
        activeEditor = editor;
        activeEditorState = pendingEditorState;
        isReadOnlyMode = false;
        // We don't want updates to sync block the reconciliation.
        editor._updating = true;
        try {
            const dirtyType = editor._dirtyType;
            const dirtyElements = editor._dirtyElements;
            const dirtyLeaves = editor._dirtyLeaves;
            observer.disconnect();
            mutatedNodes = $reconcileRoot(currentEditorState, pendingEditorState, editor, dirtyType, dirtyElements, dirtyLeaves);
        } catch (error) {
            // Report errors
            if (error instanceof Error) {
                editor._onError(error);
            }
            // Reset editor and restore incoming editor state to the DOM
            if (!isAttemptingToRecoverFromReconcilerError) {
                resetEditor(editor, null, rootElement, pendingEditorState);
                initMutationObserver(editor);
                editor._dirtyType = FULL_RECONCILE;
                isAttemptingToRecoverFromReconcilerError = true;
                $commitPendingUpdates(editor, currentEditorState);
                isAttemptingToRecoverFromReconcilerError = false;
            } else {
                // To avoid a possible situation of infinite loops, lets throw
                throw error;
            }
            return;
        } finally{
            observer.observe(rootElement, observerOptions);
            editor._updating = previouslyUpdating;
            activeEditorState = previousActiveEditorState;
            isReadOnlyMode = previousReadOnlyMode;
            activeEditor = previousActiveEditor;
        }
    }
    if (!pendingEditorState._readOnly) {
        pendingEditorState._readOnly = true;
        {
            handleDEVOnlyPendingUpdateGuarantees(pendingEditorState);
            if ($isRangeSelection(pendingSelection)) {
                Object.freeze(pendingSelection.anchor);
                Object.freeze(pendingSelection.focus);
            }
            Object.freeze(pendingSelection);
        }
    }
    const dirtyLeaves = editor._dirtyLeaves;
    const dirtyElements = editor._dirtyElements;
    const normalizedNodes = editor._normalizedNodes;
    const tags = editor._updateTags;
    const deferred = editor._deferred;
    if (needsUpdate) {
        editor._dirtyType = NO_DIRTY_NODES;
        editor._cloneNotNeeded.clear();
        editor._dirtyLeaves = new Set();
        editor._dirtyElements = new Map();
        editor._normalizedNodes = new Set();
        editor._updateTags = new Set();
    }
    $garbageCollectDetachedDecorators(editor, pendingEditorState);
    // ======
    // Reconciliation has finished. Now update selection and trigger listeners.
    // ======
    const domSelection = shouldSkipDOM ? null : getDOMSelection(getWindow(editor));
    // Attempt to update the DOM selection, including focusing of the root element,
    // and scroll into view if needed.
    if (editor._editable && // domSelection will be null in headless
    domSelection !== null && (needsUpdate || pendingSelection === null || pendingSelection.dirty || !pendingSelection.is(currentSelection)) && rootElement !== null && !tags.has(SKIP_DOM_SELECTION_TAG)) {
        activeEditor = editor;
        activeEditorState = pendingEditorState;
        try {
            if (observer !== null) {
                observer.disconnect();
            }
            if (needsUpdate || pendingSelection === null || pendingSelection.dirty) {
                const blockCursorElement = editor._blockCursorElement;
                if (blockCursorElement !== null) {
                    removeDOMBlockCursorElement(blockCursorElement, editor, rootElement);
                }
                updateDOMSelection(currentSelection, pendingSelection, editor, domSelection, tags, rootElement);
            }
            updateDOMBlockCursorElement(editor, rootElement, pendingSelection);
        } finally{
            if (observer !== null) {
                observer.observe(rootElement, observerOptions);
            }
            activeEditor = previousActiveEditor;
            activeEditorState = previousActiveEditorState;
        }
    }
    if (mutatedNodes !== null) {
        triggerMutationListeners(editor, mutatedNodes, tags, dirtyLeaves, currentEditorState);
    }
    if (!$isRangeSelection(pendingSelection) && pendingSelection !== null && (currentSelection === null || !currentSelection.is(pendingSelection))) {
        editor.dispatchCommand(SELECTION_CHANGE_COMMAND, undefined);
    }
    /**
   * Capture pendingDecorators after garbage collecting detached decorators
   */ const pendingDecorators = editor._pendingDecorators;
    if (pendingDecorators !== null) {
        editor._decorators = pendingDecorators;
        editor._pendingDecorators = null;
        triggerListeners('decorator', editor, true, pendingDecorators);
    }
    // If reconciler fails, we reset whole editor (so current editor state becomes empty)
    // and attempt to re-render pendingEditorState. If that goes through we trigger
    // listeners, but instead use recoverEditorState which is current editor state before reset
    // This specifically important for collab that relies on prevEditorState from update
    // listener to calculate delta of changed nodes/properties
    triggerTextContentListeners(editor, recoveryEditorState || currentEditorState, pendingEditorState);
    triggerListeners('update', editor, true, {
        dirtyElements,
        dirtyLeaves,
        editorState: pendingEditorState,
        mutatedNodes,
        normalizedNodes,
        prevEditorState: recoveryEditorState || currentEditorState,
        tags
    });
    triggerDeferredUpdateCallbacks(editor, deferred);
    $triggerEnqueuedUpdates(editor);
}
function triggerTextContentListeners(editor, currentEditorState, pendingEditorState) {
    const currentTextContent = getEditorStateTextContent(currentEditorState);
    const latestTextContent = getEditorStateTextContent(pendingEditorState);
    if (currentTextContent !== latestTextContent) {
        triggerListeners('textcontent', editor, true, latestTextContent);
    }
}
function triggerMutationListeners(editor, mutatedNodes, updateTags, dirtyLeaves, prevEditorState) {
    const listeners = Array.from(editor._listeners.mutation);
    const listenersLength = listeners.length;
    for(let i = 0; i < listenersLength; i++){
        const [listener, klassSet] = listeners[i];
        for (const klass of klassSet){
            const mutatedNodesByType = mutatedNodes.get(klass);
            if (mutatedNodesByType !== undefined) {
                listener(mutatedNodesByType, {
                    dirtyLeaves,
                    prevEditorState,
                    updateTags
                });
            }
        }
    }
}
function triggerListeners(type, editor, isCurrentlyEnqueuingUpdates, ...payload) {
    const previouslyUpdating = editor._updating;
    editor._updating = isCurrentlyEnqueuingUpdates;
    try {
        const listeners = Array.from(editor._listeners[type]);
        for(let i = 0; i < listeners.length; i++){
            listeners[i].apply(null, payload);
        }
    } finally{
        editor._updating = previouslyUpdating;
    }
}
function triggerCommandListeners(editor, type, payload) {
    const editors = getEditorsToPropagate(editor);
    for(let i = 4; i >= 0; i--){
        for(let e = 0; e < editors.length; e++){
            const currentEditor = editors[e];
            const commandListeners = currentEditor._commands;
            const listenerInPriorityOrder = commandListeners.get(type);
            if (listenerInPriorityOrder !== undefined) {
                const listenersSet = listenerInPriorityOrder[i];
                if (listenersSet !== undefined) {
                    const listeners = Array.from(listenersSet);
                    const listenersLength = listeners.length;
                    let returnVal = false;
                    updateEditorSync(currentEditor, ()=>{
                        for(let j = 0; j < listenersLength; j++){
                            if (listeners[j](payload, editor)) {
                                returnVal = true;
                                return;
                            }
                        }
                    });
                    if (returnVal) {
                        return returnVal;
                    }
                }
            }
        }
    }
    return false;
}
function $triggerEnqueuedUpdates(editor) {
    const queuedUpdates = editor._updates;
    if (queuedUpdates.length !== 0) {
        const queuedUpdate = queuedUpdates.shift();
        if (queuedUpdate) {
            const [updateFn, options] = queuedUpdate;
            $beginUpdate(editor, updateFn, options);
        }
    }
}
function triggerDeferredUpdateCallbacks(editor, deferred) {
    editor._deferred = [];
    if (deferred.length !== 0) {
        const previouslyUpdating = editor._updating;
        editor._updating = true;
        try {
            for(let i = 0; i < deferred.length; i++){
                deferred[i]();
            }
        } finally{
            editor._updating = previouslyUpdating;
        }
    }
}
function $processNestedUpdates(editor, initialSkipTransforms) {
    const queuedUpdates = editor._updates;
    let skipTransforms = initialSkipTransforms || false;
    // Updates might grow as we process them, we so we'll need
    // to handle each update as we go until the updates array is
    // empty.
    while(queuedUpdates.length !== 0){
        const queuedUpdate = queuedUpdates.shift();
        if (queuedUpdate) {
            const [nextUpdateFn, options] = queuedUpdate;
            const pendingEditorState = editor._pendingEditorState;
            let onUpdate;
            if (options !== undefined) {
                onUpdate = options.onUpdate;
                if (options.skipTransforms) {
                    skipTransforms = true;
                }
                if (options.discrete) {
                    if (!(pendingEditorState !== null)) {
                        formatDevErrorMessage(`Unexpected empty pending editor state on discrete nested update`);
                    }
                    pendingEditorState._flushSync = true;
                }
                if (onUpdate) {
                    editor._deferred.push(onUpdate);
                }
                addTags(editor, options.tag);
            }
            if (pendingEditorState == null) {
                $beginUpdate(editor, nextUpdateFn, options);
            } else {
                nextUpdateFn();
            }
        }
    }
    return skipTransforms;
}
function $beginUpdate(editor, updateFn, options) {
    const updateTags = editor._updateTags;
    let onUpdate;
    let skipTransforms = false;
    let discrete = false;
    if (options !== undefined) {
        onUpdate = options.onUpdate;
        addTags(editor, options.tag);
        skipTransforms = options.skipTransforms || false;
        discrete = options.discrete || false;
    }
    if (onUpdate) {
        editor._deferred.push(onUpdate);
    }
    const currentEditorState = editor._editorState;
    let pendingEditorState = editor._pendingEditorState;
    let editorStateWasCloned = false;
    if (pendingEditorState === null || pendingEditorState._readOnly) {
        pendingEditorState = editor._pendingEditorState = cloneEditorState(pendingEditorState || currentEditorState);
        editorStateWasCloned = true;
    }
    pendingEditorState._flushSync = discrete;
    const previousActiveEditorState = activeEditorState;
    const previousReadOnlyMode = isReadOnlyMode;
    const previousActiveEditor = activeEditor;
    const previouslyUpdating = editor._updating;
    activeEditorState = pendingEditorState;
    isReadOnlyMode = false;
    editor._updating = true;
    activeEditor = editor;
    const headless = editor._headless || editor.getRootElement() === null;
    setPendingNodeToClone(null);
    try {
        if (editorStateWasCloned) {
            if (headless) {
                if (currentEditorState._selection !== null) {
                    pendingEditorState._selection = currentEditorState._selection.clone();
                }
            } else {
                pendingEditorState._selection = $internalCreateSelection(editor, options && options.event || null);
            }
        }
        const startingCompositionKey = editor._compositionKey;
        updateFn();
        skipTransforms = $processNestedUpdates(editor, skipTransforms);
        applySelectionTransforms(pendingEditorState, editor);
        if (editor._dirtyType !== NO_DIRTY_NODES) {
            if (skipTransforms) {
                $normalizeAllDirtyTextNodes(pendingEditorState, editor);
            } else {
                $applyAllTransforms(pendingEditorState, editor);
            }
            $processNestedUpdates(editor);
            $garbageCollectDetachedNodes(currentEditorState, pendingEditorState, editor._dirtyLeaves, editor._dirtyElements);
        }
        const endingCompositionKey = editor._compositionKey;
        if (startingCompositionKey !== endingCompositionKey) {
            pendingEditorState._flushSync = true;
        }
        const pendingSelection = pendingEditorState._selection;
        if ($isRangeSelection(pendingSelection)) {
            const pendingNodeMap = pendingEditorState._nodeMap;
            const anchorKey = pendingSelection.anchor.key;
            const focusKey = pendingSelection.focus.key;
            if (pendingNodeMap.get(anchorKey) === undefined || pendingNodeMap.get(focusKey) === undefined) {
                {
                    formatDevErrorMessage(`updateEditor: selection has been lost because the previously selected nodes have been removed and selection wasn't moved to another node. Ensure selection changes after removing/replacing a selected node.`);
                }
            }
        } else if ($isNodeSelection(pendingSelection)) {
            // TODO: we should also validate node selection?
            if (pendingSelection._nodes.size === 0) {
                pendingEditorState._selection = null;
            }
        }
    } catch (error) {
        // Report errors
        if (error instanceof Error) {
            editor._onError(error);
        }
        // Restore existing editor state to the DOM
        editor._pendingEditorState = currentEditorState;
        editor._dirtyType = FULL_RECONCILE;
        editor._cloneNotNeeded.clear();
        editor._dirtyLeaves = new Set();
        editor._dirtyElements.clear();
        $commitPendingUpdates(editor);
        return;
    } finally{
        activeEditorState = previousActiveEditorState;
        isReadOnlyMode = previousReadOnlyMode;
        activeEditor = previousActiveEditor;
        editor._updating = previouslyUpdating;
        infiniteTransformCount = 0;
    }
    const shouldUpdate = editor._dirtyType !== NO_DIRTY_NODES || editor._deferred.length > 0 || editorStateHasDirtySelection(pendingEditorState, editor);
    if (shouldUpdate) {
        if (pendingEditorState._flushSync) {
            pendingEditorState._flushSync = false;
            $commitPendingUpdates(editor);
        } else if (editorStateWasCloned) {
            scheduleMicroTask(()=>{
                $commitPendingUpdates(editor);
            });
        }
    } else {
        pendingEditorState._flushSync = false;
        if (editorStateWasCloned) {
            updateTags.clear();
            editor._deferred = [];
            editor._pendingEditorState = null;
        }
    }
}
/**
 * A variant of updateEditor that will not defer if it is nested in an update
 * to the same editor, much like if it was an editor.dispatchCommand issued
 * within an update
 */ function updateEditorSync(editor, updateFn, options) {
    if (activeEditor === editor && options === undefined) {
        updateFn();
    } else {
        $beginUpdate(editor, updateFn, options);
    }
}
function updateEditor(editor, updateFn, options) {
    if (editor._updating) {
        editor._updates.push([
            updateFn,
            options
        ]);
    } else {
        $beginUpdate(editor, updateFn, options);
    }
}
// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
/**
 * A utility class for managing the DOM children of an ElementNode
 */ class ElementDOMSlot {
    element;
    before;
    after;
    constructor(/** The element returned by createDOM */ element, /** All managed children will be inserted before this node, if defined */ before, /** All managed children will be inserted after this node, if defined */ after){
        this.element = element;
        this.before = before || null;
        this.after = after || null;
    }
    /**
   * Return a new ElementDOMSlot where all managed children will be inserted before this node
   */ withBefore(before) {
        return new ElementDOMSlot(this.element, before, this.after);
    }
    /**
   * Return a new ElementDOMSlot where all managed children will be inserted after this node
   */ withAfter(after) {
        return new ElementDOMSlot(this.element, this.before, after);
    }
    /**
   * Return a new ElementDOMSlot with an updated root element
   */ withElement(element) {
        if (this.element === element) {
            return this;
        }
        return new ElementDOMSlot(element, this.before, this.after);
    }
    /**
   * Insert the given child before this.before and any reconciler managed line break node,
   * or append it if this.before is not defined
   */ insertChild(dom) {
        const before = this.before || this.getManagedLineBreak();
        if (!(before === null || before.parentElement === this.element)) {
            formatDevErrorMessage(`ElementDOMSlot.insertChild: before is not in element`);
        }
        this.element.insertBefore(dom, before);
        return this;
    }
    /**
   * Remove the managed child from this container, will throw if it was not already there
   */ removeChild(dom) {
        if (!(dom.parentElement === this.element)) {
            formatDevErrorMessage(`ElementDOMSlot.removeChild: dom is not in element`);
        }
        this.element.removeChild(dom);
        return this;
    }
    /**
   * Replace managed child prevDom with dom. Will throw if prevDom is not a child
   *
   * @param dom The new node to replace prevDom
   * @param prevDom the node that will be replaced
   */ replaceChild(dom, prevDom) {
        if (!(prevDom.parentElement === this.element)) {
            formatDevErrorMessage(`ElementDOMSlot.replaceChild: prevDom is not in element`);
        }
        this.element.replaceChild(dom, prevDom);
        return this;
    }
    /**
   * Returns the first managed child of this node,
   * which will either be this.after.nextSibling or this.element.firstChild,
   * and will never be this.before if it is defined.
   */ getFirstChild() {
        const firstChild = this.after ? this.after.nextSibling : this.element.firstChild;
        return firstChild === this.before || firstChild === this.getManagedLineBreak() ? null : firstChild;
    }
    /**
   * @internal
   */ getManagedLineBreak() {
        const element = this.element;
        return element.__lexicalLineBreak || null;
    }
    /** @internal */ setManagedLineBreak(lineBreakType) {
        if (lineBreakType === null) {
            this.removeManagedLineBreak();
        } else {
            const webkitHack = lineBreakType === 'decorator' && (IS_APPLE_WEBKIT || IS_IOS || IS_SAFARI);
            this.insertManagedLineBreak(webkitHack);
        }
    }
    /** @internal */ removeManagedLineBreak() {
        const br = this.getManagedLineBreak();
        if (br) {
            const element = this.element;
            const sibling = br.nodeName === 'IMG' ? br.nextSibling : null;
            if (sibling) {
                element.removeChild(sibling);
            }
            element.removeChild(br);
            element.__lexicalLineBreak = undefined;
        }
    }
    /** @internal */ insertManagedLineBreak(webkitHack) {
        const prevBreak = this.getManagedLineBreak();
        if (prevBreak) {
            if (webkitHack === (prevBreak.nodeName === 'IMG')) {
                return;
            }
            this.removeManagedLineBreak();
        }
        const element = this.element;
        const before = this.before;
        const br = document.createElement('br');
        element.insertBefore(br, before);
        if (webkitHack) {
            const img = document.createElement('img');
            img.setAttribute('data-lexical-linebreak', 'true');
            img.style.cssText = 'display: inline !important; border: 0px !important; margin: 0px !important;';
            img.alt = '';
            element.insertBefore(img, br);
            element.__lexicalLineBreak = img;
        } else {
            element.__lexicalLineBreak = br;
        }
    }
    /**
   * @internal
   *
   * Returns the offset of the first child
   */ getFirstChildOffset() {
        let i = 0;
        for(let node = this.after; node !== null; node = node.previousSibling){
            i++;
        }
        return i;
    }
    /**
   * @internal
   */ resolveChildIndex(element, elementDOM, initialDOM, initialOffset) {
        if (initialDOM === this.element) {
            const firstChildOffset = this.getFirstChildOffset();
            return [
                element,
                Math.min(firstChildOffset + element.getChildrenSize(), Math.max(firstChildOffset, initialOffset))
            ];
        }
        // The resolved offset must be before or after the children
        const initialPath = indexPath(elementDOM, initialDOM);
        initialPath.push(initialOffset);
        const elementPath = indexPath(elementDOM, this.element);
        let offset = element.getIndexWithinParent();
        for(let i = 0; i < elementPath.length; i++){
            const target = initialPath[i];
            const source = elementPath[i];
            if (target === undefined || target < source) {
                break;
            } else if (target > source) {
                offset += 1;
                break;
            }
        }
        return [
            element.getParentOrThrow(),
            offset
        ];
    }
}
function indexPath(root, child) {
    const path = [];
    let node = child;
    for(; node !== root && node !== null; node = node.parentNode){
        let i = 0;
        for(let sibling = node.previousSibling; sibling !== null; sibling = sibling.previousSibling){
            i++;
        }
        path.push(i);
    }
    if (!(node === root)) {
        formatDevErrorMessage(`indexPath: root is not a parent of child`);
    }
    return path.reverse();
}
/** @noInheritDoc */ // eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
class ElementNode extends LexicalNode {
    /** @internal */ /** @internal */ __first;
    /** @internal */ __last;
    /** @internal */ __size;
    /** @internal */ __format;
    /** @internal */ __style;
    /** @internal */ __indent;
    /** @internal */ __dir;
    /** @internal */ __textFormat;
    /** @internal */ __textStyle;
    constructor(key){
        super(key);
        this.__first = null;
        this.__last = null;
        this.__size = 0;
        this.__format = 0;
        this.__style = '';
        this.__indent = 0;
        this.__dir = null;
        this.__textFormat = 0;
        this.__textStyle = '';
    }
    afterCloneFrom(prevNode) {
        super.afterCloneFrom(prevNode);
        if (this.__key === prevNode.__key) {
            this.__first = prevNode.__first;
            this.__last = prevNode.__last;
            this.__size = prevNode.__size;
        }
        this.__indent = prevNode.__indent;
        this.__format = prevNode.__format;
        this.__style = prevNode.__style;
        this.__dir = prevNode.__dir;
        this.__textFormat = prevNode.__textFormat;
        this.__textStyle = prevNode.__textStyle;
    }
    getFormat() {
        const self = this.getLatest();
        return self.__format;
    }
    getFormatType() {
        const format = this.getFormat();
        return ELEMENT_FORMAT_TO_TYPE[format] || '';
    }
    getStyle() {
        const self = this.getLatest();
        return self.__style;
    }
    getIndent() {
        const self = this.getLatest();
        return self.__indent;
    }
    getChildren() {
        const children = [];
        let child = this.getFirstChild();
        while(child !== null){
            children.push(child);
            child = child.getNextSibling();
        }
        return children;
    }
    getChildrenKeys() {
        const children = [];
        let child = this.getFirstChild();
        while(child !== null){
            children.push(child.__key);
            child = child.getNextSibling();
        }
        return children;
    }
    getChildrenSize() {
        const self = this.getLatest();
        return self.__size;
    }
    isEmpty() {
        return this.getChildrenSize() === 0;
    }
    isDirty() {
        const editor = getActiveEditor();
        const dirtyElements = editor._dirtyElements;
        return dirtyElements !== null && dirtyElements.has(this.__key);
    }
    isLastChild() {
        const self = this.getLatest();
        const parentLastChild = this.getParentOrThrow().getLastChild();
        return parentLastChild !== null && parentLastChild.is(self);
    }
    getAllTextNodes() {
        const textNodes = [];
        let child = this.getFirstChild();
        while(child !== null){
            if ($isTextNode(child)) {
                textNodes.push(child);
            }
            if ($isElementNode(child)) {
                const subChildrenNodes = child.getAllTextNodes();
                textNodes.push(...subChildrenNodes);
            }
            child = child.getNextSibling();
        }
        return textNodes;
    }
    getFirstDescendant() {
        let node = this.getFirstChild();
        while($isElementNode(node)){
            const child = node.getFirstChild();
            if (child === null) {
                break;
            }
            node = child;
        }
        return node;
    }
    getLastDescendant() {
        let node = this.getLastChild();
        while($isElementNode(node)){
            const child = node.getLastChild();
            if (child === null) {
                break;
            }
            node = child;
        }
        return node;
    }
    getDescendantByIndex(index) {
        const children = this.getChildren();
        const childrenLength = children.length;
        // For non-empty element nodes, we resolve its descendant
        // (either a leaf node or the bottom-most element)
        if (index >= childrenLength) {
            const resolvedNode = children[childrenLength - 1];
            return $isElementNode(resolvedNode) && resolvedNode.getLastDescendant() || resolvedNode || null;
        }
        const resolvedNode = children[index];
        return $isElementNode(resolvedNode) && resolvedNode.getFirstDescendant() || resolvedNode || null;
    }
    getFirstChild() {
        const self = this.getLatest();
        const firstKey = self.__first;
        return firstKey === null ? null : $getNodeByKey(firstKey);
    }
    getFirstChildOrThrow() {
        const firstChild = this.getFirstChild();
        if (firstChild === null) {
            {
                formatDevErrorMessage(`Expected node ${this.__key} to have a first child.`);
            }
        }
        return firstChild;
    }
    getLastChild() {
        const self = this.getLatest();
        const lastKey = self.__last;
        return lastKey === null ? null : $getNodeByKey(lastKey);
    }
    getLastChildOrThrow() {
        const lastChild = this.getLastChild();
        if (lastChild === null) {
            {
                formatDevErrorMessage(`Expected node ${this.__key} to have a last child.`);
            }
        }
        return lastChild;
    }
    getChildAtIndex(index) {
        const size = this.getChildrenSize();
        let node;
        let i;
        if (index < size / 2) {
            node = this.getFirstChild();
            i = 0;
            while(node !== null && i <= index){
                if (i === index) {
                    return node;
                }
                node = node.getNextSibling();
                i++;
            }
            return null;
        }
        node = this.getLastChild();
        i = size - 1;
        while(node !== null && i >= index){
            if (i === index) {
                return node;
            }
            node = node.getPreviousSibling();
            i--;
        }
        return null;
    }
    getTextContent() {
        let textContent = '';
        const children = this.getChildren();
        const childrenLength = children.length;
        for(let i = 0; i < childrenLength; i++){
            const child = children[i];
            textContent += child.getTextContent();
            if (// this is an inline $textContentRequiresDoubleLinebreakAtEnd(child)
            $isElementNode(child) && i !== childrenLength - 1 && !child.isInline()) {
                textContent += DOUBLE_LINE_BREAK;
            }
        }
        return textContent;
    }
    getTextContentSize() {
        let textContentSize = 0;
        const children = this.getChildren();
        const childrenLength = children.length;
        for(let i = 0; i < childrenLength; i++){
            const child = children[i];
            textContentSize += child.getTextContentSize();
            if (// This is an inline $textContentRequiresDoubleLinebreakAtEnd(child)
            $isElementNode(child) && i !== childrenLength - 1 && !child.isInline()) {
                textContentSize += DOUBLE_LINE_BREAK.length;
            }
        }
        return textContentSize;
    }
    getDirection() {
        const self = this.getLatest();
        return self.__dir;
    }
    getTextFormat() {
        const self = this.getLatest();
        return self.__textFormat;
    }
    hasFormat(type) {
        if (type !== '') {
            const formatFlag = ELEMENT_TYPE_TO_FORMAT[type];
            return (this.getFormat() & formatFlag) !== 0;
        }
        return false;
    }
    hasTextFormat(type) {
        const formatFlag = TEXT_TYPE_TO_FORMAT[type];
        return (this.getTextFormat() & formatFlag) !== 0;
    }
    /**
   * Returns the format flags applied to the node as a 32-bit integer.
   *
   * @returns a number representing the TextFormatTypes applied to the node.
   */ getFormatFlags(type, alignWithFormat) {
        const self = this.getLatest();
        const format = self.__textFormat;
        return toggleTextFormatType(format, type, alignWithFormat);
    }
    getTextStyle() {
        const self = this.getLatest();
        return self.__textStyle;
    }
    // Mutators
    select(_anchorOffset, _focusOffset) {
        errorOnReadOnly();
        const selection = $getSelection();
        let anchorOffset = _anchorOffset;
        let focusOffset = _focusOffset;
        const childrenCount = this.getChildrenSize();
        if (!this.canBeEmpty()) {
            if (_anchorOffset === 0 && _focusOffset === 0) {
                const firstChild = this.getFirstChild();
                if ($isTextNode(firstChild) || $isElementNode(firstChild)) {
                    return firstChild.select(0, 0);
                }
            } else if ((_anchorOffset === undefined || _anchorOffset === childrenCount) && (_focusOffset === undefined || _focusOffset === childrenCount)) {
                const lastChild = this.getLastChild();
                if ($isTextNode(lastChild) || $isElementNode(lastChild)) {
                    return lastChild.select();
                }
            }
        }
        if (anchorOffset === undefined) {
            anchorOffset = childrenCount;
        }
        if (focusOffset === undefined) {
            focusOffset = childrenCount;
        }
        const key = this.__key;
        if (!$isRangeSelection(selection)) {
            return $internalMakeRangeSelection(key, anchorOffset, key, focusOffset, 'element', 'element');
        } else {
            selection.anchor.set(key, anchorOffset, 'element');
            selection.focus.set(key, focusOffset, 'element');
            selection.dirty = true;
        }
        return selection;
    }
    selectStart() {
        const firstNode = this.getFirstDescendant();
        return firstNode ? firstNode.selectStart() : this.select();
    }
    selectEnd() {
        const lastNode = this.getLastDescendant();
        return lastNode ? lastNode.selectEnd() : this.select();
    }
    clear() {
        const writableSelf = this.getWritable();
        const children = this.getChildren();
        children.forEach((child)=>child.remove());
        return writableSelf;
    }
    append(...nodesToAppend) {
        return this.splice(this.getChildrenSize(), 0, nodesToAppend);
    }
    setDirection(direction) {
        const self = this.getWritable();
        self.__dir = direction;
        return self;
    }
    setFormat(type) {
        const self = this.getWritable();
        self.__format = type !== '' ? ELEMENT_TYPE_TO_FORMAT[type] : 0;
        return this;
    }
    setStyle(style) {
        const self = this.getWritable();
        self.__style = style || '';
        return this;
    }
    setTextFormat(type) {
        const self = this.getWritable();
        self.__textFormat = type;
        return self;
    }
    setTextStyle(style) {
        const self = this.getWritable();
        self.__textStyle = style;
        return self;
    }
    setIndent(indentLevel) {
        const self = this.getWritable();
        self.__indent = indentLevel;
        return this;
    }
    splice(start, deleteCount, nodesToInsert) {
        if (!!$isEphemeral(this)) {
            formatDevErrorMessage(`ElementNode.splice: Ephemeral nodes can not mutate their children (key ${this.__key} type ${this.__type})`);
        }
        const oldSize = this.getChildrenSize();
        const writableSelf = this.getWritable();
        if (!(start + deleteCount <= oldSize)) {
            formatDevErrorMessage(`ElementNode.splice: start + deleteCount > oldSize (${String(start)} + ${String(deleteCount)} > ${String(oldSize)})`);
        }
        const writableSelfKey = writableSelf.__key;
        const nodesToInsertKeys = [];
        const nodesToRemoveKeys = [];
        const nodeAfterRange = this.getChildAtIndex(start + deleteCount);
        let nodeBeforeRange = null;
        let newSize = oldSize - deleteCount + nodesToInsert.length;
        if (start !== 0) {
            if (start === oldSize) {
                nodeBeforeRange = this.getLastChild();
            } else {
                const node = this.getChildAtIndex(start);
                if (node !== null) {
                    nodeBeforeRange = node.getPreviousSibling();
                }
            }
        }
        if (deleteCount > 0) {
            let nodeToDelete = nodeBeforeRange === null ? this.getFirstChild() : nodeBeforeRange.getNextSibling();
            for(let i = 0; i < deleteCount; i++){
                if (nodeToDelete === null) {
                    {
                        formatDevErrorMessage(`splice: sibling not found`);
                    }
                }
                const nextSibling = nodeToDelete.getNextSibling();
                const nodeKeyToDelete = nodeToDelete.__key;
                const writableNodeToDelete = nodeToDelete.getWritable();
                removeFromParent(writableNodeToDelete);
                nodesToRemoveKeys.push(nodeKeyToDelete);
                nodeToDelete = nextSibling;
            }
        }
        let prevNode = nodeBeforeRange;
        for (const nodeToInsert of nodesToInsert){
            if (prevNode !== null && nodeToInsert.is(prevNode)) {
                nodeBeforeRange = prevNode = prevNode.getPreviousSibling();
            }
            const writableNodeToInsert = nodeToInsert.getWritable();
            if (writableNodeToInsert.__parent === writableSelfKey) {
                newSize--;
            }
            removeFromParent(writableNodeToInsert);
            const nodeKeyToInsert = nodeToInsert.__key;
            if (prevNode === null) {
                writableSelf.__first = nodeKeyToInsert;
                writableNodeToInsert.__prev = null;
            } else {
                const writablePrevNode = prevNode.getWritable();
                writablePrevNode.__next = nodeKeyToInsert;
                writableNodeToInsert.__prev = writablePrevNode.__key;
            }
            if (nodeToInsert.__key === writableSelfKey) {
                {
                    formatDevErrorMessage(`append: attempting to append self`);
                }
            }
            // Set child parent to self
            writableNodeToInsert.__parent = writableSelfKey;
            nodesToInsertKeys.push(nodeKeyToInsert);
            prevNode = nodeToInsert;
        }
        if (start + deleteCount === oldSize) {
            if (prevNode !== null) {
                const writablePrevNode = prevNode.getWritable();
                writablePrevNode.__next = null;
                writableSelf.__last = prevNode.__key;
            }
        } else if (nodeAfterRange !== null) {
            const writableNodeAfterRange = nodeAfterRange.getWritable();
            if (prevNode !== null) {
                const writablePrevNode = prevNode.getWritable();
                writableNodeAfterRange.__prev = prevNode.__key;
                writablePrevNode.__next = nodeAfterRange.__key;
            } else {
                writableNodeAfterRange.__prev = null;
            }
        }
        writableSelf.__size = newSize;
        // In case of deletion we need to adjust selection, unlink removed nodes
        // and clean up node itself if it becomes empty. None of these needed
        // for insertion-only cases
        if (nodesToRemoveKeys.length) {
            // Adjusting selection, in case node that was anchor/focus will be deleted
            const selection = $getSelection();
            if ($isRangeSelection(selection)) {
                const nodesToRemoveKeySet = new Set(nodesToRemoveKeys);
                const nodesToInsertKeySet = new Set(nodesToInsertKeys);
                const { anchor, focus } = selection;
                if (isPointRemoved(anchor, nodesToRemoveKeySet, nodesToInsertKeySet)) {
                    moveSelectionPointToSibling(anchor, anchor.getNode(), this, nodeBeforeRange, nodeAfterRange);
                }
                if (isPointRemoved(focus, nodesToRemoveKeySet, nodesToInsertKeySet)) {
                    moveSelectionPointToSibling(focus, focus.getNode(), this, nodeBeforeRange, nodeAfterRange);
                }
                // Cleanup if node can't be empty
                if (newSize === 0 && !this.canBeEmpty() && !$isRootOrShadowRoot(this)) {
                    this.remove();
                }
            }
        }
        return writableSelf;
    }
    /**
   * @internal
   *
   * An experimental API that an ElementNode can override to control where its
   * children are inserted into the DOM, this is useful to add a wrapping node
   * or accessory nodes before or after the children. The root of the node returned
   * by createDOM must still be exactly one HTMLElement.
   */ getDOMSlot(element) {
        return new ElementDOMSlot(element);
    }
    exportDOM(editor) {
        const { element } = super.exportDOM(editor);
        if (isHTMLElement(element)) {
            const indent = this.getIndent();
            if (indent > 0) {
                // padding-inline-start is not widely supported in email HTML
                // (see https://www.caniemail.com/features/css-padding-inline-start-end/),
                // If you want to use HTML output for email, consider overriding the serialization
                // to use `padding-right` in RTL languages, `padding-left` in `LTR` languages, or
                // `text-indent` if you are ok with first-line indents.
                // We recommend keeping multiples of 40px to maintain consistency with list-items
                // (see https://github.com/facebook/lexical/pull/4025)
                element.style.paddingInlineStart = `${indent * 40}px`;
            }
            const direction = this.getDirection();
            if (direction) {
                element.dir = direction;
            }
        }
        return {
            element
        };
    }
    // JSON serialization
    exportJSON() {
        const json = {
            children: [],
            direction: this.getDirection(),
            format: this.getFormatType(),
            indent: this.getIndent(),
            // As an exception here we invoke super at the end for historical reasons.
            // Namely, to preserve the order of the properties and not to break the tests
            // that use the serialized string representation.
            ...super.exportJSON()
        };
        const textFormat = this.getTextFormat();
        const textStyle = this.getTextStyle();
        // Only persist for cases when there are no TextNode children from which
        // these would be set on reconcile (#7968)
        if ((textFormat !== 0 || textStyle !== '') && !$isRootOrShadowRoot(this) && !this.getChildren().some($isTextNode)) {
            if (textFormat !== 0) {
                json.textFormat = textFormat;
            }
            if (textStyle !== '') {
                json.textStyle = textStyle;
            }
        }
        return json;
    }
    updateFromJSON(serializedNode) {
        return super.updateFromJSON(serializedNode).setFormat(serializedNode.format).setIndent(serializedNode.indent).setDirection(serializedNode.direction).setTextFormat(serializedNode.textFormat || 0).setTextStyle(serializedNode.textStyle || '');
    }
    // These are intended to be extends for specific element heuristics.
    insertNewAfter(selection, restoreSelection) {
        return null;
    }
    canIndent() {
        return true;
    }
    /*
   * This method controls the behavior of the node during backwards
   * deletion (i.e., backspace) when selection is at the beginning of
   * the node (offset 0). You may use this to have the node replace
   * itself, change its state, or do nothing. When you do make such
   * a change, you should return true.
   *
   * When true is returned, the collapse phase will stop.
   * When false is returned, and isInline() is true, and getPreviousSibling() is null,
   * then this function will be called on its parent.
   */ collapseAtStart(selection) {
        return false;
    }
    excludeFromCopy(destination) {
        return false;
    }
    /** @deprecated @internal */ canReplaceWith(replacement) {
        return true;
    }
    /** @deprecated @internal */ canInsertAfter(node) {
        return true;
    }
    canBeEmpty() {
        return true;
    }
    canInsertTextBefore() {
        return true;
    }
    canInsertTextAfter() {
        return true;
    }
    isInline() {
        return false;
    }
    // A shadow root is a Node that behaves like RootNode. The shadow root (and RootNode) mark the
    // end of the hierarchy, most implementations should treat it as there's nothing (upwards)
    // beyond this point. For example, node.getTopLevelElement(), when performed inside a TableCellNode
    // will return the immediate first child underneath TableCellNode instead of RootNode.
    isShadowRoot() {
        return false;
    }
    /** @deprecated @internal */ canMergeWith(node) {
        return false;
    }
    extractWithChild(child, selection, destination) {
        return false;
    }
    /**
   * Determines whether this node, when empty, can merge with a first block
   * of nodes being inserted.
   *
   * This method is specifically called in {@link RangeSelection.insertNodes}
   * to determine merging behavior during nodes insertion.
   *
   * @example
   * // In a ListItemNode or QuoteNode implementation:
   * canMergeWhenEmpty(): true {
   *  return true;
   * }
   */ canMergeWhenEmpty() {
        return false;
    }
    /** @internal */ reconcileObservedMutation(dom, editor) {
        const slot = this.getDOMSlot(dom);
        let currentDOM = slot.getFirstChild();
        for(let currentNode = this.getFirstChild(); currentNode; currentNode = currentNode.getNextSibling()){
            const correctDOM = editor.getElementByKey(currentNode.getKey());
            if (correctDOM === null) {
                continue;
            }
            if (currentDOM == null) {
                slot.insertChild(correctDOM);
                currentDOM = correctDOM;
            } else if (currentDOM !== correctDOM) {
                slot.replaceChild(correctDOM, currentDOM);
            }
            currentDOM = currentDOM.nextSibling;
        }
    }
}
function $isElementNode(node) {
    return node instanceof ElementNode;
}
function isPointRemoved(point, nodesToRemoveKeySet, nodesToInsertKeySet) {
    let node = point.getNode();
    while(node){
        const nodeKey = node.__key;
        if (nodesToRemoveKeySet.has(nodeKey) && !nodesToInsertKeySet.has(nodeKey)) {
            return true;
        }
        node = node.getParent();
    }
    return false;
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ // eslint-disable-next-line @typescript-eslint/no-unused-vars
/** @noInheritDoc */ // eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
class DecoratorNode extends LexicalNode {
    /** @internal */ /**
   * The returned value is added to the LexicalEditor._decorators
   */ decorate(editor, config) {
        return null;
    }
    isIsolated() {
        return false;
    }
    isInline() {
        return true;
    }
    isKeyboardSelectable() {
        return true;
    }
}
function $isDecoratorNode(node) {
    return node instanceof DecoratorNode;
}
/** @noInheritDoc */ class RootNode extends ElementNode {
    /** @internal */ __cachedText;
    static getType() {
        return 'root';
    }
    static clone() {
        return new RootNode();
    }
    constructor(){
        super('root');
        this.__cachedText = null;
    }
    getTopLevelElementOrThrow() {
        {
            formatDevErrorMessage(`getTopLevelElementOrThrow: root nodes are not top level elements`);
        }
    }
    getTextContent() {
        const cachedText = this.__cachedText;
        if (isCurrentlyReadOnlyMode() || getActiveEditor()._dirtyType === NO_DIRTY_NODES) {
            if (cachedText !== null) {
                return cachedText;
            }
        }
        return super.getTextContent();
    }
    remove() {
        {
            formatDevErrorMessage(`remove: cannot be called on root nodes`);
        }
    }
    replace(node) {
        {
            formatDevErrorMessage(`replace: cannot be called on root nodes`);
        }
    }
    insertBefore(nodeToInsert) {
        {
            formatDevErrorMessage(`insertBefore: cannot be called on root nodes`);
        }
    }
    insertAfter(nodeToInsert) {
        {
            formatDevErrorMessage(`insertAfter: cannot be called on root nodes`);
        }
    }
    // View
    updateDOM(prevNode, dom) {
        return false;
    }
    // Mutate
    splice(start, deleteCount, nodesToInsert) {
        for (const node of nodesToInsert){
            if (!($isElementNode(node) || $isDecoratorNode(node))) {
                formatDevErrorMessage(`rootNode.splice: Only element or decorator nodes can be inserted to the root node`);
            }
        }
        return super.splice(start, deleteCount, nodesToInsert);
    }
    static importJSON(serializedNode) {
        // We don't create a root, and instead use the existing root.
        return $getRoot().updateFromJSON(serializedNode);
    }
    collapseAtStart() {
        return true;
    }
}
function $createRootNode() {
    return new RootNode();
}
function $isRootNode(node) {
    return node instanceof RootNode;
}
function editorStateHasDirtySelection(editorState, editor) {
    const currentSelection = editor.getEditorState()._selection;
    const pendingSelection = editorState._selection;
    // Check if we need to update because of changes in selection
    if (pendingSelection !== null) {
        if (pendingSelection.dirty || !pendingSelection.is(currentSelection)) {
            return true;
        }
    } else if (currentSelection !== null) {
        return true;
    }
    return false;
}
function cloneEditorState(current) {
    return new EditorState(new Map(current._nodeMap));
}
function createEmptyEditorState() {
    return new EditorState(new Map([
        [
            'root',
            $createRootNode()
        ]
    ]));
}
function exportNodeToJSON(node) {
    const serializedNode = node.exportJSON();
    const nodeClass = node.constructor;
    if (serializedNode.type !== nodeClass.getType()) {
        {
            formatDevErrorMessage(`LexicalNode: Node ${nodeClass.name} does not match the serialized type. Check if .exportJSON() is implemented and it is returning the correct type.`);
        }
    }
    if ($isElementNode(node)) {
        const serializedChildren = serializedNode.children;
        if (!Array.isArray(serializedChildren)) {
            {
                formatDevErrorMessage(`LexicalNode: Node ${nodeClass.name} is an element but .exportJSON() does not have a children array.`);
            }
        }
        const children = node.getChildren();
        for(let i = 0; i < children.length; i++){
            const child = children[i];
            const serializedChildNode = exportNodeToJSON(child);
            serializedChildren.push(serializedChildNode);
        }
    }
    // @ts-expect-error
    return serializedNode;
}
/**
 * Type guard that returns true if the argument is an EditorState
 */ function $isEditorState(x) {
    return x instanceof EditorState;
}
class EditorState {
    _nodeMap;
    _selection;
    _flushSync;
    _readOnly;
    constructor(nodeMap, selection){
        this._nodeMap = nodeMap;
        this._selection = selection || null;
        this._flushSync = false;
        this._readOnly = false;
    }
    isEmpty() {
        return this._nodeMap.size === 1 && this._selection === null;
    }
    read(callbackFn, options) {
        return readEditorState(options && options.editor || null, this, callbackFn);
    }
    clone(selection) {
        const editorState = new EditorState(this._nodeMap, selection === undefined ? this._selection : selection);
        editorState._readOnly = true;
        return editorState;
    }
    toJSON() {
        return readEditorState(null, this, ()=>({
                root: exportNodeToJSON($getRoot())
            }));
    }
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ // TODO: Cleanup ArtificialNode__DO_NOT_USE #5966
/** @internal */ class ArtificialNode__DO_NOT_USE extends ElementNode {
    static getType() {
        return 'artificial';
    }
    createDOM(config) {
        // this isnt supposed to be used and is not used anywhere but defining it to appease the API
        const dom = document.createElement('div');
        return dom;
    }
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ /** @noInheritDoc */ class ParagraphNode extends ElementNode {
    /** @internal */ static getType() {
        return 'paragraph';
    }
    static clone(node) {
        return new ParagraphNode(node.__key);
    }
    // View
    createDOM(config) {
        const dom = document.createElement('p');
        const classNames = getCachedClassNameArray(config.theme, 'paragraph');
        if (classNames !== undefined) {
            const domClassList = dom.classList;
            domClassList.add(...classNames);
        }
        return dom;
    }
    updateDOM(prevNode, dom, config) {
        return false;
    }
    static importDOM() {
        return {
            p: (node)=>({
                    conversion: $convertParagraphElement,
                    priority: 0
                })
        };
    }
    exportDOM(editor) {
        const { element } = super.exportDOM(editor);
        if (isHTMLElement(element)) {
            if (this.isEmpty()) {
                element.append(document.createElement('br'));
            }
            const formatType = this.getFormatType();
            if (formatType) {
                element.style.textAlign = formatType;
            }
        }
        return {
            element
        };
    }
    static importJSON(serializedNode) {
        return $createParagraphNode().updateFromJSON(serializedNode);
    }
    exportJSON() {
        const json = super.exportJSON();
        // Provide backwards compatible values, see #7971
        if (json.textFormat === undefined || json.textStyle === undefined) {
            // Compute the same value that the reconciler would
            const firstTextNode = this.getChildren().find($isTextNode);
            if (firstTextNode) {
                json.textFormat = firstTextNode.getFormat();
                json.textStyle = firstTextNode.getStyle();
            } else {
                json.textFormat = this.getTextFormat();
                json.textStyle = this.getTextStyle();
            }
        }
        return json;
    }
    // Mutation
    insertNewAfter(rangeSelection, restoreSelection) {
        const newElement = $createParagraphNode();
        newElement.setTextFormat(rangeSelection.format);
        newElement.setTextStyle(rangeSelection.style);
        const direction = this.getDirection();
        newElement.setDirection(direction);
        newElement.setFormat(this.getFormatType());
        newElement.setStyle(this.getStyle());
        this.insertAfter(newElement, restoreSelection);
        return newElement;
    }
    collapseAtStart() {
        const children = this.getChildren();
        // If we have an empty (trimmed) first paragraph and try and remove it,
        // delete the paragraph as long as we have another sibling to go to
        if (children.length === 0 || $isTextNode(children[0]) && children[0].getTextContent().trim() === '') {
            const nextSibling = this.getNextSibling();
            if (nextSibling !== null) {
                this.selectNext();
                this.remove();
                return true;
            }
            const prevSibling = this.getPreviousSibling();
            if (prevSibling !== null) {
                this.selectPrevious();
                this.remove();
                return true;
            }
        }
        return false;
    }
}
function $convertParagraphElement(element) {
    const node = $createParagraphNode();
    if (element.style) {
        node.setFormat(element.style.textAlign);
        setNodeIndentFromDOM(element, node);
    }
    return {
        node
    };
}
function $createParagraphNode() {
    return $applyNodeReplacement(new ParagraphNode());
}
function $isParagraphNode(node) {
    return node instanceof ParagraphNode;
}
// https://github.com/microsoft/TypeScript/issues/3841
// eslint-disable-next-line @typescript-eslint/no-explicit-any
// eslint-disable-next-line @typescript-eslint/no-explicit-any
/**
 * A LexicalNode class or LexicalNodeReplacement configuration
 */ const DEFAULT_SKIP_INITIALIZATION = false;
/**
 * The payload passed to an UpdateListener
 */ /**
 * A listener that gets called after the editor is updated
 */ const COMMAND_PRIORITY_EDITOR = 0;
const COMMAND_PRIORITY_LOW = 1;
const COMMAND_PRIORITY_NORMAL = 2;
const COMMAND_PRIORITY_HIGH = 3;
const COMMAND_PRIORITY_CRITICAL = 4;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
/**
 * Type helper for extracting the payload type from a command.
 *
 * @example
 * ```ts
 * const MY_COMMAND = createCommand<SomeType>();
 *
 * // ...
 *
 * editor.registerCommand(MY_COMMAND, payload => {
 *   // Type of `payload` is inferred here. But lets say we want to extract a function to delegate to
 *   $handleMyCommand(editor, payload);
 *   return true;
 * });
 *
 * function $handleMyCommand(editor: LexicalEditor, payload: CommandPayloadType<typeof MY_COMMAND>) {
 *   // `payload` is of type `SomeType`, extracted from the command.
 * }
 * ```
 */ function resetEditor(editor, prevRootElement, nextRootElement, pendingEditorState) {
    const keyNodeMap = editor._keyToDOMMap;
    keyNodeMap.clear();
    editor._editorState = createEmptyEditorState();
    editor._pendingEditorState = pendingEditorState;
    editor._compositionKey = null;
    editor._dirtyType = NO_DIRTY_NODES;
    editor._cloneNotNeeded.clear();
    editor._dirtyLeaves = new Set();
    editor._dirtyElements.clear();
    editor._normalizedNodes = new Set();
    editor._updateTags = new Set();
    editor._updates = [];
    editor._blockCursorElement = null;
    const observer = editor._observer;
    if (observer !== null) {
        observer.disconnect();
        editor._observer = null;
    }
    // Remove all the DOM nodes from the root element
    if (prevRootElement !== null) {
        prevRootElement.textContent = '';
    }
    if (nextRootElement !== null) {
        nextRootElement.textContent = '';
        keyNodeMap.set('root', nextRootElement);
    }
}
function initializeConversionCache(nodes, additionalConversions) {
    const conversionCache = new Map();
    const handledConversions = new Set();
    const addConversionsToCache = (map)=>{
        Object.keys(map).forEach((key)=>{
            let currentCache = conversionCache.get(key);
            if (currentCache === undefined) {
                currentCache = [];
                conversionCache.set(key, currentCache);
            }
            currentCache.push(map[key]);
        });
    };
    nodes.forEach((node)=>{
        const importDOM = node.klass.importDOM;
        if (importDOM == null || handledConversions.has(importDOM)) {
            return;
        }
        handledConversions.add(importDOM);
        const map = importDOM.call(node.klass);
        if (map !== null) {
            addConversionsToCache(map);
        }
    });
    if (additionalConversions) {
        addConversionsToCache(additionalConversions);
    }
    return conversionCache;
}
/** @internal */ function getTransformSetFromKlass(klass) {
    const transforms = new Set();
    const staticTransforms = new Set();
    let currentKlass = klass;
    while(currentKlass){
        const { ownNodeConfig } = getStaticNodeConfig(currentKlass);
        const staticTransform = currentKlass.transform;
        if (!staticTransforms.has(staticTransform)) {
            staticTransforms.add(staticTransform);
            const transform = currentKlass.transform();
            if (transform) {
                transforms.add(transform);
            }
        }
        if (ownNodeConfig) {
            const $transform = ownNodeConfig.$transform;
            if ($transform) {
                transforms.add($transform);
            }
            currentKlass = ownNodeConfig.extends;
        } else {
            const parent = Object.getPrototypeOf(currentKlass);
            currentKlass = parent.prototype instanceof LexicalNode && parent !== LexicalNode ? parent : undefined;
        }
    }
    return transforms;
}
/**
 * Creates a new LexicalEditor attached to a single contentEditable (provided in the config). This is
 * the lowest-level initialization API for a LexicalEditor. If you're using React or another framework,
 * consider using the appropriate abstractions, such as LexicalComposer
 * @param editorConfig - the editor configuration.
 * @returns a LexicalEditor instance
 */ function createEditor(editorConfig) {
    const config = editorConfig || {};
    const activeEditor = internalGetActiveEditor();
    const theme = config.theme || {};
    const parentEditor = editorConfig === undefined ? activeEditor : config.parentEditor || null;
    const disableEvents = config.disableEvents || false;
    const editorState = createEmptyEditorState();
    const namespace = config.namespace || (parentEditor !== null ? parentEditor._config.namespace : createUID());
    const initialEditorState = config.editorState;
    const nodes = [
        RootNode,
        TextNode,
        LineBreakNode,
        TabNode,
        ParagraphNode,
        ArtificialNode__DO_NOT_USE,
        ...config.nodes || []
    ];
    const { onError, html } = config;
    const isEditable = config.editable !== undefined ? config.editable : true;
    let registeredNodes;
    if (editorConfig === undefined && activeEditor !== null) {
        registeredNodes = activeEditor._nodes;
    } else {
        registeredNodes = new Map();
        for(let i = 0; i < nodes.length; i++){
            let klass = nodes[i];
            let replace = null;
            let replaceWithKlass = null;
            if (typeof klass !== 'function') {
                const options = klass;
                klass = options.replace;
                replace = options.with;
                replaceWithKlass = options.withKlass || null;
            }
            // For the side-effect of filling in the static methods
            void getStaticNodeConfig(klass);
            // Ensure custom nodes implement required methods and replaceWithKlass is instance of base klass.
            {
                // ArtificialNode__DO_NOT_USE can get renamed, so we use the type
                const name = klass.name;
                const nodeType = hasOwnStaticMethod(klass, 'getType') && klass.getType();
                if (replaceWithKlass) {
                    if (!(replaceWithKlass.prototype instanceof klass)) {
                        formatDevErrorMessage(`${replaceWithKlass.name} doesn't extend the ${name}`);
                    }
                } else if (replace) {
                    console.warn(`Override for ${name} specifies 'replace' without 'withKlass'. 'withKlass' will be required in a future version.`);
                }
                if (name !== 'RootNode' && nodeType !== 'root' && nodeType !== 'artificial' && // This is mostly for the unit test suite which
                // uses LexicalNode in an otherwise incorrect way
                // by mocking its static getType
                klass !== LexicalNode) {
                    [
                        'getType',
                        'clone'
                    ].forEach((method)=>{
                        if (!hasOwnStaticMethod(klass, method)) {
                            console.warn(`${name} must implement static "${method}" method`);
                        }
                    });
                    if (!hasOwnStaticMethod(klass, 'importDOM') && hasOwnExportDOM(klass)) {
                        console.warn(`${name} should implement "importDOM" if using a custom "exportDOM" method to ensure HTML serialization (important for copy & paste) works as expected`);
                    }
                    if (!hasOwnStaticMethod(klass, 'importJSON')) {
                        console.warn(`${name} should implement "importJSON" method to ensure JSON and default HTML serialization works as expected`);
                    }
                }
            }
            const type = klass.getType();
            const transforms = getTransformSetFromKlass(klass);
            registeredNodes.set(type, {
                exportDOM: html && html.export ? html.export.get(klass) : undefined,
                klass,
                replace,
                replaceWithKlass,
                sharedNodeState: createSharedNodeState(nodes[i]),
                transforms
            });
        }
    }
    const editor = new LexicalEditor(editorState, parentEditor, registeredNodes, {
        disableEvents,
        namespace,
        theme
    }, onError ? onError : console.error, initializeConversionCache(registeredNodes, html ? html.import : undefined), isEditable, editorConfig);
    if (initialEditorState !== undefined) {
        editor._pendingEditorState = initialEditorState;
        editor._dirtyType = FULL_RECONCILE;
    }
    registerDefaultCommandHandlers(editor);
    return editor;
}
class LexicalEditor {
    /** @internal */ /** The version with build identifiers for this editor (since 0.17.1) */ static version;
    /** @internal */ _headless;
    /** @internal */ _parentEditor;
    /** @internal */ _rootElement;
    /** @internal */ _editorState;
    /** @internal */ _pendingEditorState;
    /** @internal */ _compositionKey;
    /** @internal */ _deferred;
    /** @internal */ _keyToDOMMap;
    /** @internal */ _updates;
    /** @internal */ _updating;
    /** @internal */ _listeners;
    /** @internal */ _commands;
    /** @internal */ _nodes;
    /** @internal */ _decorators;
    /** @internal */ _pendingDecorators;
    /** @internal */ _config;
    /** @internal */ _dirtyType;
    /** @internal */ _cloneNotNeeded;
    /** @internal */ _dirtyLeaves;
    /** @internal */ _dirtyElements;
    /** @internal */ _normalizedNodes;
    /** @internal */ _updateTags;
    /** @internal */ _observer;
    /** @internal */ _key;
    /** @internal */ _onError;
    /** @internal */ _htmlConversions;
    /** @internal */ _window;
    /** @internal */ _editable;
    /** @internal */ _blockCursorElement;
    /** @internal */ _createEditorArgs;
    /** @internal */ constructor(editorState, parentEditor, nodes, config, onError, htmlConversions, editable, createEditorArgs){
        this._createEditorArgs = createEditorArgs;
        this._parentEditor = parentEditor;
        // The root element associated with this editor
        this._rootElement = null;
        // The current editor state
        this._editorState = editorState;
        // Handling of drafts and updates
        this._pendingEditorState = null;
        // Used to help co-ordinate selection and events
        this._compositionKey = null;
        this._deferred = [];
        // Used during reconciliation
        this._keyToDOMMap = new Map();
        this._updates = [];
        this._updating = false;
        // Listeners
        this._listeners = {
            decorator: new Set(),
            editable: new Set(),
            mutation: new Map(),
            root: new Set(),
            textcontent: new Set(),
            update: new Set()
        };
        // Commands
        this._commands = new Map();
        // Editor configuration for theme/context.
        this._config = config;
        // Mapping of types to their nodes
        this._nodes = nodes;
        // React node decorators for portals
        this._decorators = {};
        this._pendingDecorators = null;
        // Used to optimize reconciliation
        this._dirtyType = NO_DIRTY_NODES;
        this._cloneNotNeeded = new Set();
        this._dirtyLeaves = new Set();
        this._dirtyElements = new Map();
        this._normalizedNodes = new Set();
        this._updateTags = new Set();
        // Handling of DOM mutations
        this._observer = null;
        // Used for identifying owning editors
        this._key = createUID();
        this._onError = onError;
        this._htmlConversions = htmlConversions;
        this._editable = editable;
        this._headless = parentEditor !== null && parentEditor._headless;
        this._window = null;
        this._blockCursorElement = null;
    }
    /**
   *
   * @returns true if the editor is currently in "composition" mode due to receiving input
   * through an IME, or 3P extension, for example. Returns false otherwise.
   */ isComposing() {
        return this._compositionKey != null;
    }
    /**
   * Registers a listener for Editor update event. Will trigger the provided callback
   * each time the editor goes through an update (via {@link LexicalEditor.update}) until the
   * teardown function is called.
   *
   * @returns a teardown function that can be used to cleanup the listener.
   */ registerUpdateListener(listener) {
        const listenerSetOrMap = this._listeners.update;
        listenerSetOrMap.add(listener);
        return ()=>{
            listenerSetOrMap.delete(listener);
        };
    }
    /**
   * Registers a listener for for when the editor changes between editable and non-editable states.
   * Will trigger the provided callback each time the editor transitions between these states until the
   * teardown function is called.
   *
   * @returns a teardown function that can be used to cleanup the listener.
   */ registerEditableListener(listener) {
        const listenerSetOrMap = this._listeners.editable;
        listenerSetOrMap.add(listener);
        return ()=>{
            listenerSetOrMap.delete(listener);
        };
    }
    /**
   * Registers a listener for when the editor's decorator object changes. The decorator object contains
   * all DecoratorNode keys -> their decorated value. This is primarily used with external UI frameworks.
   *
   * Will trigger the provided callback each time the editor transitions between these states until the
   * teardown function is called.
   *
   * @returns a teardown function that can be used to cleanup the listener.
   */ registerDecoratorListener(listener) {
        const listenerSetOrMap = this._listeners.decorator;
        listenerSetOrMap.add(listener);
        return ()=>{
            listenerSetOrMap.delete(listener);
        };
    }
    /**
   * Registers a listener for when Lexical commits an update to the DOM and the text content of
   * the editor changes from the previous state of the editor. If the text content is the
   * same between updates, no notifications to the listeners will happen.
   *
   * Will trigger the provided callback each time the editor transitions between these states until the
   * teardown function is called.
   *
   * @returns a teardown function that can be used to cleanup the listener.
   */ registerTextContentListener(listener) {
        const listenerSetOrMap = this._listeners.textcontent;
        listenerSetOrMap.add(listener);
        return ()=>{
            listenerSetOrMap.delete(listener);
        };
    }
    /**
   * Registers a listener for when the editor's root DOM element (the content editable
   * Lexical attaches to) changes. This is primarily used to attach event listeners to the root
   *  element. The root listener function is executed directly upon registration and then on
   * any subsequent update.
   *
   * Will trigger the provided callback each time the editor transitions between these states until the
   * teardown function is called.
   *
   * @returns a teardown function that can be used to cleanup the listener.
   */ registerRootListener(listener) {
        const listenerSetOrMap = this._listeners.root;
        listener(this._rootElement, null);
        listenerSetOrMap.add(listener);
        return ()=>{
            listener(null, this._rootElement);
            listenerSetOrMap.delete(listener);
        };
    }
    /**
   * Registers a listener that will trigger anytime the provided command
   * is dispatched with {@link LexicalEditor.dispatch}, subject to priority.
   * Listeners that run at a higher priority can "intercept" commands and
   * prevent them from propagating to other handlers by returning true.
   *
   * Listeners are always invoked in an {@link LexicalEditor.update} and can
   * call dollar functions.
   *
   * Listeners registered at the same priority level will run
   * deterministically in the order of registration.
   *
   * @param command - the command that will trigger the callback.
   * @param listener - the function that will execute when the command is dispatched.
   * @param priority - the relative priority of the listener. 0 | 1 | 2 | 3 | 4
   *   (or {@link COMMAND_PRIORITY_EDITOR} |
   *     {@link COMMAND_PRIORITY_LOW} |
   *     {@link COMMAND_PRIORITY_NORMAL} |
   *     {@link COMMAND_PRIORITY_HIGH} |
   *     {@link COMMAND_PRIORITY_CRITICAL})
   * @returns a teardown function that can be used to cleanup the listener.
   */ registerCommand(command, listener, priority) {
        if (priority === undefined) {
            {
                formatDevErrorMessage(`Listener for type "command" requires a "priority".`);
            }
        }
        const commandsMap = this._commands;
        if (!commandsMap.has(command)) {
            commandsMap.set(command, [
                new Set(),
                new Set(),
                new Set(),
                new Set(),
                new Set()
            ]);
        }
        const listenersInPriorityOrder = commandsMap.get(command);
        if (listenersInPriorityOrder === undefined) {
            {
                formatDevErrorMessage(`registerCommand: Command ${String(command)} not found in command map`);
            }
        }
        const listeners = listenersInPriorityOrder[priority];
        listeners.add(listener);
        return ()=>{
            listeners.delete(listener);
            if (listenersInPriorityOrder.every((listenersSet)=>listenersSet.size === 0)) {
                commandsMap.delete(command);
            }
        };
    }
    /**
   * Registers a listener that will run when a Lexical node of the provided class is
   * mutated. The listener will receive a list of nodes along with the type of mutation
   * that was performed on each: created, destroyed, or updated.
   *
   * One common use case for this is to attach DOM event listeners to the underlying DOM nodes as Lexical nodes are created.
   * {@link LexicalEditor.getElementByKey} can be used for this.
   *
   * If any existing nodes are in the DOM, and skipInitialization is not true, the listener
   * will be called immediately with an updateTag of 'registerMutationListener' where all
   * nodes have the 'created' NodeMutation. This can be controlled with the skipInitialization option
   * (whose default was previously true for backwards compatibility with &lt;=0.16.1 but has been changed to false as of 0.21.0).
   *
   * @param klass - The class of the node that you want to listen to mutations on.
   * @param listener - The logic you want to run when the node is mutated.
   * @param options - see {@link MutationListenerOptions}
   * @returns a teardown function that can be used to cleanup the listener.
   */ registerMutationListener(klass, listener, options) {
        const klassToMutate = this.resolveRegisteredNodeAfterReplacements(this.getRegisteredNode(klass)).klass;
        const mutations = this._listeners.mutation;
        let klassSet = mutations.get(listener);
        if (klassSet === undefined) {
            klassSet = new Set();
            mutations.set(listener, klassSet);
        }
        klassSet.add(klassToMutate);
        const skipInitialization = options && options.skipInitialization;
        if (!(skipInitialization === undefined ? DEFAULT_SKIP_INITIALIZATION : skipInitialization)) {
            this.initializeMutationListener(listener, klassToMutate);
        }
        return ()=>{
            klassSet.delete(klassToMutate);
            if (klassSet.size === 0) {
                mutations.delete(listener);
            }
        };
    }
    /** @internal */ getRegisteredNode(klass) {
        const registeredNode = this._nodes.get(klass.getType());
        if (registeredNode === undefined) {
            {
                formatDevErrorMessage(`Node ${klass.name} has not been registered. Ensure node has been passed to createEditor.`);
            }
        }
        return registeredNode;
    }
    /** @internal */ resolveRegisteredNodeAfterReplacements(registeredNode) {
        while(registeredNode.replaceWithKlass){
            registeredNode = this.getRegisteredNode(registeredNode.replaceWithKlass);
        }
        return registeredNode;
    }
    /** @internal */ initializeMutationListener(listener, klass) {
        const prevEditorState = this._editorState;
        const nodeMap = getCachedTypeToNodeMap(prevEditorState).get(klass.getType());
        if (!nodeMap) {
            return;
        }
        const nodeMutationMap = new Map();
        for (const k of nodeMap.keys()){
            nodeMutationMap.set(k, 'created');
        }
        if (nodeMutationMap.size > 0) {
            listener(nodeMutationMap, {
                dirtyLeaves: new Set(),
                prevEditorState,
                updateTags: new Set([
                    'registerMutationListener'
                ])
            });
        }
    }
    /** @internal */ registerNodeTransformToKlass(klass, listener) {
        const registeredNode = this.getRegisteredNode(klass);
        registeredNode.transforms.add(listener);
        return registeredNode;
    }
    /**
   * Registers a listener that will run when a Lexical node of the provided class is
   * marked dirty during an update. The listener will continue to run as long as the node
   * is marked dirty. There are no guarantees around the order of transform execution!
   *
   * Watch out for infinite loops. See [Node Transforms](https://lexical.dev/docs/concepts/transforms)
   * @param klass - The class of the node that you want to run transforms on.
   * @param listener - The logic you want to run when the node is updated.
   * @returns a teardown function that can be used to cleanup the listener.
   */ registerNodeTransform(klass, listener) {
        const registeredNode = this.registerNodeTransformToKlass(klass, listener);
        const registeredNodes = [
            registeredNode
        ];
        const replaceWithKlass = registeredNode.replaceWithKlass;
        if (replaceWithKlass != null) {
            const registeredReplaceWithNode = this.registerNodeTransformToKlass(replaceWithKlass, listener);
            registeredNodes.push(registeredReplaceWithNode);
        }
        markNodesWithTypesAsDirty(this, registeredNodes.map((node)=>node.klass.getType()));
        return ()=>{
            registeredNodes.forEach((node)=>node.transforms.delete(listener));
        };
    }
    /**
   * Used to assert that a certain node is registered, usually by plugins to ensure nodes that they
   * depend on have been registered.
   * @returns True if the editor has registered the provided node type, false otherwise.
   */ hasNode(node) {
        return this._nodes.has(node.getType());
    }
    /**
   * Used to assert that certain nodes are registered, usually by plugins to ensure nodes that they
   * depend on have been registered.
   * @returns True if the editor has registered all of the provided node types, false otherwise.
   */ hasNodes(nodes) {
        return nodes.every(this.hasNode.bind(this));
    }
    /**
   * Dispatches a command of the specified type with the specified payload.
   * This triggers all command listeners (set by {@link LexicalEditor.registerCommand})
   * for this type, passing them the provided payload. The command listeners
   * will be triggered in an implicit {@link LexicalEditor.update}, unless
   * this was invoked from inside an update in which case that update context
   * will be re-used (as if this was a dollar function itself).
   * @param type - the type of command listeners to trigger.
   * @param payload - the data to pass as an argument to the command listeners.
   */ dispatchCommand(type, payload) {
        return dispatchCommand(this, type, payload);
    }
    /**
   * Gets a map of all decorators in the editor.
   * @returns A mapping of call decorator keys to their decorated content
   */ getDecorators() {
        return this._decorators;
    }
    /**
   *
   * @returns the current root element of the editor. If you want to register
   * an event listener, do it via {@link LexicalEditor.registerRootListener}, since
   * this reference may not be stable.
   */ getRootElement() {
        return this._rootElement;
    }
    /**
   * Gets the key of the editor
   * @returns The editor key
   */ getKey() {
        return this._key;
    }
    /**
   * Imperatively set the root contenteditable element that Lexical listens
   * for events on.
   */ setRootElement(nextRootElement) {
        const prevRootElement = this._rootElement;
        if (nextRootElement !== prevRootElement) {
            const classNames = getCachedClassNameArray(this._config.theme, 'root');
            const pendingEditorState = this._pendingEditorState || this._editorState;
            this._rootElement = nextRootElement;
            resetEditor(this, prevRootElement, nextRootElement, pendingEditorState);
            if (prevRootElement !== null) {
                // TODO: remove this flag once we no longer use UEv2 internally
                if (!this._config.disableEvents) {
                    removeRootElementEvents(prevRootElement);
                }
                if (classNames != null) {
                    prevRootElement.classList.remove(...classNames);
                }
            }
            if (nextRootElement !== null) {
                const windowObj = getDefaultView(nextRootElement);
                const style = nextRootElement.style;
                style.userSelect = 'text';
                style.whiteSpace = 'pre-wrap';
                style.wordBreak = 'break-word';
                nextRootElement.setAttribute('data-lexical-editor', 'true');
                this._window = windowObj;
                this._dirtyType = FULL_RECONCILE;
                initMutationObserver(this);
                this._updateTags.add(HISTORY_MERGE_TAG);
                $commitPendingUpdates(this);
                // TODO: remove this flag once we no longer use UEv2 internally
                if (!this._config.disableEvents) {
                    addRootElementEvents(nextRootElement, this);
                }
                if (classNames != null) {
                    nextRootElement.classList.add(...classNames);
                }
                {
                    const nextRootElementParent = nextRootElement.parentElement;
                    if (nextRootElementParent != null && [
                        'flex',
                        'inline-flex'
                    ].includes(getComputedStyle(nextRootElementParent).display)) {
                        console.warn(`When using "display: flex" or "display: inline-flex" on an element containing content editable, Chrome may have unwanted focusing behavior when clicking outside of it. Consider wrapping the content editable within a non-flex element.`);
                    }
                }
            } else {
                // When the content editable is unmounted we will still trigger a
                // reconciliation so that any pending updates are flushed,
                // to match the previous state change when
                // `_editorState = pendingEditorState` was used, but by
                // using a commit we preserve the readOnly invariant
                // for editor.getEditorState().
                this._window = null;
                this._updateTags.add(HISTORY_MERGE_TAG);
                $commitPendingUpdates(this);
            }
            triggerListeners('root', this, false, nextRootElement, prevRootElement);
        }
    }
    /**
   * Gets the underlying HTMLElement associated with the LexicalNode for the given key.
   * @returns the HTMLElement rendered by the LexicalNode associated with the key.
   * @param key - the key of the LexicalNode.
   */ getElementByKey(key) {
        return this._keyToDOMMap.get(key) || null;
    }
    /**
   * Gets the active editor state.
   * @returns The editor state
   */ getEditorState() {
        return this._editorState;
    }
    /**
   * Imperatively set the EditorState. Triggers reconciliation like an update.
   * @param editorState - the state to set the editor
   * @param options - options for the update.
   */ setEditorState(editorState, options) {
        if (editorState.isEmpty()) {
            {
                formatDevErrorMessage(`setEditorState: the editor state is empty. Ensure the editor state's root node never becomes empty.`);
            }
        }
        // Ensure that we have a writable EditorState so that transforms can run
        // during a historic operation
        let writableEditorState = editorState;
        if (writableEditorState._readOnly) {
            writableEditorState = cloneEditorState(editorState);
            writableEditorState._selection = editorState._selection ? editorState._selection.clone() : null;
        }
        flushRootMutations(this);
        const pendingEditorState = this._pendingEditorState;
        const tags = this._updateTags;
        const tag = options !== undefined ? options.tag : null;
        if (pendingEditorState !== null && !pendingEditorState.isEmpty()) {
            if (tag != null) {
                tags.add(tag);
            }
            $commitPendingUpdates(this);
        }
        this._pendingEditorState = writableEditorState;
        this._dirtyType = FULL_RECONCILE;
        this._dirtyElements.set('root', false);
        this._compositionKey = null;
        if (tag != null) {
            tags.add(tag);
        }
        // Only commit pending updates if not already in an editor.update
        // (e.g. dispatchCommand) otherwise this will cause a second commit
        // with an already read-only state and selection
        if (!this._updating) {
            $commitPendingUpdates(this);
        }
    }
    /**
   * Parses a SerializedEditorState (usually produced by {@link EditorState.toJSON}) and returns
   * and EditorState object that can be, for example, passed to {@link LexicalEditor.setEditorState}. Typically,
   * deserialization from JSON stored in a database uses this method.
   * @param maybeStringifiedEditorState
   * @param updateFn
   * @returns
   */ parseEditorState(maybeStringifiedEditorState, updateFn) {
        const serializedEditorState = typeof maybeStringifiedEditorState === 'string' ? JSON.parse(maybeStringifiedEditorState) : maybeStringifiedEditorState;
        return parseEditorState(serializedEditorState, this, updateFn);
    }
    /**
   * Executes a read of the editor's state, with the
   * editor context available (useful for exporting and read-only DOM
   * operations). Much like update, but prevents any mutation of the
   * editor's state. Any pending updates will be flushed immediately before
   * the read.
   * @param callbackFn - A function that has access to read-only editor state.
   */ read(callbackFn) {
        $commitPendingUpdates(this);
        return this.getEditorState().read(callbackFn, {
            editor: this
        });
    }
    /**
   * Executes an update to the editor state. The updateFn callback is the ONLY place
   * where Lexical editor state can be safely mutated.
   * @param updateFn - A function that has access to writable editor state.
   * @param options - A bag of options to control the behavior of the update.
   */ update(updateFn, options) {
        updateEditor(this, updateFn, options);
    }
    /**
   * Focuses the editor by marking the existing selection as dirty, or by
   * creating a new selection at `defaultSelection` if one does not already
   * exist. If you want to force a specific selection, you should call
   * `root.selectStart()` or `root.selectEnd()` in an update.
   *
   * @param callbackFn - A function to run after the editor is focused.
   * @param options - A bag of options
   */ focus(callbackFn, options = {}) {
        const rootElement = this._rootElement;
        if (rootElement !== null) {
            // This ensures that iOS does not trigger caps lock upon focus
            rootElement.setAttribute('autocapitalize', 'off');
            updateEditorSync(this, ()=>{
                const selection = $getSelection();
                const root = $getRoot();
                if (selection !== null) {
                    // Marking the selection dirty will force the selection back to it
                    if (!selection.dirty) {
                        $setSelection(selection.clone());
                    }
                } else if (root.getChildrenSize() !== 0) {
                    if (options.defaultSelection === 'rootStart') {
                        root.selectStart();
                    } else {
                        root.selectEnd();
                    }
                }
                $addUpdateTag(FOCUS_TAG);
                $onUpdate(()=>{
                    rootElement.removeAttribute('autocapitalize');
                    if (callbackFn) {
                        callbackFn();
                    }
                });
            });
            // In the case where onUpdate doesn't fire (due to the focus update not
            // occurring).
            if (this._pendingEditorState === null) {
                rootElement.removeAttribute('autocapitalize');
            }
        }
    }
    /**
   * Removes focus from the editor.
   */ blur() {
        const rootElement = this._rootElement;
        if (rootElement !== null) {
            rootElement.blur();
        }
        const domSelection = getDOMSelection(this._window);
        if (domSelection !== null) {
            domSelection.removeAllRanges();
        }
    }
    /**
   * Returns true if the editor is editable, false otherwise.
   * @returns True if the editor is editable, false otherwise.
   */ isEditable() {
        return this._editable;
    }
    /**
   * Sets the editable property of the editor. When false, the
   * editor will not listen for user events on the underling contenteditable.
   * @param editable - the value to set the editable mode to.
   */ setEditable(editable) {
        if (this._editable !== editable) {
            this._editable = editable;
            triggerListeners('editable', this, true, editable);
        }
    }
    /**
   * Returns a JSON-serializable javascript object NOT a JSON string.
   * You still must call JSON.stringify (or something else) to turn the
   * state into a string you can transfer over the wire and store in a database.
   *
   * See {@link LexicalNode.exportJSON}
   *
   * @returns A JSON-serializable javascript object
   */ toJSON() {
        return {
            editorState: this._editorState.toJSON()
        };
    }
}
LexicalEditor.version = "0.40.0+dev.esm";
let pendingNodeToClone = null;
function setPendingNodeToClone(pendingNode) {
    pendingNodeToClone = pendingNode;
}
function getPendingNodeToClone() {
    const node = pendingNodeToClone;
    pendingNodeToClone = null;
    return node;
}
let keyCounter = 1;
function resetRandomKey() {
    keyCounter = 1;
}
function generateRandomKey() {
    return '' + keyCounter++;
}
/**
 * @internal
 */ function getRegisteredNodeOrThrow(editor, nodeType) {
    const registeredNode = getRegisteredNode(editor, nodeType);
    if (registeredNode === undefined) {
        {
            formatDevErrorMessage(`registeredNode: Type ${nodeType} not found`);
        }
    }
    return registeredNode;
}
/**
 * @internal
 */ function getRegisteredNode(editor, nodeType) {
    return editor._nodes.get(nodeType);
}
/** @internal */ const scheduleMicroTask = typeof queueMicrotask === 'function' ? queueMicrotask : (fn)=>{
    // No window prefix intended (#1400)
    Promise.resolve().then(fn);
};
function $isSelectionCapturedInDecorator(node) {
    return $isDecoratorNode($getNearestNodeFromDOMNode(node));
}
function isSelectionCapturedInDecoratorInput(anchorDOM) {
    const activeElement = document.activeElement;
    if (!isHTMLElement(activeElement)) {
        return false;
    }
    const nodeName = activeElement.nodeName;
    return $isDecoratorNode($getNearestNodeFromDOMNode(anchorDOM)) && (nodeName === 'INPUT' || nodeName === 'TEXTAREA' || activeElement.contentEditable === 'true' && getEditorPropertyFromDOMNode(activeElement) == null);
}
function isSelectionWithinEditor(editor, anchorDOM, focusDOM) {
    const rootElement = editor.getRootElement();
    try {
        return rootElement !== null && rootElement.contains(anchorDOM) && rootElement.contains(focusDOM) && // Ignore if selection is within nested editor
        anchorDOM !== null && !isSelectionCapturedInDecoratorInput(anchorDOM) && getNearestEditorFromDOMNode(anchorDOM) === editor;
    } catch (_error) {
        return false;
    }
}
/**
 * @returns true if the given argument is a LexicalEditor instance from this build of Lexical
 */ function isLexicalEditor(editor) {
    // Check instanceof to prevent issues with multiple embedded Lexical installations
    return editor instanceof LexicalEditor;
}
function getNearestEditorFromDOMNode(node) {
    let currentNode = node;
    while(currentNode != null){
        const editor = getEditorPropertyFromDOMNode(currentNode);
        if (isLexicalEditor(editor)) {
            return editor;
        }
        currentNode = getParentElement(currentNode);
    }
    return null;
}
/** @internal */ function getEditorPropertyFromDOMNode(node) {
    // @ts-expect-error: internal field
    return node ? node.__lexicalEditor : null;
}
function getTextDirection(text) {
    if (RTL_REGEX.test(text)) {
        return 'rtl';
    }
    if (LTR_REGEX.test(text)) {
        return 'ltr';
    }
    return null;
}
/**
 * Return true if the TextNode is a TabNode or is in token mode.
 */ function $isTokenOrTab(node) {
    return $isTabNode(node) || node.isToken();
}
/**
 * Return true if the TextNode is a TabNode, or is in token or segmented mode.
 */ function $isTokenOrSegmented(node) {
    return $isTokenOrTab(node) || node.isSegmented();
}
/**
 * @param node - The element being tested
 * @returns Returns true if node is an DOM Text node, false otherwise.
 */ function isDOMTextNode(node) {
    return isDOMNode(node) && node.nodeType === DOM_TEXT_TYPE;
}
/**
 * @param node - The element being tested
 * @returns Returns true if node is an DOM Document node, false otherwise.
 */ function isDOMDocumentNode(node) {
    return isDOMNode(node) && node.nodeType === DOM_DOCUMENT_TYPE;
}
function getDOMTextNode(element) {
    let node = element;
    while(node != null){
        if (isDOMTextNode(node)) {
            return node;
        }
        node = node.firstChild;
    }
    return null;
}
function toggleTextFormatType(format, type, alignWithFormat) {
    const activeFormat = TEXT_TYPE_TO_FORMAT[type];
    if (alignWithFormat !== null && (format & activeFormat) === (alignWithFormat & activeFormat)) {
        return format;
    }
    let newFormat = format ^ activeFormat;
    if (type === 'subscript') {
        newFormat &= ~TEXT_TYPE_TO_FORMAT.superscript;
    } else if (type === 'superscript') {
        newFormat &= ~TEXT_TYPE_TO_FORMAT.subscript;
    } else if (type === 'lowercase') {
        newFormat &= ~TEXT_TYPE_TO_FORMAT.uppercase;
        newFormat &= ~TEXT_TYPE_TO_FORMAT.capitalize;
    } else if (type === 'uppercase') {
        newFormat &= ~TEXT_TYPE_TO_FORMAT.lowercase;
        newFormat &= ~TEXT_TYPE_TO_FORMAT.capitalize;
    } else if (type === 'capitalize') {
        newFormat &= ~TEXT_TYPE_TO_FORMAT.lowercase;
        newFormat &= ~TEXT_TYPE_TO_FORMAT.uppercase;
    }
    return newFormat;
}
function $isLeafNode(node) {
    return $isTextNode(node) || $isLineBreakNode(node) || $isDecoratorNode(node);
}
function $setNodeKey(node, existingKey) {
    const pendingNode = getPendingNodeToClone();
    existingKey = existingKey || pendingNode && pendingNode.__key;
    if (existingKey != null) {
        {
            errorOnNodeKeyConstructorMismatch(node, existingKey, pendingNode);
        }
        node.__key = existingKey;
        return;
    }
    errorOnReadOnly();
    errorOnInfiniteTransforms();
    const editor = getActiveEditor();
    const editorState = getActiveEditorState();
    const key = generateRandomKey();
    editorState._nodeMap.set(key, node);
    // TODO Split this function into leaf/element
    if ($isElementNode(node)) {
        editor._dirtyElements.set(key, true);
    } else {
        editor._dirtyLeaves.add(key);
    }
    editor._cloneNotNeeded.add(key);
    editor._dirtyType = HAS_DIRTY_NODES;
    node.__key = key;
}
function errorOnNodeKeyConstructorMismatch(node, existingKey, pendingNode) {
    const editorState = internalGetActiveEditorState();
    if (!editorState) {
        // tests expect to be able to do this kind of clone without an active editor state
        return;
    }
    const existingNode = editorState._nodeMap.get(existingKey);
    if (pendingNode) {
        if (!(existingKey === pendingNode.__key)) {
            formatDevErrorMessage(`Lexical node with constructor ${node.constructor.name} (type ${node.getType()}) has an incorrect clone implementation, got ${String(existingKey)} for nodeKey when expecting ${pendingNode.__key}`);
        }
    }
    if (existingNode && existingNode.constructor !== node.constructor) {
        // Lifted condition to if statement because the inverted logic is a bit confusing
        if (node.constructor.name !== existingNode.constructor.name) {
            {
                formatDevErrorMessage(`Lexical node with constructor ${node.constructor.name} attempted to re-use key from node in active editor state with constructor ${existingNode.constructor.name}. Keys must not be re-used when the type is changed.`);
            }
        } else {
            {
                formatDevErrorMessage(`Lexical node with constructor ${node.constructor.name} attempted to re-use key from node in active editor state with different constructor with the same name (possibly due to invalid Hot Module Replacement). Keys must not be re-used when the type is changed.`);
            }
        }
    }
}
function internalMarkParentElementsAsDirty(parentKey, nodeMap, dirtyElements) {
    let nextParentKey = parentKey;
    while(nextParentKey !== null){
        if (dirtyElements.has(nextParentKey)) {
            return;
        }
        const node = nodeMap.get(nextParentKey);
        if (node === undefined) {
            break;
        }
        dirtyElements.set(nextParentKey, false);
        nextParentKey = node.__parent;
    }
}
// TODO #6031 this function or their callers have to adjust selection (i.e. insertBefore)
/**
 * Removes a node from its parent, updating all necessary pointers and links.
 * @internal
 *
 * This function is for internal use of the library.
 * Please do not use it as it may change in the future.
 */ function removeFromParent(node) {
    const oldParent = node.getParent();
    if (oldParent !== null) {
        const writableNode = node.getWritable();
        const writableParent = oldParent.getWritable();
        const prevSibling = node.getPreviousSibling();
        const nextSibling = node.getNextSibling();
        // Store sibling keys
        const nextSiblingKey = nextSibling !== null ? nextSibling.__key : null;
        const prevSiblingKey = prevSibling !== null ? prevSibling.__key : null;
        // Get writable siblings once
        const writablePrevSibling = prevSibling !== null ? prevSibling.getWritable() : null;
        const writableNextSibling = nextSibling !== null ? nextSibling.getWritable() : null;
        // Update parent's first/last pointers
        if (prevSibling === null) {
            writableParent.__first = nextSiblingKey;
        }
        if (nextSibling === null) {
            writableParent.__last = prevSiblingKey;
        }
        // Update sibling links
        if (writablePrevSibling !== null) {
            writablePrevSibling.__next = nextSiblingKey;
        }
        if (writableNextSibling !== null) {
            writableNextSibling.__prev = prevSiblingKey;
        }
        // Clear node's links
        writableNode.__prev = null;
        writableNode.__next = null;
        writableNode.__parent = null;
        // Update parent size
        writableParent.__size--;
    }
}
// Never use this function directly! It will break
// the cloning heuristic. Instead use node.getWritable().
function internalMarkNodeAsDirty(node) {
    errorOnInfiniteTransforms();
    if (!!$isEphemeral(node)) {
        formatDevErrorMessage(`internalMarkNodeAsDirty: Ephemeral nodes must not be marked as dirty (key ${node.__key} type ${node.__type})`);
    }
    const latest = node.getLatest();
    const parent = latest.__parent;
    const editorState = getActiveEditorState();
    const editor = getActiveEditor();
    const nodeMap = editorState._nodeMap;
    const dirtyElements = editor._dirtyElements;
    if (parent !== null) {
        internalMarkParentElementsAsDirty(parent, nodeMap, dirtyElements);
    }
    const key = latest.__key;
    editor._dirtyType = HAS_DIRTY_NODES;
    if ($isElementNode(node)) {
        dirtyElements.set(key, true);
    } else {
        editor._dirtyLeaves.add(key);
    }
}
function internalMarkSiblingsAsDirty(node) {
    const previousNode = node.getPreviousSibling();
    const nextNode = node.getNextSibling();
    if (previousNode !== null) {
        internalMarkNodeAsDirty(previousNode);
    }
    if (nextNode !== null) {
        internalMarkNodeAsDirty(nextNode);
    }
}
function $setCompositionKey(compositionKey) {
    errorOnReadOnly();
    const editor = getActiveEditor();
    const previousCompositionKey = editor._compositionKey;
    if (compositionKey !== previousCompositionKey) {
        editor._compositionKey = compositionKey;
        if (previousCompositionKey !== null) {
            const node = $getNodeByKey(previousCompositionKey);
            if (node !== null) {
                node.getWritable();
            }
        }
        if (compositionKey !== null) {
            const node = $getNodeByKey(compositionKey);
            if (node !== null) {
                node.getWritable();
            }
        }
    }
}
function $getCompositionKey() {
    if (isCurrentlyReadOnlyMode()) {
        return null;
    }
    const editor = getActiveEditor();
    return editor._compositionKey;
}
function $getNodeByKey(key, _editorState) {
    const editorState = _editorState || getActiveEditorState();
    const node = editorState._nodeMap.get(key);
    if (node === undefined) {
        return null;
    }
    return node;
}
function $getNodeFromDOMNode(dom, editorState) {
    const editor = getActiveEditor();
    const key = getNodeKeyFromDOMNode(dom, editor);
    if (key !== undefined) {
        return $getNodeByKey(key, editorState);
    }
    return null;
}
function setNodeKeyOnDOMNode(dom, editor, key) {
    const prop = `__lexicalKey_${editor._key}`;
    dom[prop] = key;
}
function getNodeKeyFromDOMNode(dom, editor) {
    const prop = `__lexicalKey_${editor._key}`;
    return dom[prop];
}
function $getNearestNodeFromDOMNode(startingDOM, editorState) {
    let dom = startingDOM;
    while(dom != null){
        const node = $getNodeFromDOMNode(dom, editorState);
        if (node !== null) {
            return node;
        }
        dom = getParentElement(dom);
    }
    return null;
}
function cloneDecorators(editor) {
    const currentDecorators = editor._decorators;
    const pendingDecorators = Object.assign({}, currentDecorators);
    editor._pendingDecorators = pendingDecorators;
    return pendingDecorators;
}
function getEditorStateTextContent(editorState) {
    return editorState.read(()=>$getRoot().getTextContent());
}
function markNodesWithTypesAsDirty(editor, types) {
    // We only need to mark nodes dirty if they were in the previous state.
    // If they aren't, then they are by definition dirty already.
    const cachedMap = getCachedTypeToNodeMap(editor.getEditorState());
    const dirtyNodeMaps = [];
    for (const type of types){
        const nodeMap = cachedMap.get(type);
        if (nodeMap) {
            // By construction these are non-empty
            dirtyNodeMaps.push(nodeMap);
        }
    }
    // Nothing to mark dirty, no update necessary
    if (dirtyNodeMaps.length === 0) {
        return;
    }
    editor.update(()=>{
        for (const nodeMap of dirtyNodeMaps){
            for (const nodeKey of nodeMap.keys()){
                // We are only concerned with nodes that are still in the latest NodeMap,
                // if they no longer exist then markDirty would raise an exception
                const latest = $getNodeByKey(nodeKey);
                if (latest) {
                    latest.markDirty();
                }
            }
        }
    }, editor._pendingEditorState === null ? {
        tag: HISTORY_MERGE_TAG
    } : undefined);
}
function $getRoot() {
    return internalGetRoot(getActiveEditorState());
}
function internalGetRoot(editorState) {
    return editorState._nodeMap.get('root');
}
function $setSelection(selection) {
    errorOnReadOnly();
    const editorState = getActiveEditorState();
    if (selection !== null) {
        {
            if (Object.isFrozen(selection)) {
                {
                    formatDevErrorMessage(`$setSelection called on frozen selection object. Ensure selection is cloned before passing in.`);
                }
            }
        }
        selection.dirty = true;
        selection.setCachedNodes(null);
    }
    editorState._selection = selection;
}
function $flushMutations() {
    errorOnReadOnly();
    const editor = getActiveEditor();
    flushRootMutations(editor);
}
function $getNodeFromDOM(dom) {
    const editor = getActiveEditor();
    const nodeKey = getNodeKeyFromDOMTree(dom, editor);
    if (nodeKey === null) {
        const rootElement = editor.getRootElement();
        if (dom === rootElement) {
            return $getNodeByKey('root');
        }
        return null;
    }
    return $getNodeByKey(nodeKey);
}
function getNodeKeyFromDOMTree(// Note that node here refers to a DOM Node, not an Lexical Node
dom, editor) {
    let node = dom;
    while(node != null){
        const key = getNodeKeyFromDOMNode(node, editor);
        if (key !== undefined) {
            return key;
        }
        node = getParentElement(node);
    }
    return null;
}
/**
 * Return true if `str` contains any valid surrogate pair.
 *
 * See also $updateCaretSelectionForUnicodeCharacter for
 * a discussion on when and why this is useful.
 */ function doesContainSurrogatePair(str) {
    return /[\uD800-\uDBFF][\uDC00-\uDFFF]/g.test(str);
}
function getEditorsToPropagate(editor) {
    const editorsToPropagate = [];
    let currentEditor = editor;
    while(currentEditor !== null){
        editorsToPropagate.push(currentEditor);
        currentEditor = currentEditor._parentEditor;
    }
    return editorsToPropagate;
}
function createUID() {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substring(0, 5);
}
function getAnchorTextFromDOM(anchorNode) {
    return isDOMTextNode(anchorNode) ? anchorNode.nodeValue : null;
}
function $updateSelectedTextFromDOM(isCompositionEnd, editor, data) {
    // Update the text content with the latest composition text
    const domSelection = getDOMSelection(getWindow(editor));
    if (domSelection === null) {
        return;
    }
    const anchorNode = domSelection.anchorNode;
    let { anchorOffset, focusOffset } = domSelection;
    if (anchorNode !== null) {
        let textContent = getAnchorTextFromDOM(anchorNode);
        const node = $getNearestNodeFromDOMNode(anchorNode);
        if (textContent !== null && $isTextNode(node)) {
            // Data is intentionally truthy, as we check for boolean, null and empty string.
            if (textContent === COMPOSITION_SUFFIX && data) {
                const offset = data.length;
                textContent = data;
                anchorOffset = offset;
                focusOffset = offset;
            }
            if (textContent !== null) {
                $updateTextNodeFromDOMContent(node, textContent, anchorOffset, focusOffset, isCompositionEnd);
            }
        }
    }
}
function $updateTextNodeFromDOMContent(textNode, textContent, anchorOffset, focusOffset, compositionEnd) {
    let node = textNode;
    if (node.isAttached() && (compositionEnd || !node.isDirty())) {
        const isComposing = node.isComposing();
        let normalizedTextContent = textContent;
        if ((isComposing || compositionEnd) && textContent[textContent.length - 1] === COMPOSITION_SUFFIX) {
            normalizedTextContent = textContent.slice(0, -1);
        }
        const prevTextContent = node.getTextContent();
        if (compositionEnd || normalizedTextContent !== prevTextContent) {
            if (normalizedTextContent === '') {
                $setCompositionKey(null);
                if (!IS_SAFARI && !IS_IOS && !IS_APPLE_WEBKIT) {
                    // For composition (mainly Android), we have to remove the node on a later update
                    const editor = getActiveEditor();
                    setTimeout(()=>{
                        editor.update(()=>{
                            if (node.isAttached()) {
                                node.remove();
                            }
                        });
                    }, 20);
                } else {
                    node.remove();
                }
                return;
            }
            const parent = node.getParent();
            const prevSelection = $getPreviousSelection();
            const prevTextContentSize = node.getTextContentSize();
            const compositionKey = $getCompositionKey();
            const nodeKey = node.getKey();
            if (node.isToken() || compositionKey !== null && nodeKey === compositionKey && !isComposing || // Check if character was added at the start or boundaries when not insertable, and we need
            // to clear this input from occurring as that action wasn't permitted.
            $isRangeSelection(prevSelection) && (parent !== null && !parent.canInsertTextBefore() && prevSelection.anchor.offset === 0 || prevSelection.anchor.key === textNode.__key && prevSelection.anchor.offset === 0 && !node.canInsertTextBefore() && !isComposing || prevSelection.focus.key === textNode.__key && prevSelection.focus.offset === prevTextContentSize && !node.canInsertTextAfter() && !isComposing)) {
                node.markDirty();
                return;
            }
            const selection = $getSelection();
            if (!$isRangeSelection(selection) || anchorOffset === null || focusOffset === null) {
                $setTextContentWithSelection(node, normalizedTextContent, selection);
                return;
            }
            selection.setTextNodeRange(node, anchorOffset, node, focusOffset);
            if (node.isSegmented()) {
                const originalTextContent = node.getTextContent();
                const replacement = $createTextNode(originalTextContent);
                node.replace(replacement);
                node = replacement;
            }
            $setTextContentWithSelection(node, normalizedTextContent, selection);
        }
    }
}
function $setTextContentWithSelection(node, textContent, selection) {
    node.setTextContent(textContent);
    if ($isRangeSelection(selection)) {
        const key = node.getKey();
        for (const k of [
            'anchor',
            'focus'
        ]){
            const pt = selection[k];
            if (pt.type === 'text' && pt.key === key) {
                pt.offset = $getTextNodeOffset(node, pt.offset, 'clamp');
            }
        }
    }
}
function $previousSiblingDoesNotAcceptText(node) {
    const previousSibling = node.getPreviousSibling();
    return ($isTextNode(previousSibling) || $isElementNode(previousSibling) && previousSibling.isInline()) && !previousSibling.canInsertTextAfter();
}
// This function is connected to $shouldPreventDefaultAndInsertText and determines whether the
// TextNode boundaries are writable or we should use the previous/next sibling instead. For example,
// in the case of a LinkNode, boundaries are not writable.
function $shouldInsertTextAfterOrBeforeTextNode(selection, node) {
    if (node.isSegmented()) {
        return true;
    }
    if (!selection.isCollapsed()) {
        return false;
    }
    const offset = selection.anchor.offset;
    const parent = node.getParentOrThrow();
    const isToken = $isTokenOrTab(node);
    if (offset === 0) {
        return !node.canInsertTextBefore() || !parent.canInsertTextBefore() && !node.isComposing() || isToken || $previousSiblingDoesNotAcceptText(node);
    } else if (offset === node.getTextContentSize()) {
        return !node.canInsertTextAfter() || !parent.canInsertTextAfter() && !node.isComposing() || isToken;
    } else {
        return false;
    }
}
/**
 * A KeyboardEvent or structurally similar object with a string `key` as well
 * as `altKey`, `ctrlKey`, `metaKey`, and `shiftKey` boolean properties.
 */ /**
 * A record of keyboard modifiers that must be enabled.
 * If the value is `'any'` then the modifier key's state is ignored.
 * If the value is `true` then the modifier key must be pressed.
 * If the value is `false` or the property is omitted then the modifier key must
 * not be pressed.
 */ function matchModifier(event, mask, prop) {
    const expected = mask[prop] || false;
    return expected === 'any' || expected === event[prop];
}
/**
 * Match a KeyboardEvent with its expected modifier state
 *
 * @param event A KeyboardEvent, or structurally similar object
 * @param mask An object specifying the expected state of the modifiers
 * @returns true if the event matches
 */ function isModifierMatch(event, mask) {
    return matchModifier(event, mask, 'altKey') && matchModifier(event, mask, 'ctrlKey') && matchModifier(event, mask, 'shiftKey') && matchModifier(event, mask, 'metaKey');
}
/**
 * Match a KeyboardEvent with its expected state
 *
 * @param event A KeyboardEvent, or structurally similar object
 * @param expectedKey The string to compare with event.key (case insensitive)
 * @param mask An object specifying the expected state of the modifiers
 * @returns true if the event matches
 */ function isExactShortcutMatch(event, expectedKey, mask) {
    return isModifierMatch(event, mask) && event.key.toLowerCase() === expectedKey.toLowerCase();
}
const CONTROL_OR_META = {
    ctrlKey: !IS_APPLE,
    metaKey: IS_APPLE
};
const CONTROL_OR_ALT = {
    altKey: IS_APPLE,
    ctrlKey: !IS_APPLE
};
function isTab(event) {
    return isExactShortcutMatch(event, 'Tab', {
        shiftKey: 'any'
    });
}
function isBold(event) {
    return isExactShortcutMatch(event, 'b', CONTROL_OR_META);
}
function isItalic(event) {
    return isExactShortcutMatch(event, 'i', CONTROL_OR_META);
}
function isUnderline(event) {
    return isExactShortcutMatch(event, 'u', CONTROL_OR_META);
}
function isParagraph(event) {
    return isExactShortcutMatch(event, 'Enter', {
        altKey: 'any',
        ctrlKey: 'any',
        metaKey: 'any'
    });
}
function isLineBreak(event) {
    return isExactShortcutMatch(event, 'Enter', {
        altKey: 'any',
        ctrlKey: 'any',
        metaKey: 'any',
        shiftKey: true
    });
}
// Inserts a new line after the selection
function isOpenLineBreak(event) {
    // 79 = KeyO
    return IS_APPLE && isExactShortcutMatch(event, 'o', {
        ctrlKey: true
    });
}
function isDeleteWordBackward(event) {
    return isExactShortcutMatch(event, 'Backspace', CONTROL_OR_ALT);
}
function isDeleteWordForward(event) {
    return isExactShortcutMatch(event, 'Delete', CONTROL_OR_ALT);
}
function isDeleteLineBackward(event) {
    return IS_APPLE && isExactShortcutMatch(event, 'Backspace', {
        metaKey: true
    });
}
function isDeleteLineForward(event) {
    return IS_APPLE && (isExactShortcutMatch(event, 'Delete', {
        metaKey: true
    }) || isExactShortcutMatch(event, 'k', {
        ctrlKey: true
    }));
}
function isDeleteBackward(event) {
    return isExactShortcutMatch(event, 'Backspace', {
        shiftKey: 'any'
    }) || IS_APPLE && isExactShortcutMatch(event, 'h', {
        ctrlKey: true
    });
}
function isDeleteForward(event) {
    return isExactShortcutMatch(event, 'Delete', {}) || IS_APPLE && isExactShortcutMatch(event, 'd', {
        ctrlKey: true
    });
}
function isUndo(event) {
    return isExactShortcutMatch(event, 'z', CONTROL_OR_META);
}
function isRedo(event) {
    if (IS_APPLE) {
        return isExactShortcutMatch(event, 'z', {
            metaKey: true,
            shiftKey: true
        });
    }
    return isExactShortcutMatch(event, 'y', {
        ctrlKey: true
    }) || isExactShortcutMatch(event, 'z', {
        ctrlKey: true,
        shiftKey: true
    });
}
function isCopy(event) {
    return isExactShortcutMatch(event, 'c', CONTROL_OR_META);
}
function isCut(event) {
    return isExactShortcutMatch(event, 'x', CONTROL_OR_META);
}
function isMoveBackward(event) {
    return isExactShortcutMatch(event, 'ArrowLeft', {
        shiftKey: 'any'
    });
}
function isMoveToStart(event) {
    return isExactShortcutMatch(event, 'ArrowLeft', CONTROL_OR_META);
}
function isMoveForward(event) {
    return isExactShortcutMatch(event, 'ArrowRight', {
        shiftKey: 'any'
    });
}
function isMoveToEnd(event) {
    return isExactShortcutMatch(event, 'ArrowRight', CONTROL_OR_META);
}
function isMoveUp(event) {
    return isExactShortcutMatch(event, 'ArrowUp', {
        altKey: 'any',
        shiftKey: 'any'
    });
}
function isMoveDown(event) {
    return isExactShortcutMatch(event, 'ArrowDown', {
        altKey: 'any',
        shiftKey: 'any'
    });
}
function isModifier(event) {
    return event.ctrlKey || event.shiftKey || event.altKey || event.metaKey;
}
function isSpace(event) {
    return event.key === ' ';
}
function isBackspace(event) {
    return event.key === 'Backspace';
}
function isEscape(event) {
    return event.key === 'Escape';
}
function isDelete(event) {
    return event.key === 'Delete';
}
function isSelectAll(event) {
    return isExactShortcutMatch(event, 'a', CONTROL_OR_META);
}
function $selectAll(selection) {
    const root = $getRoot();
    if ($isRangeSelection(selection)) {
        const anchor = selection.anchor;
        const focus = selection.focus;
        const anchorNode = anchor.getNode();
        const topParent = anchorNode.getTopLevelElementOrThrow();
        const rootNode = topParent.getParentOrThrow();
        anchor.set(rootNode.getKey(), 0, 'element');
        focus.set(rootNode.getKey(), rootNode.getChildrenSize(), 'element');
        $normalizeSelection(selection);
        return selection;
    } else {
        // Create a new RangeSelection
        const newSelection = root.select(0, root.getChildrenSize());
        $setSelection($normalizeSelection(newSelection));
        return newSelection;
    }
}
function getCachedClassNameArray(classNamesTheme, classNameThemeType) {
    if (classNamesTheme.__lexicalClassNameCache === undefined) {
        classNamesTheme.__lexicalClassNameCache = {};
    }
    const classNamesCache = classNamesTheme.__lexicalClassNameCache;
    const cachedClassNames = classNamesCache[classNameThemeType];
    if (cachedClassNames !== undefined) {
        return cachedClassNames;
    }
    const classNames = classNamesTheme[classNameThemeType];
    // As we're using classList, we need
    // to handle className tokens that have spaces.
    // The easiest way to do this to convert the
    // className tokens to an array that can be
    // applied to classList.add()/remove().
    if (typeof classNames === 'string') {
        const classNamesArr = normalizeClassNames(classNames);
        classNamesCache[classNameThemeType] = classNamesArr;
        return classNamesArr;
    }
    return classNames;
}
function setMutatedNode(mutatedNodes, registeredNodes, mutationListeners, node, mutation) {
    if (mutationListeners.size === 0) {
        return;
    }
    const nodeType = node.__type;
    const nodeKey = node.__key;
    const registeredNode = registeredNodes.get(nodeType);
    if (registeredNode === undefined) {
        {
            formatDevErrorMessage(`Type ${nodeType} not in registeredNodes`);
        }
    }
    const klass = registeredNode.klass;
    let mutatedNodesByType = mutatedNodes.get(klass);
    if (mutatedNodesByType === undefined) {
        mutatedNodesByType = new Map();
        mutatedNodes.set(klass, mutatedNodesByType);
    }
    const prevMutation = mutatedNodesByType.get(nodeKey);
    // If the node has already been "destroyed", yet we are
    // re-making it, then this means a move likely happened.
    // We should change the mutation to be that of "updated"
    // instead.
    const isMove = prevMutation === 'destroyed' && mutation === 'created';
    if (prevMutation === undefined || isMove) {
        mutatedNodesByType.set(nodeKey, isMove ? 'updated' : mutation);
    }
}
/**
 * @deprecated Use {@link LexicalEditor.registerMutationListener} with `skipInitialization: false` instead.
 */ function $nodesOfType(klass) {
    const klassType = klass.getType();
    const editorState = getActiveEditorState();
    if (editorState._readOnly) {
        const nodes = getCachedTypeToNodeMap(editorState).get(klassType);
        return nodes ? Array.from(nodes.values()) : [];
    }
    const nodes = editorState._nodeMap;
    const nodesOfType = [];
    for (const [, node] of nodes){
        if (node instanceof klass && node.__type === klassType && node.isAttached()) {
            nodesOfType.push(node);
        }
    }
    return nodesOfType;
}
function resolveElement(element, isBackward, focusOffset) {
    const parent = element.getParent();
    let offset = focusOffset;
    let block = element;
    if (parent !== null) {
        if (isBackward && focusOffset === 0) {
            offset = block.getIndexWithinParent();
            block = parent;
        } else if (!isBackward && focusOffset === block.getChildrenSize()) {
            offset = block.getIndexWithinParent() + 1;
            block = parent;
        }
    }
    return block.getChildAtIndex(isBackward ? offset - 1 : offset);
}
function $getAdjacentNode(focus, isBackward) {
    const focusOffset = focus.offset;
    if (focus.type === 'element') {
        const block = focus.getNode();
        return resolveElement(block, isBackward, focusOffset);
    } else {
        const focusNode = focus.getNode();
        if (isBackward && focusOffset === 0 || !isBackward && focusOffset === focusNode.getTextContentSize()) {
            const possibleNode = isBackward ? focusNode.getPreviousSibling() : focusNode.getNextSibling();
            if (possibleNode === null) {
                return resolveElement(focusNode.getParentOrThrow(), isBackward, focusNode.getIndexWithinParent() + (isBackward ? 0 : 1));
            }
            return possibleNode;
        }
    }
    return null;
}
function isFirefoxClipboardEvents(editor) {
    const event = getWindow(editor).event;
    const inputType = event && event.inputType;
    return inputType === 'insertFromPaste' || inputType === 'insertFromPasteAsQuotation';
}
function dispatchCommand(editor, command, payload) {
    return triggerCommandListeners(editor, command, payload);
}
function getElementByKeyOrThrow(editor, key) {
    const element = editor._keyToDOMMap.get(key);
    if (element === undefined) {
        {
            formatDevErrorMessage(`Reconciliation: could not find DOM element for node key ${key}`);
        }
    }
    return element;
}
function getParentElement(node) {
    const parentElement = node.assignedSlot || node.parentElement;
    return isDocumentFragment(parentElement) ? parentElement.host : parentElement;
}
function getDOMOwnerDocument(target) {
    return isDOMDocumentNode(target) ? target : isHTMLElement(target) ? target.ownerDocument : null;
}
function scrollIntoViewIfNeeded(editor, selectionRect, rootElement) {
    const doc = getDOMOwnerDocument(rootElement);
    const defaultView = getDefaultView(doc);
    if (doc === null || defaultView === null) {
        return;
    }
    let { top: currentTop, bottom: currentBottom } = selectionRect;
    let targetTop = 0;
    let targetBottom = 0;
    let element = rootElement;
    while(element !== null){
        const isBodyElement = element === doc.body;
        if (isBodyElement) {
            targetTop = 0;
            targetBottom = getWindow(editor).innerHeight;
        } else {
            const targetRect = element.getBoundingClientRect();
            targetTop = targetRect.top;
            targetBottom = targetRect.bottom;
        }
        let diff = 0;
        if (currentTop < targetTop) {
            diff = -(targetTop - currentTop);
        } else if (currentBottom > targetBottom) {
            diff = currentBottom - targetBottom;
        }
        if (diff !== 0) {
            if (isBodyElement) {
                // Only handles scrolling of Y axis
                defaultView.scrollBy(0, diff);
            } else {
                const scrollTop = element.scrollTop;
                element.scrollTop += diff;
                const yOffset = element.scrollTop - scrollTop;
                currentTop -= yOffset;
                currentBottom -= yOffset;
            }
        }
        if (isBodyElement) {
            break;
        }
        element = getParentElement(element);
    }
}
function $hasUpdateTag(tag) {
    const editor = getActiveEditor();
    return editor._updateTags.has(tag);
}
function $addUpdateTag(tag) {
    errorOnReadOnly();
    const editor = getActiveEditor();
    editor._updateTags.add(tag);
}
/**
 * Add a function to run after the current update. This will run after any
 * `onUpdate` function already supplied to `editor.update()`, as well as any
 * functions added with previous calls to `$onUpdate`.
 *
 * @param updateFn The function to run after the current update.
 */ function $onUpdate(updateFn) {
    errorOnReadOnly();
    const editor = getActiveEditor();
    editor._deferred.push(updateFn);
}
function $maybeMoveChildrenSelectionToParent(parentNode) {
    const selection = $getSelection();
    if (!$isRangeSelection(selection) || !$isElementNode(parentNode)) {
        return selection;
    }
    const { anchor, focus } = selection;
    const anchorNode = anchor.getNode();
    const focusNode = focus.getNode();
    if ($hasAncestor(anchorNode, parentNode)) {
        anchor.set(parentNode.__key, 0, 'element');
    }
    if ($hasAncestor(focusNode, parentNode)) {
        focus.set(parentNode.__key, 0, 'element');
    }
    return selection;
}
function $hasAncestor(child, targetNode) {
    let parent = child.getParent();
    while(parent !== null){
        if (parent.is(targetNode)) {
            return true;
        }
        parent = parent.getParent();
    }
    return false;
}
function getDefaultView(domElem) {
    const ownerDoc = getDOMOwnerDocument(domElem);
    return ownerDoc ? ownerDoc.defaultView : null;
}
function getWindow(editor) {
    const windowObj = editor._window;
    if (windowObj === null) {
        {
            formatDevErrorMessage(`window object not found`);
        }
    }
    return windowObj;
}
function $isInlineElementOrDecoratorNode(node) {
    return $isElementNode(node) && node.isInline() || $isDecoratorNode(node) && node.isInline();
}
function $getNearestRootOrShadowRoot(node) {
    let parent = node.getParentOrThrow();
    while(parent !== null){
        if ($isRootOrShadowRoot(parent)) {
            return parent;
        }
        parent = parent.getParentOrThrow();
    }
    return parent;
}
function $isRootOrShadowRoot(node) {
    return $isRootNode(node) || $isElementNode(node) && node.isShadowRoot();
}
/**
 * Returns a shallow clone of node with a new key. All properties of the node
 * will be copied to the new node (by `clone` and then `afterCloneFrom`),
 * except those related to parent/sibling/child
 * relationships in the `EditorState`. This means that the copy must be
 * separately added to the document, and it will not have any children.
 *
 * @param node - The node to be copied.
 * @returns The copy of the node.
 */ function $copyNode(node) {
    const copy = node.constructor.clone(node);
    $setNodeKey(copy, null);
    copy.afterCloneFrom(node);
    return copy;
}
function $applyNodeReplacement(node) {
    const editor = getActiveEditor();
    const nodeType = node.getType();
    const registeredNode = getRegisteredNode(editor, nodeType);
    if (!(registeredNode !== undefined)) {
        formatDevErrorMessage(`$applyNodeReplacement node ${node.constructor.name} with type ${nodeType} must be registered to the editor. You can do this by passing the node class via the "nodes" array in the editor config.`);
    }
    const { replace, replaceWithKlass } = registeredNode;
    if (replace !== null) {
        const replacementNode = replace(node);
        const replacementNodeKlass = replacementNode.constructor;
        if (replaceWithKlass !== null) {
            if (!(replacementNode instanceof replaceWithKlass)) {
                formatDevErrorMessage(`$applyNodeReplacement failed. Expected replacement node to be an instance of ${replaceWithKlass.name} with type ${replaceWithKlass.getType()} but returned ${replacementNodeKlass.name} with type ${replacementNodeKlass.getType()} from original node ${node.constructor.name} with type ${nodeType}`);
            }
        } else {
            if (!(replacementNode instanceof node.constructor && replacementNodeKlass !== node.constructor)) {
                formatDevErrorMessage(`$applyNodeReplacement failed. Ensure replacement node ${replacementNodeKlass.name} with type ${replacementNodeKlass.getType()} is a subclass of the original node ${node.constructor.name} with type ${nodeType}.`);
            }
        }
        if (!(replacementNode.__key !== node.__key)) {
            formatDevErrorMessage(`$applyNodeReplacement failed. Ensure that the key argument is *not* used in your replace function (from node ${node.constructor.name} with type ${nodeType} to node ${replacementNodeKlass.name} with type ${replacementNodeKlass.getType()}), Node keys must never be re-used except by the static clone method.`);
        }
        return replacementNode;
    }
    return node;
}
function errorOnInsertTextNodeOnRoot(node, insertNode) {
    const parentNode = node.getParent();
    if ($isRootNode(parentNode) && !$isElementNode(insertNode) && !$isDecoratorNode(insertNode)) {
        {
            formatDevErrorMessage(`Only element or decorator nodes can be inserted in to the root node`);
        }
    }
}
function $getNodeByKeyOrThrow(key) {
    const node = $getNodeByKey(key);
    if (node === null) {
        {
            formatDevErrorMessage(`Expected node with key ${key} to exist but it's not in the nodeMap.`);
        }
    }
    return node;
}
function createBlockCursorElement(editorConfig) {
    const theme = editorConfig.theme;
    const element = document.createElement('div');
    element.contentEditable = 'false';
    element.setAttribute('data-lexical-cursor', 'true');
    let blockCursorTheme = theme.blockCursor;
    if (blockCursorTheme !== undefined) {
        if (typeof blockCursorTheme === 'string') {
            const classNamesArr = normalizeClassNames(blockCursorTheme);
            // @ts-expect-error: intentional
            blockCursorTheme = theme.blockCursor = classNamesArr;
        }
        if (blockCursorTheme !== undefined) {
            element.classList.add(...blockCursorTheme);
        }
    }
    return element;
}
function needsBlockCursor(node) {
    return ($isDecoratorNode(node) || $isElementNode(node) && !node.canBeEmpty()) && !node.isInline();
}
function removeDOMBlockCursorElement(blockCursorElement, editor, rootElement) {
    rootElement.style.removeProperty('caret-color');
    editor._blockCursorElement = null;
    const parentElement = blockCursorElement.parentElement;
    if (parentElement !== null) {
        parentElement.removeChild(blockCursorElement);
    }
}
function updateDOMBlockCursorElement(editor, rootElement, nextSelection) {
    let blockCursorElement = editor._blockCursorElement;
    if ($isRangeSelection(nextSelection) && nextSelection.isCollapsed() && nextSelection.anchor.type === 'element' && rootElement.contains(document.activeElement)) {
        const anchor = nextSelection.anchor;
        const elementNode = anchor.getNode();
        const offset = anchor.offset;
        const elementNodeSize = elementNode.getChildrenSize();
        let isBlockCursor = false;
        let insertBeforeElement = null;
        if (offset === elementNodeSize) {
            const child = elementNode.getChildAtIndex(offset - 1);
            if (needsBlockCursor(child)) {
                isBlockCursor = true;
            }
        } else {
            const child = elementNode.getChildAtIndex(offset);
            if (child !== null && needsBlockCursor(child)) {
                const sibling = child.getPreviousSibling();
                if (sibling === null || needsBlockCursor(sibling)) {
                    isBlockCursor = true;
                    insertBeforeElement = editor.getElementByKey(child.__key);
                }
            }
        }
        if (isBlockCursor) {
            const elementDOM = editor.getElementByKey(elementNode.__key);
            if (blockCursorElement === null) {
                editor._blockCursorElement = blockCursorElement = createBlockCursorElement(editor._config);
            }
            rootElement.style.caretColor = 'transparent';
            if (insertBeforeElement === null) {
                elementDOM.appendChild(blockCursorElement);
            } else {
                elementDOM.insertBefore(blockCursorElement, insertBeforeElement);
            }
            return;
        }
    }
    // Remove cursor
    if (blockCursorElement !== null) {
        removeDOMBlockCursorElement(blockCursorElement, editor, rootElement);
    }
}
/**
 * Returns the selection for the given window, or the global window if null.
 * Will return null if {@link CAN_USE_DOM} is false.
 *
 * @param targetWindow The window to get the selection from
 * @returns a Selection or null
 */ function getDOMSelection(targetWindow) {
    return !CAN_USE_DOM ? null : (targetWindow || window).getSelection();
}
/**
 * Returns the selection for the defaultView of the ownerDocument of given EventTarget.
 *
 * @param eventTarget The node to get the selection from
 * @returns a Selection or null
 */ function getDOMSelectionFromTarget(eventTarget) {
    const defaultView = getDefaultView(eventTarget);
    return defaultView ? defaultView.getSelection() : null;
}
function $splitNode(node, offset) {
    let startNode = node.getChildAtIndex(offset);
    if (startNode == null) {
        startNode = node;
    }
    if (!!$isRootOrShadowRoot(node)) {
        formatDevErrorMessage(`Can not call $splitNode() on root element`);
    }
    const recurse = (currentNode)=>{
        const parent = currentNode.getParentOrThrow();
        const isParentRoot = $isRootOrShadowRoot(parent);
        // The node we start split from (leaf) is moved, but its recursive
        // parents are copied to create separate tree
        const nodeToMove = currentNode === startNode && !isParentRoot ? currentNode : $copyNode(currentNode);
        if (isParentRoot) {
            if (!($isElementNode(currentNode) && $isElementNode(nodeToMove))) {
                formatDevErrorMessage(`Children of a root must be ElementNode`);
            }
            currentNode.insertAfter(nodeToMove);
            return [
                currentNode,
                nodeToMove,
                nodeToMove
            ];
        } else {
            const [leftTree, rightTree, newParent] = recurse(parent);
            const nextSiblings = currentNode.getNextSiblings();
            newParent.append(nodeToMove, ...nextSiblings);
            return [
                leftTree,
                rightTree,
                nodeToMove
            ];
        }
    };
    const [leftTree, rightTree] = recurse(startNode);
    return [
        leftTree,
        rightTree
    ];
}
/**
 * @param x - The element being tested
 * @returns Returns true if x is an HTML anchor tag, false otherwise
 */ function isHTMLAnchorElement(x) {
    return isHTMLElement(x) && x.tagName === 'A';
}
/**
 * @param x - The element being tested
 * @returns Returns true if x is an HTML element, false otherwise.
 */ function isHTMLElement(x) {
    return isDOMNode(x) && x.nodeType === DOM_ELEMENT_TYPE;
}
/**
 * @param x - The element being tested
 * @returns Returns true if x is a DOM Node, false otherwise.
 */ function isDOMNode(x) {
    return typeof x === 'object' && x !== null && 'nodeType' in x && typeof x.nodeType === 'number';
}
/**
 * @param x - The element being testing
 * @returns Returns true if x is a document fragment, false otherwise.
 */ function isDocumentFragment(x) {
    return isDOMNode(x) && x.nodeType === DOM_DOCUMENT_FRAGMENT_TYPE;
}
/**
 *
 * @param node - the Dom Node to check
 * @returns if the Dom Node is an inline node
 */ function isInlineDomNode(node) {
    const inlineNodes = new RegExp(/^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|mark|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var|#text)$/, 'i');
    return node.nodeName.match(inlineNodes) !== null;
}
/**
 *
 * @param node - the Dom Node to check
 * @returns if the Dom Node is a block node
 */ function isBlockDomNode(node) {
    const blockNodes = new RegExp(/^(address|article|aside|blockquote|canvas|dd|div|dl|dt|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hr|li|main|nav|noscript|ol|p|pre|section|table|td|tfoot|ul|video)$/, 'i');
    return node.nodeName.match(blockNodes) !== null;
}
/**
 * @internal
 *
 * This function is for internal use of the library.
 * Please do not use it as it may change in the future.
 *
 * This function returns true for a DecoratorNode that is not inline OR
 * an ElementNode that is:
 * - not a root or shadow root
 * - not inline
 * - can't be empty
 * - has no children or an inline first child
 */ function INTERNAL_$isBlock(node) {
    if ($isDecoratorNode(node) && !node.isInline()) {
        return true;
    }
    if (!$isElementNode(node) || $isRootOrShadowRoot(node)) {
        return false;
    }
    const firstChild = node.getFirstChild();
    const isLeafElement = firstChild === null || $isLineBreakNode(firstChild) || $isTextNode(firstChild) || firstChild.isInline();
    return !node.isInline() && node.canBeEmpty() !== false && isLeafElement;
}
/**
 * Utility function for accessing current active editor instance.
 * @returns Current active editor
 */ function $getEditor() {
    return getActiveEditor();
}
/** @internal */ /**
 * @internal
 * Compute a cached Map of node type to nodes for a frozen EditorState
 */ const cachedNodeMaps = new WeakMap();
const EMPTY_TYPE_TO_NODE_MAP = new Map();
function getCachedTypeToNodeMap(editorState) {
    // If this is a new Editor it may have a writable this._editorState
    // with only a 'root' entry.
    if (!editorState._readOnly && editorState.isEmpty()) {
        return EMPTY_TYPE_TO_NODE_MAP;
    }
    if (!editorState._readOnly) {
        formatDevErrorMessage(`getCachedTypeToNodeMap called with a writable EditorState`);
    }
    let typeToNodeMap = cachedNodeMaps.get(editorState);
    if (!typeToNodeMap) {
        typeToNodeMap = computeTypeToNodeMap(editorState);
        cachedNodeMaps.set(editorState, typeToNodeMap);
    }
    return typeToNodeMap;
}
/**
 * @internal
 * Compute a Map of node type to nodes for an EditorState
 */ function computeTypeToNodeMap(editorState) {
    const typeToNodeMap = new Map();
    for (const [nodeKey, node] of editorState._nodeMap){
        const nodeType = node.__type;
        let nodeMap = typeToNodeMap.get(nodeType);
        if (!nodeMap) {
            nodeMap = new Map();
            typeToNodeMap.set(nodeType, nodeMap);
        }
        nodeMap.set(nodeKey, node);
    }
    return typeToNodeMap;
}
/**
 * Returns a clone of a node using `node.constructor.clone()` followed by
 * `clone.afterCloneFrom(node)`. The resulting clone must have the same key,
 * parent/next/prev pointers, and other properties that are not set by
 * `node.constructor.clone` (format, style, etc.). This is primarily used by
 * {@link LexicalNode.getWritable} to create a writable version of an
 * existing node. The clone is the same logical node as the original node,
 * do not try and use this function to duplicate or copy an existing node.
 *
 * Does not mutate the EditorState.
 * @param latestNode - The node to be cloned.
 * @returns The clone of the node.
 */ function $cloneWithProperties(latestNode) {
    const constructor = latestNode.constructor;
    const mutableNode = constructor.clone(latestNode);
    mutableNode.afterCloneFrom(latestNode);
    {
        if (!(mutableNode.__key === latestNode.__key)) {
            formatDevErrorMessage(`$cloneWithProperties: ${constructor.name}.clone(node) (with type '${constructor.getType()}') did not return a node with the same key, make sure to specify node.__key as the last argument to the constructor`);
        }
        if (!(mutableNode.__parent === latestNode.__parent && mutableNode.__next === latestNode.__next && mutableNode.__prev === latestNode.__prev)) {
            formatDevErrorMessage(`$cloneWithProperties: ${constructor.name}.clone(node) (with type '${constructor.getType()}') overrode afterCloneFrom but did not call super.afterCloneFrom(prevNode)`);
        }
    }
    return mutableNode;
}
/**
 * Returns a clone with {@link $cloneWithProperties} and then "detaches"
 * it from the state by overriding its getLatest and getWritable to always
 * return this. This node can not be added to an EditorState or become the
 * parent, child, or sibling of another node. It is primarily only useful
 * for making in-place temporary modifications to a TextNode when
 * serializing a partial slice.
 *
 * Does not mutate the EditorState.
 * @param latestNode - The node to be cloned.
 * @returns The clone of the node.
 */ function $cloneWithPropertiesEphemeral(latestNode) {
    return $markEphemeral($cloneWithProperties(latestNode));
}
function setNodeIndentFromDOM(elementDom, elementNode) {
    const indentSize = parseInt(elementDom.style.paddingInlineStart, 10) || 0;
    const indent = Math.round(indentSize / 40);
    elementNode.setIndent(indent);
}
/**
 * @internal
 *
 * Mark this node as unmanaged by lexical's mutation observer like
 * decorator nodes
 */ function setDOMUnmanaged(elementDom) {
    const el = elementDom;
    el.__lexicalUnmanaged = true;
}
/**
 * @internal
 *
 * True if this DOM node was marked with {@link setDOMUnmanaged}
 */ function isDOMUnmanaged(elementDom) {
    const el = elementDom;
    return el.__lexicalUnmanaged === true;
}
/**
 * @internal
 *
 * Object.hasOwn ponyfill
 */ function hasOwn(o, k) {
    return Object.prototype.hasOwnProperty.call(o, k);
}
/**
 * @internal
 */ function hasOwnStaticMethod(klass, k) {
    return hasOwn(klass, k) && klass[k] !== LexicalNode[k];
}
/**
 * @internal
 */ function hasOwnExportDOM(klass) {
    return hasOwn(klass.prototype, 'exportDOM');
}
/** @internal */ function isAbstractNodeClass(klass) {
    if (!(klass === LexicalNode || klass.prototype instanceof LexicalNode)) {
        let ownNodeType = '<unknown>';
        let version = '<unknown>';
        try {
            ownNodeType = klass.getType();
        } catch (_err) {
        // ignore
        }
        try {
            if (LexicalEditor.version) {
                version = JSON.parse(LexicalEditor.version);
            }
        } catch (_err) {
        // ignore
        }
        {
            formatDevErrorMessage(`${klass.name} (type ${ownNodeType}) does not subclass LexicalNode from the lexical package used by this editor (version ${version}). All lexical and @lexical/* packages used by an editor must have identical versions. If you suspect the version does match, then the problem may be caused by multiple copies of the same lexical module (e.g. both esm and cjs, or included directly in multiple entrypoints).`);
        }
    }
    return klass === DecoratorNode || klass === ElementNode || klass === LexicalNode;
}
/** @internal */ function getStaticNodeConfig(klass) {
    const nodeConfigRecord = PROTOTYPE_CONFIG_METHOD in klass.prototype ? klass.prototype[PROTOTYPE_CONFIG_METHOD]() : undefined;
    const isAbstract = isAbstractNodeClass(klass);
    const nodeType = !isAbstract && hasOwnStaticMethod(klass, 'getType') ? klass.getType() : undefined;
    let ownNodeConfig;
    let ownNodeType = nodeType;
    if (nodeConfigRecord) {
        if (nodeType) {
            ownNodeConfig = nodeConfigRecord[nodeType];
        } else {
            for (const [k, v] of Object.entries(nodeConfigRecord)){
                ownNodeType = k;
                ownNodeConfig = v;
            }
        }
    }
    if (!isAbstract && ownNodeType) {
        if (!hasOwnStaticMethod(klass, 'getType')) {
            klass.getType = ()=>ownNodeType;
        }
        if (!hasOwnStaticMethod(klass, 'clone')) {
            // TextNode.length > 0 will only be true if the compiler output
            // is not ES6 compliant, in which case we can not provide this
            // warning
            if (TextNode.length === 0) {
                if (!(klass.length === 0)) {
                    formatDevErrorMessage(`${klass.name} (type ${ownNodeType}) must implement a static clone method since its constructor has ${String(klass.length)} required arguments (expecting 0). Use an explicit default in the first argument of your constructor(prop: T=X, nodeKey?: NodeKey).`);
                }
            }
            klass.clone = (prevNode)=>{
                setPendingNodeToClone(prevNode);
                return new klass();
            };
        }
        if (!hasOwnStaticMethod(klass, 'importJSON')) {
            if (TextNode.length === 0) {
                if (!(klass.length === 0)) {
                    formatDevErrorMessage(`${klass.name} (type ${ownNodeType}) must implement a static importJSON method since its constructor has ${String(klass.length)} required arguments (expecting 0). Use an explicit default in the first argument of your constructor(prop: T=X, nodeKey?: NodeKey).`);
                }
            }
            klass.importJSON = ownNodeConfig && ownNodeConfig.$importJSON || ((serializedNode)=>new klass().updateFromJSON(serializedNode));
        }
        if (!hasOwnStaticMethod(klass, 'importDOM') && ownNodeConfig) {
            const { importDOM } = ownNodeConfig;
            if (importDOM) {
                klass.importDOM = ()=>importDOM;
            }
        }
    }
    return {
        ownNodeConfig,
        ownNodeType
    };
}
/**
 * Create an node from its class.
 *
 * Note that this will directly construct the final `withKlass` node type,
 * and will ignore the deprecated `with` functions. This allows `$create` to
 * skip any intermediate steps where the replaced node would be created and
 * then immediately discarded (once per configured replacement of that node).
 *
 * This does not support any arguments to the constructor.
 * Setters can be used to initialize your node, and they can
 * be chained. You can of course write your own mutliple-argument functions
 * to wrap that.
 *
 * @example
 * ```ts
 * function $createTokenText(text: string): TextNode {
 *   return $create(TextNode).setTextContent(text).setMode('token');
 * }
 * ```
 */ function $create(klass) {
    const editor = $getEditor();
    errorOnReadOnly();
    const registeredNode = editor.resolveRegisteredNodeAfterReplacements(editor.getRegisteredNode(klass));
    return new registeredNode.klass();
}
/**
 * Starts with a node and moves up the tree (toward the root node) to find a matching node based on
 * the search parameters of the findFn. (Consider JavaScripts' .find() function where a testing function must be
 * passed as an argument. eg. if( (node) => node.__type === 'div') ) return true; otherwise return false
 * @param startingNode - The node where the search starts.
 * @param findFn - A testing function that returns true if the current node satisfies the testing parameters.
 * @returns `startingNode` or one of its ancestors that matches the `findFn` predicate and is not the `RootNode`, or `null` if no match was found.
 */ const $findMatchingParent = (startingNode, findFn)=>{
    let curr = startingNode;
    while(curr != null && !$isRootNode(curr)){
        if (findFn(curr)) {
            return curr;
        }
        curr = curr.getParent();
    }
    return null;
};
/**
 * The direction of a caret, 'next' points towards the end of the document
 * and 'previous' points towards the beginning
 */ /**
 * A type utility to flip next and previous
 */ /**
 * A sibling caret type points from a LexicalNode origin to its next or previous sibling,
 * and a child caret type points from an ElementNode origin to its first or last child.
 */ /**
 * The RootMode is specified in all caret traversals where the traversal can go up
 * towards the root. 'root' means that it will stop at the document root,
 * and 'shadowRoot' will stop at the document root or any shadow root
 * (per {@link $isRootOrShadowRoot}).
 */ const FLIP_DIRECTION = {
    next: 'previous',
    previous: 'next'
};
/** @noInheritDoc */ /**
 * A RangeSelection expressed as a pair of Carets
 */ /**
 * A NodeCaret is the combination of an origin node and a direction
 * that points towards where a connected node will be fetched, inserted,
 * or replaced. A SiblingCaret points from a node to its next or previous
 * sibling, and a ChildCaret points to its first or last child
 * (using next or previous as direction, for symmetry with SiblingCaret).
 *
 * The differences between NodeCaret and PointType are:
 * - NodeCaret can only be used to refer to an entire node (PointCaret is used when a full analog is needed). A PointType of text type can be used to refer to a specific location inside of a TextNode.
 * - NodeCaret stores an origin node, type (sibling or child), and direction (next or previous). A PointType stores a type (text or element), the key of a node, and a text or child offset within that node.
 * - NodeCaret is directional and always refers to a very specific node, eliminating all ambiguity. PointType can refer to the location before or at a node depending on context.
 * - NodeCaret is more robust to nearby mutations, as it relies only on a node's direct connections. An element Any change to the count of previous siblings in an element PointType will invalidate it.
 * - NodeCaret is designed to work more directly with the internal representation of the document tree, making it suitable for use in traversals without performing any redundant work.
 *
 * The caret does *not* update in response to any mutations, you should
 * not persist it across editor updates, and using a caret after its origin
 * node has been removed or replaced may result in runtime errors.
 */ /**
 * A PointCaret is a NodeCaret that also includes a
 * TextPointCaret type which refers to a specific offset of a TextNode.
 * This type is separate because it is not relevant to general node traversal
 * so it doesn't make sense to have it show up except when defining
 * a CaretRange and in those cases there will be at most two of them only
 * at the boundaries.
 *
 * The addition of TextPointCaret allows this type to represent any location
 * that is representable by PointType, as the TextPointCaret refers to a
 * specific offset within a TextNode.
 */ /**
 * A SiblingCaret points from an origin LexicalNode towards its next or previous sibling.
 */ /**
 * A ChildCaret points from an origin ElementNode towards its first or last child.
 */ /**
 * A TextPointCaret is a special case of a SiblingCaret that also carries
 * an offset used for representing partially selected TextNode at the edges
 * of a CaretRange.
 *
 * The direction determines which part of the text is adjacent to the caret,
 * if next it's all of the text after offset. If previous, it's all of the
 * text before offset.
 *
 * While this can be used in place of any SiblingCaret of a TextNode,
 * the offset into the text will be ignored except in contexts that
 * specifically use the TextPointCaret or PointCaret types.
 */ /**
 * A TextPointCaretSlice is a wrapper for a TextPointCaret that carries a signed
 * distance representing the direction and amount of text selected from the given
 * caret. A negative distance means that text before offset is selected, a
 * positive distance means that text after offset is selected. The offset+distance
 * pair is not affected in any way by the direction of the caret.
 */ /**
 * A utility type to specify that a CaretRange may have zero,
 * one, or two associated TextPointCaretSlice. If the anchor
 * and focus are on the same node, the anchorSlice will contain
 * the slice and focusSlie will be null.
 */ class AbstractCaret {
    origin;
    constructor(origin){
        this.origin = origin;
    }
    [Symbol.iterator]() {
        return makeStepwiseIterator({
            hasNext: $isSiblingCaret,
            initial: this.getAdjacentCaret(),
            map: (caret)=>caret,
            step: (caret)=>caret.getAdjacentCaret()
        });
    }
    getAdjacentCaret() {
        return $getSiblingCaret(this.getNodeAtCaret(), this.direction);
    }
    getSiblingCaret() {
        return $getSiblingCaret(this.origin, this.direction);
    }
    remove() {
        const node = this.getNodeAtCaret();
        if (node) {
            node.remove();
        }
        return this;
    }
    replaceOrInsert(node, includeChildren) {
        const target = this.getNodeAtCaret();
        if (node.is(this.origin) || node.is(target)) ;
        else if (target === null) {
            this.insert(node);
        } else {
            target.replace(node, includeChildren);
        }
        return this;
    }
    splice(deleteCount, nodes, nodesDirection = 'next') {
        const nodeIter = nodesDirection === this.direction ? nodes : Array.from(nodes).reverse();
        let caret = this;
        const parent = this.getParentAtCaret();
        const nodesToRemove = new Map();
        // Find all of the nodes we expect to remove first, so
        // we don't have to worry about the cases where there is
        // overlap between the nodes to insert and the nodes to
        // remove
        for(let removeCaret = caret.getAdjacentCaret(); removeCaret !== null && nodesToRemove.size < deleteCount; removeCaret = removeCaret.getAdjacentCaret()){
            const writableNode = removeCaret.origin.getWritable();
            nodesToRemove.set(writableNode.getKey(), writableNode);
        }
        // TODO: Optimize this to work directly with node internals
        for (const node of nodeIter){
            if (nodesToRemove.size > 0) {
                // For some reason `pnpm run tsc-extension` needs this annotation?
                const target = caret.getNodeAtCaret();
                if (target) {
                    nodesToRemove.delete(target.getKey());
                    nodesToRemove.delete(node.getKey());
                    if (target.is(node) || caret.origin.is(node)) ;
                    else {
                        const nodeParent = node.getParent();
                        if (nodeParent && nodeParent.is(parent)) {
                            // It's a sibling somewhere else in this node, so unparent it first
                            node.remove();
                        }
                        target.replace(node);
                    }
                } else {
                    if (!(target !== null)) {
                        formatDevErrorMessage(`NodeCaret.splice: Underflow of expected nodesToRemove during splice (keys: ${Array.from(nodesToRemove).join(' ')})`);
                    }
                }
            } else {
                caret.insert(node);
            }
            caret = $getSiblingCaret(node, this.direction);
        }
        for (const node of nodesToRemove.values()){
            node.remove();
        }
        return this;
    }
}
class AbstractChildCaret extends AbstractCaret {
    type = 'child';
    getLatest() {
        const origin = this.origin.getLatest();
        return origin === this.origin ? this : $getChildCaret(origin, this.direction);
    }
    /**
   * Get the SiblingCaret from this origin in the same direction.
   *
   * @param mode 'root' to return null at the root, 'shadowRoot' to return null at the root or any shadow root
   * @returns A SiblingCaret with this origin, or null if origin is a root according to mode.
   */ getParentCaret(mode = 'root') {
        return $getSiblingCaret($filterByMode(this.getParentAtCaret(), mode), this.direction);
    }
    getFlipped() {
        const dir = flipDirection(this.direction);
        return $getSiblingCaret(this.getNodeAtCaret(), dir) || $getChildCaret(this.origin, dir);
    }
    getParentAtCaret() {
        return this.origin;
    }
    getChildCaret() {
        return this;
    }
    isSameNodeCaret(other) {
        return other instanceof AbstractChildCaret && this.direction === other.direction && this.origin.is(other.origin);
    }
    isSamePointCaret(other) {
        return this.isSameNodeCaret(other);
    }
}
class ChildCaretFirst extends AbstractChildCaret {
    direction = 'next';
    getNodeAtCaret() {
        return this.origin.getFirstChild();
    }
    insert(node) {
        this.origin.splice(0, 0, [
            node
        ]);
        return this;
    }
}
class ChildCaretLast extends AbstractChildCaret {
    direction = 'previous';
    getNodeAtCaret() {
        return this.origin.getLastChild();
    }
    insert(node) {
        this.origin.splice(this.origin.getChildrenSize(), 0, [
            node
        ]);
        return this;
    }
}
const MODE_PREDICATE = {
    root: $isRootNode,
    shadowRoot: $isRootOrShadowRoot
};
/**
 * Flip a direction ('next' -> 'previous'; 'previous' -> 'next').
 *
 * Note that TypeScript can't prove that FlipDirection is its own
 * inverse (but if you have a concrete 'next' or 'previous' it will
 * simplify accordingly).
 *
 * @param direction A direction
 * @returns The opposite direction
 */ function flipDirection(direction) {
    return FLIP_DIRECTION[direction];
}
function $filterByMode(node, mode = 'root') {
    return MODE_PREDICATE[mode](node) ? null : node;
}
class AbstractSiblingCaret extends AbstractCaret {
    type = 'sibling';
    getLatest() {
        const origin = this.origin.getLatest();
        return origin === this.origin ? this : $getSiblingCaret(origin, this.direction);
    }
    getSiblingCaret() {
        return this;
    }
    getParentAtCaret() {
        return this.origin.getParent();
    }
    getChildCaret() {
        return $isElementNode(this.origin) ? $getChildCaret(this.origin, this.direction) : null;
    }
    getParentCaret(mode = 'root') {
        return $getSiblingCaret($filterByMode(this.getParentAtCaret(), mode), this.direction);
    }
    getFlipped() {
        const dir = flipDirection(this.direction);
        return $getSiblingCaret(this.getNodeAtCaret(), dir) || $getChildCaret(this.origin.getParentOrThrow(), dir);
    }
    isSamePointCaret(other) {
        return other instanceof AbstractSiblingCaret && this.direction === other.direction && this.origin.is(other.origin);
    }
    isSameNodeCaret(other) {
        return (other instanceof AbstractSiblingCaret || other instanceof AbstractTextPointCaret) && this.direction === other.direction && this.origin.is(other.origin);
    }
}
class AbstractTextPointCaret extends AbstractCaret {
    type = 'text';
    offset;
    constructor(origin, offset){
        super(origin);
        this.offset = offset;
    }
    getLatest() {
        const origin = this.origin.getLatest();
        return origin === this.origin ? this : $getTextPointCaret(origin, this.direction, this.offset);
    }
    getParentAtCaret() {
        return this.origin.getParent();
    }
    getChildCaret() {
        return null;
    }
    getParentCaret(mode = 'root') {
        return $getSiblingCaret($filterByMode(this.getParentAtCaret(), mode), this.direction);
    }
    getFlipped() {
        return $getTextPointCaret(this.origin, flipDirection(this.direction), this.offset);
    }
    isSamePointCaret(other) {
        return other instanceof AbstractTextPointCaret && this.direction === other.direction && this.origin.is(other.origin) && this.offset === other.offset;
    }
    isSameNodeCaret(other) {
        return (other instanceof AbstractSiblingCaret || other instanceof AbstractTextPointCaret) && this.direction === other.direction && this.origin.is(other.origin);
    }
    getSiblingCaret() {
        return $getSiblingCaret(this.origin, this.direction);
    }
}
/**
 * Guard to check if the given caret is specifically a TextPointCaret
 *
 * @param caret Any caret
 * @returns true if it is a TextPointCaret
 */ function $isTextPointCaret(caret) {
    return caret instanceof AbstractTextPointCaret;
}
/**
 * Guard to check if the given argument is any type of caret
 *
 * @param caret
 * @returns true if caret is any type of caret
 */ function $isNodeCaret(caret) {
    return caret instanceof AbstractCaret;
}
/**
 * Guard to check if the given argument is specifically a SiblingCaret (or TextPointCaret)
 *
 * @param caret
 * @returns true if caret is a SiblingCaret
 */ function $isSiblingCaret(caret) {
    return caret instanceof AbstractSiblingCaret;
}
/**
 * Guard to check if the given argument is specifically a ChildCaret

 * @param caret 
 * @returns true if caret is a ChildCaret
 */ function $isChildCaret(caret) {
    return caret instanceof AbstractChildCaret;
}
class SiblingCaretNext extends AbstractSiblingCaret {
    direction = 'next';
    getNodeAtCaret() {
        return this.origin.getNextSibling();
    }
    insert(node) {
        this.origin.insertAfter(node);
        return this;
    }
}
class SiblingCaretPrevious extends AbstractSiblingCaret {
    direction = 'previous';
    getNodeAtCaret() {
        return this.origin.getPreviousSibling();
    }
    insert(node) {
        this.origin.insertBefore(node);
        return this;
    }
}
class TextPointCaretNext extends AbstractTextPointCaret {
    direction = 'next';
    getNodeAtCaret() {
        return this.origin.getNextSibling();
    }
    insert(node) {
        this.origin.insertAfter(node);
        return this;
    }
}
class TextPointCaretPrevious extends AbstractTextPointCaret {
    direction = 'previous';
    getNodeAtCaret() {
        return this.origin.getPreviousSibling();
    }
    insert(node) {
        this.origin.insertBefore(node);
        return this;
    }
}
const TEXT_CTOR = {
    next: TextPointCaretNext,
    previous: TextPointCaretPrevious
};
const SIBLING_CTOR = {
    next: SiblingCaretNext,
    previous: SiblingCaretPrevious
};
const CHILD_CTOR = {
    next: ChildCaretFirst,
    previous: ChildCaretLast
};
/**
 * Get a caret that points at the next or previous sibling of the given origin node.
 *
 * @param origin The origin node
 * @param direction 'next' or 'previous'
 * @returns null if origin is null, otherwise a SiblingCaret for this origin and direction
 */ function $getSiblingCaret(origin, direction) {
    return origin ? new SIBLING_CTOR[direction](origin) : null;
}
/**
 * Construct a TextPointCaret
 *
 * @param origin The TextNode
 * @param direction The direction (next points to the end of the text, previous points to the beginning)
 * @param offset The offset into the text in absolute positive string coordinates (0 is the start)
 * @returns a TextPointCaret
 */ function $getTextPointCaret(origin, direction, offset) {
    return origin ? new TEXT_CTOR[direction](origin, $getTextNodeOffset(origin, offset)) : null;
}
/**
 * Get a normalized offset into a TextNode given a numeric offset or a
 * direction for which end of the string to use. Throws in dev if the offset
 * is not in the bounds of the text content size.
 *
 * @param origin a TextNode
 * @param offset An absolute offset into the TextNode string, or a direction for which end to use as the offset
 * @param mode If 'error' (the default) out of bounds offsets will be an error in dev. Otherwise it will clamp to a valid offset.
 * @returns An absolute offset into the TextNode string
 */ function $getTextNodeOffset(origin, offset, mode = 'error') {
    const size = origin.getTextContentSize();
    let numericOffset = offset === 'next' ? size : offset === 'previous' ? 0 : offset;
    if (numericOffset < 0 || numericOffset > size) {
        if (!(mode === 'clamp')) {
            formatDevErrorMessage(`$getTextNodeOffset: invalid offset ${String(offset)} for size ${String(size)} at key ${origin.getKey()}`);
        } // Clamp invalid offsets in prod
        numericOffset = numericOffset < 0 ? 0 : size;
    }
    return numericOffset;
}
/**
 * Construct a TextPointCaretSlice given a TextPointCaret and a signed distance. The
 * distance should be negative to slice text before the caret's offset, and positive
 * to slice text after the offset. The direction of the caret itself is not
 * relevant to the string coordinates when working with a TextPointCaretSlice
 * but mutation operations will preserve the direction.
 *
 * @param caret
 * @param distance
 * @returns TextPointCaretSlice
 */ function $getTextPointCaretSlice(caret, distance) {
    return new TextPointCaretSliceImpl(caret, distance);
}
/**
 * Get a caret that points at the first or last child of the given origin node,
 * which must be an ElementNode.
 *
 * @param origin The origin ElementNode
 * @param direction 'next' for first child or 'previous' for last child
 * @returns null if origin is null or not an ElementNode, otherwise a ChildCaret for this origin and direction
 */ function $getChildCaret(origin, direction) {
    return $isElementNode(origin) ? new CHILD_CTOR[direction](origin) : null;
}
/**
 * Gets the ChildCaret if one is possible at this caret origin, otherwise return the caret
 */ function $getChildCaretOrSelf(caret) {
    return caret && caret.getChildCaret() || caret;
}
/**
 * Gets the adjacent caret, if not-null and if the origin of the adjacent caret is an ElementNode, then return
 * the ChildCaret. This can be used along with the getParentAdjacentCaret method to perform a full DFS
 * style traversal of the tree.
 *
 * @param caret The caret to start at
 */ function $getAdjacentChildCaret(caret) {
    return caret && $getChildCaretOrSelf(caret.getAdjacentCaret());
}
class CaretRangeImpl {
    type = 'node-caret-range';
    direction;
    anchor;
    focus;
    constructor(anchor, focus, direction){
        this.anchor = anchor;
        this.focus = focus;
        this.direction = direction;
    }
    getLatest() {
        const anchor = this.anchor.getLatest();
        const focus = this.focus.getLatest();
        return anchor === this.anchor && focus === this.focus ? this : new CaretRangeImpl(anchor, focus, this.direction);
    }
    isCollapsed() {
        return this.anchor.isSamePointCaret(this.focus);
    }
    getTextSlices() {
        const getSlice = (k)=>{
            const caret = this[k].getLatest();
            return $isTextPointCaret(caret) ? $getSliceFromTextPointCaret(caret, k) : null;
        };
        const anchorSlice = getSlice('anchor');
        const focusSlice = getSlice('focus');
        if (anchorSlice && focusSlice) {
            const { caret: anchorCaret } = anchorSlice;
            const { caret: focusCaret } = focusSlice;
            if (anchorCaret.isSameNodeCaret(focusCaret)) {
                return [
                    $getTextPointCaretSlice(anchorCaret, focusCaret.offset - anchorCaret.offset),
                    null
                ];
            }
        }
        return [
            anchorSlice,
            focusSlice
        ];
    }
    iterNodeCarets(rootMode = 'root') {
        const anchor = $isTextPointCaret(this.anchor) ? this.anchor.getSiblingCaret() : this.anchor.getLatest();
        const focus = this.focus.getLatest();
        const isTextFocus = $isTextPointCaret(focus);
        const step = (state)=>state.isSameNodeCaret(focus) ? null : $getAdjacentChildCaret(state) || state.getParentCaret(rootMode);
        return makeStepwiseIterator({
            hasNext: (state)=>state !== null && !(isTextFocus && focus.isSameNodeCaret(state)),
            initial: anchor.isSameNodeCaret(focus) ? null : step(anchor),
            map: (state)=>state,
            step
        });
    }
    [Symbol.iterator]() {
        return this.iterNodeCarets('root');
    }
}
class TextPointCaretSliceImpl {
    type = 'slice';
    caret;
    distance;
    constructor(caret, distance){
        this.caret = caret;
        this.distance = distance;
    }
    getSliceIndices() {
        const { distance, caret: { offset } } = this;
        const offsetB = offset + distance;
        return offsetB < offset ? [
            offsetB,
            offset
        ] : [
            offset,
            offsetB
        ];
    }
    getTextContent() {
        const [startIndex, endIndex] = this.getSliceIndices();
        return this.caret.origin.getTextContent().slice(startIndex, endIndex);
    }
    getTextContentSize() {
        return Math.abs(this.distance);
    }
    removeTextSlice() {
        const { caret: { origin, direction } } = this;
        const [indexStart, indexEnd] = this.getSliceIndices();
        const text = origin.getTextContent();
        return $getTextPointCaret(origin.setTextContent(text.slice(0, indexStart) + text.slice(indexEnd)), direction, indexStart);
    }
}
function $getSliceFromTextPointCaret(caret, anchorOrFocus) {
    const { direction, origin } = caret;
    const offsetB = $getTextNodeOffset(origin, anchorOrFocus === 'focus' ? flipDirection(direction) : direction);
    return $getTextPointCaretSlice(caret, offsetB - caret.offset);
}
/**
 * Guard to check for a TextPointCaretSlice
 *
 * @param caretOrSlice A caret or slice
 * @returns true if caretOrSlice is a TextPointCaretSlice
 */ function $isTextPointCaretSlice(caretOrSlice) {
    return caretOrSlice instanceof TextPointCaretSliceImpl;
}
/**
 * Construct a CaretRange that starts at anchor and goes to the end of the
 * document in the anchor caret's direction.
 */ function $extendCaretToRange(anchor) {
    return $getCaretRange(anchor, $getSiblingCaret($getRoot(), anchor.direction));
}
/**
 * Construct a collapsed CaretRange that starts and ends at anchor.
 */ function $getCollapsedCaretRange(anchor) {
    return $getCaretRange(anchor, anchor);
}
/**
 * Construct a CaretRange from anchor and focus carets pointing in the
 * same direction. In order to get the expected behavior,
 * the anchor must point towards the focus or be the same point.
 *
 * In the 'next' direction the anchor should be at or before the
 * focus in the document. In the 'previous' direction the anchor
 * should be at or after the focus in the document
 * (similar to a backwards RangeSelection).
 *
 * @param anchor
 * @param focus
 * @returns a CaretRange
 */ function $getCaretRange(anchor, focus) {
    if (!(anchor.direction === focus.direction)) {
        formatDevErrorMessage(`$getCaretRange: anchor and focus must be in the same direction`);
    }
    return new CaretRangeImpl(anchor, focus, anchor.direction);
}
/**
 * A generalized utility for creating a stepwise iterator
 * based on:
 *
 * - an initial state
 * - a stop guard that returns true if the iteration is over, this
 *   is typically used to detect a sentinel value such as null or
 *   undefined from the state but may return true for other conditions
 *   as well
 * - a step function that advances the state (this will be called
 *   after map each time next() is called to prepare the next state)
 * - a map function that will be called that may transform the state
 *   before returning it. It will only be called once for each next()
 *   call when stop(state) === false
 *
 * @param config
 * @returns An IterableIterator
 */ function makeStepwiseIterator(config) {
    const { initial, hasNext, step, map } = config;
    let state = initial;
    return {
        [Symbol.iterator] () {
            return this;
        },
        next () {
            if (!hasNext(state)) {
                return {
                    done: true,
                    value: undefined
                };
            }
            const rval = {
                done: false,
                value: map(state)
            };
            state = step(state);
            return rval;
        }
    };
}
function compareNumber(a, b) {
    return Math.sign(a - b);
}
/**
 * A total ordering for `PointCaret<'next'>`, based on
 * the same order that a {@link CaretRange} would iterate
 * them.
 *
 * For a given origin node:
 * - ChildCaret comes before SiblingCaret
 * - TextPointCaret comes before SiblingCaret
 *
 * An exception is thrown when a and b do not have any
 * common ancestor.
 *
 * This ordering is a sort of mix of pre-order and post-order
 * because each ElementNode will show up as a ChildCaret
 * on 'enter' (pre-order) and a SiblingCaret on 'leave' (post-order).
 *
 * @param a
 * @param b
 * @returns -1 if a comes before b, 0 if a and b are the same, or 1 if a comes after b
 */ function $comparePointCaretNext(a, b) {
    const compare = $getCommonAncestor(a.origin, b.origin);
    if (!(compare !== null)) {
        formatDevErrorMessage(`$comparePointCaretNext: a (key ${a.origin.getKey()}) and b (key ${b.origin.getKey()}) do not have a common ancestor`);
    }
    switch(compare.type){
        case 'same':
            {
                const aIsText = a.type === 'text';
                const bIsText = b.type === 'text';
                return aIsText && bIsText ? compareNumber(a.offset, b.offset) : a.type === b.type ? 0 : aIsText ? -1 : bIsText ? 1 : a.type === 'child' ? -1 : 1;
            }
        case 'ancestor':
            {
                return a.type === 'child' ? -1 : 1;
            }
        case 'descendant':
            {
                return b.type === 'child' ? 1 : -1;
            }
        case 'branch':
            {
                return $getCommonAncestorResultBranchOrder(compare);
            }
    }
}
/**
 * Return the ordering of siblings in a {@link CommonAncestorResultBranch}
 * @param compare Returns -1 if a precedes b, 1 otherwise
 */ function $getCommonAncestorResultBranchOrder(compare) {
    const { a, b } = compare;
    const aKey = a.__key;
    const bKey = b.__key;
    let na = a;
    let nb = b;
    for(; na && nb; na = na.getNextSibling(), nb = nb.getNextSibling()){
        if (na.__key === bKey) {
            return -1;
        } else if (nb.__key === aKey) {
            return 1;
        }
    }
    return na === null ? 1 : -1;
}
/**
 * The two compared nodes are the same
 */ /**
 * Node a was a descendant of node b, and not the same node
 */ /**
 * Node a is an ancestor of node b, and not the same node
 */ /**
 * Node a and node b have a common ancestor but are on different branches,
 * the `a` and `b` properties of this result are the ancestors of a and b
 * that are children of the commonAncestor. Since they are siblings, their
 * positions are comparable to determine order in the document.
 */ /**
 * The result of comparing two nodes that share some common ancestor
 */ function $isSameNode(reference, other) {
    return other.is(reference);
}
function $initialElementTuple(node) {
    return $isElementNode(node) ? [
        node.getLatest(),
        null
    ] : [
        node.getParent(),
        node.getLatest()
    ];
}
/**
 * Find a common ancestor of a and b and return a detailed result object,
 * or null if there is no common ancestor between the two nodes.
 *
 * The result object will have a commonAncestor property, and the other
 * properties can be used to quickly compare these positions in the tree.
 *
 * @param a A LexicalNode
 * @param b A LexicalNode
 * @returns A comparison result between the two nodes or null if they have no common ancestor
 */ function $getCommonAncestor(a, b) {
    if (a.is(b)) {
        return {
            commonAncestor: a,
            type: 'same'
        };
    }
    // Map of parent -> child entries based on a and its ancestors
    const aMap = new Map();
    for(let [parent, child] = $initialElementTuple(a); parent; child = parent, parent = parent.getParent()){
        aMap.set(parent, child);
    }
    for(let [parent, child] = $initialElementTuple(b); parent; child = parent, parent = parent.getParent()){
        const aChild = aMap.get(parent);
        if (aChild === undefined) ;
        else if (aChild === null) {
            // a is the ancestor
            if (!$isSameNode(a, parent)) {
                formatDevErrorMessage(`$originComparison: ancestor logic error`);
            }
            return {
                commonAncestor: parent,
                type: 'ancestor'
            };
        } else if (child === null) {
            // b is the ancestor
            if (!$isSameNode(b, parent)) {
                formatDevErrorMessage(`$originComparison: descendant logic error`);
            }
            return {
                commonAncestor: parent,
                type: 'descendant'
            };
        } else {
            if (!(($isElementNode(aChild) || $isSameNode(a, aChild)) && ($isElementNode(child) || $isSameNode(b, child)) && parent.is(aChild.getParent()) && parent.is(child.getParent()))) {
                formatDevErrorMessage(`$originComparison: branch logic error`);
            }
            return {
                a: aChild,
                b: child,
                commonAncestor: parent,
                type: 'branch'
            };
        }
    }
    return null;
}
/**
 * @param point
 * @returns a PointCaret for the point
 */ function $caretFromPoint(point, direction) {
    const { type, key, offset } = point;
    const node = $getNodeByKeyOrThrow(point.key);
    if (type === 'text') {
        if (!$isTextNode(node)) {
            formatDevErrorMessage(`$caretFromPoint: Node with type ${node.getType()} and key ${key} that does not inherit from TextNode encountered for text point`);
        }
        return $getTextPointCaret(node, direction, offset);
    }
    if (!$isElementNode(node)) {
        formatDevErrorMessage(`$caretFromPoint: Node with type ${node.getType()} and key ${key} that does not inherit from ElementNode encountered for element point`);
    }
    return $getChildCaretAtIndex(node, point.offset, direction);
}
/**
 * Update the given point in-place from the PointCaret
 *
 * @param point the point to set
 * @param caret the caret to set the point from
 */ function $setPointFromCaret(point, caret) {
    const { origin, direction } = caret;
    const isNext = direction === 'next';
    if ($isTextPointCaret(caret)) {
        point.set(origin.getKey(), caret.offset, 'text');
    } else if ($isSiblingCaret(caret)) {
        if ($isTextNode(origin)) {
            point.set(origin.getKey(), $getTextNodeOffset(origin, direction), 'text');
        } else {
            point.set(origin.getParentOrThrow().getKey(), origin.getIndexWithinParent() + (isNext ? 1 : 0), 'element');
        }
    } else {
        if (!($isChildCaret(caret) && $isElementNode(origin))) {
            formatDevErrorMessage(`$setPointFromCaret: exhaustiveness check`);
        }
        point.set(origin.getKey(), isNext ? 0 : origin.getChildrenSize(), 'element');
    }
}
/**
 * Set a RangeSelection on the editor from the given CaretRange
 *
 * @returns The new RangeSelection
 */ function $setSelectionFromCaretRange(caretRange) {
    const currentSelection = $getSelection();
    const selection = $isRangeSelection(currentSelection) ? currentSelection : $createRangeSelection();
    $updateRangeSelectionFromCaretRange(selection, caretRange);
    $setSelection(selection);
    return selection;
}
/**
 * Update the points of a RangeSelection based on the given PointCaret.
 */ function $updateRangeSelectionFromCaretRange(selection, caretRange) {
    $setPointFromCaret(selection.anchor, caretRange.anchor);
    $setPointFromCaret(selection.focus, caretRange.focus);
}
/**
 * Get a pair of carets for a RangeSelection.
 *
 * If the focus is before the anchor, then the direction will be
 * 'previous', otherwise the direction will be 'next'.
 */ function $caretRangeFromSelection(selection) {
    const { anchor, focus } = selection;
    const anchorCaret = $caretFromPoint(anchor, 'next');
    const focusCaret = $caretFromPoint(focus, 'next');
    const direction = $comparePointCaretNext(anchorCaret, focusCaret) <= 0 ? 'next' : 'previous';
    return $getCaretRange($getCaretInDirection(anchorCaret, direction), $getCaretInDirection(focusCaret, direction));
}
/**
 * Given a SiblingCaret we can always compute a caret that points to the
 * origin of that caret in the same direction. The adjacent caret of the
 * returned caret will be equivalent to the given caret.
 *
 * @example
 * ```ts
 * siblingCaret.is($rewindSiblingCaret(siblingCaret).getAdjacentCaret())
 * ```
 *
 * @param caret The caret to "rewind"
 * @returns A new caret (ChildCaret or SiblingCaret) with the same direction
 */ function $rewindSiblingCaret(caret) {
    const { direction, origin } = caret;
    // Rotate the direction around the origin and get the adjacent node
    const rewindOrigin = $getSiblingCaret(origin, flipDirection(direction)).getNodeAtCaret();
    return rewindOrigin ? $getSiblingCaret(rewindOrigin, direction) : $getChildCaret(origin.getParentOrThrow(), direction);
}
function $getAnchorCandidates(anchor, rootMode = 'root') {
    // These candidates will be the anchor itself, the pointer to the anchor (if different), and then any parents of that
    const carets = [
        anchor
    ];
    for(let parent = $isChildCaret(anchor) ? anchor.getParentCaret(rootMode) : anchor.getSiblingCaret(); parent !== null; parent = parent.getParentCaret(rootMode)){
        carets.push($rewindSiblingCaret(parent));
    }
    return carets;
}
function $isCaretAttached(caret) {
    return !!caret && caret.origin.isAttached();
}
/**
 * Remove all text and nodes in the given range. If the range spans multiple
 * blocks then the remaining contents of the later block will be merged with
 * the earlier block.
 *
 * @param initialRange The range to remove text and nodes from
 * @param sliceMode If 'preserveEmptyTextPointCaret' it will leave an empty TextPointCaret at the anchor for insert if one exists, otherwise empty slices will be removed
 * @returns The new collapsed range (biased towards the earlier node)
 */ function $removeTextFromCaretRange(initialRange, sliceMode = 'removeEmptySlices') {
    if (initialRange.isCollapsed()) {
        return initialRange;
    }
    // Always process removals in document order
    const rootMode = 'root';
    const nextDirection = 'next';
    let sliceState = sliceMode;
    const range = $getCaretRangeInDirection(initialRange, nextDirection);
    const anchorCandidates = $getAnchorCandidates(range.anchor, rootMode);
    const focusCandidates = $getAnchorCandidates(range.focus.getFlipped(), rootMode);
    // Mark the start of each ElementNode
    const seenStart = new Set();
    // Queue removals since removing the only child can cascade to having
    // a parent remove itself which will affect iteration
    const removedNodes = [];
    for (const caret of range.iterNodeCarets(rootMode)){
        if ($isChildCaret(caret)) {
            seenStart.add(caret.origin.getKey());
        } else if ($isSiblingCaret(caret)) {
            const { origin } = caret;
            if (!$isElementNode(origin) || seenStart.has(origin.getKey())) {
                removedNodes.push(origin);
            }
        }
    }
    for (const node of removedNodes){
        node.remove();
    }
    // Splice text at the anchor and/or origin.
    // If the text is entirely selected then it is removed (unless it is the first slice and sliceMode is preserveEmptyTextSliceCaret).
    // If it's a token with a non-empty selection then it is removed.
    // Segmented nodes will be copied to a plain text node with the same format
    // and style and set to normal mode.
    for (const slice of range.getTextSlices()){
        if (!slice) {
            continue;
        }
        const { origin } = slice.caret;
        const contentSize = origin.getTextContentSize();
        const caretBefore = $rewindSiblingCaret($getSiblingCaret(origin, nextDirection));
        const mode = origin.getMode();
        if (Math.abs(slice.distance) === contentSize && sliceState === 'removeEmptySlices' || mode === 'token' && slice.distance !== 0) {
            // anchorCandidates[1] should still be valid, it is caretBefore
            caretBefore.remove();
        } else if (slice.distance !== 0) {
            sliceState = 'removeEmptySlices';
            let nextCaret = slice.removeTextSlice();
            const sliceOrigin = slice.caret.origin;
            if (mode === 'segmented') {
                const src = nextCaret.origin;
                const plainTextNode = $createTextNode(src.getTextContent()).setStyle(src.getStyle()).setFormat(src.getFormat());
                caretBefore.replaceOrInsert(plainTextNode);
                nextCaret = $getTextPointCaret(plainTextNode, nextDirection, nextCaret.offset);
            }
            if (sliceOrigin.is(anchorCandidates[0].origin)) {
                anchorCandidates[0] = nextCaret;
            }
            if (sliceOrigin.is(focusCandidates[0].origin)) {
                focusCandidates[0] = nextCaret.getFlipped();
            }
        }
    }
    // Find the deepest anchor and focus candidates that are
    // still attached
    let anchorCandidate;
    let focusCandidate;
    for (const candidate of anchorCandidates){
        if ($isCaretAttached(candidate)) {
            anchorCandidate = $normalizeCaret(candidate);
            break;
        }
    }
    for (const candidate of focusCandidates){
        if ($isCaretAttached(candidate)) {
            focusCandidate = $normalizeCaret(candidate);
            break;
        }
    }
    // Merge blocks if necessary
    const mergeTargets = $getBlockMergeTargets(anchorCandidate, focusCandidate, seenStart);
    if (mergeTargets) {
        const [anchorBlock, focusBlock] = mergeTargets;
        // always merge blocks later in the document with
        // blocks earlier in the document
        $getChildCaret(anchorBlock, 'previous').splice(0, focusBlock.getChildren());
        focusBlock.remove();
    }
    // note this caret can be in either direction
    const bestCandidate = [
        anchorCandidate,
        focusCandidate,
        ...anchorCandidates,
        ...focusCandidates
    ].find($isCaretAttached);
    if (bestCandidate) {
        const anchor = $getCaretInDirection($normalizeCaret(bestCandidate), initialRange.direction);
        return $getCollapsedCaretRange(anchor);
    }
    {
        formatDevErrorMessage(`$removeTextFromCaretRange: selection was lost, could not find a new anchor given candidates with keys: ${JSON.stringify(anchorCandidates.map((n)=>n.origin.__key))}`);
    }
}
/**
 * Determine if the two caret origins are in distinct blocks that
 * should be merged.
 *
 * The returned block pair will be the closest blocks to their
 * common ancestor, and must be no shadow roots between
 * the blocks and their respective carets. If two distinct
 * blocks matching this criteria are not found, this will return
 * null.
 */ function $getBlockMergeTargets(anchor, focus, seenStart) {
    if (!anchor || !focus) {
        return null;
    }
    const anchorParent = anchor.getParentAtCaret();
    const focusParent = focus.getParentAtCaret();
    if (!anchorParent || !focusParent) {
        return null;
    }
    // TODO refactor when we have a better primitive for common ancestor
    const anchorElements = anchorParent.getParents().reverse();
    anchorElements.push(anchorParent);
    const focusElements = focusParent.getParents().reverse();
    focusElements.push(focusParent);
    const maxLen = Math.min(anchorElements.length, focusElements.length);
    let commonAncestorCount;
    for(commonAncestorCount = 0; commonAncestorCount < maxLen && anchorElements[commonAncestorCount] === focusElements[commonAncestorCount]; commonAncestorCount++){
    // just traverse the ancestors
    }
    const $getBlock = (arr, predicate)=>{
        let block;
        for(let i = commonAncestorCount; i < arr.length; i++){
            const ancestor = arr[i];
            if ($isRootOrShadowRoot(ancestor)) {
                return;
            } else if (!block && predicate(ancestor)) {
                block = ancestor;
            }
        }
        return block;
    };
    const anchorBlock = $getBlock(anchorElements, INTERNAL_$isBlock);
    const focusBlock = anchorBlock && $getBlock(focusElements, (node)=>seenStart.has(node.getKey()) && INTERNAL_$isBlock(node));
    return anchorBlock && focusBlock ? [
        anchorBlock,
        focusBlock
    ] : null;
}
/**
 * Return the deepest ChildCaret that has initialCaret's origin
 * as an ancestor, or initialCaret if the origin is not an ElementNode
 * or is already the deepest ChildCaret.
 *
 * This is generally used when normalizing because there is
 * "zero distance" between these locations.
 *
 * @param initialCaret
 * @returns Either a deeper ChildCaret or the given initialCaret
 */ function $getDeepestChildOrSelf(initialCaret) {
    let caret = initialCaret;
    while($isChildCaret(caret)){
        const adjacent = $getAdjacentChildCaret(caret);
        if (!$isChildCaret(adjacent)) {
            break;
        }
        caret = adjacent;
    }
    return caret;
}
/**
 * Normalize a caret to the deepest equivalent PointCaret.
 * This will return a TextPointCaret with the offset set according
 * to the direction if given a caret with a TextNode origin
 * or a caret with an ElementNode origin with the deepest ChildCaret
 * having an adjacent TextNode.
 *
 * If given a TextPointCaret, it will be returned, as no normalization
 * is required when an offset is already present.
 *
 * @param initialCaret
 * @returns The normalized PointCaret
 */ function $normalizeCaret(initialCaret) {
    const caret = $getDeepestChildOrSelf(initialCaret.getLatest());
    const { direction } = caret;
    if ($isTextNode(caret.origin)) {
        return $isTextPointCaret(caret) ? caret : $getTextPointCaret(caret.origin, direction, direction);
    }
    const adj = caret.getAdjacentCaret();
    return $isSiblingCaret(adj) && $isTextNode(adj.origin) ? $getTextPointCaret(adj.origin, direction, flipDirection(direction)) : caret;
}
/**
 * Determine whether the TextPointCaret's offset can be extended further without leaving the TextNode.
 * Returns false if the given caret is not a TextPointCaret or the offset can not be moved further in
 * direction.
 *
 * @param caret A PointCaret
 * @returns true if caret is a TextPointCaret with an offset that is not at the end of the text given the direction.
 */ function $isExtendableTextPointCaret(caret) {
    return $isTextPointCaret(caret) && caret.offset !== $getTextNodeOffset(caret.origin, caret.direction);
}
/**
 * Return the caret if it's in the given direction, otherwise return
 * caret.getFlipped().
 *
 * @param caret Any PointCaret
 * @param direction The desired direction
 * @returns A PointCaret in direction
 */ function $getCaretInDirection(caret, direction) {
    return caret.direction === direction ? caret : caret.getFlipped();
}
/**
 * Return the range if it's in the given direction, otherwise
 * construct a new range using a flipped focus as the anchor
 * and a flipped anchor as the focus. This transformation
 * preserves the section of the document that it's working
 * with, but reverses the order of iteration.
 *
 * @param range Any CaretRange
 * @param direction The desired direction
 * @returns A CaretRange in direction
 */ function $getCaretRangeInDirection(range, direction) {
    if (range.direction === direction) {
        return range;
    }
    return $getCaretRange(// focus and anchor get flipped here
    $getCaretInDirection(range.focus, direction), $getCaretInDirection(range.anchor, direction));
}
/**
 * Get a caret pointing at the child at the given index, or the last
 * caret in that node if out of bounds.
 *
 * @param parent An ElementNode
 * @param index The index of the origin for the caret
 * @returns A caret pointing towards the node at that index
 */ function $getChildCaretAtIndex(parent, index, direction) {
    let caret = $getChildCaret(parent, 'next');
    for(let i = 0; i < index; i++){
        const nextCaret = caret.getAdjacentCaret();
        if (nextCaret === null) {
            break;
        }
        caret = nextCaret;
    }
    return $getCaretInDirection(caret, direction);
}
/**
 * Returns the Node sibling when this exists, otherwise the closest parent sibling. For example
 * R -> P -> T1, T2
 *   -> P2
 * returns T2 for node T1, P2 for node T2, and null for node P2.
 * @param startCaret The initial caret
 * @param rootMode The root mode, 'root' (default) or 'shadowRoot'
 * @returns An array (tuple) containing the found caret and the depth difference, or null, if this node doesn't exist.
 */ function $getAdjacentSiblingOrParentSiblingCaret(startCaret, rootMode = 'root') {
    let depthDiff = 0;
    let caret = startCaret;
    let nextCaret = $getAdjacentChildCaret(caret);
    while(nextCaret === null){
        depthDiff--;
        nextCaret = caret.getParentCaret(rootMode);
        if (!nextCaret) {
            return null;
        }
        caret = nextCaret;
        nextCaret = $getAdjacentChildCaret(caret);
    }
    return nextCaret && [
        nextCaret,
        depthDiff
    ];
}
/**
 * Get the adjacent nodes to initialCaret in the given direction.
 *
 * @example
 * ```ts
 * expect($getAdjacentNodes($getChildCaret(parent, 'next'))).toEqual(parent.getChildren());
 * expect($getAdjacentNodes($getChildCaret(parent, 'previous'))).toEqual(parent.getChildren().reverse());
 * expect($getAdjacentNodes($getSiblingCaret(node, 'next'))).toEqual(node.getNextSiblings());
 * expect($getAdjacentNodes($getSiblingCaret(node, 'previous'))).toEqual(node.getPreviousSiblings().reverse());
 * ```
 *
 * @param initialCaret The caret to start at (the origin will not be included)
 * @returns An array of siblings.
 */ function $getAdjacentNodes(initialCaret) {
    const siblings = [];
    for(let caret = initialCaret.getAdjacentCaret(); caret; caret = caret.getAdjacentCaret()){
        siblings.push(caret.origin);
    }
    return siblings;
}
function $splitTextPointCaret(textPointCaret) {
    const { origin, offset, direction } = textPointCaret;
    if (offset === $getTextNodeOffset(origin, direction)) {
        return textPointCaret.getSiblingCaret();
    } else if (offset === $getTextNodeOffset(origin, flipDirection(direction))) {
        return $rewindSiblingCaret(textPointCaret.getSiblingCaret());
    }
    const [textNode] = origin.splitText(offset);
    if (!$isTextNode(textNode)) {
        formatDevErrorMessage(`$splitTextPointCaret: splitText must return at least one TextNode`);
    }
    return $getCaretInDirection($getSiblingCaret(textNode, 'next'), direction);
}
function $alwaysSplit(_node, _edge) {
    return true;
}
/**
 * Split a node at a PointCaret and return a NodeCaret at that point, or null if the
 * node can't be split. This is non-recursive and will only perform at most one split.
 *
 * @returns The NodeCaret pointing to the location of the split (or null if a split is not possible)
 */ function $splitAtPointCaretNext(pointCaret, { $copyElementNode = $copyNode, $splitTextPointCaretNext = $splitTextPointCaret, rootMode = 'shadowRoot', $shouldSplit = $alwaysSplit } = {}) {
    if ($isTextPointCaret(pointCaret)) {
        return $splitTextPointCaretNext(pointCaret);
    }
    const parentCaret = pointCaret.getParentCaret(rootMode);
    if (parentCaret) {
        const { origin } = parentCaret;
        if ($isChildCaret(pointCaret) && !(origin.canBeEmpty() && $shouldSplit(origin, 'first'))) {
            // No split necessary, the left side would be empty
            return $rewindSiblingCaret(parentCaret);
        }
        const siblings = $getAdjacentNodes(pointCaret);
        if (siblings.length > 0 || origin.canBeEmpty() && $shouldSplit(origin, 'last')) {
            // Split and insert the siblings into the new tree
            parentCaret.insert($copyElementNode(origin).splice(0, 0, siblings));
        }
    }
    return parentCaret;
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ /**
 * @experimental
 * Define a LexicalExtension from the given object literal. TypeScript will
 * infer Config and Name in most cases, but you may want to use
 * {@link safeCast} for config if there are default fields or varying types.
 *
 * @param extension - The LexicalExtension
 * @returns The unmodified extension argument (this is only an inference helper)
 *
 * @example
 * Basic example
 * ```ts
 * export const MyExtension = defineExtension({
 *   // Extension names must be unique in an editor
 *   name: "my",
 *   nodes: [MyNode],
 * });
 * ```
 *
 * @example
 * Extension with optional configuration
 * ```ts
 * export interface ConfigurableConfig {
 *   optional?: string;
 *   required: number;
 * }
 * export const ConfigurableExtension = defineExtension({
 *   name: "configurable",
 *   // The Extension's config must satisfy the full config type,
 *   // but using the Extension as a dependency never requires
 *   // configuration and any partial of the config can be specified
 *   config: safeCast<ConfigurableConfig>({ required: 1 }),
 * });
 * ```
 *
 * @__NO_SIDE_EFFECTS__
 */ function defineExtension(extension) {
    return extension;
}
/**
 * @experimental
 * Override a partial of the configuration of an Extension, to be used
 * in the dependencies array of another extension, or as
 * an argument to {@link buildEditorFromExtensions}.
 *
 * Before building the editor, configurations will be merged using
 * `extension.mergeConfig(extension, config)` or {@link shallowMergeConfig} if
 * this is not directly implemented by the Extension.
 *
 * @param args - An extension followed by one or more config partials for that extension
 * @returns `[extension, config, ...configs]`
 *
 * @example
 * ```ts
 * export const ReactDecoratorExtension = defineExtension({
 *   name: "react-decorator",
 *   dependencies: [
 *     configExtension(ReactExtension, {
 *       decorators: [<ReactDecorator />]
 *     }),
 *   ],
 * });
 * ```
 *
 * @__NO_SIDE_EFFECTS__
 */ function configExtension(...args) {
    return args;
}
/**
 * @experimental
 * Used to declare a peer dependency of an extension in a type-safe way,
 * requires the type parameter. The most common use case for peer dependencies
 * is to avoid a direct import dependency, so you would want to use a
 * type import or the import type (shown in below examples).
 *
 * @param name - The extension's name
 * @param config - An optional config override
 * @returns NormalizedPeerDependency
 *
 * @example
 * ```ts
 * import type {FooExtension} from "foo";
 *
 * export const PeerExtension = defineExtension({
 *   name: 'PeerExtension',
 *   peerDependencies: [
 *     declarePeerDependency<FooExtension>("foo"),
 *     declarePeerDependency<typeof import("bar").BarExtension>("bar", {config: "bar"}),
 *   ],
 * });
 * ```
 *
 * @__NO_SIDE_EFFECTS__
 */ function declarePeerDependency(name, config) {
    return [
        name,
        config
    ];
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ /**
 * Explicitly and safely cast a value to a specific type when inference or
 * satisfies isn't going to work as expected (often useful for the config
 * property with {@link defineExtension})
 *
 * @__NO_SIDE_EFFECTS__
 */ function safeCast(value) {
    return value;
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ /**
 * The default merge strategy for extension configuration is a shallow merge.
 *
 * @param config - A full config
 * @param overrides - A partial config of overrides
 * @returns config if there are no overrides, otherwise `{...config, ...overrides}`
 */ function shallowMergeConfig(config, overrides) {
    if (!overrides || config === overrides) {
        return config;
    }
    for(const k in overrides){
        if (config[k] !== overrides[k]) {
            return {
                ...config,
                ...overrides
            };
        }
    }
    return config;
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ /** @internal */ function normalizeClassNames(...classNames) {
    const rval = [];
    for (const className of classNames){
        if (className && typeof className === 'string') {
            for (const [s] of className.matchAll(/\S+/g)){
                rval.push(s);
            }
        }
    }
    return rval;
}
/**
 * Takes an HTML element and adds the classNames passed within an array,
 * ignoring any non-string types. A space can be used to add multiple classes
 * eg. addClassNamesToElement(element, ['element-inner active', true, null])
 * will add both 'element-inner' and 'active' as classes to that element.
 * @param element - The element in which the classes are added
 * @param classNames - An array defining the class names to add to the element
 */ function addClassNamesToElement(element, ...classNames) {
    const classesToAdd = normalizeClassNames(...classNames);
    if (classesToAdd.length > 0) {
        element.classList.add(...classesToAdd);
    }
}
/**
 * Takes an HTML element and removes the classNames passed within an array,
 * ignoring any non-string types. A space can be used to remove multiple classes
 * eg. removeClassNamesFromElement(element, ['active small', true, null])
 * will remove both the 'active' and 'small' classes from that element.
 * @param element - The element in which the classes are removed
 * @param classNames - An array defining the class names to remove from the element
 */ function removeClassNamesFromElement(element, ...classNames) {
    const classesToRemove = normalizeClassNames(...classNames);
    if (classesToRemove.length > 0) {
        element.classList.remove(...classesToRemove);
    }
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ /**
 * Returns a function that will execute all functions passed when called. It is generally used
 * to register multiple lexical listeners and then tear them down with a single function call, such
 * as React's useEffect hook.
 * @example
 * ```ts
 * useEffect(() => {
 *   return mergeRegister(
 *     editor.registerCommand(...registerCommand1 logic),
 *     editor.registerCommand(...registerCommand2 logic),
 *     editor.registerCommand(...registerCommand3 logic)
 *   )
 * }, [editor])
 * ```
 * In this case, useEffect is returning the function returned by mergeRegister as a cleanup
 * function to be executed after either the useEffect runs again (due to one of its dependencies
 * updating) or the component it resides in unmounts.
 * Note the functions don't necessarily need to be in an array as all arguments
 * are considered to be the func argument and spread from there.
 * The order of cleanup is the reverse of the argument order. Generally it is
 * expected that the first "acquire" will be "released" last (LIFO order),
 * because a later step may have some dependency on an earlier one.
 * @param func - An array of cleanup functions meant to be executed by the returned function.
 * @returns the function which executes all the passed cleanup functions.
 */ function mergeRegister(...func) {
    return ()=>{
        for(let i = func.length - 1; i >= 0; i--){
            func[i]();
        }
        // Clean up the references and make future calls a no-op
        func.length = 0;
    };
}
;
}),
"[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/@lexical/react/LexicalComposer.dev.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LexicalComposer",
    ()=>LexicalComposer
]);
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$react$2f$LexicalComposerContext$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/@lexical/react/LexicalComposerContext.dev.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/lexical/Lexical.dev.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
;
;
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ const CAN_USE_DOM = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined';
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ // This workaround is no longer necessary in React 19,
// but we currently support React >=17.x
// https://github.com/facebook/react/pull/26395
const useLayoutEffectImpl = CAN_USE_DOM ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"];
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ const HISTORY_MERGE_OPTIONS = {
    tag: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HISTORY_MERGE_TAG"]
};
function LexicalComposer({ initialConfig, children }) {
    const composerContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LexicalComposer.useMemo[composerContext]": ()=>{
            const { theme, namespace, nodes, onError, editorState: initialEditorState, html } = initialConfig;
            const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$react$2f$LexicalComposerContext$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createLexicalComposerContext"])(null, theme);
            const editor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEditor"])({
                editable: initialConfig.editable,
                html,
                namespace,
                nodes,
                onError: {
                    "LexicalComposer.useMemo[composerContext].editor": (error)=>onError(error, editor)
                }["LexicalComposer.useMemo[composerContext].editor"],
                theme
            });
            initializeEditor(editor, initialEditorState);
            return [
                editor,
                context
            ];
        }
    }["LexicalComposer.useMemo[composerContext]"], // We only do this for init
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
    useLayoutEffectImpl({
        "LexicalComposer.useLayoutEffectImpl": ()=>{
            const isEditable = initialConfig.editable;
            const [editor] = composerContext;
            editor.setEditable(isEditable !== undefined ? isEditable : true);
        // We only do this for init
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["LexicalComposer.useLayoutEffectImpl"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$react$2f$LexicalComposerContext$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LexicalComposerContext"].Provider, {
        value: composerContext,
        children: children
    });
}
function initializeEditor(editor, initialEditorState) {
    if (initialEditorState === null) {
        return;
    } else if (initialEditorState === undefined) {
        editor.update(()=>{
            const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getRoot"])();
            if (root.isEmpty()) {
                const paragraph = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$createParagraphNode"])();
                root.append(paragraph);
                const activeElement = CAN_USE_DOM ? document.activeElement : null;
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSelection"])() !== null || activeElement !== null && activeElement === editor.getRootElement()) {
                    paragraph.select();
                }
            }
        }, HISTORY_MERGE_OPTIONS);
    } else if (initialEditorState !== null) {
        switch(typeof initialEditorState){
            case 'string':
                {
                    const parsedEditorState = editor.parseEditorState(initialEditorState);
                    editor.setEditorState(parsedEditorState, HISTORY_MERGE_OPTIONS);
                    break;
                }
            case 'object':
                {
                    editor.setEditorState(initialEditorState, HISTORY_MERGE_OPTIONS);
                    break;
                }
            case 'function':
                {
                    editor.update(()=>{
                        const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getRoot"])();
                        if (root.isEmpty()) {
                            initialEditorState(editor);
                        }
                    }, HISTORY_MERGE_OPTIONS);
                    break;
                }
        }
    }
}
;
}),
"[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/@lexical/react/useLexicalEditable.dev.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLexicalEditable",
    ()=>useLexicalEditable
]);
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$react$2f$LexicalComposerContext$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/@lexical/react/LexicalComposerContext.dev.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ const CAN_USE_DOM = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined';
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ // This workaround is no longer necessary in React 19,
// but we currently support React >=17.x
// https://github.com/facebook/react/pull/26395
const useLayoutEffectImpl = CAN_USE_DOM ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"];
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ /**
 * Shortcut to Lexical subscriptions when values are used for render.
 * @param subscription - The function to create the {@link LexicalSubscription}. This function's identity must be stable (e.g. defined at module scope or with useCallback).
 */ function useLexicalSubscription(subscription) {
    const [editor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$react$2f$LexicalComposerContext$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLexicalComposerContext"])();
    const initializedSubscription = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useLexicalSubscription.useMemo[initializedSubscription]": ()=>subscription(editor)
    }["useLexicalSubscription.useMemo[initializedSubscription]"], [
        editor,
        subscription
    ]);
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useLexicalSubscription.useState": ()=>initializedSubscription.initialValueFn()
    }["useLexicalSubscription.useState"]);
    const valueRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(value);
    useLayoutEffectImpl({
        "useLexicalSubscription.useLayoutEffectImpl": ()=>{
            const { initialValueFn, subscribe } = initializedSubscription;
            const currentValue = initialValueFn();
            if (valueRef.current !== currentValue) {
                valueRef.current = currentValue;
                setValue(currentValue);
            }
            return subscribe({
                "useLexicalSubscription.useLayoutEffectImpl": (newValue)=>{
                    valueRef.current = newValue;
                    setValue(newValue);
                }
            }["useLexicalSubscription.useLayoutEffectImpl"]);
        }
    }["useLexicalSubscription.useLayoutEffectImpl"], [
        initializedSubscription,
        subscription
    ]);
    return value;
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ function subscription(editor) {
    return {
        initialValueFn: ()=>editor.isEditable(),
        subscribe: (callback)=>{
            return editor.registerEditableListener(callback);
        }
    };
}
/**
 * Get the current value for {@link LexicalEditor.isEditable}
 * using {@link useLexicalSubscription}.
 * You should prefer this over manually observing the value with
 * {@link LexicalEditor.registerEditableListener},
 * which is a bit tricky to do correctly, particularly when using
 * React StrictMode (the default for development) or concurrency.
 */ function useLexicalEditable() {
    return useLexicalSubscription(subscription);
}
;
}),
"[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/@lexical/selection/LexicalSelection.dev.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "$addNodeStyle",
    ()=>$addNodeStyle,
    "$copyBlockFormatIndent",
    ()=>$copyBlockFormatIndent,
    "$ensureForwardRangeSelection",
    ()=>$ensureForwardRangeSelection,
    "$forEachSelectedTextNode",
    ()=>$forEachSelectedTextNode,
    "$getComputedStyleForElement",
    ()=>$getComputedStyleForElement,
    "$getComputedStyleForParent",
    ()=>$getComputedStyleForParent,
    "$getSelectionStyleValueForProperty",
    ()=>$getSelectionStyleValueForProperty,
    "$isAtNodeEnd",
    ()=>$isAtNodeEnd,
    "$isParentElementRTL",
    ()=>$isParentElementRTL,
    "$isParentRTL",
    ()=>$isParentRTL,
    "$moveCaretSelection",
    ()=>$moveCaretSelection,
    "$moveCharacter",
    ()=>$moveCharacter,
    "$patchStyleText",
    ()=>$patchStyleText,
    "$setBlocksType",
    ()=>$setBlocksType,
    "$shouldOverrideDefaultCharacterSelection",
    ()=>$shouldOverrideDefaultCharacterSelection,
    "$sliceSelectedTextNodeContent",
    ()=>$sliceSelectedTextNodeContent,
    "$trimTextContentFromAnchor",
    ()=>$trimTextContentFromAnchor,
    "$wrapNodes",
    ()=>$wrapNodes,
    "createDOMRange",
    ()=>createDOMRange,
    "createRectsFromDOMRange",
    ()=>createRectsFromDOMRange,
    "getCSSFromStyleObject",
    ()=>getCSSFromStyleObject,
    "getStyleObjectFromCSS",
    ()=>getStyleObjectFromCSS,
    "trimTextContentFromAnchor",
    ()=>trimTextContentFromAnchor
]);
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/lexical/Lexical.dev.mjs [app-client] (ecmascript)");
;
;
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ // Do not require this module directly! Use normal `invariant` calls.
function formatDevErrorMessage(message) {
    throw new Error(message);
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ const CSS_TO_STYLES = new Map();
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ function getDOMTextNode(element) {
    let node = element;
    while(node != null){
        if (node.nodeType === Node.TEXT_NODE) {
            return node;
        }
        node = node.firstChild;
    }
    return null;
}
function getDOMIndexWithinParent(node) {
    const parent = node.parentNode;
    if (parent == null) {
        throw new Error('Should never happen');
    }
    return [
        parent,
        Array.from(parent.childNodes).indexOf(node)
    ];
}
/**
 * Creates a selection range for the DOM.
 * @param editor - The lexical editor.
 * @param anchorNode - The anchor node of a selection.
 * @param _anchorOffset - The amount of space offset from the anchor to the focus.
 * @param focusNode - The current focus.
 * @param _focusOffset - The amount of space offset from the focus to the anchor.
 * @returns The range of selection for the DOM that was created.
 */ function createDOMRange(editor, anchorNode, _anchorOffset, focusNode, _focusOffset) {
    const anchorKey = anchorNode.getKey();
    const focusKey = focusNode.getKey();
    const range = document.createRange();
    let anchorDOM = editor.getElementByKey(anchorKey);
    let focusDOM = editor.getElementByKey(focusKey);
    let anchorOffset = _anchorOffset;
    let focusOffset = _focusOffset;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isTextNode"])(anchorNode)) {
        anchorDOM = getDOMTextNode(anchorDOM);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isTextNode"])(focusNode)) {
        focusDOM = getDOMTextNode(focusDOM);
    }
    if (anchorNode === undefined || focusNode === undefined || anchorDOM === null || focusDOM === null) {
        return null;
    }
    if (anchorDOM.nodeName === 'BR') {
        [anchorDOM, anchorOffset] = getDOMIndexWithinParent(anchorDOM);
    }
    if (focusDOM.nodeName === 'BR') {
        [focusDOM, focusOffset] = getDOMIndexWithinParent(focusDOM);
    }
    const firstChild = anchorDOM.firstChild;
    if (anchorDOM === focusDOM && firstChild != null && firstChild.nodeName === 'BR' && anchorOffset === 0 && focusOffset === 0) {
        focusOffset = 1;
    }
    try {
        range.setStart(anchorDOM, anchorOffset);
        range.setEnd(focusDOM, focusOffset);
    } catch (_e) {
        return null;
    }
    if (range.collapsed && (anchorOffset !== focusOffset || anchorKey !== focusKey)) {
        // Range is backwards, we need to reverse it
        range.setStart(focusDOM, focusOffset);
        range.setEnd(anchorDOM, anchorOffset);
    }
    return range;
}
/**
 * Creates DOMRects, generally used to help the editor find a specific location on the screen.
 * @param editor - The lexical editor
 * @param range - A fragment of a document that can contain nodes and parts of text nodes.
 * @returns The selectionRects as an array.
 */ function createRectsFromDOMRange(editor, range) {
    const rootElement = editor.getRootElement();
    if (rootElement === null) {
        return [];
    }
    const rootRect = rootElement.getBoundingClientRect();
    const computedStyle = getComputedStyle(rootElement);
    const rootPadding = parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight);
    const selectionRects = Array.from(range.getClientRects());
    let selectionRectsLength = selectionRects.length;
    //sort rects from top left to bottom right.
    selectionRects.sort((a, b)=>{
        const top = a.top - b.top;
        // Some rects match position closely, but not perfectly,
        // so we give a 3px tolerance.
        if (Math.abs(top) <= 3) {
            return a.left - b.left;
        }
        return top;
    });
    let prevRect;
    for(let i = 0; i < selectionRectsLength; i++){
        const selectionRect = selectionRects[i];
        // Exclude rects that overlap preceding Rects in the sorted list.
        const isOverlappingRect = prevRect && prevRect.top <= selectionRect.top && prevRect.top + prevRect.height > selectionRect.top && prevRect.left + prevRect.width > selectionRect.left;
        // Exclude selections that span the entire element
        const selectionSpansElement = selectionRect.width + rootPadding === rootRect.width;
        if (isOverlappingRect || selectionSpansElement) {
            selectionRects.splice(i--, 1);
            selectionRectsLength--;
            continue;
        }
        prevRect = selectionRect;
    }
    return selectionRects;
}
/**
 * Creates an object containing all the styles and their values provided in the CSS string.
 * @param css - The CSS string of styles and their values.
 * @returns The styleObject containing all the styles and their values.
 */ function getStyleObjectFromRawCSS(css) {
    const styleObject = {};
    if (!css) {
        return styleObject;
    }
    const styles = css.split(';');
    for (const style of styles){
        if (style !== '') {
            const [key, value] = style.split(/:([^]+)/); // split on first colon
            if (key && value) {
                styleObject[key.trim()] = value.trim();
            }
        }
    }
    return styleObject;
}
/**
 * Given a CSS string, returns an object from the style cache.
 * @param css - The CSS property as a string.
 * @returns The value of the given CSS property.
 */ function getStyleObjectFromCSS(css) {
    let value = CSS_TO_STYLES.get(css);
    if (value === undefined) {
        value = getStyleObjectFromRawCSS(css);
        CSS_TO_STYLES.set(css, value);
    }
    {
        // Freeze the value in DEV to prevent accidental mutations
        Object.freeze(value);
    }
    return value;
}
/**
 * Gets the CSS styles from the style object.
 * @param styles - The style object containing the styles to get.
 * @returns A string containing the CSS styles and their values.
 */ function getCSSFromStyleObject(styles) {
    let css = '';
    for(const style in styles){
        if (style) {
            css += `${style}: ${styles[style]};`;
        }
    }
    return css;
}
/**
 * Gets the computed DOM styles of the element.
 * @param element - The node to check the styles for.
 * @returns the computed styles of the element or null if there is no DOM element or no default view for the document.
 */ function $getComputedStyleForElement(element) {
    const editor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getEditor"])();
    const domElement = editor.getElementByKey(element.getKey());
    if (domElement === null) {
        return null;
    }
    const view = domElement.ownerDocument.defaultView;
    if (view === null) {
        return null;
    }
    return view.getComputedStyle(domElement);
}
/**
 * Gets the computed DOM styles of the parent of the node.
 * @param node - The node to check its parent's styles for.
 * @returns the computed styles of the node or null if there is no DOM element or no default view for the document.
 */ function $getComputedStyleForParent(node) {
    const parent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRootNode"])(node) ? node : node.getParentOrThrow();
    return $getComputedStyleForElement(parent);
}
/**
 * Determines whether a node's parent is RTL.
 * @param node - The node to check whether it is RTL.
 * @returns whether the node is RTL.
 */ function $isParentRTL(node) {
    const styles = $getComputedStyleForParent(node);
    return styles !== null && styles.direction === 'rtl';
}
/**
 * Generally used to append text content to HTML and JSON. Grabs the text content and "slices"
 * it to be generated into the new TextNode.
 * @param selection - The selection containing the node whose TextNode is to be edited.
 * @param textNode - The TextNode to be edited.
 * @param mutates - 'clone' to return a clone before mutating, 'self' to update in-place
 * @returns The updated TextNode or clone.
 */ function $sliceSelectedTextNodeContent(selection, textNode, mutates = 'self') {
    const anchorAndFocus = selection.getStartEndPoints();
    if (textNode.isSelected(selection) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isTokenOrSegmented"])(textNode) && anchorAndFocus !== null) {
        const [anchor, focus] = anchorAndFocus;
        const isBackward = selection.isBackward();
        const anchorNode = anchor.getNode();
        const focusNode = focus.getNode();
        const isAnchor = textNode.is(anchorNode);
        const isFocus = textNode.is(focusNode);
        if (isAnchor || isFocus) {
            const [anchorOffset, focusOffset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getCharacterOffsets"])(selection);
            const isSame = anchorNode.is(focusNode);
            const isFirst = textNode.is(isBackward ? focusNode : anchorNode);
            const isLast = textNode.is(isBackward ? anchorNode : focusNode);
            let startOffset = 0;
            let endOffset = undefined;
            if (isSame) {
                startOffset = anchorOffset > focusOffset ? focusOffset : anchorOffset;
                endOffset = anchorOffset > focusOffset ? anchorOffset : focusOffset;
            } else if (isFirst) {
                const offset = isBackward ? focusOffset : anchorOffset;
                startOffset = offset;
                endOffset = undefined;
            } else if (isLast) {
                const offset = isBackward ? anchorOffset : focusOffset;
                startOffset = 0;
                endOffset = offset;
            }
            // NOTE: This mutates __text directly because the primary use case is to
            // modify a $cloneWithProperties node that should never be added
            // to the EditorState so we must not call getWritable via setTextContent
            const text = textNode.__text.slice(startOffset, endOffset);
            if (text !== textNode.__text) {
                if (mutates === 'clone') {
                    textNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$cloneWithPropertiesEphemeral"])(textNode);
                }
                textNode.__text = text;
            }
        }
    }
    return textNode;
}
/**
 * Determines if the current selection is at the end of the node.
 * @param point - The point of the selection to test.
 * @returns true if the provided point offset is in the last possible position, false otherwise.
 */ function $isAtNodeEnd(point) {
    if (point.type === 'text') {
        return point.offset === point.getNode().getTextContentSize();
    }
    const node = point.getNode();
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isElementNode"])(node)) {
        formatDevErrorMessage(`isAtNodeEnd: node must be a TextNode or ElementNode`);
    }
    return point.offset === node.getChildrenSize();
}
/**
 * Trims text from a node in order to shorten it, eg. to enforce a text's max length. If it deletes text
 * that is an ancestor of the anchor then it will leave 2 indents, otherwise, if no text content exists, it deletes
 * the TextNode. It will move the focus to either the end of any left over text or beginning of a new TextNode.
 * @param editor - The lexical editor.
 * @param anchor - The anchor of the current selection, where the selection should be pointing.
 * @param delCount - The amount of characters to delete. Useful as a dynamic variable eg. textContentSize - maxLength;
 */ function $trimTextContentFromAnchor(editor, anchor, delCount) {
    // Work from the current selection anchor point
    let currentNode = anchor.getNode();
    let remaining = delCount;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isElementNode"])(currentNode)) {
        const descendantNode = currentNode.getDescendantByIndex(anchor.offset);
        if (descendantNode !== null) {
            currentNode = descendantNode;
        }
    }
    while(remaining > 0 && currentNode !== null){
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isElementNode"])(currentNode)) {
            const lastDescendant = currentNode.getLastDescendant();
            if (lastDescendant !== null) {
                currentNode = lastDescendant;
            }
        }
        let nextNode = currentNode.getPreviousSibling();
        let additionalElementWhitespace = 0;
        if (nextNode === null) {
            let parent = currentNode.getParentOrThrow();
            let parentSibling = parent.getPreviousSibling();
            while(parentSibling === null){
                parent = parent.getParent();
                if (parent === null) {
                    nextNode = null;
                    break;
                }
                parentSibling = parent.getPreviousSibling();
            }
            if (parent !== null) {
                additionalElementWhitespace = parent.isInline() ? 0 : 2;
                nextNode = parentSibling;
            }
        }
        let text = currentNode.getTextContent();
        // If the text is empty, we need to consider adding in two line breaks to match
        // the content if we were to get it from its parent.
        if (text === '' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isElementNode"])(currentNode) && !currentNode.isInline()) {
            // TODO: should this be handled in core?
            text = '\n\n';
        }
        const currentNodeSize = text.length;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isTextNode"])(currentNode) || remaining >= currentNodeSize) {
            const parent = currentNode.getParent();
            currentNode.remove();
            if (parent != null && parent.getChildrenSize() === 0 && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRootNode"])(parent)) {
                parent.remove();
            }
            remaining -= currentNodeSize + additionalElementWhitespace;
            currentNode = nextNode;
        } else {
            const key = currentNode.getKey();
            // See if we can just revert it to what was in the last editor state
            const prevTextContent = editor.getEditorState().read(()=>{
                const prevNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getNodeByKey"])(key);
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isTextNode"])(prevNode) && prevNode.isSimpleText()) {
                    return prevNode.getTextContent();
                }
                return null;
            });
            const offset = currentNodeSize - remaining;
            const slicedText = text.slice(0, offset);
            if (prevTextContent !== null && prevTextContent !== text) {
                const prevSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getPreviousSelection"])();
                let target = currentNode;
                if (!currentNode.isSimpleText()) {
                    const textNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$createTextNode"])(prevTextContent);
                    currentNode.replace(textNode);
                    target = textNode;
                } else {
                    currentNode.setTextContent(prevTextContent);
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(prevSelection) && prevSelection.isCollapsed()) {
                    const prevOffset = prevSelection.anchor.offset;
                    target.select(prevOffset, prevOffset);
                }
            } else if (currentNode.isSimpleText()) {
                // Split text
                const isSelected = anchor.key === key;
                let anchorOffset = anchor.offset;
                // Move offset to end if it's less than the remaining number, otherwise
                // we'll have a negative splitStart.
                if (anchorOffset < remaining) {
                    anchorOffset = currentNodeSize;
                }
                const splitStart = isSelected ? anchorOffset - remaining : 0;
                const splitEnd = isSelected ? anchorOffset : offset;
                if (isSelected && splitStart === 0) {
                    const [excessNode] = currentNode.splitText(splitStart, splitEnd);
                    excessNode.remove();
                } else {
                    const [, excessNode] = currentNode.splitText(splitStart, splitEnd);
                    excessNode.remove();
                }
            } else {
                const textNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$createTextNode"])(slicedText);
                currentNode.replace(textNode);
            }
            remaining = 0;
        }
    }
}
/**
 * Gets the TextNode's style object and adds the styles to the CSS.
 * @param node - The TextNode to add styles to.
 */ function $addNodeStyle(node) {
    const CSSText = node.getStyle();
    const styles = getStyleObjectFromRawCSS(CSSText);
    CSS_TO_STYLES.set(CSSText, styles);
}
/**
 * Applies the provided styles to the given TextNode, ElementNode, or
 * collapsed RangeSelection.
 *
 * @param target - The TextNode, ElementNode, or collapsed RangeSelection to apply the styles to
 * @param patch - The patch to apply, which can include multiple styles. \\{CSSProperty: value\\} . Can also accept a function that returns the new property value.
 */ function $patchStyle(target, patch) {
    if (!((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(target) ? target.isCollapsed() : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isTextNode"])(target) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isElementNode"])(target))) {
        formatDevErrorMessage(`$patchStyle must only be called with a TextNode, ElementNode, or collapsed RangeSelection`);
    }
    const prevStyles = getStyleObjectFromCSS((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(target) ? target.style : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isTextNode"])(target) ? target.getStyle() : target.getTextStyle());
    const newStyles = Object.entries(patch).reduce((styles, [key, value])=>{
        if (typeof value === 'function') {
            styles[key] = value(prevStyles[key], target);
        } else if (value === null) {
            delete styles[key];
        } else {
            styles[key] = value;
        }
        return styles;
    }, {
        ...prevStyles
    });
    const newCSSText = getCSSFromStyleObject(newStyles);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(target) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isTextNode"])(target)) {
        target.setStyle(newCSSText);
    } else {
        target.setTextStyle(newCSSText);
    }
    CSS_TO_STYLES.set(newCSSText, newStyles);
}
/**
 * Applies the provided styles to the TextNodes in the provided Selection.
 * Will update partially selected TextNodes by splitting the TextNode and applying
 * the styles to the appropriate one.
 * @param selection - The selected node(s) to update.
 * @param patch - The patch to apply, which can include multiple styles. \\{CSSProperty: value\\} . Can also accept a function that returns the new property value.
 */ function $patchStyleText(selection, patch) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection) && selection.isCollapsed()) {
        $patchStyle(selection, patch);
        const emptyNode = selection.anchor.getNode();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isElementNode"])(emptyNode) && emptyNode.isEmpty()) {
            $patchStyle(emptyNode, patch);
        }
    }
    $forEachSelectedTextNode((textNode)=>{
        $patchStyle(textNode, patch);
    });
    const nodes = selection.getNodes();
    if (nodes.length > 0) {
        const patchedElementKeys = new Set();
        for (const node of nodes){
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isElementNode"])(node) || !node.canBeEmpty() || node.getChildrenSize() !== 0) {
                continue;
            }
            const key = node.getKey();
            if (patchedElementKeys.has(key)) {
                continue;
            }
            patchedElementKeys.add(key);
            $patchStyle(node, patch);
        }
    }
}
function $forEachSelectedTextNode(fn) {
    const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSelection"])();
    if (!selection) {
        return;
    }
    const slicedTextNodes = new Map();
    const getSliceIndices = (node)=>slicedTextNodes.get(node.getKey()) || [
            0,
            node.getTextContentSize()
        ];
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection)) {
        for (const slice of (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$caretRangeFromSelection"])(selection).getTextSlices()){
            if (slice) {
                slicedTextNodes.set(slice.caret.origin.getKey(), slice.getSliceIndices());
            }
        }
    }
    const selectedNodes = selection.getNodes();
    for (const selectedNode of selectedNodes){
        if (!((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isTextNode"])(selectedNode) && selectedNode.canHaveFormat())) {
            continue;
        }
        const [startOffset, endOffset] = getSliceIndices(selectedNode);
        // No actual text is selected, so do nothing.
        if (endOffset === startOffset) {
            continue;
        }
        // The entire node is selected or a token/segment, so just format it
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isTokenOrSegmented"])(selectedNode) || startOffset === 0 && endOffset === selectedNode.getTextContentSize()) {
            fn(selectedNode);
        } else {
            // The node is partially selected, so split it into two or three nodes
            // and style the selected one.
            const splitNodes = selectedNode.splitText(startOffset, endOffset);
            const replacement = splitNodes[startOffset === 0 ? 0 : 1];
            fn(replacement);
        }
    }
    // Prior to NodeCaret #7046 this would have been a side-effect
    // so we do this for test compatibility.
    // TODO: we may want to consider simplifying by removing this
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection) && selection.anchor.type === 'text' && selection.focus.type === 'text' && selection.anchor.key === selection.focus.key) {
        $ensureForwardRangeSelection(selection);
    }
}
/**
 * Ensure that the given RangeSelection is not backwards. If it
 * is backwards, then the anchor and focus points will be swapped
 * in-place. Ensuring that the selection is a writable RangeSelection
 * is the responsibility of the caller (e.g. in a read-only context
 * you will want to clone $getSelection() before using this).
 *
 * @param selection a writable RangeSelection
 */ function $ensureForwardRangeSelection(selection) {
    if (selection.isBackward()) {
        const { anchor, focus } = selection;
        // stash for the in-place swap
        const { key, offset, type } = anchor;
        anchor.set(focus.key, focus.offset, focus.type);
        focus.set(key, offset, type);
    }
}
function $copyBlockFormatIndent(srcNode, destNode) {
    const format = srcNode.getFormatType();
    const indent = srcNode.getIndent();
    if (format !== destNode.getFormatType()) {
        destNode.setFormat(format);
    }
    if (indent !== destNode.getIndent()) {
        destNode.setIndent(indent);
    }
}
/**
 * Converts all nodes in the selection that are of one block type to another.
 * @param selection - The selected blocks to be converted.
 * @param $createElement - The function that creates the node. eg. $createParagraphNode.
 * @param $afterCreateElement - The function that updates the new node based on the previous one ($copyBlockFormatIndent by default)
 */ function $setBlocksType(selection, $createElement, $afterCreateElement = $copyBlockFormatIndent) {
    if (selection === null) {
        return;
    }
    // Selections tend to not include their containing blocks so we effectively
    // expand it here
    const anchorAndFocus = selection.getStartEndPoints();
    const blockMap = new Map();
    let newSelection = null;
    if (anchorAndFocus) {
        const [anchor, focus] = anchorAndFocus;
        newSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$createRangeSelection"])();
        newSelection.anchor.set(anchor.key, anchor.offset, anchor.type);
        newSelection.focus.set(focus.key, focus.offset, focus.type);
        const anchorBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$findMatchingParent"])(anchor.getNode(), __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INTERNAL_$isBlock"]);
        const focusBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$findMatchingParent"])(focus.getNode(), __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INTERNAL_$isBlock"]);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isElementNode"])(anchorBlock)) {
            blockMap.set(anchorBlock.getKey(), anchorBlock);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isElementNode"])(focusBlock)) {
            blockMap.set(focusBlock.getKey(), focusBlock);
        }
    }
    for (const node of selection.getNodes()){
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isElementNode"])(node) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INTERNAL_$isBlock"])(node)) {
            blockMap.set(node.getKey(), node);
        } else if (anchorAndFocus === null) {
            const ancestorBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$findMatchingParent"])(node, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INTERNAL_$isBlock"]);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isElementNode"])(ancestorBlock)) {
                blockMap.set(ancestorBlock.getKey(), ancestorBlock);
            }
        }
    }
    for (const [key, prevNode] of blockMap){
        const element = $createElement();
        $afterCreateElement(prevNode, element);
        prevNode.replace(element, true);
        if (newSelection) {
            if (key === newSelection.anchor.key) {
                newSelection.anchor.set(element.getKey(), newSelection.anchor.offset, newSelection.anchor.type);
            }
            if (key === newSelection.focus.key) {
                newSelection.focus.set(element.getKey(), newSelection.focus.offset, newSelection.focus.type);
            }
        }
    }
    if (newSelection && selection.is((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSelection"])())) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$setSelection"])(newSelection);
    }
}
function isPointAttached(point) {
    return point.getNode().isAttached();
}
function $removeParentEmptyElements(startingNode) {
    let node = startingNode;
    while(node !== null && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRootOrShadowRoot"])(node)){
        const latest = node.getLatest();
        const parentNode = node.getParent();
        if (latest.getChildrenSize() === 0) {
            node.remove(true);
        }
        node = parentNode;
    }
}
/**
 * @deprecated In favor of $setBlockTypes
 * Wraps all nodes in the selection into another node of the type returned by createElement.
 * @param selection - The selection of nodes to be wrapped.
 * @param createElement - A function that creates the wrapping ElementNode. eg. $createParagraphNode.
 * @param wrappingElement - An element to append the wrapped selection and its children to.
 */ function $wrapNodes(selection, createElement, wrappingElement = null) {
    const anchorAndFocus = selection.getStartEndPoints();
    const anchor = anchorAndFocus ? anchorAndFocus[0] : null;
    const nodes = selection.getNodes();
    const nodesLength = nodes.length;
    if (anchor !== null && (nodesLength === 0 || nodesLength === 1 && anchor.type === 'element' && anchor.getNode().getChildrenSize() === 0)) {
        const target = anchor.type === 'text' ? anchor.getNode().getParentOrThrow() : anchor.getNode();
        const children = target.getChildren();
        let element = createElement();
        element.setFormat(target.getFormatType());
        element.setIndent(target.getIndent());
        children.forEach((child)=>element.append(child));
        if (wrappingElement) {
            element = wrappingElement.append(element);
        }
        target.replace(element);
        return;
    }
    let topLevelNode = null;
    let descendants = [];
    for(let i = 0; i < nodesLength; i++){
        const node = nodes[i];
        // Determine whether wrapping has to be broken down into multiple chunks. This can happen if the
        // user selected multiple Root-like nodes that have to be treated separately as if they are
        // their own branch. I.e. you don't want to wrap a whole table, but rather the contents of each
        // of each of the cell nodes.
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRootOrShadowRoot"])(node)) {
            $wrapNodesImpl(selection, descendants, descendants.length, createElement, wrappingElement);
            descendants = [];
            topLevelNode = node;
        } else if (topLevelNode === null || topLevelNode !== null && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$hasAncestor"])(node, topLevelNode)) {
            descendants.push(node);
        } else {
            $wrapNodesImpl(selection, descendants, descendants.length, createElement, wrappingElement);
            descendants = [
                node
            ];
        }
    }
    $wrapNodesImpl(selection, descendants, descendants.length, createElement, wrappingElement);
}
/**
 * Wraps each node into a new ElementNode.
 * @param selection - The selection of nodes to wrap.
 * @param nodes - An array of nodes, generally the descendants of the selection.
 * @param nodesLength - The length of nodes.
 * @param createElement - A function that creates the wrapping ElementNode. eg. $createParagraphNode.
 * @param wrappingElement - An element to wrap all the nodes into.
 * @returns
 */ function $wrapNodesImpl(selection, nodes, nodesLength, createElement, wrappingElement = null) {
    if (nodes.length === 0) {
        return;
    }
    const firstNode = nodes[0];
    const elementMapping = new Map();
    const elements = [];
    // The below logic is to find the right target for us to
    // either insertAfter/insertBefore/append the corresponding
    // elements to. This is made more complicated due to nested
    // structures.
    let target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isElementNode"])(firstNode) ? firstNode : firstNode.getParentOrThrow();
    if (target.isInline()) {
        target = target.getParentOrThrow();
    }
    let targetIsPrevSibling = false;
    while(target !== null){
        const prevSibling = target.getPreviousSibling();
        if (prevSibling !== null) {
            target = prevSibling;
            targetIsPrevSibling = true;
            break;
        }
        target = target.getParentOrThrow();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRootOrShadowRoot"])(target)) {
            break;
        }
    }
    const emptyElements = new Set();
    // Find any top level empty elements
    for(let i = 0; i < nodesLength; i++){
        const node = nodes[i];
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isElementNode"])(node) && node.getChildrenSize() === 0) {
            emptyElements.add(node.getKey());
        }
    }
    const movedNodes = new Set();
    // Move out all leaf nodes into our elements array.
    // If we find a top level empty element, also move make
    // an element for that.
    for(let i = 0; i < nodesLength; i++){
        const node = nodes[i];
        let parent = node.getParent();
        if (parent !== null && parent.isInline()) {
            parent = parent.getParent();
        }
        if (parent !== null && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isLeafNode"])(node) && !movedNodes.has(node.getKey())) {
            const parentKey = parent.getKey();
            if (elementMapping.get(parentKey) === undefined) {
                const targetElement = createElement();
                targetElement.setFormat(parent.getFormatType());
                targetElement.setIndent(parent.getIndent());
                elements.push(targetElement);
                elementMapping.set(parentKey, targetElement);
                // Move node and its siblings to the new
                // element.
                parent.getChildren().forEach((child)=>{
                    targetElement.append(child);
                    movedNodes.add(child.getKey());
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isElementNode"])(child)) {
                        // Skip nested leaf nodes if the parent has already been moved
                        child.getChildrenKeys().forEach((key)=>movedNodes.add(key));
                    }
                });
                $removeParentEmptyElements(parent);
            }
        } else if (emptyElements.has(node.getKey())) {
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isElementNode"])(node)) {
                formatDevErrorMessage(`Expected node in emptyElements to be an ElementNode`);
            }
            const targetElement = createElement();
            targetElement.setFormat(node.getFormatType());
            targetElement.setIndent(node.getIndent());
            elements.push(targetElement);
            node.remove(true);
        }
    }
    if (wrappingElement !== null) {
        for(let i = 0; i < elements.length; i++){
            const element = elements[i];
            wrappingElement.append(element);
        }
    }
    let lastElement = null;
    // If our target is Root-like, let's see if we can re-adjust
    // so that the target is the first child instead.
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRootOrShadowRoot"])(target)) {
        if (targetIsPrevSibling) {
            if (wrappingElement !== null) {
                target.insertAfter(wrappingElement);
            } else {
                for(let i = elements.length - 1; i >= 0; i--){
                    const element = elements[i];
                    target.insertAfter(element);
                }
            }
        } else {
            const firstChild = target.getFirstChild();
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isElementNode"])(firstChild)) {
                target = firstChild;
            }
            if (firstChild === null) {
                if (wrappingElement) {
                    target.append(wrappingElement);
                } else {
                    for(let i = 0; i < elements.length; i++){
                        const element = elements[i];
                        target.append(element);
                        lastElement = element;
                    }
                }
            } else {
                if (wrappingElement !== null) {
                    firstChild.insertBefore(wrappingElement);
                } else {
                    for(let i = 0; i < elements.length; i++){
                        const element = elements[i];
                        firstChild.insertBefore(element);
                        lastElement = element;
                    }
                }
            }
        }
    } else {
        if (wrappingElement) {
            target.insertAfter(wrappingElement);
        } else {
            for(let i = elements.length - 1; i >= 0; i--){
                const element = elements[i];
                target.insertAfter(element);
                lastElement = element;
            }
        }
    }
    const prevSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getPreviousSelection"])();
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(prevSelection) && isPointAttached(prevSelection.anchor) && isPointAttached(prevSelection.focus)) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$setSelection"])(prevSelection.clone());
    } else if (lastElement !== null) {
        lastElement.selectEnd();
    } else {
        selection.dirty = true;
    }
}
/**
 * Tests if the selection's parent element has vertical writing mode.
 * @param selection - The selection whose parent to test.
 * @returns true if the selection's parent has vertical writing mode (writing-mode: vertical-rl), false otherwise.
 */ function $isEditorVerticalOrientation(selection) {
    const computedStyle = $getComputedStyle(selection);
    return computedStyle !== null && computedStyle.writingMode === 'vertical-rl';
}
/**
 * Gets the computed DOM styles of the parent of the selection's anchor node.
 * @param selection - The selection to check the styles for.
 * @returns the computed styles of the node or null if there is no DOM element or no default view for the document.
 */ function $getComputedStyle(selection) {
    const anchorNode = selection.anchor.getNode();
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isElementNode"])(anchorNode)) {
        return $getComputedStyleForElement(anchorNode);
    }
    return $getComputedStyleForParent(anchorNode);
}
/**
 * Determines if the default character selection should be overridden. Used with DecoratorNodes
 * @param selection - The selection whose default character selection may need to be overridden.
 * @param isBackward - Is the selection backwards (the focus comes before the anchor)?
 * @returns true if it should be overridden, false if not.
 */ function $shouldOverrideDefaultCharacterSelection(selection, isBackward) {
    const isVertical = $isEditorVerticalOrientation(selection);
    // In vertical writing mode, we adjust the direction for correct caret movement
    let adjustedIsBackward = isVertical ? !isBackward : isBackward;
    // In right-to-left writing mode, we invert the direction for correct caret movement
    if ($isParentElementRTL(selection)) {
        adjustedIsBackward = !adjustedIsBackward;
    }
    const focusCaret = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$caretFromPoint"])(selection.focus, adjustedIsBackward ? 'previous' : 'next');
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isExtendableTextPointCaret"])(focusCaret)) {
        return false;
    }
    for (const nextCaret of (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$extendCaretToRange"])(focusCaret)){
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isChildCaret"])(nextCaret)) {
            return !nextCaret.origin.isInline();
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isElementNode"])(nextCaret.origin)) {
            continue;
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isDecoratorNode"])(nextCaret.origin)) {
            return true;
        }
        break;
    }
    return false;
}
/**
 * Moves the selection according to the arguments.
 * @param selection - The selected text or nodes.
 * @param isHoldingShift - Is the shift key being held down during the operation.
 * @param isBackward - Is the selection selected backwards (the focus comes before the anchor)?
 * @param granularity - The distance to adjust the current selection.
 */ function $moveCaretSelection(selection, isHoldingShift, isBackward, granularity) {
    selection.modify(isHoldingShift ? 'extend' : 'move', isBackward, granularity);
}
/**
 * Tests a parent element for right to left direction.
 * @param selection - The selection whose parent is to be tested.
 * @returns true if the selections' parent element has a direction of 'rtl' (right to left), false otherwise.
 */ function $isParentElementRTL(selection) {
    const computedStyle = $getComputedStyle(selection);
    return computedStyle !== null && computedStyle.direction === 'rtl';
}
/**
 * Moves selection by character according to arguments.
 * @param selection - The selection of the characters to move.
 * @param isHoldingShift - Is the shift key being held down during the operation.
 * @param isBackward - Is the selection backward (the focus comes before the anchor)?
 */ function $moveCharacter(selection, isHoldingShift, isBackward) {
    const isRTL = $isParentElementRTL(selection);
    const isVertical = $isEditorVerticalOrientation(selection);
    // In vertical-rl writing mode, arrow key directions need to be flipped
    // to match the visual flow of text (top to bottom, right to left)
    let adjustedIsBackward;
    if (isVertical) {
        // In vertical-rl mode, we need to completely invert the direction
        // Left arrow (backward) should move down (forward)
        // Right arrow (forward) should move up (backward)
        adjustedIsBackward = !isBackward;
    } else if (isRTL) {
        // In horizontal RTL mode, use the standard RTL behavior
        adjustedIsBackward = !isBackward;
    } else {
        // Standard LTR horizontal text
        adjustedIsBackward = isBackward;
    }
    // Apply the direction adjustment to move the caret
    $moveCaretSelection(selection, isHoldingShift, adjustedIsBackward, 'character');
}
/**
 * Returns the current value of a CSS property for Nodes, if set. If not set, it returns the defaultValue.
 * @param node - The node whose style value to get.
 * @param styleProperty - The CSS style property.
 * @param defaultValue - The default value for the property.
 * @returns The value of the property for node.
 */ function $getNodeStyleValueForProperty(node, styleProperty, defaultValue) {
    const css = node.getStyle();
    const styleObject = getStyleObjectFromCSS(css);
    if (styleObject !== null) {
        return styleObject[styleProperty] || defaultValue;
    }
    return defaultValue;
}
/**
 * Returns the current value of a CSS property for TextNodes in the Selection, if set. If not set, it returns the defaultValue.
 * If all TextNodes do not have the same value, it returns an empty string.
 * @param selection - The selection of TextNodes whose value to find.
 * @param styleProperty - The CSS style property.
 * @param defaultValue - The default value for the property, defaults to an empty string.
 * @returns The value of the property for the selected TextNodes.
 */ function $getSelectionStyleValueForProperty(selection, styleProperty, defaultValue = '') {
    let styleValue = null;
    const nodes = selection.getNodes();
    const anchor = selection.anchor;
    const focus = selection.focus;
    const isBackward = selection.isBackward();
    const endOffset = isBackward ? focus.offset : anchor.offset;
    const endNode = isBackward ? focus.getNode() : anchor.getNode();
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection) && selection.isCollapsed() && selection.style !== '') {
        const css = selection.style;
        const styleObject = getStyleObjectFromCSS(css);
        if (styleObject !== null && styleProperty in styleObject) {
            return styleObject[styleProperty];
        }
    }
    for(let i = 0; i < nodes.length; i++){
        const node = nodes[i];
        // if no actual characters in the end node are selected, we don't
        // include it in the selection for purposes of determining style
        // value
        if (i !== 0 && endOffset === 0 && node.is(endNode)) {
            continue;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isTextNode"])(node)) {
            const nodeStyleValue = $getNodeStyleValueForProperty(node, styleProperty, defaultValue);
            if (styleValue === null) {
                styleValue = nodeStyleValue;
            } else if (styleValue !== nodeStyleValue) {
                // multiple text nodes are in the selection and they don't all
                // have the same style.
                styleValue = '';
                break;
            }
        }
    }
    return styleValue === null ? defaultValue : styleValue;
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ /** @deprecated renamed to {@link $trimTextContentFromAnchor} by @lexical/eslint-plugin rules-of-lexical */ const trimTextContentFromAnchor = $trimTextContentFromAnchor;
;
}),
"[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/@lexical/utils/LexicalUtils.dev.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "$descendantsMatching",
    ()=>$descendantsMatching,
    "$dfs",
    ()=>$dfs,
    "$dfsIterator",
    ()=>$dfsIterator,
    "$filter",
    ()=>$filter,
    "$firstToLastIterator",
    ()=>$firstToLastIterator,
    "$getAdjacentCaret",
    ()=>$getAdjacentCaret,
    "$getDepth",
    ()=>$getDepth,
    "$getNearestBlockElementAncestorOrThrow",
    ()=>$getNearestBlockElementAncestorOrThrow,
    "$getNearestNodeOfType",
    ()=>$getNearestNodeOfType,
    "$getNextRightPreorderNode",
    ()=>$getNextRightPreorderNode,
    "$getNextSiblingOrParentSibling",
    ()=>$getNextSiblingOrParentSibling,
    "$insertFirst",
    ()=>$insertFirst,
    "$insertNodeToNearestRoot",
    ()=>$insertNodeToNearestRoot,
    "$insertNodeToNearestRootAtCaret",
    ()=>$insertNodeToNearestRootAtCaret,
    "$isEditorIsNestedEditor",
    ()=>$isEditorIsNestedEditor,
    "$lastToFirstIterator",
    ()=>$lastToFirstIterator,
    "$restoreEditorState",
    ()=>$restoreEditorState,
    "$reverseDfs",
    ()=>$reverseDfs,
    "$reverseDfsIterator",
    ()=>$reverseDfsIterator,
    "$unwrapAndFilterDescendants",
    ()=>$unwrapAndFilterDescendants,
    "$unwrapNode",
    ()=>$unwrapNode,
    "$wrapNodeInElement",
    ()=>$wrapNodeInElement,
    "CAN_USE_BEFORE_INPUT",
    ()=>CAN_USE_BEFORE_INPUT,
    "CAN_USE_DOM",
    ()=>CAN_USE_DOM,
    "IS_ANDROID",
    ()=>IS_ANDROID,
    "IS_ANDROID_CHROME",
    ()=>IS_ANDROID_CHROME,
    "IS_APPLE",
    ()=>IS_APPLE,
    "IS_APPLE_WEBKIT",
    ()=>IS_APPLE_WEBKIT,
    "IS_CHROME",
    ()=>IS_CHROME,
    "IS_FIREFOX",
    ()=>IS_FIREFOX,
    "IS_IOS",
    ()=>IS_IOS,
    "IS_SAFARI",
    ()=>IS_SAFARI,
    "calculateZoomLevel",
    ()=>calculateZoomLevel,
    "isMimeType",
    ()=>isMimeType,
    "makeStateWrapper",
    ()=>makeStateWrapper,
    "markSelection",
    ()=>markSelection,
    "mediaFileReader",
    ()=>mediaFileReader,
    "objectKlassEquals",
    ()=>objectKlassEquals,
    "positionNodeOnRange",
    ()=>mlcPositionNodeOnRange,
    "registerNestedElementResolver",
    ()=>registerNestedElementResolver,
    "selectionAlwaysOnDisplay",
    ()=>selectionAlwaysOnDisplay
]);
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/lexical/Lexical.dev.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$selection$2f$LexicalSelection$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/@lexical/selection/LexicalSelection.dev.mjs [app-client] (ecmascript) <locals>");
;
;
;
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ // Do not require this module directly! Use normal `invariant` calls.
function formatDevErrorMessage(message) {
    throw new Error(message);
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ const CAN_USE_DOM$1 = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined';
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ const documentMode = CAN_USE_DOM$1 && 'documentMode' in document ? document.documentMode : null;
const IS_APPLE$1 = CAN_USE_DOM$1 && /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const IS_FIREFOX$1 = CAN_USE_DOM$1 && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent);
const CAN_USE_BEFORE_INPUT$1 = CAN_USE_DOM$1 && 'InputEvent' in window && !documentMode ? 'getTargetRanges' in new window.InputEvent('input') : false;
const IS_SAFARI$1 = CAN_USE_DOM$1 && /Version\/[\d.]+.*Safari/.test(navigator.userAgent);
const IS_IOS$1 = CAN_USE_DOM$1 && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
const IS_ANDROID$1 = CAN_USE_DOM$1 && /Android/.test(navigator.userAgent);
// Keep these in case we need to use them in the future.
// export const IS_WINDOWS: boolean = CAN_USE_DOM && /Win/.test(navigator.platform);
const IS_CHROME$1 = CAN_USE_DOM$1 && /^(?=.*Chrome).*/i.test(navigator.userAgent);
// export const canUseTextInputEvent: boolean = CAN_USE_DOM && 'TextEvent' in window && !documentMode;
const IS_ANDROID_CHROME$1 = CAN_USE_DOM$1 && IS_ANDROID$1 && IS_CHROME$1;
const IS_APPLE_WEBKIT$1 = CAN_USE_DOM$1 && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && IS_APPLE$1 && !IS_CHROME$1;
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ function px(value) {
    return `${value}px`;
}
const mutationObserverConfig = {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true
};
function prependDOMNode(parent, node) {
    parent.insertBefore(node, parent.firstChild);
}
/**
 * Place one or multiple newly created Nodes at the passed Range's position.
 * Multiple nodes will only be created when the Range spans multiple lines (aka
 * client rects).
 *
 * This function can come particularly useful to highlight particular parts of
 * the text without interfering with the EditorState, that will often replicate
 * the state across collab and clipboard.
 *
 * This function accounts for DOM updates which can modify the passed Range.
 * Hence, the function return to remove the listener.
 */ function mlcPositionNodeOnRange(editor, range, onReposition) {
    let rootDOMNode = null;
    let parentDOMNode = null;
    let observer = null;
    let lastNodes = [];
    const wrapperNode = document.createElement('div');
    wrapperNode.style.position = 'relative';
    function position() {
        if (!(rootDOMNode !== null)) {
            formatDevErrorMessage(`Unexpected null rootDOMNode`);
        }
        if (!(parentDOMNode !== null)) {
            formatDevErrorMessage(`Unexpected null parentDOMNode`);
        }
        const { left: parentLeft, top: parentTop } = parentDOMNode.getBoundingClientRect();
        const rects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$selection$2f$LexicalSelection$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRectsFromDOMRange"])(editor, range);
        if (!wrapperNode.isConnected) {
            prependDOMNode(parentDOMNode, wrapperNode);
        }
        let hasRepositioned = false;
        for(let i = 0; i < rects.length; i++){
            const rect = rects[i];
            // Try to reuse the previously created Node when possible, no need to
            // remove/create on the most common case reposition case
            const rectNode = lastNodes[i] || document.createElement('div');
            const rectNodeStyle = rectNode.style;
            if (rectNodeStyle.position !== 'absolute') {
                rectNodeStyle.position = 'absolute';
                hasRepositioned = true;
            }
            const left = px(rect.left - parentLeft);
            if (rectNodeStyle.left !== left) {
                rectNodeStyle.left = left;
                hasRepositioned = true;
            }
            const top = px(rect.top - parentTop);
            if (rectNodeStyle.top !== top) {
                rectNode.style.top = top;
                hasRepositioned = true;
            }
            const width = px(rect.width);
            if (rectNodeStyle.width !== width) {
                rectNode.style.width = width;
                hasRepositioned = true;
            }
            const height = px(rect.height);
            if (rectNodeStyle.height !== height) {
                rectNode.style.height = height;
                hasRepositioned = true;
            }
            if (rectNode.parentNode !== wrapperNode) {
                wrapperNode.append(rectNode);
                hasRepositioned = true;
            }
            lastNodes[i] = rectNode;
        }
        while(lastNodes.length > rects.length){
            lastNodes.pop();
        }
        if (hasRepositioned) {
            onReposition(lastNodes);
        }
    }
    function stop() {
        parentDOMNode = null;
        rootDOMNode = null;
        if (observer !== null) {
            observer.disconnect();
        }
        observer = null;
        wrapperNode.remove();
        for (const node of lastNodes){
            node.remove();
        }
        lastNodes = [];
    }
    function restart() {
        const currentRootDOMNode = editor.getRootElement();
        if (currentRootDOMNode === null) {
            return stop();
        }
        const currentParentDOMNode = currentRootDOMNode.parentElement;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(currentParentDOMNode)) {
            return stop();
        }
        stop();
        rootDOMNode = currentRootDOMNode;
        parentDOMNode = currentParentDOMNode;
        observer = new MutationObserver((mutations)=>{
            const nextRootDOMNode = editor.getRootElement();
            const nextParentDOMNode = nextRootDOMNode && nextRootDOMNode.parentElement;
            if (nextRootDOMNode !== rootDOMNode || nextParentDOMNode !== parentDOMNode) {
                return restart();
            }
            for (const mutation of mutations){
                if (!wrapperNode.contains(mutation.target)) {
                    // TODO throttle
                    return position();
                }
            }
        });
        observer.observe(currentParentDOMNode, mutationObserverConfig);
        position();
    }
    const removeRootListener = editor.registerRootListener(restart);
    return ()=>{
        removeRootListener();
        stop();
    };
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ function $getOrderedSelectionPoints(selection) {
    const points = selection.getStartEndPoints();
    return selection.isBackward() ? [
        points[1],
        points[0]
    ] : points;
}
function rangeTargetFromPoint(point, node, dom) {
    if (point.type === 'text' || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isElementNode"])(node)) {
        const textDOM = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDOMTextNode"])(dom) || dom;
        return [
            textDOM,
            point.offset
        ];
    } else {
        const slot = node.getDOMSlot(dom);
        return [
            slot.element,
            slot.getFirstChildOffset() + point.offset
        ];
    }
}
function rangeFromPoints(editor, start, startNode, startDOM, end, endNode, endDOM) {
    const editorDocument = editor._window ? editor._window.document : document;
    const range = editorDocument.createRange();
    range.setStart(...rangeTargetFromPoint(start, startNode, startDOM));
    range.setEnd(...rangeTargetFromPoint(end, endNode, endDOM));
    return range;
}
/**
 * Place one or multiple newly created Nodes at the current selection. Multiple
 * nodes will only be created when the selection spans multiple lines (aka
 * client rects).
 *
 * This function can come useful when you want to show the selection but the
 * editor has been focused away.
 */ function markSelection(editor, onReposition) {
    let previousAnchorNode = null;
    let previousAnchorNodeDOM = null;
    let previousAnchorOffset = null;
    let previousFocusNode = null;
    let previousFocusNodeDOM = null;
    let previousFocusOffset = null;
    let removeRangeListener = ()=>{};
    function compute(editorState) {
        editorState.read(()=>{
            const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSelection"])();
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection)) {
                // TODO
                previousAnchorNode = null;
                previousAnchorOffset = null;
                previousFocusNode = null;
                previousFocusOffset = null;
                removeRangeListener();
                removeRangeListener = ()=>{};
                return;
            }
            const [start, end] = $getOrderedSelectionPoints(selection);
            const currentStartNode = start.getNode();
            const currentStartNodeKey = currentStartNode.getKey();
            const currentStartOffset = start.offset;
            const currentEndNode = end.getNode();
            const currentEndNodeKey = currentEndNode.getKey();
            const currentEndOffset = end.offset;
            const currentStartNodeDOM = editor.getElementByKey(currentStartNodeKey);
            const currentEndNodeDOM = editor.getElementByKey(currentEndNodeKey);
            const differentStartDOM = previousAnchorNode === null || currentStartNodeDOM !== previousAnchorNodeDOM || currentStartOffset !== previousAnchorOffset || currentStartNodeKey !== previousAnchorNode.getKey();
            const differentEndDOM = previousFocusNode === null || currentEndNodeDOM !== previousFocusNodeDOM || currentEndOffset !== previousFocusOffset || currentEndNodeKey !== previousFocusNode.getKey();
            if ((differentStartDOM || differentEndDOM) && currentStartNodeDOM !== null && currentEndNodeDOM !== null) {
                const range = rangeFromPoints(editor, start, currentStartNode, currentStartNodeDOM, end, currentEndNode, currentEndNodeDOM);
                removeRangeListener();
                removeRangeListener = mlcPositionNodeOnRange(editor, range, (domNodes)=>{
                    if (onReposition === undefined) {
                        for (const domNode of domNodes){
                            const domNodeStyle = domNode.style;
                            if (domNodeStyle.background !== 'Highlight') {
                                domNodeStyle.background = 'Highlight';
                            }
                            if (domNodeStyle.color !== 'HighlightText') {
                                domNodeStyle.color = 'HighlightText';
                            }
                            if (domNodeStyle.marginTop !== px(-1.5)) {
                                domNodeStyle.marginTop = px(-1.5);
                            }
                            if (domNodeStyle.paddingTop !== px(4)) {
                                domNodeStyle.paddingTop = px(4);
                            }
                            if (domNodeStyle.paddingBottom !== px(0)) {
                                domNodeStyle.paddingBottom = px(0);
                            }
                        }
                    } else {
                        onReposition(domNodes);
                    }
                });
            }
            previousAnchorNode = currentStartNode;
            previousAnchorNodeDOM = currentStartNodeDOM;
            previousAnchorOffset = currentStartOffset;
            previousFocusNode = currentEndNode;
            previousFocusNodeDOM = currentEndNodeDOM;
            previousFocusOffset = currentEndOffset;
        });
    }
    compute(editor.getEditorState());
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeRegister"])(editor.registerUpdateListener(({ editorState })=>compute(editorState)), ()=>{
        removeRangeListener();
    });
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ function selectionAlwaysOnDisplay(editor, onReposition) {
    let removeSelectionMark = null;
    const onSelectionChange = ()=>{
        const domSelection = getSelection();
        const domAnchorNode = domSelection && domSelection.anchorNode;
        const editorRootElement = editor.getRootElement();
        const isSelectionInsideEditor = domAnchorNode !== null && editorRootElement !== null && editorRootElement.contains(domAnchorNode);
        if (isSelectionInsideEditor) {
            if (removeSelectionMark !== null) {
                removeSelectionMark();
                removeSelectionMark = null;
            }
        } else {
            if (removeSelectionMark === null) {
                removeSelectionMark = markSelection(editor, onReposition);
            }
        }
    };
    document.addEventListener('selectionchange', onSelectionChange);
    return ()=>{
        if (removeSelectionMark !== null) {
            removeSelectionMark();
        }
        document.removeEventListener('selectionchange', onSelectionChange);
    };
}
// Hotfix to export these with inlined types #5918
const CAN_USE_BEFORE_INPUT = CAN_USE_BEFORE_INPUT$1;
const CAN_USE_DOM = CAN_USE_DOM$1;
const IS_ANDROID = IS_ANDROID$1;
const IS_ANDROID_CHROME = IS_ANDROID_CHROME$1;
const IS_APPLE = IS_APPLE$1;
const IS_APPLE_WEBKIT = IS_APPLE_WEBKIT$1;
const IS_CHROME = IS_CHROME$1;
const IS_FIREFOX = IS_FIREFOX$1;
const IS_IOS = IS_IOS$1;
const IS_SAFARI = IS_SAFARI$1;
/**
 * Returns true if the file type matches the types passed within the acceptableMimeTypes array, false otherwise.
 * The types passed must be strings and are CASE-SENSITIVE.
 * eg. if file is of type 'text' and acceptableMimeTypes = ['TEXT', 'IMAGE'] the function will return false.
 * @param file - The file you want to type check.
 * @param acceptableMimeTypes - An array of strings of types which the file is checked against.
 * @returns true if the file is an acceptable mime type, false otherwise.
 */ function isMimeType(file, acceptableMimeTypes) {
    for (const acceptableType of acceptableMimeTypes){
        if (file.type.startsWith(acceptableType)) {
            return true;
        }
    }
    return false;
}
/**
 * Lexical File Reader with:
 *  1. MIME type support
 *  2. batched results (HistoryPlugin compatibility)
 *  3. Order aware (respects the order when multiple Files are passed)
 *
 * const filesResult = await mediaFileReader(files, ['image/']);
 * filesResult.forEach(file => editor.dispatchCommand('INSERT_IMAGE', \\{
 *   src: file.result,
 * \\}));
 */ function mediaFileReader(files, acceptableMimeTypes) {
    const filesIterator = files[Symbol.iterator]();
    return new Promise((resolve, reject)=>{
        const processed = [];
        const handleNextFile = ()=>{
            const { done, value: file } = filesIterator.next();
            if (done) {
                return resolve(processed);
            }
            const fileReader = new FileReader();
            fileReader.addEventListener('error', reject);
            fileReader.addEventListener('load', ()=>{
                const result = fileReader.result;
                if (typeof result === 'string') {
                    processed.push({
                        file,
                        result
                    });
                }
                handleNextFile();
            });
            if (isMimeType(file, acceptableMimeTypes)) {
                fileReader.readAsDataURL(file);
            } else {
                handleNextFile();
            }
        };
        handleNextFile();
    });
}
/**
 * "Depth-First Search" starts at the root/top node of a tree and goes as far as it can down a branch end
 * before backtracking and finding a new path. Consider solving a maze by hugging either wall, moving down a
 * branch until you hit a dead-end (leaf) and backtracking to find the nearest branching path and repeat.
 * It will then return all the nodes found in the search in an array of objects.
 * Preorder traversal is used, meaning that nodes are listed in the order of when they are FIRST encountered.
 * @param startNode - The node to start the search (inclusive), if omitted, it will start at the root node.
 * @param endNode - The node to end the search (inclusive), if omitted, it will find all descendants of the startingNode. If endNode
 * is an ElementNode, it will stop before visiting any of its children.
 * @returns An array of objects of all the nodes found by the search, including their depth into the tree.
 * \\{depth: number, node: LexicalNode\\} It will always return at least 1 node (the start node).
 */ function $dfs(startNode, endNode) {
    return Array.from($dfsIterator(startNode, endNode));
}
/**
 * Get the adjacent caret in the same direction
 *
 * @param caret A caret or null
 * @returns `caret.getAdjacentCaret()` or `null`
 */ function $getAdjacentCaret(caret) {
    return caret ? caret.getAdjacentCaret() : null;
}
/**
 * $dfs iterator (right to left). Tree traversal is done on the fly as new values are requested with O(1) memory.
 * @param startNode - The node to start the search, if omitted, it will start at the root node.
 * @param endNode - The node to end the search, if omitted, it will find all descendants of the startingNode.
 * @returns An iterator, each yielded value is a DFSNode. It will always return at least 1 node (the start node).
 */ function $reverseDfs(startNode, endNode) {
    return Array.from($reverseDfsIterator(startNode, endNode));
}
/**
 * $dfs iterator (left to right). Tree traversal is done on the fly as new values are requested with O(1) memory.
 * Preorder traversal is used, meaning that nodes are iterated over in the order of when they are FIRST encountered.
 * @param startNode - The node to start the search (inclusive), if omitted, it will start at the root node.
 * @param endNode - The node to end the search (inclusive), if omitted, it will find all descendants of the startingNode.
 * If endNode is an ElementNode, the iterator will end as soon as it reaches the endNode (no children will be visited).
 * @returns An iterator, each yielded value is a DFSNode. It will always return at least 1 node (the start node).
 */ function $dfsIterator(startNode, endNode) {
    return $dfsCaretIterator('next', startNode, endNode);
}
function $getEndCaret(startNode, direction) {
    const rval = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getAdjacentSiblingOrParentSiblingCaret"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSiblingCaret"])(startNode, direction));
    return rval && rval[0];
}
function $dfsCaretIterator(direction, startNode, endNode) {
    const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getRoot"])();
    const start = startNode || root;
    const startCaret = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isElementNode"])(start) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getChildCaret"])(start, direction) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSiblingCaret"])(start, direction);
    const startDepth = $getDepth(start);
    const endCaret = endNode ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getAdjacentChildCaret"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getChildCaretOrSelf"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSiblingCaret"])(endNode, direction))) || $getEndCaret(endNode, direction) : $getEndCaret(start, direction);
    let depth = startDepth;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeStepwiseIterator"])({
        hasNext: (state)=>state !== null,
        initial: startCaret,
        map: (state)=>({
                depth,
                node: state.origin
            }),
        step: (state)=>{
            if (state.isSameNodeCaret(endCaret)) {
                return null;
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isChildCaret"])(state)) {
                depth++;
            }
            const rval = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getAdjacentSiblingOrParentSiblingCaret"])(state);
            if (!rval || rval[0].isSameNodeCaret(endCaret)) {
                return null;
            }
            depth += rval[1];
            return rval[0];
        }
    });
}
/**
 * Returns the Node sibling when this exists, otherwise the closest parent sibling. For example
 * R -> P -> T1, T2
 *   -> P2
 * returns T2 for node T1, P2 for node T2, and null for node P2.
 * @param node LexicalNode.
 * @returns An array (tuple) containing the found Lexical node and the depth difference, or null, if this node doesn't exist.
 */ function $getNextSiblingOrParentSibling(node) {
    const rval = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getAdjacentSiblingOrParentSiblingCaret"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSiblingCaret"])(node, 'next'));
    return rval && [
        rval[0].origin,
        rval[1]
    ];
}
function $getDepth(node) {
    let depth = -1;
    for(let innerNode = node; innerNode !== null; innerNode = innerNode.getParent()){
        depth++;
    }
    return depth;
}
/**
 * Performs a right-to-left preorder tree traversal.
 * From the starting node it goes to the rightmost child, than backtracks to parent and finds new rightmost path.
 * It will return the next node in traversal sequence after the startingNode.
 * The traversal is similar to $dfs functions above, but the nodes are visited right-to-left, not left-to-right.
 * @param startingNode - The node to start the search.
 * @returns The next node in pre-order right to left traversal sequence or `null`, if the node does not exist
 */ function $getNextRightPreorderNode(startingNode) {
    const startCaret = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getChildCaretOrSelf"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSiblingCaret"])(startingNode, 'previous'));
    const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getAdjacentSiblingOrParentSiblingCaret"])(startCaret, 'root');
    return next && next[0].origin;
}
/**
 * $dfs iterator (right to left). Tree traversal is done on the fly as new values are requested with O(1) memory.
 * @param startNode - The node to start the search, if omitted, it will start at the root node.
 * @param endNode - The node to end the search, if omitted, it will find all descendants of the startingNode.
 * @returns An iterator, each yielded value is a DFSNode. It will always return at least 1 node (the start node).
 */ function $reverseDfsIterator(startNode, endNode) {
    return $dfsCaretIterator('previous', startNode, endNode);
}
/**
 * Takes a node and traverses up its ancestors (toward the root node)
 * in order to find a specific type of node.
 * @param node - the node to begin searching.
 * @param klass - an instance of the type of node to look for.
 * @returns the node of type klass that was passed, or null if none exist.
 */ function $getNearestNodeOfType(node, klass) {
    let parent = node;
    while(parent != null){
        if (parent instanceof klass) {
            return parent;
        }
        parent = parent.getParent();
    }
    return null;
}
/**
 * Returns the element node of the nearest ancestor, otherwise throws an error.
 * @param startNode - The starting node of the search
 * @returns The ancestor node found
 */ function $getNearestBlockElementAncestorOrThrow(startNode) {
    const blockNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$findMatchingParent"])(startNode, (node)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isElementNode"])(node) && !node.isInline());
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isElementNode"])(blockNode)) {
        {
            formatDevErrorMessage(`Expected node ${startNode.__key} to have closest block element node.`);
        }
    }
    return blockNode;
}
/**
 * Attempts to resolve nested element nodes of the same type into a single node of that type.
 * It is generally used for marks/commenting
 * @param editor - The lexical editor
 * @param targetNode - The target for the nested element to be extracted from.
 * @param cloneNode - See {@link $createMarkNode}
 * @param handleOverlap - Handles any overlap between the node to extract and the targetNode
 * @returns The lexical editor
 */ function registerNestedElementResolver(editor, targetNode, cloneNode, handleOverlap) {
    const $isTargetNode = (node)=>{
        return node instanceof targetNode;
    };
    const $findMatch = (node)=>{
        // First validate we don't have any children that are of the target,
        // as we need to handle them first.
        const children = node.getChildren();
        for(let i = 0; i < children.length; i++){
            const child = children[i];
            if ($isTargetNode(child)) {
                return null;
            }
        }
        let parentNode = node;
        let childNode = node;
        while(parentNode !== null){
            childNode = parentNode;
            parentNode = parentNode.getParent();
            if ($isTargetNode(parentNode)) {
                return {
                    child: childNode,
                    parent: parentNode
                };
            }
        }
        return null;
    };
    const $elementNodeTransform = (node)=>{
        const match = $findMatch(node);
        if (match !== null) {
            const { child, parent } = match;
            // Simple path, we can move child out and siblings into a new parent.
            if (child.is(node)) {
                handleOverlap(parent, node);
                const nextSiblings = child.getNextSiblings();
                const nextSiblingsLength = nextSiblings.length;
                parent.insertAfter(child);
                if (nextSiblingsLength !== 0) {
                    const newParent = cloneNode(parent);
                    child.insertAfter(newParent);
                    for(let i = 0; i < nextSiblingsLength; i++){
                        newParent.append(nextSiblings[i]);
                    }
                }
                if (!parent.canBeEmpty() && parent.getChildrenSize() === 0) {
                    parent.remove();
                }
            }
        }
    };
    return editor.registerNodeTransform(targetNode, $elementNodeTransform);
}
/**
 * Clones the editor and marks it as dirty to be reconciled. If there was a selection,
 * it would be set back to its previous state, or null otherwise.
 * @param editor - The lexical editor
 * @param editorState - The editor's state
 */ function $restoreEditorState(editor, editorState) {
    const FULL_RECONCILE = 2;
    const nodeMap = new Map();
    const activeEditorState = editor._pendingEditorState;
    for (const [key, node] of editorState._nodeMap){
        nodeMap.set(key, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$cloneWithProperties"])(node));
    }
    if (activeEditorState) {
        activeEditorState._nodeMap = nodeMap;
    }
    editor._dirtyType = FULL_RECONCILE;
    const selection = editorState._selection;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$setSelection"])(selection === null ? null : selection.clone());
}
/**
 * If the selected insertion area is the root/shadow root node (see {@link lexical!$isRootOrShadowRoot}),
 * the node will be appended there, otherwise, it will be inserted before the insertion area.
 * If there is no selection where the node is to be inserted, it will be appended after any current nodes
 * within the tree, as a child of the root node. A paragraph will then be added after the inserted node and selected.
 * @param node - The node to be inserted
 * @returns The node after its insertion
 */ function $insertNodeToNearestRoot(node) {
    const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSelection"])() || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getPreviousSelection"])();
    let initialCaret;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection)) {
        initialCaret = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$caretFromPoint"])(selection.focus, 'next');
    } else {
        if (selection != null) {
            const nodes = selection.getNodes();
            const lastNode = nodes[nodes.length - 1];
            if (lastNode) {
                initialCaret = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSiblingCaret"])(lastNode, 'next');
            }
        }
        initialCaret = initialCaret || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getChildCaret"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getRoot"])(), 'previous').getFlipped().insert((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$createParagraphNode"])());
    }
    const insertCaret = $insertNodeToNearestRootAtCaret(node, initialCaret);
    const adjacent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getAdjacentChildCaret"])(insertCaret);
    const selectionCaret = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isChildCaret"])(adjacent) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$normalizeCaret"])(adjacent) : insertCaret;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$setSelectionFromCaretRange"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getCollapsedCaretRange"])(selectionCaret));
    return node.getLatest();
}
/**
 * If the insertion caret is the root/shadow root node (see {@link lexical!$isRootOrShadowRoot}),
 * the node will be inserted there, otherwise the parent nodes will be split according to the
 * given options.
 * @param node - The node to be inserted
 * @param caret - The location to insert or split from
 * @returns The node after its insertion
 */ function $insertNodeToNearestRootAtCaret(node, caret, options) {
    let insertCaret = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getCaretInDirection"])(caret, 'next');
    for(let nextCaret = insertCaret; nextCaret; nextCaret = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$splitAtPointCaretNext"])(nextCaret, options)){
        insertCaret = nextCaret;
    }
    if (!!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isTextPointCaret"])(insertCaret)) {
        formatDevErrorMessage(`$insertNodeToNearestRootAtCaret: An unattached TextNode can not be split`);
    }
    insertCaret.insert(node.isInline() ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$createParagraphNode"])().append(node) : node);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getCaretInDirection"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSiblingCaret"])(node.getLatest(), 'next'), caret.direction);
}
/**
 * Wraps the node into another node created from a createElementNode function, eg. $createParagraphNode
 * @param node - Node to be wrapped.
 * @param createElementNode - Creates a new lexical element to wrap the to-be-wrapped node and returns it.
 * @returns A new lexical element with the previous node appended within (as a child, including its children).
 */ function $wrapNodeInElement(node, createElementNode) {
    const elementNode = createElementNode();
    node.replace(elementNode);
    elementNode.append(node);
    return elementNode;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
/**
 * @param object = The instance of the type
 * @param objectClass = The class of the type
 * @returns Whether the object is has the same Klass of the objectClass, ignoring the difference across window (e.g. different iframes)
 */ function objectKlassEquals(object, objectClass) {
    return object !== null ? Object.getPrototypeOf(object).constructor.name === objectClass.name : false;
}
/**
 * @deprecated Use Array filter or flatMap
 *
 * Filter the nodes
 * @param nodes Array of nodes that needs to be filtered
 * @param filterFn A filter function that returns node if the current node satisfies the condition otherwise null
 * @returns Array of filtered nodes
 */ function $filter(nodes, filterFn) {
    const result = [];
    for(let i = 0; i < nodes.length; i++){
        const node = filterFn(nodes[i]);
        if (node !== null) {
            result.push(node);
        }
    }
    return result;
}
/**
 * Appends the node before the first child of the parent node
 * @param parent A parent node
 * @param node Node that needs to be appended
 */ function $insertFirst(parent, node) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getChildCaret"])(parent, 'next').insert(node);
}
let NEEDS_MANUAL_ZOOM = IS_FIREFOX || !CAN_USE_DOM ? false : undefined;
function needsManualZoom() {
    if (NEEDS_MANUAL_ZOOM === undefined) {
        // If the browser implements standardized CSS zoom, then the client rect
        // will be wider after zoom is applied
        // https://chromestatus.com/feature/5198254868529152
        // https://github.com/facebook/lexical/issues/6863
        const div = document.createElement('div');
        div.style.cssText = 'position: absolute; opacity: 0; width: 100px; left: -1000px;';
        document.body.appendChild(div);
        const noZoom = div.getBoundingClientRect();
        div.style.setProperty('zoom', '2');
        NEEDS_MANUAL_ZOOM = div.getBoundingClientRect().width === noZoom.width;
        document.body.removeChild(div);
    }
    return NEEDS_MANUAL_ZOOM;
}
/**
 * Calculates the zoom level of an element as a result of using
 * css zoom property. For browsers that implement standardized CSS
 * zoom (Firefox, Chrome >= 128), this will always return 1.
 * @param element
 * @param useManualZoom - If true, always use zoom level will be calculated manually, otherwise it will be calculated on as needed basis.
 */ function calculateZoomLevel(element, useManualZoom = false) {
    let zoom = 1;
    if (needsManualZoom() || useManualZoom) {
        while(element){
            zoom *= Number(window.getComputedStyle(element).getPropertyValue('zoom'));
            element = element.parentElement;
        }
    }
    return zoom;
}
/**
 * Checks if the editor is a nested editor created by LexicalNestedComposer
 */ function $isEditorIsNestedEditor(editor) {
    return editor._parentEditor !== null;
}
/**
 * A depth first last-to-first traversal of root that stops at each node that matches
 * $predicate and ensures that its parent is root. This is typically used to discard
 * invalid or unsupported wrapping nodes. For example, a TableNode must only have
 * TableRowNode as children, but an importer might add invalid nodes based on
 * caption, tbody, thead, etc. and this will unwrap and discard those.
 *
 * @param root The root to start the traversal
 * @param $predicate Should return true for nodes that are permitted to be children of root
 * @returns true if this unwrapped or removed any nodes
 */ function $unwrapAndFilterDescendants(root, $predicate) {
    return $unwrapAndFilterDescendantsImpl(root, $predicate, null);
}
function $unwrapAndFilterDescendantsImpl(root, $predicate, $onSuccess) {
    let didMutate = false;
    for (const node of $lastToFirstIterator(root)){
        if ($predicate(node)) {
            if ($onSuccess !== null) {
                $onSuccess(node);
            }
            continue;
        }
        didMutate = true;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isElementNode"])(node)) {
            $unwrapAndFilterDescendantsImpl(node, $predicate, $onSuccess || ((child)=>node.insertAfter(child)));
        }
        node.remove();
    }
    return didMutate;
}
/**
 * A depth first traversal of the children array that stops at and collects
 * each node that `$predicate` matches. This is typically used to discard
 * invalid or unsupported wrapping nodes on a children array in the `after`
 * of an {@link lexical!DOMConversionOutput}. For example, a TableNode must only have
 * TableRowNode as children, but an importer might add invalid nodes based on
 * caption, tbody, thead, etc. and this will unwrap and discard those.
 *
 * This function is read-only and performs no mutation operations, which makes
 * it suitable for import and export purposes but likely not for any in-place
 * mutation. You should use {@link $unwrapAndFilterDescendants} for in-place
 * mutations such as node transforms.
 *
 * @param children The children to traverse
 * @param $predicate Should return true for nodes that are permitted to be children of root
 * @returns The children or their descendants that match $predicate
 */ function $descendantsMatching(children, $predicate) {
    const result = [];
    const stack = Array.from(children).reverse();
    for(let child = stack.pop(); child !== undefined; child = stack.pop()){
        if ($predicate(child)) {
            result.push(child);
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isElementNode"])(child)) {
            for (const grandchild of $lastToFirstIterator(child)){
                stack.push(grandchild);
            }
        }
    }
    return result;
}
/**
 * Return an iterator that yields each child of node from first to last, taking
 * care to preserve the next sibling before yielding the value in case the caller
 * removes the yielded node.
 *
 * @param node The node whose children to iterate
 * @returns An iterator of the node's children
 */ function $firstToLastIterator(node) {
    return $childIterator((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getChildCaret"])(node, 'next'));
}
/**
 * Return an iterator that yields each child of node from last to first, taking
 * care to preserve the previous sibling before yielding the value in case the caller
 * removes the yielded node.
 *
 * @param node The node whose children to iterate
 * @returns An iterator of the node's children
 */ function $lastToFirstIterator(node) {
    return $childIterator((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getChildCaret"])(node, 'previous'));
}
function $childIterator(startCaret) {
    const seen = new Set();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeStepwiseIterator"])({
        hasNext: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isSiblingCaret"],
        initial: startCaret.getAdjacentCaret(),
        map: (caret)=>{
            const origin = caret.origin.getLatest();
            if (seen !== null) {
                const key = origin.getKey();
                if (!!seen.has(key)) {
                    formatDevErrorMessage(`$childIterator: Cycle detected, node with key ${String(key)} has already been traversed`);
                }
                seen.add(key);
            }
            return origin;
        },
        step: (caret)=>caret.getAdjacentCaret()
    });
}
/**
 * Replace this node with its children
 *
 * @param node The ElementNode to unwrap and remove
 */ function $unwrapNode(node) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$rewindSiblingCaret"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSiblingCaret"])(node, 'next')).splice(1, node.getChildren());
}
/**
 * A wrapper that creates bound functions and methods for the
 * StateConfig to save some boilerplate when defining methods
 * or exporting only the accessors from your modules rather
 * than exposing the StateConfig directly.
 */ /**
 * EXPERIMENTAL
 *
 * A convenience interface for working with {@link $getState} and
 * {@link $setState}.
 *
 * @param stateConfig The stateConfig to wrap with convenience functionality
 * @returns a StateWrapper
 */ function makeStateWrapper(stateConfig) {
    const $get = (node)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getState"])(node, stateConfig);
    const $set = (node, valueOrUpdater)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$setState"])(node, stateConfig, valueOrUpdater);
    return {
        $get,
        $set,
        accessors: [
            $get,
            $set
        ],
        makeGetterMethod: ()=>function $getter() {
                return $get(this);
            },
        makeSetterMethod: ()=>function $setter(valueOrUpdater) {
                return $set(this, valueOrUpdater);
            },
        stateConfig
    };
}
;
}),
"[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/@lexical/extension/LexicalExtension.dev.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "$createHorizontalRuleNode",
    ()=>$createHorizontalRuleNode,
    "$isHorizontalRuleNode",
    ()=>$isHorizontalRuleNode,
    "AutoFocusExtension",
    ()=>AutoFocusExtension,
    "ClearEditorExtension",
    ()=>ClearEditorExtension,
    "EditorStateExtension",
    ()=>EditorStateExtension,
    "HorizontalRuleExtension",
    ()=>HorizontalRuleExtension,
    "HorizontalRuleNode",
    ()=>HorizontalRuleNode,
    "INSERT_HORIZONTAL_RULE_COMMAND",
    ()=>INSERT_HORIZONTAL_RULE_COMMAND,
    "InitialStateExtension",
    ()=>InitialStateExtension,
    "LexicalBuilder",
    ()=>LexicalBuilder,
    "NodeSelectionExtension",
    ()=>NodeSelectionExtension,
    "TabIndentationExtension",
    ()=>TabIndentationExtension,
    "batch",
    ()=>o,
    "buildEditorFromExtensions",
    ()=>buildEditorFromExtensions,
    "computed",
    ()=>w,
    "effect",
    ()=>E,
    "getExtensionDependencyFromEditor",
    ()=>getExtensionDependencyFromEditor,
    "getKnownTypesAndNodes",
    ()=>getKnownTypesAndNodes,
    "getPeerDependencyFromEditor",
    ()=>getPeerDependencyFromEditor,
    "getPeerDependencyFromEditorOrThrow",
    ()=>getPeerDependencyFromEditorOrThrow,
    "namedSignals",
    ()=>namedSignals,
    "registerClearEditor",
    ()=>registerClearEditor,
    "registerTabIndentation",
    ()=>registerTabIndentation,
    "signal",
    ()=>d,
    "untracked",
    ()=>h,
    "watchedSignal",
    ()=>watchedSignal
]);
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/lexical/Lexical.dev.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$utils$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/@lexical/utils/LexicalUtils.dev.mjs [app-client] (ecmascript) <locals>");
;
;
;
const i = Symbol.for("preact-signals");
function t() {
    if (r > 1) {
        r--;
        return;
    }
    let i, t = false;
    while(void 0 !== s){
        let o = s;
        s = void 0;
        f++;
        while(void 0 !== o){
            const n = o.o;
            o.o = void 0;
            o.f &= -3;
            if (!(8 & o.f) && v(o)) try {
                o.c();
            } catch (o) {
                if (!t) {
                    i = o;
                    t = true;
                }
            }
            o = n;
        }
    }
    f = 0;
    r--;
    if (t) throw i;
}
function o(i) {
    if (r > 0) return i();
    r++;
    try {
        return i();
    } finally{
        t();
    }
}
let n, s;
function h(i) {
    const t = n;
    n = void 0;
    try {
        return i();
    } finally{
        n = t;
    }
}
let r = 0, f = 0, e = 0;
function u(i) {
    if (void 0 === n) return;
    let t = i.n;
    if (void 0 === t || t.t !== n) {
        t = {
            i: 0,
            S: i,
            p: n.s,
            n: void 0,
            t: n,
            e: void 0,
            x: void 0,
            r: t
        };
        if (void 0 !== n.s) n.s.n = t;
        n.s = t;
        i.n = t;
        if (32 & n.f) i.S(t);
        return t;
    } else if (-1 === t.i) {
        t.i = 0;
        if (void 0 !== t.n) {
            t.n.p = t.p;
            if (void 0 !== t.p) t.p.n = t.n;
            t.p = n.s;
            t.n = void 0;
            n.s.n = t;
            n.s = t;
        }
        return t;
    }
}
function c(i, t) {
    this.v = i;
    this.i = 0;
    this.n = void 0;
    this.t = void 0;
    this.W = null == t ? void 0 : t.watched;
    this.Z = null == t ? void 0 : t.unwatched;
    this.name = null == t ? void 0 : t.name;
}
c.prototype.brand = i;
c.prototype.h = function() {
    return true;
};
c.prototype.S = function(i) {
    const t = this.t;
    if (t !== i && void 0 === i.e) {
        i.x = t;
        this.t = i;
        if (void 0 !== t) t.e = i;
        else h(()=>{
            var i;
            null == (i = this.W) || i.call(this);
        });
    }
};
c.prototype.U = function(i) {
    if (void 0 !== this.t) {
        const t = i.e, o = i.x;
        if (void 0 !== t) {
            t.x = o;
            i.e = void 0;
        }
        if (void 0 !== o) {
            o.e = t;
            i.x = void 0;
        }
        if (i === this.t) {
            this.t = o;
            if (void 0 === o) h(()=>{
                var i;
                null == (i = this.Z) || i.call(this);
            });
        }
    }
};
c.prototype.subscribe = function(i) {
    return E(()=>{
        const t = this.value, o = n;
        n = void 0;
        try {
            i(t);
        } finally{
            n = o;
        }
    }, {
        name: "sub"
    });
};
c.prototype.valueOf = function() {
    return this.value;
};
c.prototype.toString = function() {
    return this.value + "";
};
c.prototype.toJSON = function() {
    return this.value;
};
c.prototype.peek = function() {
    const i = n;
    n = void 0;
    try {
        return this.value;
    } finally{
        n = i;
    }
};
Object.defineProperty(c.prototype, "value", {
    get () {
        const i = u(this);
        if (void 0 !== i) i.i = this.i;
        return this.v;
    },
    set (i) {
        if (i !== this.v) {
            if (f > 100) throw new Error("Cycle detected");
            this.v = i;
            this.i++;
            e++;
            r++;
            try {
                for(let i = this.t; void 0 !== i; i = i.x)i.t.N();
            } finally{
                t();
            }
        }
    }
});
function d(i, t) {
    return new c(i, t);
}
function v(i) {
    for(let t = i.s; void 0 !== t; t = t.n)if (t.S.i !== t.i || !t.S.h() || t.S.i !== t.i) return true;
    return false;
}
function l(i) {
    for(let t = i.s; void 0 !== t; t = t.n){
        const o = t.S.n;
        if (void 0 !== o) t.r = o;
        t.S.n = t;
        t.i = -1;
        if (void 0 === t.n) {
            i.s = t;
            break;
        }
    }
}
function y(i) {
    let t, o = i.s;
    while(void 0 !== o){
        const i = o.p;
        if (-1 === o.i) {
            o.S.U(o);
            if (void 0 !== i) i.n = o.n;
            if (void 0 !== o.n) o.n.p = i;
        } else t = o;
        o.S.n = o.r;
        if (void 0 !== o.r) o.r = void 0;
        o = i;
    }
    i.s = t;
}
function a(i, t) {
    c.call(this, void 0);
    this.x = i;
    this.s = void 0;
    this.g = e - 1;
    this.f = 4;
    this.W = null == t ? void 0 : t.watched;
    this.Z = null == t ? void 0 : t.unwatched;
    this.name = null == t ? void 0 : t.name;
}
a.prototype = new c;
a.prototype.h = function() {
    this.f &= -3;
    if (1 & this.f) return false;
    if (32 == (36 & this.f)) return true;
    this.f &= -5;
    if (this.g === e) return true;
    this.g = e;
    this.f |= 1;
    if (this.i > 0 && !v(this)) {
        this.f &= -2;
        return true;
    }
    const i = n;
    try {
        l(this);
        n = this;
        const i = this.x();
        if (16 & this.f || this.v !== i || 0 === this.i) {
            this.v = i;
            this.f &= -17;
            this.i++;
        }
    } catch (i) {
        this.v = i;
        this.f |= 16;
        this.i++;
    }
    n = i;
    y(this);
    this.f &= -2;
    return true;
};
a.prototype.S = function(i) {
    if (void 0 === this.t) {
        this.f |= 36;
        for(let i = this.s; void 0 !== i; i = i.n)i.S.S(i);
    }
    c.prototype.S.call(this, i);
};
a.prototype.U = function(i) {
    if (void 0 !== this.t) {
        c.prototype.U.call(this, i);
        if (void 0 === this.t) {
            this.f &= -33;
            for(let i = this.s; void 0 !== i; i = i.n)i.S.U(i);
        }
    }
};
a.prototype.N = function() {
    if (!(2 & this.f)) {
        this.f |= 6;
        for(let i = this.t; void 0 !== i; i = i.x)i.t.N();
    }
};
Object.defineProperty(a.prototype, "value", {
    get () {
        if (1 & this.f) throw new Error("Cycle detected");
        const i = u(this);
        this.h();
        if (void 0 !== i) i.i = this.i;
        if (16 & this.f) throw this.v;
        return this.v;
    }
});
function w(i, t) {
    return new a(i, t);
}
function _(i) {
    const o = i.u;
    i.u = void 0;
    if ("function" == typeof o) {
        r++;
        const s = n;
        n = void 0;
        try {
            o();
        } catch (t) {
            i.f &= -2;
            i.f |= 8;
            b(i);
            throw t;
        } finally{
            n = s;
            t();
        }
    }
}
function b(i) {
    for(let t = i.s; void 0 !== t; t = t.n)t.S.U(t);
    i.x = void 0;
    i.s = void 0;
    _(i);
}
function g(i) {
    if (n !== this) throw new Error("Out-of-order effect");
    y(this);
    n = i;
    this.f &= -2;
    if (8 & this.f) b(this);
    t();
}
function p(i, t) {
    this.x = i;
    this.u = void 0;
    this.s = void 0;
    this.o = void 0;
    this.f = 32;
    this.name = null == t ? void 0 : t.name;
}
p.prototype.c = function() {
    const i = this.S();
    try {
        if (8 & this.f) return;
        if (void 0 === this.x) return;
        const t = this.x();
        if ("function" == typeof t) this.u = t;
    } finally{
        i();
    }
};
p.prototype.S = function() {
    if (1 & this.f) throw new Error("Cycle detected");
    this.f |= 1;
    this.f &= -9;
    _(this);
    l(this);
    r++;
    const i = n;
    n = this;
    return g.bind(this, i);
};
p.prototype.N = function() {
    if (!(2 & this.f)) {
        this.f |= 2;
        this.o = s;
        s = this;
    }
};
p.prototype.d = function() {
    this.f |= 8;
    if (!(1 & this.f)) b(this);
};
p.prototype.dispose = function() {
    this.d();
};
function E(i, t) {
    const o = new p(i, t);
    try {
        o.c();
    } catch (i) {
        o.d();
        throw i;
    }
    const n = o.d.bind(o);
    n[Symbol.dispose] = n;
    return n;
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ /**
 * @experimental
 * Return an object with the same shape as `defaults` with a {@link Signal}
 * for each value. If specified, the second `opts` argument is a partial
 * of overrides to the defaults and will be used as the initial value.
 *
 * Typically used to make a reactive version of some subset of the
 * configuration of an extension, so it can be reconfigured at runtime.
 *
 * @param defaults The object with default values
 * @param opts Overrides to those default values
 * @returns An object with signals initialized with the default values
 */ function namedSignals(defaults, opts = {}) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const initial = {};
    for(const k in defaults){
        const v = opts[k];
        const store = d(v === undefined ? defaults[k] : v);
        initial[k] = store;
    }
    return initial;
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ /**
 * An Extension to focus the LexicalEditor when the root element is set
 * (typically only when the editor is first created).
 */ const AutoFocusExtension = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineExtension"])({
    build: (editor, config, state)=>{
        return namedSignals(config);
    },
    config: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeCast"])({
        defaultSelection: 'rootEnd',
        disabled: false
    }),
    name: '@lexical/extension/AutoFocus',
    register (editor, config, state) {
        const stores = state.getOutput();
        return E(()=>stores.disabled.value ? undefined : editor.registerRootListener((rootElement)=>{
                editor.focus(()=>{
                    // If we try and move selection to the same point with setBaseAndExtent, it won't
                    // trigger a re-focus on the element. So in the case this occurs, we'll need to correct it.
                    // Normally this is fine, Selection API !== Focus API, but fore the intents of the naming
                    // of this plugin, which should preserve focus too.
                    const activeElement = document.activeElement;
                    if (rootElement !== null && (activeElement === null || !rootElement.contains(activeElement))) {
                        // Note: preventScroll won't work in Webkit.
                        rootElement.focus({
                            preventScroll: true
                        });
                    }
                }, {
                    defaultSelection: stores.defaultSelection.peek()
                });
            }));
    }
});
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ function $defaultOnClear() {
    const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getRoot"])();
    const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSelection"])();
    const paragraph = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$createParagraphNode"])();
    root.clear();
    root.append(paragraph);
    if (selection !== null) {
        paragraph.select();
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection)) {
        selection.format = 0;
    }
}
function registerClearEditor(editor, $onClear = $defaultOnClear) {
    return editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CLEAR_EDITOR_COMMAND"], (payload)=>{
        editor.update($onClear);
        return true;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]);
}
/**
 * An extension to provide an implementation of {@link CLEAR_EDITOR_COMMAND}
 */ const ClearEditorExtension = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineExtension"])({
    build (editor, config, state) {
        return namedSignals(config);
    },
    config: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeCast"])({
        $onClear: $defaultOnClear
    }),
    name: '@lexical/extension/ClearEditor',
    register (editor, config, state) {
        const { $onClear } = state.getOutput();
        return E(()=>registerClearEditor(editor, $onClear.value));
    }
});
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ /**
 * @experimental
 * Get the sets of nodes and types registered in the
 * {@link InitialEditorConfig}. This is to be used when an extension
 * needs to register optional behavior if some node or type is present.
 *
 * @param config The InitialEditorConfig (accessible from an extension's init)
 * @returns The known types and nodes as Sets
 */ function getKnownTypesAndNodes(config) {
    const types = new Set();
    const nodes = new Set();
    for (const klassOrReplacement of getNodeConfig(config)){
        const klass = typeof klassOrReplacement === 'function' ? klassOrReplacement : klassOrReplacement.replace;
        types.add(klass.getType());
        nodes.add(klass);
    }
    return {
        nodes,
        types
    };
}
function getNodeConfig(config) {
    return (typeof config.nodes === 'function' ? config.nodes() : config.nodes) || [];
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ /**
 * @experimental
 * Create a Signal that will subscribe to a value from an external store when watched, similar to
 * React's [useSyncExternalStore](https://react.dev/reference/react/useSyncExternalStore).
 *
 * @param getSnapshot Used to get the initial value of the signal when created and when first watched.
 * @param register A callback that will subscribe to some external store and update the signal, must return a dispose function.
 * @returns The signal
 */ function watchedSignal(getSnapshot, register) {
    let dispose;
    return d(getSnapshot(), {
        unwatched () {
            if (dispose) {
                dispose();
                dispose = undefined;
            }
        },
        watched () {
            this.value = getSnapshot();
            dispose = register(this);
        }
    });
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ /**
 * An extension to provide the current EditorState as a signal
 */ const EditorStateExtension = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineExtension"])({
    build (editor) {
        return watchedSignal(()=>editor.getEditorState(), (editorStateSignal)=>editor.registerUpdateListener((payload)=>{
                editorStateSignal.value = payload.editorState;
            }));
    },
    name: '@lexical/extension/EditorState'
});
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ // Do not require this module directly! Use normal `invariant` calls.
function formatDevErrorMessage(message) {
    throw new Error(message);
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ /**
 * Recursively merge the given theme configuration in-place.
 *
 * @returns If `a` and `b` are both objects (and `b` is not an Array) then
 * all keys in `b` are merged into `a` then `a` is returned.
 * Otherwise `b` is returned.
 *
 * @example
 * ```ts
 * const a = { a: "a", nested: { a: 1 } };
 * const b = { b: "b", nested: { b: 2 } };
 * const rval = deepThemeMergeInPlace(a, b);
 * expect(a).toBe(rval);
 * expect(a).toEqual({ a: "a", b: "b", nested: { a: 1, b: 2 } });
 * ```
 */ function deepThemeMergeInPlace(a, b) {
    if (a && b && !Array.isArray(b) && typeof a === 'object' && typeof b === 'object') {
        const aObj = a;
        const bObj = b;
        for(const k in bObj){
            aObj[k] = deepThemeMergeInPlace(aObj[k], bObj[k]);
        }
        return a;
    }
    return b;
}
const ExtensionRepStateIds = {
    /* eslint-disable sort-keys-fix/sort-keys-fix */ unmarked: 0,
    temporary: 1,
    permanent: 2,
    configured: 3,
    initialized: 4,
    built: 5,
    registered: 6,
    afterRegistration: 7
};
function isExactlyUnmarkedExtensionRepState(state) {
    return state.id === ExtensionRepStateIds.unmarked;
}
function isExactlyTemporaryExtensionRepState(state) {
    return state.id === ExtensionRepStateIds.temporary;
}
function isExactlyPermanentExtensionRepState(state) {
    return state.id === ExtensionRepStateIds.permanent;
}
function isConfiguredExtensionRepState(state) {
    return state.id >= ExtensionRepStateIds.configured;
}
function isInitializedExtensionRepState(state) {
    return state.id >= ExtensionRepStateIds.initialized;
}
function isBuiltExtensionRepState(state) {
    return state.id >= ExtensionRepStateIds.built;
}
function isAfterRegistrationState(state) {
    return state.id >= ExtensionRepStateIds.afterRegistration;
}
function applyTemporaryMark(state) {
    if (!isExactlyUnmarkedExtensionRepState(state)) {
        formatDevErrorMessage(`LexicalBuilder: Can not apply a temporary mark from state id ${String(state.id)} (expected ${String(ExtensionRepStateIds.unmarked)} unmarked)`);
    }
    return Object.assign(state, {
        id: ExtensionRepStateIds.temporary
    });
}
function applyPermanentMark(state) {
    if (!isExactlyTemporaryExtensionRepState(state)) {
        formatDevErrorMessage(`LexicalBuilder: Can not apply a permanent mark from state id ${String(state.id)} (expected ${String(ExtensionRepStateIds.temporary)} temporary)`);
    }
    return Object.assign(state, {
        id: ExtensionRepStateIds.permanent
    });
}
function applyConfiguredState(state, config, registerState) {
    return Object.assign(state, {
        config,
        id: ExtensionRepStateIds.configured,
        registerState
    });
}
function applyInitializedState(state, initResult, registerState) {
    return Object.assign(state, {
        id: ExtensionRepStateIds.initialized,
        initResult,
        registerState
    });
}
function applyBuiltState(state, output, registerState) {
    return Object.assign(state, {
        id: ExtensionRepStateIds.built,
        output,
        registerState
    });
}
function applyRegisteredState(state) {
    return Object.assign(state, {
        id: ExtensionRepStateIds.registered
    });
}
function applyAfterRegistrationState(state) {
    return Object.assign(state, {
        id: ExtensionRepStateIds.afterRegistration
    });
}
function rollbackToBuiltState(state) {
    return Object.assign(state, {
        id: ExtensionRepStateIds.built
    });
}
const emptySet = new Set();
/**
 * @internal
 */ class ExtensionRep {
    builder;
    configs;
    _dependency;
    _peerNameSet;
    extension;
    state;
    _signal;
    constructor(builder, extension){
        this.builder = builder;
        this.extension = extension;
        this.configs = new Set();
        this.state = {
            id: ExtensionRepStateIds.unmarked
        };
    }
    mergeConfigs() {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- LexicalExtensionConfig<Extension> is any
        let config = this.extension.config || {};
        const mergeConfig = this.extension.mergeConfig ? this.extension.mergeConfig.bind(this.extension) : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallowMergeConfig"];
        for (const cfg of this.configs){
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- LexicalExtensionConfig<Extension> is any
            config = mergeConfig(config, cfg);
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return -- any
        return config;
    }
    init(editorConfig) {
        const initialState = this.state;
        if (!isExactlyPermanentExtensionRepState(initialState)) {
            formatDevErrorMessage(`ExtensionRep: Can not configure from state id ${String(initialState.id)}`);
        }
        const initState = {
            getDependency: this.getInitDependency.bind(this),
            getDirectDependentNames: this.getDirectDependentNames.bind(this),
            getPeer: this.getInitPeer.bind(this),
            getPeerNameSet: this.getPeerNameSet.bind(this)
        };
        const buildState = {
            ...initState,
            getDependency: this.getDependency.bind(this),
            getInitResult: this.getInitResult.bind(this),
            getPeer: this.getPeer.bind(this)
        };
        const state = applyConfiguredState(initialState, this.mergeConfigs(), initState);
        this.state = state;
        let initResult;
        if (this.extension.init) {
            initResult = this.extension.init(editorConfig, state.config, initState);
        }
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion -- false positive
        this.state = applyInitializedState(state, initResult, buildState);
    }
    build(editor) {
        const state = this.state;
        if (!(state.id === ExtensionRepStateIds.initialized)) {
            formatDevErrorMessage(`ExtensionRep: register called in state id ${String(state.id)} (expected ${String(ExtensionRepStateIds.built)} initialized)`);
        }
        let output;
        if (this.extension.build) {
            output = this.extension.build(editor, state.config, state.registerState);
        }
        const registerState = {
            ...state.registerState,
            getOutput: ()=>output,
            getSignal: this.getSignal.bind(this)
        };
        this.state = applyBuiltState(state, output, registerState);
    }
    register(editor, signal) {
        this._signal = signal;
        const state = this.state;
        if (!(state.id === ExtensionRepStateIds.built)) {
            formatDevErrorMessage(`ExtensionRep: register called in state id ${String(state.id)} (expected ${String(ExtensionRepStateIds.built)} built)`);
        }
        const cleanup = this.extension.register && this.extension.register(editor, state.config, state.registerState);
        this.state = applyRegisteredState(state);
        return ()=>{
            const afterRegistrationState = this.state;
            if (!(afterRegistrationState.id === ExtensionRepStateIds.afterRegistration)) {
                formatDevErrorMessage(`ExtensionRep: rollbackToBuiltState called in state id ${String(state.id)} (expected ${String(ExtensionRepStateIds.afterRegistration)} afterRegistration)`);
            }
            this.state = rollbackToBuiltState(afterRegistrationState);
            if (cleanup) {
                cleanup();
            }
        };
    }
    afterRegistration(editor) {
        const state = this.state;
        if (!(state.id === ExtensionRepStateIds.registered)) {
            formatDevErrorMessage(`ExtensionRep: afterRegistration called in state id ${String(state.id)} (expected ${String(ExtensionRepStateIds.registered)} registered)`);
        }
        let rval;
        if (this.extension.afterRegistration) {
            rval = this.extension.afterRegistration(editor, state.config, state.registerState);
        }
        this.state = applyAfterRegistrationState(state);
        return rval;
    }
    getSignal() {
        if (!(this._signal !== undefined)) {
            formatDevErrorMessage(`ExtensionRep.getSignal() called before register`);
        }
        return this._signal;
    }
    getInitResult() {
        if (!(this.extension.init !== undefined)) {
            formatDevErrorMessage(`ExtensionRep: getInitResult() called for Extension ${this.extension.name} that does not define init`);
        }
        const state = this.state;
        if (!isInitializedExtensionRepState(state)) {
            formatDevErrorMessage(`ExtensionRep: getInitResult() called for ExtensionRep in state id ${String(state.id)} < ${String(ExtensionRepStateIds.initialized)} (initialized)`);
        } // eslint-disable-next-line @typescript-eslint/no-unsafe-return -- any
        return state.initResult;
    }
    getInitPeer(name) {
        const rep = this.builder.extensionNameMap.get(name);
        return rep ? rep.getExtensionInitDependency() : undefined;
    }
    getExtensionInitDependency() {
        const state = this.state;
        if (!isConfiguredExtensionRepState(state)) {
            formatDevErrorMessage(`ExtensionRep: getExtensionInitDependency called in state id ${String(state.id)} (expected >= ${String(ExtensionRepStateIds.configured)} configured)`);
        }
        return {
            config: state.config
        };
    }
    getPeer(name) {
        const rep = this.builder.extensionNameMap.get(name);
        return rep ? rep.getExtensionDependency() : undefined;
    }
    getInitDependency(dep) {
        const rep = this.builder.getExtensionRep(dep);
        if (!(rep !== undefined)) {
            formatDevErrorMessage(`LexicalExtensionBuilder: Extension ${this.extension.name} missing dependency extension ${dep.name} to be in registry`);
        }
        return rep.getExtensionInitDependency();
    }
    getDependency(dep) {
        const rep = this.builder.getExtensionRep(dep);
        if (!(rep !== undefined)) {
            formatDevErrorMessage(`LexicalExtensionBuilder: Extension ${this.extension.name} missing dependency extension ${dep.name} to be in registry`);
        }
        return rep.getExtensionDependency();
    }
    getState() {
        const state = this.state;
        if (!isAfterRegistrationState(state)) {
            formatDevErrorMessage(`ExtensionRep getState called in state id ${String(state.id)} (expected ${String(ExtensionRepStateIds.afterRegistration)} afterRegistration)`);
        }
        return state;
    }
    getDirectDependentNames() {
        return this.builder.incomingEdges.get(this.extension.name) || emptySet;
    }
    getPeerNameSet() {
        let s = this._peerNameSet;
        if (!s) {
            s = new Set((this.extension.peerDependencies || []).map(([name])=>name));
            this._peerNameSet = s;
        }
        return s;
    }
    getExtensionDependency() {
        if (!this._dependency) {
            const state = this.state;
            if (!isBuiltExtensionRepState(state)) {
                formatDevErrorMessage(`Extension ${this.extension.name} used as a dependency before build`);
            }
            this._dependency = {
                config: state.config,
                init: state.initResult,
                output: state.output
            };
        }
        return this._dependency;
    }
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ const HISTORY_MERGE_OPTIONS = {
    tag: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HISTORY_MERGE_TAG"]
};
function $defaultInitializer() {
    const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getRoot"])();
    if (root.isEmpty()) {
        root.append((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$createParagraphNode"])());
    }
}
/**
 * An extension to set the initial state of the editor from
 * a function or serialized JSON EditorState. This is
 * implicitly included with all editors built with
 * Lexical Extension. This happens in the `afterRegistration`
 * phase so your initial state may depend on registered commands,
 * but you should not call `editor.setRootElement` earlier than
 * this phase to avoid rendering an empty editor first.
 */ const InitialStateExtension = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineExtension"])({
    config: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeCast"])({
        setOptions: HISTORY_MERGE_OPTIONS,
        updateOptions: HISTORY_MERGE_OPTIONS
    }),
    init ({ $initialEditorState = $defaultInitializer }) {
        return {
            $initialEditorState,
            initialized: false
        };
    },
    // eslint-disable-next-line sort-keys-fix/sort-keys-fix -- typescript inference is order dependent here for some reason
    afterRegistration (editor, { updateOptions, setOptions }, state) {
        const initResult = state.getInitResult();
        if (!initResult.initialized) {
            initResult.initialized = true;
            const { $initialEditorState } = initResult;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isEditorState"])($initialEditorState)) {
                editor.setEditorState($initialEditorState, setOptions);
            } else if (typeof $initialEditorState === 'function') {
                editor.update(()=>{
                    $initialEditorState(editor);
                }, updateOptions);
            } else if ($initialEditorState && (typeof $initialEditorState === 'string' || typeof $initialEditorState === 'object')) {
                const parsedEditorState = editor.parseEditorState($initialEditorState);
                editor.setEditorState(parsedEditorState, setOptions);
            }
        }
        return ()=>{};
    },
    name: '@lexical/extension/InitialState',
    // These are automatically added by createEditor, we add them here so they are
    // visible during extensionRep.init so extensions can see all known types before the
    // editor is created.
    // (excluding ArtificialNode__DO_NOT_USE because it isn't really public API
    // and shouldn't change anything)
    nodes: [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RootNode"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextNode"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineBreakNode"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabNode"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParagraphNode"]
    ]
});
/** @internal Use a well-known symbol for dev tools purposes */ const builderSymbol = Symbol.for('@lexical/extension/LexicalBuilder');
/**
 * Build a LexicalEditor by combining together one or more extensions, optionally
 * overriding some of their configuration.
 *
 * @param extensions - Extension arguments (extensions or extensions with config overrides)
 * @returns An editor handle
 *
 * @example
 * A single root extension with multiple dependencies
 *
 * ```ts
 * const editor = buildEditorFromExtensions(
 *   defineExtension({
 *     name: "[root]",
 *     dependencies: [
 *       RichTextExtension,
 *       configExtension(EmojiExtension, { emojiBaseUrl: "/assets/emoji" }),
 *     ],
 *     register: (editor: LexicalEditor) => {
 *       console.log("Editor Created");
 *       return () => console.log("Editor Disposed");
 *     },
 *   }),
 * );
 * ```
 *
 * @example
 * A very similar minimal configuration without the register hook
 *
 * ```ts
 * const editor = buildEditorFromExtensions(
 *   RichTextExtension,
 *   configExtension(EmojiExtension, { emojiBaseUrl: "/assets/emoji" }),
 * );
 * ```
 */ function buildEditorFromExtensions(...extensions) {
    return LexicalBuilder.fromExtensions(extensions).buildEditor();
}
/** @internal */ function noop() {
/*empty*/ }
/** Throw the given Error */ function defaultOnError(err) {
    throw err;
}
/** @internal */ function maybeWithBuilder(editor) {
    return editor;
}
function normalizeExtensionArgument(arg) {
    return Array.isArray(arg) ? arg : [
        arg
    ];
}
const PACKAGE_VERSION = "0.40.0+dev.esm";
/** @internal */ class LexicalBuilder {
    roots;
    extensionNameMap;
    outgoingConfigEdges;
    incomingEdges;
    conflicts;
    _sortedExtensionReps;
    PACKAGE_VERSION;
    constructor(roots){
        this.outgoingConfigEdges = new Map();
        this.incomingEdges = new Map();
        this.extensionNameMap = new Map();
        this.conflicts = new Map();
        this.PACKAGE_VERSION = PACKAGE_VERSION;
        this.roots = roots;
        for (const extension of roots){
            this.addExtension(extension);
        }
    }
    static fromExtensions(extensions) {
        const roots = [
            normalizeExtensionArgument(InitialStateExtension)
        ];
        for (const extension of extensions){
            roots.push(normalizeExtensionArgument(extension));
        }
        return new LexicalBuilder(roots);
    }
    static maybeFromEditor(editor) {
        const builder = maybeWithBuilder(editor)[builderSymbol];
        if (builder) {
            // The dev tools variant of this will relax some of these invariants
            if (!(builder.PACKAGE_VERSION === PACKAGE_VERSION)) {
                formatDevErrorMessage(`LexicalBuilder.fromEditor: The given editor was created with LexicalBuilder ${builder.PACKAGE_VERSION} but this version is ${PACKAGE_VERSION}. A project should have exactly one copy of LexicalBuilder`);
            }
            if (!(builder instanceof LexicalBuilder)) {
                formatDevErrorMessage(`LexicalBuilder.fromEditor: There are multiple copies of the same version of LexicalBuilder in your project, and this editor was created with another one. Your project, or one of its dependencies, has its package.json and/or bundler configured incorrectly.`);
            }
        }
        return builder;
    }
    /** Look up the editor that was created by this LexicalBuilder or throw */ static fromEditor(editor) {
        const builder = LexicalBuilder.maybeFromEditor(editor);
        if (!(builder !== undefined)) {
            formatDevErrorMessage(`LexicalBuilder.fromEditor: The given editor was not created with LexicalBuilder`);
        }
        return builder;
    }
    constructEditor() {
        const { $initialEditorState: _$initialEditorState, onError, ...editorConfig } = this.buildCreateEditorArgs();
        const editor = Object.assign((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEditor"])({
            ...editorConfig,
            ...onError ? {
                onError: (err)=>{
                    onError(err, editor);
                }
            } : {}
        }), {
            [builderSymbol]: this
        });
        for (const extensionRep of this.sortedExtensionReps()){
            extensionRep.build(editor);
        }
        return editor;
    }
    buildEditor() {
        let disposeOnce = noop;
        function dispose() {
            try {
                disposeOnce();
            } finally{
                disposeOnce = noop;
            }
        }
        const editor = Object.assign(this.constructEditor(), {
            dispose,
            [Symbol.dispose]: dispose
        });
        disposeOnce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeRegister"])(this.registerEditor(editor), ()=>editor.setRootElement(null));
        return editor;
    }
    hasExtensionByName(name) {
        return this.extensionNameMap.has(name);
    }
    getExtensionRep(extension) {
        const rep = this.extensionNameMap.get(extension.name);
        if (rep) {
            if (!(rep.extension === extension)) {
                formatDevErrorMessage(`LexicalBuilder: A registered extension with name ${extension.name} exists but does not match the given extension`);
            }
            return rep;
        }
    }
    addEdge(fromExtensionName, toExtensionName, configs) {
        const outgoing = this.outgoingConfigEdges.get(fromExtensionName);
        if (outgoing) {
            outgoing.set(toExtensionName, configs);
        } else {
            this.outgoingConfigEdges.set(fromExtensionName, new Map([
                [
                    toExtensionName,
                    configs
                ]
            ]));
        }
        const incoming = this.incomingEdges.get(toExtensionName);
        if (incoming) {
            incoming.add(fromExtensionName);
        } else {
            this.incomingEdges.set(toExtensionName, new Set([
                fromExtensionName
            ]));
        }
    }
    addExtension(arg) {
        if (!(this._sortedExtensionReps === undefined)) {
            formatDevErrorMessage(`LexicalBuilder: addExtension called after finalization`);
        }
        const normalized = normalizeExtensionArgument(arg);
        const [extension] = normalized;
        if (!(typeof extension.name === 'string')) {
            formatDevErrorMessage(`LexicalBuilder: extension name must be string, not ${typeof extension.name}`);
        }
        let extensionRep = this.extensionNameMap.get(extension.name);
        if (!(extensionRep === undefined || extensionRep.extension === extension)) {
            formatDevErrorMessage(`LexicalBuilder: Multiple extensions registered with name ${extension.name}, names must be unique`);
        }
        if (!extensionRep) {
            extensionRep = new ExtensionRep(this, extension);
            this.extensionNameMap.set(extension.name, extensionRep);
            const hasConflict = this.conflicts.get(extension.name);
            if (typeof hasConflict === 'string') {
                {
                    formatDevErrorMessage(`LexicalBuilder: extension ${extension.name} conflicts with ${hasConflict}`);
                }
            }
            for (const name of extension.conflictsWith || []){
                if (!!this.extensionNameMap.has(name)) {
                    formatDevErrorMessage(`LexicalBuilder: extension ${extension.name} conflicts with ${name}`);
                }
                this.conflicts.set(name, extension.name);
            }
            for (const dep of extension.dependencies || []){
                const normDep = normalizeExtensionArgument(dep);
                this.addEdge(extension.name, normDep[0].name, normDep.slice(1));
                this.addExtension(normDep);
            }
            for (const [depName, config] of extension.peerDependencies || []){
                this.addEdge(extension.name, depName, config ? [
                    config
                ] : []);
            }
        }
    }
    sortedExtensionReps() {
        if (this._sortedExtensionReps) {
            return this._sortedExtensionReps;
        }
        // depth-first search based topological DAG sort
        // https://en.wikipedia.org/wiki/Topological_sorting
        const sortedExtensionReps = [];
        const visit = (rep, fromExtensionName)=>{
            let mark = rep.state;
            if (isExactlyPermanentExtensionRepState(mark)) {
                return;
            }
            const extensionName = rep.extension.name;
            if (!isExactlyUnmarkedExtensionRepState(mark)) {
                formatDevErrorMessage(`LexicalBuilder: Circular dependency detected for Extension ${extensionName} from ${fromExtensionName || '[unknown]'}`);
            }
            mark = applyTemporaryMark(mark);
            rep.state = mark;
            const outgoingConfigEdges = this.outgoingConfigEdges.get(extensionName);
            if (outgoingConfigEdges) {
                for (const toExtensionName of outgoingConfigEdges.keys()){
                    const toRep = this.extensionNameMap.get(toExtensionName);
                    // may be undefined for an optional peer dependency
                    if (toRep) {
                        visit(toRep, extensionName);
                    }
                }
            }
            mark = applyPermanentMark(mark);
            rep.state = mark;
            sortedExtensionReps.push(rep);
        };
        for (const rep of this.extensionNameMap.values()){
            if (isExactlyUnmarkedExtensionRepState(rep.state)) {
                visit(rep);
            }
        }
        for (const rep of sortedExtensionReps){
            for (const [toExtensionName, configs] of this.outgoingConfigEdges.get(rep.extension.name) || []){
                if (configs.length > 0) {
                    const toRep = this.extensionNameMap.get(toExtensionName);
                    if (toRep) {
                        for (const config of configs){
                            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument -- any
                            toRep.configs.add(config);
                        }
                    }
                }
            }
        }
        for (const [extension, ...configs] of this.roots){
            if (configs.length > 0) {
                const toRep = this.extensionNameMap.get(extension.name);
                if (!(toRep !== undefined)) {
                    formatDevErrorMessage(`LexicalBuilder: Expecting existing ExtensionRep for ${extension.name}`);
                }
                for (const config of configs){
                    toRep.configs.add(config);
                }
            }
        }
        this._sortedExtensionReps = sortedExtensionReps;
        return this._sortedExtensionReps;
    }
    registerEditor(editor) {
        const extensionReps = this.sortedExtensionReps();
        const controller = new AbortController();
        const cleanups = [
            ()=>controller.abort()
        ];
        const signal = controller.signal;
        for (const extensionRep of extensionReps){
            const cleanup = extensionRep.register(editor, signal);
            if (cleanup) {
                cleanups.push(cleanup);
            }
        }
        for (const extensionRep of extensionReps){
            const cleanup = extensionRep.afterRegistration(editor);
            if (cleanup) {
                cleanups.push(cleanup);
            }
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeRegister"])(...cleanups);
    }
    buildCreateEditorArgs() {
        const config = {};
        const nodes = new Set();
        const replacedNodes = new Map();
        const htmlExport = new Map();
        const htmlImport = {};
        const theme = {};
        const extensionReps = this.sortedExtensionReps();
        for (const extensionRep of extensionReps){
            const { extension } = extensionRep;
            if (extension.onError !== undefined) {
                config.onError = extension.onError;
            }
            if (extension.disableEvents !== undefined) {
                config.disableEvents = extension.disableEvents;
            }
            if (extension.parentEditor !== undefined) {
                config.parentEditor = extension.parentEditor;
            }
            if (extension.editable !== undefined) {
                config.editable = extension.editable;
            }
            if (extension.namespace !== undefined) {
                config.namespace = extension.namespace;
            }
            if (extension.$initialEditorState !== undefined) {
                config.$initialEditorState = extension.$initialEditorState;
            }
            if (extension.nodes) {
                for (const node of getNodeConfig(extension)){
                    if (typeof node !== 'function') {
                        const conflictExtension = replacedNodes.get(node.replace);
                        if (conflictExtension) {
                            {
                                formatDevErrorMessage(`LexicalBuilder: Extension ${extension.name} can not register replacement for node ${node.replace.name} because ${conflictExtension.extension.name} already did`);
                            }
                        }
                        replacedNodes.set(node.replace, extensionRep);
                    }
                    nodes.add(node);
                }
            }
            if (extension.html) {
                if (extension.html.export) {
                    for (const [k, v] of extension.html.export.entries()){
                        htmlExport.set(k, v);
                    }
                }
                if (extension.html.import) {
                    Object.assign(htmlImport, extension.html.import);
                }
            }
            if (extension.theme) {
                deepThemeMergeInPlace(theme, extension.theme);
            }
        }
        if (Object.keys(theme).length > 0) {
            config.theme = theme;
        }
        if (nodes.size) {
            config.nodes = [
                ...nodes
            ];
        }
        const hasImport = Object.keys(htmlImport).length > 0;
        const hasExport = htmlExport.size > 0;
        if (hasImport || hasExport) {
            config.html = {};
            if (hasImport) {
                config.html.import = htmlImport;
            }
            if (hasExport) {
                config.html.export = htmlExport;
            }
        }
        for (const extensionRep of extensionReps){
            extensionRep.init(config);
        }
        if (!config.onError) {
            config.onError = defaultOnError;
        }
        return config;
    }
}
/**
 * @experimental
 * Get the finalized config and output of an Extension that was used to build the editor.
 *
 * This is useful in the implementation of a LexicalNode or in other
 * situations where you have an editor reference but it's not easy to
 * pass the config or {@link ExtensionRegisterState} around.
 *
 * It will throw if the Editor was not built using this Extension.
 *
 * @param editor - The editor that was built using extension
 * @param extension - The concrete reference to an Extension used to build this editor
 * @returns The config and output for that Extension
 */ function getExtensionDependencyFromEditor(editor, extension) {
    const builder = LexicalBuilder.fromEditor(editor);
    const rep = builder.getExtensionRep(extension);
    if (!(rep !== undefined)) {
        formatDevErrorMessage(`getExtensionDependencyFromEditor: Extension ${extension.name} was not built when creating this editor`);
    }
    return rep.getExtensionDependency();
}
/**
 * @experimental
 * Get the finalized config and output of an Extension that was used to build the
 * editor by name.
 *
 * This can be used from the implementation of a LexicalNode or in other
 * situation where you have an editor reference but it's not easy to pass the
 * config around. Use this version if you do not have a concrete reference to
 * the Extension for some reason (e.g. it is an optional peer dependency, or you
 * are avoiding a circular import).
 *
 * Both the explicit Extension type and the name are required.
 *
 *  @example
 * ```tsx
 * import type { HistoryExtension } from "@lexical/history";
 * getPeerDependencyFromEditor<typeof HistoryExtension>(editor, "@lexical/history/History");
 * ```

 * @param editor - The editor that may have been built using extension
 * @param extensionName - The name of the Extension
 * @returns The config and output of the Extension or undefined
 */ function getPeerDependencyFromEditor(editor, extensionName) {
    const builder = LexicalBuilder.fromEditor(editor);
    const peer = builder.extensionNameMap.get(extensionName);
    return peer ? peer.getExtensionDependency() : undefined;
}
/**
 * Get the finalized config and output of an Extension that was used to build the
 * editor by name.
 *
 * This can be used from the implementation of a LexicalNode or in other
 * situation where you have an editor reference but it's not easy to pass the
 * config around. Use this version if you do not have a concrete reference to
 * the Extension for some reason (e.g. it is an optional peer dependency, or you
 * are avoiding a circular import).
 *
 * Both the explicit Extension type and the name are required.
 *
 *  @example
 * ```tsx
 * import type { EmojiExtension } from "./EmojiExtension";
 * export class EmojiNode extends TextNode {
 *   // other implementation details not included
 *   createDOM(
 *     config: EditorConfig,
 *     editor?: LexicalEditor | undefined
 *   ): HTMLElement {
 *     const dom = super.createDOM(config, editor);
 *     addClassNamesToElement(
 *       dom,
 *       getPeerDependencyFromEditorOrThrow<typeof EmojiExtension>(
 *         editor || $getEditor(),
 *         "@lexical/playground/emoji",
 *       ).config.emojiClass,
 *     );
 *     return dom;
 *   }
 * }
 * ```

 * @param editor - The editor that may have been built using extension
 * @param extensionName - The name of the Extension
 * @returns The config and output of the Extension
 */ function getPeerDependencyFromEditorOrThrow(editor, extensionName) {
    const dep = getPeerDependencyFromEditor(editor, extensionName);
    if (!(dep !== undefined)) {
        formatDevErrorMessage(`getPeerDependencyFromEditorOrThrow: Editor was not built with Extension ${extensionName}`);
    }
    return dep;
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ const EMPTY_SET = new Set();
/**
 * An extension that provides a `watchNodeKey` output that
 * returns a signal for the selection state of a node.
 *
 * Typically used for tracking whether a DecoratorNode is
 * currently selected or not. A framework independent
 * alternative to {@link useLexicalNodeSelection}.
 */ const NodeSelectionExtension = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineExtension"])({
    build (editor, config, state) {
        const editorStateStore = state.getDependency(EditorStateExtension).output;
        const watchedNodeStore = d({
            watchedNodeKeys: new Map()
        });
        const selectedNodeKeys = watchedSignal(()=>undefined, ()=>E(()=>{
                const prevSelectedNodeKeys = selectedNodeKeys.peek();
                const { watchedNodeKeys } = watchedNodeStore.value;
                let nextSelectedNodeKeys;
                let didChange = false;
                editorStateStore.value.read(()=>{
                    const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSelection"])();
                    if (selection) {
                        for (const [key, listeners] of watchedNodeKeys.entries()){
                            if (listeners.size === 0) {
                                // We intentionally mutate this without firing a signal, to
                                // avoid re-triggering this effect. There are no subscribers
                                // so nothing can observe whether key was in the set or not
                                watchedNodeKeys.delete(key);
                                continue;
                            }
                            const node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getNodeByKey"])(key);
                            const isSelected = node && node.isSelected() || false;
                            didChange = didChange || isSelected !== (prevSelectedNodeKeys ? prevSelectedNodeKeys.has(key) : false);
                            if (isSelected) {
                                nextSelectedNodeKeys = nextSelectedNodeKeys || new Set();
                                nextSelectedNodeKeys.add(key);
                            }
                        }
                    }
                });
                if (!(!didChange && nextSelectedNodeKeys && prevSelectedNodeKeys && nextSelectedNodeKeys.size === prevSelectedNodeKeys.size)) {
                    selectedNodeKeys.value = nextSelectedNodeKeys;
                }
            }));
        function watchNodeKey(key) {
            const watcher = w(()=>(selectedNodeKeys.value || EMPTY_SET).has(key));
            const { watchedNodeKeys } = watchedNodeStore.peek();
            let listeners = watchedNodeKeys.get(key);
            const hadListener = listeners !== undefined;
            listeners = listeners || new Set();
            listeners.add(watcher);
            if (!hadListener) {
                watchedNodeKeys.set(key, listeners);
                watchedNodeStore.value = {
                    watchedNodeKeys
                };
            }
            return watcher;
        }
        return {
            watchNodeKey
        };
    },
    dependencies: [
        EditorStateExtension
    ],
    name: '@lexical/extension/NodeSelection'
});
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ const INSERT_HORIZONTAL_RULE_COMMAND = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCommand"])('INSERT_HORIZONTAL_RULE_COMMAND');
class HorizontalRuleNode extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DecoratorNode"] {
    static getType() {
        return 'horizontalrule';
    }
    static clone(node) {
        return new HorizontalRuleNode(node.__key);
    }
    static importJSON(serializedNode) {
        return $createHorizontalRuleNode().updateFromJSON(serializedNode);
    }
    static importDOM() {
        return {
            hr: ()=>({
                    conversion: $convertHorizontalRuleElement,
                    priority: 0
                })
        };
    }
    exportDOM() {
        return {
            element: document.createElement('hr')
        };
    }
    createDOM(config) {
        const element = document.createElement('hr');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addClassNamesToElement"])(element, config.theme.hr);
        return element;
    }
    getTextContent() {
        return '\n';
    }
    isInline() {
        return false;
    }
    updateDOM() {
        return false;
    }
}
function $convertHorizontalRuleElement() {
    return {
        node: $createHorizontalRuleNode()
    };
}
function $createHorizontalRuleNode() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$create"])(HorizontalRuleNode);
}
function $isHorizontalRuleNode(node) {
    return node instanceof HorizontalRuleNode;
}
function $toggleNodeSelection(node, shiftKey = false) {
    const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSelection"])();
    const wasSelected = node.isSelected();
    const key = node.getKey();
    let nodeSelection;
    if (shiftKey && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isNodeSelection"])(selection)) {
        nodeSelection = selection;
    } else {
        nodeSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$createNodeSelection"])();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$setSelection"])(nodeSelection);
    }
    if (wasSelected) {
        nodeSelection.delete(key);
    } else {
        nodeSelection.add(key);
    }
}
/**
 * An extension for HorizontalRuleNode that provides an implementation that
 * works without any React dependency.
 */ const HorizontalRuleExtension = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineExtension"])({
    dependencies: [
        EditorStateExtension,
        NodeSelectionExtension
    ],
    name: '@lexical/extension/HorizontalRule',
    nodes: ()=>[
            HorizontalRuleNode
        ],
    register (editor, config, state) {
        const { watchNodeKey } = state.getDependency(NodeSelectionExtension).output;
        const nodeSelectionStore = d({
            nodeSelections: new Map()
        });
        const isSelectedClassName = editor._config.theme.hrSelected ?? 'selected';
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeRegister"])(editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CLICK_COMMAND"], (event)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDOMNode"])(event.target)) {
                const node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getNodeFromDOMNode"])(event.target);
                if ($isHorizontalRuleNode(node)) {
                    $toggleNodeSelection(node, event.shiftKey);
                    return true;
                }
            }
            return false;
        }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_LOW"]), editor.registerMutationListener(HorizontalRuleNode, (nodes, payload)=>{
            o(()=>{
                let didChange = false;
                const { nodeSelections } = nodeSelectionStore.peek();
                for (const [k, v] of nodes.entries()){
                    if (v === 'destroyed') {
                        nodeSelections.delete(k);
                        didChange = true;
                    } else {
                        const prev = nodeSelections.get(k);
                        const dom = editor.getElementByKey(k);
                        if (prev) {
                            prev.domNode.value = dom;
                        } else {
                            didChange = true;
                            nodeSelections.set(k, {
                                domNode: d(dom),
                                selectedSignal: watchNodeKey(k)
                            });
                        }
                    }
                }
                if (didChange) {
                    nodeSelectionStore.value = {
                        nodeSelections
                    };
                }
            });
        }), E(()=>{
            const effects = [];
            for (const { domNode, selectedSignal } of nodeSelectionStore.value.nodeSelections.values()){
                effects.push(E(()=>{
                    const dom = domNode.value;
                    if (dom) {
                        const isSelected = selectedSignal.value;
                        if (isSelected) {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addClassNamesToElement"])(dom, isSelectedClassName);
                        } else {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeClassNamesFromElement"])(dom, isSelectedClassName);
                        }
                    }
                }));
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeRegister"])(...effects);
        }));
    }
});
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ function $indentOverTab(selection) {
    // const handled = new Set();
    const nodes = selection.getNodes();
    const canIndentBlockNodes = nodes.filter((node)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isBlockElementNode"])(node) && node.canIndent());
    // 1. If selection spans across canIndent block nodes: indent
    if (canIndentBlockNodes.length > 0) {
        return true;
    }
    // 2. If first (anchor/focus) is at block start: indent
    const anchor = selection.anchor;
    const focus = selection.focus;
    const first = focus.isBefore(anchor) ? focus : anchor;
    const firstNode = first.getNode();
    const firstBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$utils$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$getNearestBlockElementAncestorOrThrow"])(firstNode);
    if (firstBlock.canIndent()) {
        const firstBlockKey = firstBlock.getKey();
        let selectionAtStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$createRangeSelection"])();
        selectionAtStart.anchor.set(firstBlockKey, 0, 'element');
        selectionAtStart.focus.set(firstBlockKey, 0, 'element');
        selectionAtStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$normalizeSelection__EXPERIMENTAL"])(selectionAtStart);
        if (selectionAtStart.anchor.is(first)) {
            return true;
        }
    }
    // 3. Else: tab
    return false;
}
function registerTabIndentation(editor, maxIndent) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeRegister"])(editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEY_TAB_COMMAND"], (event)=>{
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSelection"])();
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection)) {
            return false;
        }
        event.preventDefault();
        const command = $indentOverTab(selection) ? event.shiftKey ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OUTDENT_CONTENT_COMMAND"] : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INDENT_CONTENT_COMMAND"] : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INSERT_TAB_COMMAND"];
        return editor.dispatchCommand(command, undefined);
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INDENT_CONTENT_COMMAND"], ()=>{
        const currentMaxIndent = typeof maxIndent === 'number' ? maxIndent : maxIndent ? maxIndent.peek() : null;
        if (currentMaxIndent == null) {
            return false;
        }
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSelection"])();
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection)) {
            return false;
        }
        const indents = selection.getNodes().map((node)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$utils$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$getNearestBlockElementAncestorOrThrow"])(node).getIndent());
        return Math.max(...indents) + 1 >= currentMaxIndent;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_CRITICAL"]));
}
/**
 * This extension adds the ability to indent content using the tab key. Generally, we don't
 * recommend using this plugin as it could negatively affect accessibility for keyboard
 * users, causing focus to become trapped within the editor.
 */ const TabIndentationExtension = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineExtension"])({
    build (editor, config, state) {
        return namedSignals(config);
    },
    config: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeCast"])({
        disabled: false,
        maxIndent: null
    }),
    name: '@lexical/extension/TabIndentation',
    register (editor, config, state) {
        const { disabled, maxIndent } = state.getOutput();
        return E(()=>{
            if (!disabled.value) {
                return registerTabIndentation(editor, maxIndent);
            }
        });
    }
});
;
}),
"[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/@lexical/react/LexicalReactProviderExtension.dev.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReactProviderExtension",
    ()=>ReactProviderExtension
]);
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/lexical/Lexical.dev.mjs [app-client] (ecmascript)");
;
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ /**
 * An extension used to declare that there is a LexicalExtensionComposer or
 * ReactPluginHostExtension available so that we can issue runtime warnings
 * when plugins that depend on React are hosted in an environment
 * where it is not ever going to be rendered.
 *
 * It is a separate extension so it can be used as a peer dependency.
 */ const ReactProviderExtension = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineExtension"])({
    name: '@lexical/react/ReactProvider'
});
;
}),
"[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/@lexical/text/LexicalText.dev.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "$canShowPlaceholder",
    ()=>$canShowPlaceholder,
    "$canShowPlaceholderCurry",
    ()=>$canShowPlaceholderCurry,
    "$findTextIntersectionFromCharacters",
    ()=>$findTextIntersectionFromCharacters,
    "$isRootTextContentEmpty",
    ()=>$isRootTextContentEmpty,
    "$isRootTextContentEmptyCurry",
    ()=>$isRootTextContentEmptyCurry,
    "$rootTextContent",
    ()=>$rootTextContent,
    "registerLexicalTextEntity",
    ()=>registerLexicalTextEntity
]);
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/lexical/Lexical.dev.mjs [app-client] (ecmascript)");
;
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ /**
 * Returns the root's text content.
 * @returns The root's text content.
 */ function $rootTextContent() {
    const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getRoot"])();
    return root.getTextContent();
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ /**
 * Determines if the root has any text content and can trim any whitespace if it does.
 * @param isEditorComposing - Is the editor in composition mode due to an active Input Method Editor?
 * @param trim - Should the root text have its whitespaced trimmed? Defaults to true.
 * @returns true if text content is empty, false if there is text or isEditorComposing is true.
 */ function $isRootTextContentEmpty(isEditorComposing, trim = true) {
    if (isEditorComposing) {
        return false;
    }
    let text = $rootTextContent();
    if (trim) {
        text = text.trim();
    }
    return text === '';
}
/**
 * Returns a function that executes {@link $isRootTextContentEmpty}
 * @param isEditorComposing - Is the editor in composition mode due to an active Input Method Editor?
 * @param trim - Should the root text have its whitespaced trimmed? Defaults to true.
 * @returns A function that executes $isRootTextContentEmpty based on arguments.
 */ function $isRootTextContentEmptyCurry(isEditorComposing, trim) {
    return ()=>$isRootTextContentEmpty(isEditorComposing, trim);
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ /**
 * Determines if the input should show the placeholder. If anything is in
 * in the root the placeholder should not be shown.
 * @param isComposing - Is the editor in composition mode due to an active Input Method Editor?
 * @returns true if the input should show the placeholder, false otherwise.
 */ function $canShowPlaceholder(isComposing) {
    if (!$isRootTextContentEmpty(isComposing, false)) {
        return false;
    }
    const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getRoot"])();
    const children = root.getChildren();
    const childrenLength = children.length;
    if (childrenLength > 1) {
        return false;
    }
    for(let i = 0; i < childrenLength; i++){
        const topBlock = children[i];
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isDecoratorNode"])(topBlock)) {
            return false;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isElementNode"])(topBlock)) {
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isParagraphNode"])(topBlock)) {
                return false;
            }
            if (topBlock.__indent !== 0) {
                return false;
            }
            const topBlockChildren = topBlock.getChildren();
            const topBlockChildrenLength = topBlockChildren.length;
            for(let s = 0; s < topBlockChildrenLength; s++){
                const child = topBlockChildren[i];
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isTextNode"])(child)) {
                    return false;
                }
            }
        }
    }
    return true;
}
/**
 * Returns a function that executes {@link $canShowPlaceholder}
 * @param isEditorComposing - Is the editor in composition mode due to an active Input Method Editor?
 * @returns A function that executes $canShowPlaceholder with arguments.
 */ function $canShowPlaceholderCurry(isEditorComposing) {
    return ()=>$canShowPlaceholder(isEditorComposing);
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ /**
 * Finds a TextNode with a size larger than targetCharacters and returns
 * the node along with the remaining length of the text.
 * @param root - The RootNode.
 * @param targetCharacters - The number of characters whose TextNode must be larger than.
 * @returns The TextNode and the intersections offset, or null if no TextNode is found.
 */ function $findTextIntersectionFromCharacters(root, targetCharacters) {
    let node = root.getFirstChild();
    let currentCharacters = 0;
    mainLoop: while(node !== null){
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isElementNode"])(node)) {
            const child = node.getFirstChild();
            if (child !== null) {
                node = child;
                continue;
            }
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isTextNode"])(node)) {
            const characters = node.getTextContentSize();
            if (currentCharacters + characters > targetCharacters) {
                return {
                    node,
                    offset: targetCharacters - currentCharacters
                };
            }
            currentCharacters += characters;
        }
        const sibling = node.getNextSibling();
        if (sibling !== null) {
            node = sibling;
            continue;
        }
        let parent = node.getParent();
        while(parent !== null){
            const parentSibling = parent.getNextSibling();
            if (parentSibling !== null) {
                node = parentSibling;
                continue mainLoop;
            }
            parent = parent.getParent();
        }
        break;
    }
    return null;
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ // Do not require this module directly! Use normal `invariant` calls.
function formatDevErrorMessage(message) {
    throw new Error(message);
}
/**
 * Returns a tuple that can be rested (...) into mergeRegister to clean up
 * node transforms listeners that transforms text into another node, eg. a HashtagNode.
 * @example
 * ```ts
 *   useEffect(() => {
    return mergeRegister(
      ...registerLexicalTextEntity(editor, getMatch, targetNode, createNode),
    );
  }, [createNode, editor, getMatch, targetNode]);
 * ```
 * Where targetNode is the type of node containing the text you want to transform (like a text input),
 * then getMatch uses a regex to find a matching text and creates the proper node to include the matching text.
 * @param editor - The lexical editor.
 * @param getMatch - Finds a matching string that satisfies a regex expression.
 * @param targetNode - The node type that contains text to match with. eg. HashtagNode
 * @param createNode - A function that creates a new node to contain the matched text. eg createHashtagNode
 * @returns An array containing the plain text and reverse node transform listeners.
 */ function registerLexicalTextEntity(editor, getMatch, targetNode, createNode) {
    const isTargetNode = (node)=>{
        return node instanceof targetNode;
    };
    const $replaceWithSimpleText = (node)=>{
        const textNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$createTextNode"])(node.getTextContent());
        textNode.setFormat(node.getFormat());
        node.replace(textNode);
    };
    const getMode = (node)=>{
        return node.getLatest().__mode;
    };
    const $textNodeTransform = (node)=>{
        if (!node.isSimpleText()) {
            return;
        }
        let prevSibling = node.getPreviousSibling();
        let text = node.getTextContent();
        let currentNode = node;
        let match;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isTextNode"])(prevSibling)) {
            const previousText = prevSibling.getTextContent();
            const combinedText = previousText + text;
            const prevMatch = getMatch(combinedText);
            if (isTargetNode(prevSibling)) {
                if (prevMatch === null || getMode(prevSibling) !== 0) {
                    $replaceWithSimpleText(prevSibling);
                    return;
                } else {
                    const diff = prevMatch.end - previousText.length;
                    if (diff > 0) {
                        const concatText = text.slice(0, diff);
                        const newTextContent = previousText + concatText;
                        prevSibling.select();
                        prevSibling.setTextContent(newTextContent);
                        if (diff === text.length) {
                            node.remove();
                        } else {
                            const remainingText = text.slice(diff);
                            node.setTextContent(remainingText);
                        }
                        return;
                    }
                }
            } else if (prevMatch === null || prevMatch.start < previousText.length) {
                return;
            }
        }
        let prevMatchLengthToSkip = 0;
        // eslint-disable-next-line no-constant-condition
        while(true){
            match = getMatch(text);
            let nextText = match === null ? '' : text.slice(match.end);
            text = nextText;
            if (nextText === '') {
                const nextSibling = currentNode.getNextSibling();
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isTextNode"])(nextSibling)) {
                    nextText = currentNode.getTextContent() + nextSibling.getTextContent();
                    const nextMatch = getMatch(nextText);
                    if (nextMatch === null) {
                        if (isTargetNode(nextSibling)) {
                            $replaceWithSimpleText(nextSibling);
                        } else {
                            nextSibling.markDirty();
                        }
                        return;
                    } else if (nextMatch.start !== 0) {
                        return;
                    }
                }
            }
            if (match === null) {
                return;
            }
            if (match.start === 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isTextNode"])(prevSibling) && prevSibling.isTextEntity()) {
                prevMatchLengthToSkip += match.end;
                continue;
            }
            let nodeToReplace;
            if (match.start === 0) {
                [nodeToReplace, currentNode] = currentNode.splitText(match.end);
            } else {
                [, nodeToReplace, currentNode] = currentNode.splitText(match.start + prevMatchLengthToSkip, match.end + prevMatchLengthToSkip);
            }
            if (!(nodeToReplace !== undefined)) {
                formatDevErrorMessage(`${'nodeToReplace'} should not be undefined. You may want to check splitOffsets passed to the splitText.`);
            }
            const replacementNode = createNode(nodeToReplace);
            replacementNode.setFormat(nodeToReplace.getFormat());
            nodeToReplace.replace(replacementNode);
            if (currentNode == null) {
                return;
            }
            prevMatchLengthToSkip = 0;
            prevSibling = replacementNode;
        }
    };
    const $reverseNodeTransform = (node)=>{
        const text = node.getTextContent();
        const match = getMatch(text);
        if (match === null || match.start !== 0) {
            $replaceWithSimpleText(node);
            return;
        }
        if (text.length > match.end) {
            // This will split out the rest of the text as simple text
            node.splitText(match.end);
            return;
        }
        const prevSibling = node.getPreviousSibling();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isTextNode"])(prevSibling) && prevSibling.isTextEntity()) {
            $replaceWithSimpleText(prevSibling);
            $replaceWithSimpleText(node);
        }
        const nextSibling = node.getNextSibling();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isTextNode"])(nextSibling) && nextSibling.isTextEntity()) {
            $replaceWithSimpleText(nextSibling);
            // This may have already been converted in the previous block
            if (isTargetNode(node)) {
                $replaceWithSimpleText(node);
            }
        }
    };
    const removePlainTextTransform = editor.registerNodeTransform(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextNode"], $textNodeTransform);
    const removeReverseNodeTransform = editor.registerNodeTransform(targetNode, $reverseNodeTransform);
    return [
        removePlainTextTransform,
        removeReverseNodeTransform
    ];
}
;
}),
"[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/@lexical/dragon/LexicalDragon.dev.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DragonExtension",
    ()=>DragonExtension,
    "registerDragonSupport",
    ()=>registerDragonSupport
]);
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$extension$2f$LexicalExtension$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/@lexical/extension/LexicalExtension.dev.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/lexical/Lexical.dev.mjs [app-client] (ecmascript)");
;
;
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ function registerDragonSupport(editor) {
    const origin = window.location.origin;
    const handler = (event)=>{
        if (event.origin !== origin) {
            return;
        }
        const rootElement = editor.getRootElement();
        if (document.activeElement !== rootElement) {
            return;
        }
        const data = event.data;
        if (typeof data === 'string') {
            let parsedData;
            try {
                parsedData = JSON.parse(data);
            } catch (_e) {
                return;
            }
            if (parsedData && parsedData.protocol === 'nuanria_messaging' && parsedData.type === 'request') {
                const payload = parsedData.payload;
                if (payload && payload.functionId === 'makeChanges') {
                    const args = payload.args;
                    if (args) {
                        const [elementStart, elementLength, text, selStart, selLength] = args;
                        // TODO: we should probably handle formatCommand somehow?
                        // formatCommand;
                        editor.update(()=>{
                            const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSelection"])();
                            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection)) {
                                const anchor = selection.anchor;
                                let anchorNode = anchor.getNode();
                                let setSelStart = 0;
                                let setSelEnd = 0;
                                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isTextNode"])(anchorNode)) {
                                    // set initial selection
                                    if (elementStart >= 0 && elementLength >= 0) {
                                        setSelStart = elementStart;
                                        setSelEnd = elementStart + elementLength;
                                        // If the offset is more than the end, make it the end
                                        selection.setTextNodeRange(anchorNode, setSelStart, anchorNode, setSelEnd);
                                    }
                                }
                                if (setSelStart !== setSelEnd || text !== '') {
                                    selection.insertRawText(text);
                                    anchorNode = anchor.getNode();
                                }
                                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isTextNode"])(anchorNode)) {
                                    // set final selection
                                    setSelStart = selStart;
                                    setSelEnd = selStart + selLength;
                                    const anchorNodeTextLength = anchorNode.getTextContentSize();
                                    // If the offset is more than the end, make it the end
                                    setSelStart = setSelStart > anchorNodeTextLength ? anchorNodeTextLength : setSelStart;
                                    setSelEnd = setSelEnd > anchorNodeTextLength ? anchorNodeTextLength : setSelEnd;
                                    selection.setTextNodeRange(anchorNode, setSelStart, anchorNode, setSelEnd);
                                }
                                // block the chrome extension from handling this event
                                event.stopImmediatePropagation();
                            }
                        });
                    }
                }
            }
        }
    };
    window.addEventListener('message', handler, true);
    return ()=>{
        window.removeEventListener('message', handler, true);
    };
}
/**
 * Add Dragon speech to text input support to the editor, via the
 * \@lexical/dragon module.
 */ const DragonExtension = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineExtension"])({
    build: (editor, config, state)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$extension$2f$LexicalExtension$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["namedSignals"])(config),
    config: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeCast"])({
        disabled: typeof window === 'undefined'
    }),
    name: '@lexical/dragon',
    register: (editor, config, state)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$extension$2f$LexicalExtension$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["effect"])(()=>state.getOutput().disabled.value ? undefined : registerDragonSupport(editor))
});
;
}),
"[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/@lexical/html/LexicalHtml.dev.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "$generateHtmlFromNodes",
    ()=>$generateHtmlFromNodes,
    "$generateNodesFromDOM",
    ()=>$generateNodesFromDOM
]);
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$selection$2f$LexicalSelection$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/@lexical/selection/LexicalSelection.dev.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/lexical/Lexical.dev.mjs [app-client] (ecmascript)");
;
;
;
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ /**
 * How you parse your html string to get a document is left up to you. In the browser you can use the native
 * DOMParser API to generate a document (see clipboard.ts), but to use in a headless environment you can use JSDom
 * or an equivalent library and pass in the document here.
 */ function $generateNodesFromDOM(editor, dom) {
    const elements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDOMDocumentNode"])(dom) ? dom.body.childNodes : dom.childNodes;
    let lexicalNodes = [];
    const allArtificialNodes = [];
    for (const element of elements){
        if (!IGNORE_TAGS.has(element.nodeName)) {
            const lexicalNode = $createNodesFromDOM(element, editor, allArtificialNodes, false);
            if (lexicalNode !== null) {
                lexicalNodes = lexicalNodes.concat(lexicalNode);
            }
        }
    }
    $unwrapArtificialNodes(allArtificialNodes);
    return lexicalNodes;
}
function $generateHtmlFromNodes(editor, selection) {
    if (typeof document === 'undefined' || typeof window === 'undefined' && typeof /*TURBOPACK member replacement*/ __turbopack_context__.g.window === 'undefined') {
        throw new Error('To use $generateHtmlFromNodes in headless mode please initialize a headless browser implementation such as JSDom before calling this function.');
    }
    const container = document.createElement('div');
    const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getRoot"])();
    const topLevelChildren = root.getChildren();
    for(let i = 0; i < topLevelChildren.length; i++){
        const topLevelNode = topLevelChildren[i];
        $appendNodesToHTML(editor, topLevelNode, container, selection);
    }
    return container.innerHTML;
}
function $appendNodesToHTML(editor, currentNode, parentElement, selection = null) {
    let shouldInclude = selection !== null ? currentNode.isSelected(selection) : true;
    const shouldExclude = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isElementNode"])(currentNode) && currentNode.excludeFromCopy('html');
    let target = currentNode;
    if (selection !== null && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isTextNode"])(currentNode)) {
        target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$selection$2f$LexicalSelection$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$sliceSelectedTextNodeContent"])(selection, currentNode, 'clone');
    }
    const children = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isElementNode"])(target) ? target.getChildren() : [];
    const registeredNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRegisteredNode"])(editor, target.getType());
    let exportOutput;
    // Use HTMLConfig overrides, if available.
    if (registeredNode && registeredNode.exportDOM !== undefined) {
        exportOutput = registeredNode.exportDOM(editor, target);
    } else {
        exportOutput = target.exportDOM(editor);
    }
    const { element, after } = exportOutput;
    if (!element) {
        return false;
    }
    const fragment = document.createDocumentFragment();
    for(let i = 0; i < children.length; i++){
        const childNode = children[i];
        const shouldIncludeChild = $appendNodesToHTML(editor, childNode, fragment, selection);
        if (!shouldInclude && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isElementNode"])(currentNode) && shouldIncludeChild && currentNode.extractWithChild(childNode, selection, 'html')) {
            shouldInclude = true;
        }
    }
    if (shouldInclude && !shouldExclude) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(element) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDocumentFragment"])(element)) {
            element.append(fragment);
        }
        parentElement.append(element);
        if (after) {
            const newElement = after.call(target, element);
            if (newElement) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDocumentFragment"])(element)) {
                    element.replaceChildren(newElement);
                } else {
                    element.replaceWith(newElement);
                }
            }
        }
    } else {
        parentElement.append(fragment);
    }
    return shouldInclude;
}
function getConversionFunction(domNode, editor) {
    const { nodeName } = domNode;
    const cachedConversions = editor._htmlConversions.get(nodeName.toLowerCase());
    let currentConversion = null;
    if (cachedConversions !== undefined) {
        for (const cachedConversion of cachedConversions){
            const domConversion = cachedConversion(domNode);
            if (domConversion !== null && (currentConversion === null || // Given equal priority, prefer the last registered importer
            // which is typically an application custom node or HTMLConfig['import']
            (currentConversion.priority || 0) <= (domConversion.priority || 0))) {
                currentConversion = domConversion;
            }
        }
    }
    return currentConversion !== null ? currentConversion.conversion : null;
}
const IGNORE_TAGS = new Set([
    'STYLE',
    'SCRIPT'
]);
function $createNodesFromDOM(node, editor, allArtificialNodes, hasBlockAncestorLexicalNode, forChildMap = new Map(), parentLexicalNode) {
    let lexicalNodes = [];
    if (IGNORE_TAGS.has(node.nodeName)) {
        return lexicalNodes;
    }
    let currentLexicalNode = null;
    const transformFunction = getConversionFunction(node, editor);
    const transformOutput = transformFunction ? transformFunction(node) : null;
    let postTransform = null;
    if (transformOutput !== null) {
        postTransform = transformOutput.after;
        const transformNodes = transformOutput.node;
        currentLexicalNode = Array.isArray(transformNodes) ? transformNodes[transformNodes.length - 1] : transformNodes;
        if (currentLexicalNode !== null) {
            for (const [, forChildFunction] of forChildMap){
                currentLexicalNode = forChildFunction(currentLexicalNode, parentLexicalNode);
                if (!currentLexicalNode) {
                    break;
                }
            }
            if (currentLexicalNode) {
                lexicalNodes.push(...Array.isArray(transformNodes) ? transformNodes : [
                    currentLexicalNode
                ]);
            }
        }
        if (transformOutput.forChild != null) {
            forChildMap.set(node.nodeName, transformOutput.forChild);
        }
    }
    // If the DOM node doesn't have a transformer, we don't know what
    // to do with it but we still need to process any childNodes.
    const children = node.childNodes;
    let childLexicalNodes = [];
    const hasBlockAncestorLexicalNodeForChildren = currentLexicalNode != null && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRootOrShadowRoot"])(currentLexicalNode) ? false : currentLexicalNode != null && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isBlockElementNode"])(currentLexicalNode) || hasBlockAncestorLexicalNode;
    for(let i = 0; i < children.length; i++){
        childLexicalNodes.push(...$createNodesFromDOM(children[i], editor, allArtificialNodes, hasBlockAncestorLexicalNodeForChildren, new Map(forChildMap), currentLexicalNode));
    }
    if (postTransform != null) {
        childLexicalNodes = postTransform(childLexicalNodes);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBlockDomNode"])(node)) {
        if (!hasBlockAncestorLexicalNodeForChildren) {
            childLexicalNodes = wrapContinuousInlines(node, childLexicalNodes, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$createParagraphNode"]);
        } else {
            childLexicalNodes = wrapContinuousInlines(node, childLexicalNodes, ()=>{
                const artificialNode = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArtificialNode__DO_NOT_USE"]();
                allArtificialNodes.push(artificialNode);
                return artificialNode;
            });
        }
    }
    if (currentLexicalNode == null) {
        if (childLexicalNodes.length > 0) {
            // If it hasn't been converted to a LexicalNode, we hoist its children
            // up to the same level as it.
            lexicalNodes = lexicalNodes.concat(childLexicalNodes);
        } else {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBlockDomNode"])(node) && isDomNodeBetweenTwoInlineNodes(node)) {
                // Empty block dom node that hasnt been converted, we replace it with a linebreak if its between inline nodes
                lexicalNodes = lexicalNodes.concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$createLineBreakNode"])());
            }
        }
    } else {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isElementNode"])(currentLexicalNode)) {
            // If the current node is a ElementNode after conversion,
            // we can append all the children to it.
            currentLexicalNode.append(...childLexicalNodes);
        }
    }
    return lexicalNodes;
}
function wrapContinuousInlines(domNode, nodes, createWrapperFn) {
    const textAlign = domNode.style.textAlign;
    const out = [];
    let continuousInlines = [];
    // wrap contiguous inline child nodes in para
    for(let i = 0; i < nodes.length; i++){
        const node = nodes[i];
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isBlockElementNode"])(node)) {
            if (textAlign && !node.getFormat()) {
                node.setFormat(textAlign);
            }
            out.push(node);
        } else {
            continuousInlines.push(node);
            if (i === nodes.length - 1 || i < nodes.length - 1 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isBlockElementNode"])(nodes[i + 1])) {
                const wrapper = createWrapperFn();
                wrapper.setFormat(textAlign);
                wrapper.append(...continuousInlines);
                out.push(wrapper);
                continuousInlines = [];
            }
        }
    }
    return out;
}
function $unwrapArtificialNodes(allArtificialNodes) {
    for (const node of allArtificialNodes){
        if (node.getNextSibling() instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArtificialNode__DO_NOT_USE"]) {
            node.insertAfter((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$createLineBreakNode"])());
        }
    }
    // Replace artificial node with it's children
    for (const node of allArtificialNodes){
        const children = node.getChildren();
        for (const child of children){
            node.insertBefore(child);
        }
        node.remove();
    }
}
function isDomNodeBetweenTwoInlineNodes(node) {
    if (node.nextSibling == null || node.previousSibling == null) {
        return false;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInlineDomNode"])(node.nextSibling) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInlineDomNode"])(node.previousSibling);
}
;
}),
"[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/@lexical/clipboard/LexicalClipboard.dev.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "$generateJSONFromSelectedNodes",
    ()=>$generateJSONFromSelectedNodes,
    "$generateNodesFromSerializedNodes",
    ()=>$generateNodesFromSerializedNodes,
    "$getClipboardDataFromSelection",
    ()=>$getClipboardDataFromSelection,
    "$getHtmlContent",
    ()=>$getHtmlContent,
    "$getLexicalContent",
    ()=>$getLexicalContent,
    "$insertDataTransferForPlainText",
    ()=>$insertDataTransferForPlainText,
    "$insertDataTransferForRichText",
    ()=>$insertDataTransferForRichText,
    "$insertGeneratedNodes",
    ()=>$insertGeneratedNodes,
    "copyToClipboard",
    ()=>copyToClipboard,
    "setLexicalClipboardDataTransfer",
    ()=>setLexicalClipboardDataTransfer
]);
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$html$2f$LexicalHtml$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/@lexical/html/LexicalHtml.dev.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$selection$2f$LexicalSelection$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/@lexical/selection/LexicalSelection.dev.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$utils$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/@lexical/utils/LexicalUtils.dev.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/lexical/Lexical.dev.mjs [app-client] (ecmascript)");
;
;
;
;
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ // Do not require this module directly! Use normal `invariant` calls.
function formatDevErrorMessage(message) {
    throw new Error(message);
}
/**
 * Returns the *currently selected* Lexical content as an HTML string, relying on the
 * logic defined in the exportDOM methods on the LexicalNode classes. Note that
 * this will not return the HTML content of the entire editor (unless all the content is included
 * in the current selection).
 *
 * @param editor - LexicalEditor instance to get HTML content from
 * @param selection - The selection to use (default is $getSelection())
 * @returns a string of HTML content
 */ function $getHtmlContent(editor, selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSelection"])()) {
    if (selection == null) {
        {
            formatDevErrorMessage(`Expected valid LexicalSelection`);
        }
    }
    // If we haven't selected anything
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection) && selection.isCollapsed() || selection.getNodes().length === 0) {
        return '';
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$html$2f$LexicalHtml$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$generateHtmlFromNodes"])(editor, selection);
}
/**
 * Returns the *currently selected* Lexical content as a JSON string, relying on the
 * logic defined in the exportJSON methods on the LexicalNode classes. Note that
 * this will not return the JSON content of the entire editor (unless all the content is included
 * in the current selection).
 *
 * @param editor  - LexicalEditor instance to get the JSON content from
 * @param selection - The selection to use (default is $getSelection())
 * @returns
 */ function $getLexicalContent(editor, selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSelection"])()) {
    if (selection == null) {
        {
            formatDevErrorMessage(`Expected valid LexicalSelection`);
        }
    }
    // If we haven't selected anything
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection) && selection.isCollapsed() || selection.getNodes().length === 0) {
        return null;
    }
    return JSON.stringify($generateJSONFromSelectedNodes(editor, selection));
}
/**
 * Attempts to insert content of the mime-types text/plain or text/uri-list from
 * the provided DataTransfer object into the editor at the provided selection.
 * text/uri-list is only used if text/plain is not also provided.
 *
 * @param dataTransfer an object conforming to the [DataTransfer interface] (https://html.spec.whatwg.org/multipage/dnd.html#the-datatransfer-interface)
 * @param selection the selection to use as the insertion point for the content in the DataTransfer object
 */ function $insertDataTransferForPlainText(dataTransfer, selection) {
    const text = dataTransfer.getData('text/plain') || dataTransfer.getData('text/uri-list');
    if (text != null) {
        selection.insertRawText(text);
    }
}
/**
 * Attempts to insert content of the mime-types application/x-lexical-editor, text/html,
 * text/plain, or text/uri-list (in descending order of priority) from the provided DataTransfer
 * object into the editor at the provided selection.
 *
 * @param dataTransfer an object conforming to the [DataTransfer interface] (https://html.spec.whatwg.org/multipage/dnd.html#the-datatransfer-interface)
 * @param selection the selection to use as the insertion point for the content in the DataTransfer object
 * @param editor the LexicalEditor the content is being inserted into.
 */ function $insertDataTransferForRichText(dataTransfer, selection, editor) {
    const lexicalString = dataTransfer.getData('application/x-lexical-editor');
    if (lexicalString) {
        try {
            const payload = JSON.parse(lexicalString);
            if (payload.namespace === editor._config.namespace && Array.isArray(payload.nodes)) {
                const nodes = $generateNodesFromSerializedNodes(payload.nodes);
                return $insertGeneratedNodes(editor, nodes, selection);
            }
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error(error);
        }
    }
    const htmlString = dataTransfer.getData('text/html');
    const plainString = dataTransfer.getData('text/plain');
    // Skip HTML handling if it matches the plain text representation.
    // This avoids unnecessary processing for plain text strings created by
    // iOS Safari autocorrect, which incorrectly includes a `text/html` type.
    if (htmlString && plainString !== htmlString) {
        try {
            const parser = new DOMParser();
            const dom = parser.parseFromString(trustHTML(htmlString), 'text/html');
            const nodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$html$2f$LexicalHtml$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$generateNodesFromDOM"])(editor, dom);
            return $insertGeneratedNodes(editor, nodes, selection);
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error(error);
        }
    }
    // Multi-line plain text in rich text mode pasted as separate paragraphs
    // instead of single paragraph with linebreaks.
    // Webkit-specific: Supports read 'text/uri-list' in clipboard.
    const text = plainString || dataTransfer.getData('text/uri-list');
    if (text != null) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection)) {
            const parts = text.split(/(\r?\n|\t)/);
            if (parts[parts.length - 1] === '') {
                parts.pop();
            }
            for(let i = 0; i < parts.length; i++){
                const currentSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSelection"])();
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(currentSelection)) {
                    const part = parts[i];
                    if (part === '\n' || part === '\r\n') {
                        currentSelection.insertParagraph();
                    } else if (part === '\t') {
                        currentSelection.insertNodes([
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$createTabNode"])()
                        ]);
                    } else {
                        currentSelection.insertText(part);
                    }
                }
            }
        } else {
            selection.insertRawText(text);
        }
    }
}
function trustHTML(html) {
    if (window.trustedTypes && window.trustedTypes.createPolicy) {
        const policy = window.trustedTypes.createPolicy('lexical', {
            createHTML: (input)=>input
        });
        return policy.createHTML(html);
    }
    return html;
}
/**
 * Inserts Lexical nodes into the editor using different strategies depending on
 * some simple selection-based heuristics. If you're looking for a generic way to
 * to insert nodes into the editor at a specific selection point, you probably want
 * {@link lexical.$insertNodes}
 *
 * @param editor LexicalEditor instance to insert the nodes into.
 * @param nodes The nodes to insert.
 * @param selection The selection to insert the nodes into.
 */ function $insertGeneratedNodes(editor, nodes, selection) {
    if (!editor.dispatchCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SELECTION_INSERT_CLIPBOARD_NODES_COMMAND"], {
        nodes,
        selection
    })) {
        selection.insertNodes(nodes);
        $updateSelectionOnInsert(selection);
    }
    return;
}
function $updateSelectionOnInsert(selection) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection) && selection.isCollapsed()) {
        const anchor = selection.anchor;
        let nodeToInspect = null;
        const anchorCaret = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$caretFromPoint"])(anchor, 'previous');
        if (anchorCaret) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isTextPointCaret"])(anchorCaret)) {
                nodeToInspect = anchorCaret.origin;
            } else {
                const range = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getCaretRange"])(anchorCaret, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getChildCaret"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getRoot"])(), 'next').getFlipped());
                for (const caret of range){
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isTextNode"])(caret.origin)) {
                        nodeToInspect = caret.origin;
                        break;
                    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isElementNode"])(caret.origin) && !caret.origin.isInline()) {
                        break;
                    }
                }
            }
        }
        if (nodeToInspect && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isTextNode"])(nodeToInspect)) {
            const newFormat = nodeToInspect.getFormat();
            const newStyle = nodeToInspect.getStyle();
            if (selection.format !== newFormat || selection.style !== newStyle) {
                selection.format = newFormat;
                selection.style = newStyle;
                selection.dirty = true;
            }
        }
    }
}
function exportNodeToJSON(node) {
    const serializedNode = node.exportJSON();
    const nodeClass = node.constructor;
    if (serializedNode.type !== nodeClass.getType()) {
        {
            formatDevErrorMessage(`LexicalNode: Node ${nodeClass.name} does not implement .exportJSON().`);
        }
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isElementNode"])(node)) {
        const serializedChildren = serializedNode.children;
        if (!Array.isArray(serializedChildren)) {
            {
                formatDevErrorMessage(`LexicalNode: Node ${nodeClass.name} is an element but .exportJSON() does not have a children array.`);
            }
        }
    }
    return serializedNode;
}
function $appendNodesToJSON(editor, selection, currentNode, targetArray = []) {
    let shouldInclude = selection !== null ? currentNode.isSelected(selection) : true;
    const shouldExclude = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isElementNode"])(currentNode) && currentNode.excludeFromCopy('html');
    let target = currentNode;
    if (selection !== null && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isTextNode"])(target)) {
        target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$selection$2f$LexicalSelection$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$sliceSelectedTextNodeContent"])(selection, target, 'clone');
    }
    const children = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isElementNode"])(target) ? target.getChildren() : [];
    const serializedNode = exportNodeToJSON(target);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isTextNode"])(target) && target.getTextContentSize() === 0) {
        // If an uncollapsed selection ends or starts at the end of a line of specialized,
        // TextNodes, such as code tokens, we will get a 'blank' TextNode here, i.e., one
        // with text of length 0. We don't want this, it makes a confusing mess. Reset!
        shouldInclude = false;
    }
    for(let i = 0; i < children.length; i++){
        const childNode = children[i];
        const shouldIncludeChild = $appendNodesToJSON(editor, selection, childNode, serializedNode.children);
        if (!shouldInclude && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isElementNode"])(currentNode) && shouldIncludeChild && currentNode.extractWithChild(childNode, selection, 'clone')) {
            shouldInclude = true;
        }
    }
    if (shouldInclude && !shouldExclude) {
        targetArray.push(serializedNode);
    } else if (Array.isArray(serializedNode.children)) {
        for(let i = 0; i < serializedNode.children.length; i++){
            const serializedChildNode = serializedNode.children[i];
            targetArray.push(serializedChildNode);
        }
    }
    return shouldInclude;
}
// TODO why $ function with Editor instance?
/**
 * Gets the Lexical JSON of the nodes inside the provided Selection.
 *
 * @param editor LexicalEditor to get the JSON content from.
 * @param selection Selection to get the JSON content from.
 * @returns an object with the editor namespace and a list of serializable nodes as JavaScript objects.
 */ function $generateJSONFromSelectedNodes(editor, selection) {
    const nodes = [];
    const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getRoot"])();
    const topLevelChildren = root.getChildren();
    for(let i = 0; i < topLevelChildren.length; i++){
        const topLevelNode = topLevelChildren[i];
        $appendNodesToJSON(editor, selection, topLevelNode, nodes);
    }
    return {
        namespace: editor._config.namespace,
        nodes
    };
}
/**
 * This method takes an array of objects conforming to the BaseSerializedNode interface and returns
 * an Array containing instances of the corresponding LexicalNode classes registered on the editor.
 * Normally, you'd get an Array of BaseSerialized nodes from {@link $generateJSONFromSelectedNodes}
 *
 * @param serializedNodes an Array of objects conforming to the BaseSerializedNode interface.
 * @returns an Array of Lexical Node objects.
 */ function $generateNodesFromSerializedNodes(serializedNodes) {
    const nodes = [];
    for(let i = 0; i < serializedNodes.length; i++){
        const serializedNode = serializedNodes[i];
        const node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$parseSerializedNode"])(serializedNode);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isTextNode"])(node)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$selection$2f$LexicalSelection$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$addNodeStyle"])(node);
        }
        nodes.push(node);
    }
    return nodes;
}
const EVENT_LATENCY = 50;
let clipboardEventTimeout = null;
// TODO custom selection
// TODO potentially have a node customizable version for plain text
/**
 * Copies the content of the current selection to the clipboard in
 * text/plain, text/html, and application/x-lexical-editor (Lexical JSON)
 * formats.
 *
 * @param editor the LexicalEditor instance to copy content from
 * @param event the native browser ClipboardEvent to add the content to.
 * @returns
 */ async function copyToClipboard(editor, event, data) {
    if (clipboardEventTimeout !== null) {
        // Prevent weird race conditions that can happen when this function is run multiple times
        // synchronously. In the future, we can do better, we can cancel/override the previously running job.
        return false;
    }
    if (event !== null) {
        return new Promise((resolve, reject)=>{
            editor.update(()=>{
                resolve($copyToClipboardEvent(editor, event, data));
            });
        });
    }
    const rootElement = editor.getRootElement();
    const editorWindow = editor._window || window;
    const windowDocument = editorWindow.document;
    const domSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDOMSelection"])(editorWindow);
    if (rootElement === null || domSelection === null) {
        return false;
    }
    const element = windowDocument.createElement('span');
    element.style.cssText = 'position: fixed; top: -1000px;';
    element.append(windowDocument.createTextNode('#'));
    rootElement.append(element);
    const range = new Range();
    range.setStart(element, 0);
    range.setEnd(element, 1);
    domSelection.removeAllRanges();
    domSelection.addRange(range);
    return new Promise((resolve, reject)=>{
        const removeListener = editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COPY_COMMAND"], (secondEvent)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$utils$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["objectKlassEquals"])(secondEvent, ClipboardEvent)) {
                removeListener();
                if (clipboardEventTimeout !== null) {
                    editorWindow.clearTimeout(clipboardEventTimeout);
                    clipboardEventTimeout = null;
                }
                resolve($copyToClipboardEvent(editor, secondEvent, data));
            }
            // Block the entire copy flow while we wait for the next ClipboardEvent
            return true;
        }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_CRITICAL"]);
        // If the above hack execCommand hack works, this timeout code should never fire. Otherwise,
        // the listener will be quickly freed so that the user can reuse it again
        clipboardEventTimeout = editorWindow.setTimeout(()=>{
            removeListener();
            clipboardEventTimeout = null;
            resolve(false);
        }, EVENT_LATENCY);
        windowDocument.execCommand('copy');
        element.remove();
    });
}
// TODO shouldn't pass editor (pass namespace directly)
function $copyToClipboardEvent(editor, event, data) {
    if (data === undefined) {
        const domSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDOMSelection"])(editor._window);
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSelection"])();
        if (!selection || selection.isCollapsed()) {
            return false;
        }
        if (!domSelection) {
            return false;
        }
        const anchorDOM = domSelection.anchorNode;
        const focusDOM = domSelection.focusNode;
        if (anchorDOM !== null && focusDOM !== null && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSelectionWithinEditor"])(editor, anchorDOM, focusDOM)) {
            return false;
        }
        data = $getClipboardDataFromSelection(selection);
    }
    event.preventDefault();
    const clipboardData = event.clipboardData;
    if (clipboardData === null) {
        return false;
    }
    setLexicalClipboardDataTransfer(clipboardData, data);
    return true;
}
const clipboardDataFunctions = [
    [
        'text/html',
        $getHtmlContent
    ],
    [
        'application/x-lexical-editor',
        $getLexicalContent
    ]
];
/**
 * Serialize the content of the current selection to strings in
 * text/plain, text/html, and application/x-lexical-editor (Lexical JSON)
 * formats (as available).
 *
 * @param selection the selection to serialize (defaults to $getSelection())
 * @returns LexicalClipboardData
 */ function $getClipboardDataFromSelection(selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSelection"])()) {
    const clipboardData = {
        'text/plain': selection ? selection.getTextContent() : ''
    };
    if (selection) {
        const editor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getEditor"])();
        for (const [mimeType, $editorFn] of clipboardDataFunctions){
            const v = $editorFn(editor, selection);
            if (v !== null) {
                clipboardData[mimeType] = v;
            }
        }
    }
    return clipboardData;
}
/**
 * Call setData on the given clipboardData for each MIME type present
 * in the given data (from {@link $getClipboardDataFromSelection})
 *
 * @param clipboardData the event.clipboardData to populate from data
 * @param data The lexical data
 */ function setLexicalClipboardDataTransfer(clipboardData, data) {
    for (const [k] of clipboardDataFunctions){
        if (data[k] === undefined) {
            clipboardData.setData(k, '');
        }
    }
    for(const k in data){
        const v = data[k];
        if (v !== undefined) {
            clipboardData.setData(k, v);
        }
    }
}
;
}),
"[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/@lexical/rich-text/LexicalRichText.dev.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "$createHeadingNode",
    ()=>$createHeadingNode,
    "$createQuoteNode",
    ()=>$createQuoteNode,
    "$isHeadingNode",
    ()=>$isHeadingNode,
    "$isQuoteNode",
    ()=>$isQuoteNode,
    "DRAG_DROP_PASTE",
    ()=>DRAG_DROP_PASTE,
    "HeadingNode",
    ()=>HeadingNode,
    "QuoteNode",
    ()=>QuoteNode,
    "RichTextExtension",
    ()=>RichTextExtension,
    "eventFiles",
    ()=>eventFiles,
    "registerRichText",
    ()=>registerRichText
]);
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$clipboard$2f$LexicalClipboard$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/@lexical/clipboard/LexicalClipboard.dev.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$dragon$2f$LexicalDragon$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/@lexical/dragon/LexicalDragon.dev.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$selection$2f$LexicalSelection$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/@lexical/selection/LexicalSelection.dev.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/lexical/Lexical.dev.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$utils$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/@lexical/utils/LexicalUtils.dev.mjs [app-client] (ecmascript) <locals>");
;
;
;
;
;
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ function caretFromPoint(x, y) {
    if (typeof document.caretRangeFromPoint !== 'undefined') {
        const range = document.caretRangeFromPoint(x, y);
        if (range === null) {
            return null;
        }
        return {
            node: range.startContainer,
            offset: range.startOffset
        };
    // @ts-ignore
    } else if (document.caretPositionFromPoint !== 'undefined') {
        // @ts-ignore FF - no types
        const range = document.caretPositionFromPoint(x, y);
        if (range === null) {
            return null;
        }
        return {
            node: range.offsetNode,
            offset: range.offset
        };
    } else {
        // Gracefully handle IE
        return null;
    }
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ const CAN_USE_DOM = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined';
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ const documentMode = CAN_USE_DOM && 'documentMode' in document ? document.documentMode : null;
const IS_APPLE = CAN_USE_DOM && /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const CAN_USE_BEFORE_INPUT = CAN_USE_DOM && 'InputEvent' in window && !documentMode ? 'getTargetRanges' in new window.InputEvent('input') : false;
const IS_SAFARI = CAN_USE_DOM && /Version\/[\d.]+.*Safari/.test(navigator.userAgent);
const IS_IOS = CAN_USE_DOM && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
// Keep these in case we need to use them in the future.
// export const IS_WINDOWS: boolean = CAN_USE_DOM && /Win/.test(navigator.platform);
const IS_CHROME = CAN_USE_DOM && /^(?=.*Chrome).*/i.test(navigator.userAgent);
const IS_APPLE_WEBKIT = CAN_USE_DOM && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && IS_APPLE && !IS_CHROME;
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ const DRAG_DROP_PASTE = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCommand"])('DRAG_DROP_PASTE_FILE');
/** @noInheritDoc */ class QuoteNode extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ElementNode"] {
    static getType() {
        return 'quote';
    }
    static clone(node) {
        return new QuoteNode(node.__key);
    }
    // View
    createDOM(config) {
        const element = document.createElement('blockquote');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addClassNamesToElement"])(element, config.theme.quote);
        return element;
    }
    updateDOM(prevNode, dom) {
        return false;
    }
    static importDOM() {
        return {
            blockquote: (node)=>({
                    conversion: $convertBlockquoteElement,
                    priority: 0
                })
        };
    }
    exportDOM(editor) {
        const { element } = super.exportDOM(editor);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(element)) {
            if (this.isEmpty()) {
                element.append(document.createElement('br'));
            }
            const formatType = this.getFormatType();
            if (formatType) {
                element.style.textAlign = formatType;
            }
            const direction = this.getDirection();
            if (direction) {
                element.dir = direction;
            }
        }
        return {
            element
        };
    }
    static importJSON(serializedNode) {
        return $createQuoteNode().updateFromJSON(serializedNode);
    }
    // Mutation
    insertNewAfter(_, restoreSelection) {
        const newBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$createParagraphNode"])();
        const direction = this.getDirection();
        newBlock.setDirection(direction);
        this.insertAfter(newBlock, restoreSelection);
        return newBlock;
    }
    collapseAtStart() {
        const paragraph = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$createParagraphNode"])();
        const children = this.getChildren();
        children.forEach((child)=>paragraph.append(child));
        this.replace(paragraph);
        return true;
    }
    canMergeWhenEmpty() {
        return true;
    }
}
function $createQuoteNode() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$applyNodeReplacement"])(new QuoteNode());
}
function $isQuoteNode(node) {
    return node instanceof QuoteNode;
}
/** @noInheritDoc */ class HeadingNode extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ElementNode"] {
    /** @internal */ __tag;
    static getType() {
        return 'heading';
    }
    static clone(node) {
        return new HeadingNode(node.__tag, node.__key);
    }
    constructor(tag, key){
        super(key);
        this.__tag = tag;
    }
    getTag() {
        return this.__tag;
    }
    setTag(tag) {
        const self = this.getWritable();
        this.__tag = tag;
        return self;
    }
    // View
    createDOM(config) {
        const tag = this.__tag;
        const element = document.createElement(tag);
        const theme = config.theme;
        const classNames = theme.heading;
        if (classNames !== undefined) {
            const className = classNames[tag];
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addClassNamesToElement"])(element, className);
        }
        return element;
    }
    updateDOM(prevNode, dom, config) {
        return prevNode.__tag !== this.__tag;
    }
    static importDOM() {
        return {
            h1: (node)=>({
                    conversion: $convertHeadingElement,
                    priority: 0
                }),
            h2: (node)=>({
                    conversion: $convertHeadingElement,
                    priority: 0
                }),
            h3: (node)=>({
                    conversion: $convertHeadingElement,
                    priority: 0
                }),
            h4: (node)=>({
                    conversion: $convertHeadingElement,
                    priority: 0
                }),
            h5: (node)=>({
                    conversion: $convertHeadingElement,
                    priority: 0
                }),
            h6: (node)=>({
                    conversion: $convertHeadingElement,
                    priority: 0
                }),
            p: (node)=>{
                // domNode is a <p> since we matched it by nodeName
                const paragraph = node;
                const firstChild = paragraph.firstChild;
                if (firstChild !== null && isGoogleDocsTitle(firstChild)) {
                    return {
                        conversion: ()=>({
                                node: null
                            }),
                        priority: 3
                    };
                }
                return null;
            },
            span: (node)=>{
                if (isGoogleDocsTitle(node)) {
                    return {
                        conversion: (domNode)=>{
                            return {
                                node: $createHeadingNode('h1')
                            };
                        },
                        priority: 3
                    };
                }
                return null;
            }
        };
    }
    exportDOM(editor) {
        const { element } = super.exportDOM(editor);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(element)) {
            if (this.isEmpty()) {
                element.append(document.createElement('br'));
            }
            const formatType = this.getFormatType();
            if (formatType) {
                element.style.textAlign = formatType;
            }
            const direction = this.getDirection();
            if (direction) {
                element.dir = direction;
            }
        }
        return {
            element
        };
    }
    static importJSON(serializedNode) {
        return $createHeadingNode(serializedNode.tag).updateFromJSON(serializedNode);
    }
    updateFromJSON(serializedNode) {
        return super.updateFromJSON(serializedNode).setTag(serializedNode.tag);
    }
    exportJSON() {
        return {
            ...super.exportJSON(),
            tag: this.getTag()
        };
    }
    // Mutation
    insertNewAfter(selection, restoreSelection = true) {
        const anchorOffet = selection ? selection.anchor.offset : 0;
        const lastDesc = this.getLastDescendant();
        const isAtEnd = !lastDesc || selection && selection.anchor.key === lastDesc.getKey() && anchorOffet === lastDesc.getTextContentSize();
        const newElement = isAtEnd || !selection ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$createParagraphNode"])() : $createHeadingNode(this.getTag());
        const direction = this.getDirection();
        newElement.setDirection(direction);
        this.insertAfter(newElement, restoreSelection);
        if (anchorOffet === 0 && !this.isEmpty() && selection) {
            const paragraph = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$createParagraphNode"])();
            paragraph.select();
            this.replace(paragraph, true);
        }
        return newElement;
    }
    collapseAtStart() {
        const newElement = !this.isEmpty() ? $createHeadingNode(this.getTag()) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$createParagraphNode"])();
        const children = this.getChildren();
        children.forEach((child)=>newElement.append(child));
        this.replace(newElement);
        return true;
    }
    extractWithChild() {
        return true;
    }
}
function isGoogleDocsTitle(domNode) {
    if (domNode.nodeName.toLowerCase() === 'span') {
        return domNode.style.fontSize === '26pt';
    }
    return false;
}
function $convertHeadingElement(element) {
    const nodeName = element.nodeName.toLowerCase();
    let node = null;
    if (nodeName === 'h1' || nodeName === 'h2' || nodeName === 'h3' || nodeName === 'h4' || nodeName === 'h5' || nodeName === 'h6') {
        node = $createHeadingNode(nodeName);
        if (element.style !== null) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setNodeIndentFromDOM"])(element, node);
            node.setFormat(element.style.textAlign);
        }
    }
    return {
        node
    };
}
function $convertBlockquoteElement(element) {
    const node = $createQuoteNode();
    if (element.style !== null) {
        node.setFormat(element.style.textAlign);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setNodeIndentFromDOM"])(element, node);
    }
    return {
        node
    };
}
function $createHeadingNode(headingTag = 'h1') {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$applyNodeReplacement"])(new HeadingNode(headingTag));
}
function $isHeadingNode(node) {
    return node instanceof HeadingNode;
}
function onPasteForRichText(event, editor) {
    event.preventDefault();
    editor.update(()=>{
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSelection"])();
        const clipboardData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$utils$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["objectKlassEquals"])(event, InputEvent) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$utils$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["objectKlassEquals"])(event, KeyboardEvent) ? null : event.clipboardData;
        if (clipboardData != null && selection !== null) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$clipboard$2f$LexicalClipboard$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$insertDataTransferForRichText"])(clipboardData, selection, editor);
        }
    }, {
        tag: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PASTE_TAG"]
    });
}
async function onCutForRichText(event, editor) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$clipboard$2f$LexicalClipboard$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyToClipboard"])(editor, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$utils$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["objectKlassEquals"])(event, ClipboardEvent) ? event : null);
    editor.update(()=>{
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSelection"])();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection)) {
            selection.removeText();
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isNodeSelection"])(selection)) {
            selection.getNodes().forEach((node)=>node.remove());
        }
    });
}
// Clipboard may contain files that we aren't allowed to read. While the event is arguably useless,
// in certain occasions, we want to know whether it was a file transfer, as opposed to text. We
// control this with the first boolean flag.
function eventFiles(event) {
    let dataTransfer = null;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$utils$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["objectKlassEquals"])(event, DragEvent)) {
        dataTransfer = event.dataTransfer;
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$utils$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["objectKlassEquals"])(event, ClipboardEvent)) {
        dataTransfer = event.clipboardData;
    }
    if (dataTransfer === null) {
        return [
            false,
            [],
            false
        ];
    }
    const types = dataTransfer.types;
    const hasFiles = types.includes('Files');
    const hasContent = types.includes('text/html') || types.includes('text/plain');
    return [
        hasFiles,
        Array.from(dataTransfer.files),
        hasContent
    ];
}
function $handleIndentAndOutdent(indentOrOutdent) {
    const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSelection"])();
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection)) {
        return false;
    }
    const alreadyHandled = new Set();
    const nodes = selection.getNodes();
    for(let i = 0; i < nodes.length; i++){
        const node = nodes[i];
        const key = node.getKey();
        if (alreadyHandled.has(key)) {
            continue;
        }
        const parentBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$findMatchingParent"])(node, (parentNode)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isElementNode"])(parentNode) && !parentNode.isInline());
        if (parentBlock === null) {
            continue;
        }
        const parentKey = parentBlock.getKey();
        if (parentBlock.canIndent() && !alreadyHandled.has(parentKey)) {
            alreadyHandled.add(parentKey);
            indentOrOutdent(parentBlock);
        }
    }
    return alreadyHandled.size > 0;
}
function $isTargetWithinDecorator(target) {
    const node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getNearestNodeFromDOMNode"])(target);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isDecoratorNode"])(node);
}
function $isSelectionAtEndOfRoot(selection) {
    const focus = selection.focus;
    return focus.key === 'root' && focus.offset === (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getRoot"])().getChildrenSize();
}
function $isSelectionCollapsedAtFrontOfIndentedBlock(selection) {
    if (!selection.isCollapsed()) {
        return false;
    }
    const { anchor } = selection;
    if (anchor.offset !== 0) {
        return false;
    }
    const anchorNode = anchor.getNode();
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRootNode"])(anchorNode)) {
        return false;
    }
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$utils$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$getNearestBlockElementAncestorOrThrow"])(anchorNode);
    return element.getIndent() > 0 && (element.is(anchorNode) || anchorNode.is(element.getFirstDescendant()));
}
/**
 * Resets the capitalization of the selection to default.
 * Called when the user presses space, tab, or enter key.
 * @param selection The selection to reset the capitalization of.
 */ function $resetCapitalization(selection) {
    for (const format of [
        'lowercase',
        'uppercase',
        'capitalize'
    ]){
        if (selection.hasFormat(format)) {
            selection.toggleFormat(format);
        }
    }
}
function registerRichText(editor) {
    const removeListener = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeRegister"])(editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CLICK_COMMAND"], (payload)=>{
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSelection"])();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isNodeSelection"])(selection)) {
            selection.clear();
            return true;
        }
        return false;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DELETE_CHARACTER_COMMAND"], (isBackward)=>{
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSelection"])();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection)) {
            selection.deleteCharacter(isBackward);
            return true;
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isNodeSelection"])(selection)) {
            selection.deleteNodes();
            return true;
        }
        return false;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DELETE_WORD_COMMAND"], (isBackward)=>{
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSelection"])();
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection)) {
            return false;
        }
        selection.deleteWord(isBackward);
        return true;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DELETE_LINE_COMMAND"], (isBackward)=>{
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSelection"])();
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection)) {
            return false;
        }
        selection.deleteLine(isBackward);
        return true;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTROLLED_TEXT_INSERTION_COMMAND"], (eventOrText)=>{
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSelection"])();
        if (typeof eventOrText === 'string') {
            if (selection !== null) {
                selection.insertText(eventOrText);
            }
        } else {
            if (selection === null) {
                return false;
            }
            const dataTransfer = eventOrText.dataTransfer;
            if (dataTransfer != null) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$clipboard$2f$LexicalClipboard$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$insertDataTransferForRichText"])(dataTransfer, selection, editor);
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection)) {
                const data = eventOrText.data;
                if (data) {
                    selection.insertText(data);
                }
                return true;
            }
        }
        return true;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REMOVE_TEXT_COMMAND"], ()=>{
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSelection"])();
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection)) {
            return false;
        }
        selection.removeText();
        return true;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FORMAT_TEXT_COMMAND"], (format)=>{
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSelection"])();
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection)) {
            return false;
        }
        selection.formatText(format);
        return true;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FORMAT_ELEMENT_COMMAND"], (format)=>{
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSelection"])();
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isNodeSelection"])(selection)) {
            return false;
        }
        const nodes = selection.getNodes();
        for (const node of nodes){
            const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$findMatchingParent"])(node, (parentNode)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isElementNode"])(parentNode) && !parentNode.isInline());
            if (element !== null) {
                element.setFormat(format);
            }
        }
        return true;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INSERT_LINE_BREAK_COMMAND"], (selectStart)=>{
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSelection"])();
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection)) {
            return false;
        }
        selection.insertLineBreak(selectStart);
        return true;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INSERT_PARAGRAPH_COMMAND"], ()=>{
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSelection"])();
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection)) {
            return false;
        }
        selection.insertParagraph();
        return true;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INSERT_TAB_COMMAND"], ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$insertNodes"])([
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$createTabNode"])()
        ]);
        return true;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INDENT_CONTENT_COMMAND"], ()=>{
        return $handleIndentAndOutdent((block)=>{
            const indent = block.getIndent();
            block.setIndent(indent + 1);
        });
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OUTDENT_CONTENT_COMMAND"], ()=>{
        return $handleIndentAndOutdent((block)=>{
            const indent = block.getIndent();
            if (indent > 0) {
                block.setIndent(Math.max(0, indent - 1));
            }
        });
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEY_ARROW_UP_COMMAND"], (event)=>{
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSelection"])();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isNodeSelection"])(selection)) {
            // If selection is on a node, let's try and move selection
            // back to being a range selection.
            const nodes = selection.getNodes();
            if (nodes.length > 0) {
                event.preventDefault();
                nodes[0].selectPrevious();
                return true;
            }
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection)) {
            const possibleNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getAdjacentNode"])(selection.focus, true);
            if (!event.shiftKey && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isDecoratorNode"])(possibleNode) && !possibleNode.isIsolated() && !possibleNode.isInline()) {
                possibleNode.selectPrevious();
                event.preventDefault();
                return true;
            }
        }
        return false;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEY_ARROW_DOWN_COMMAND"], (event)=>{
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSelection"])();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isNodeSelection"])(selection)) {
            // If selection is on a node, let's try and move selection
            // back to being a range selection.
            const nodes = selection.getNodes();
            if (nodes.length > 0) {
                event.preventDefault();
                nodes[0].selectNext(0, 0);
                return true;
            }
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection)) {
            if ($isSelectionAtEndOfRoot(selection)) {
                event.preventDefault();
                return true;
            }
            const possibleNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getAdjacentNode"])(selection.focus, false);
            if (!event.shiftKey && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isDecoratorNode"])(possibleNode) && !possibleNode.isIsolated() && !possibleNode.isInline()) {
                possibleNode.selectNext();
                event.preventDefault();
                return true;
            }
        }
        return false;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEY_ARROW_LEFT_COMMAND"], (event)=>{
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSelection"])();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isNodeSelection"])(selection)) {
            // If selection is on a node, let's try and move selection
            // back to being a range selection.
            const nodes = selection.getNodes();
            if (nodes.length > 0) {
                event.preventDefault();
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$selection$2f$LexicalSelection$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$isParentRTL"])(nodes[0])) {
                    nodes[0].selectNext(0, 0);
                } else {
                    nodes[0].selectPrevious();
                }
                return true;
            }
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection)) {
            return false;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$selection$2f$LexicalSelection$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$shouldOverrideDefaultCharacterSelection"])(selection, true)) {
            const isHoldingShift = event.shiftKey;
            event.preventDefault();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$selection$2f$LexicalSelection$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$moveCharacter"])(selection, isHoldingShift, true);
            return true;
        }
        return false;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEY_ARROW_RIGHT_COMMAND"], (event)=>{
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSelection"])();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isNodeSelection"])(selection)) {
            // If selection is on a node, let's try and move selection
            // back to being a range selection.
            const nodes = selection.getNodes();
            if (nodes.length > 0) {
                event.preventDefault();
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$selection$2f$LexicalSelection$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$isParentRTL"])(nodes[0])) {
                    nodes[0].selectPrevious();
                } else {
                    nodes[0].selectNext(0, 0);
                }
                return true;
            }
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection)) {
            return false;
        }
        const isHoldingShift = event.shiftKey;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$selection$2f$LexicalSelection$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$shouldOverrideDefaultCharacterSelection"])(selection, false)) {
            event.preventDefault();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$selection$2f$LexicalSelection$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$moveCharacter"])(selection, isHoldingShift, false);
            return true;
        }
        return false;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEY_BACKSPACE_COMMAND"], (event)=>{
        if ($isTargetWithinDecorator(event.target)) {
            return false;
        }
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSelection"])();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection)) {
            if ($isSelectionCollapsedAtFrontOfIndentedBlock(selection)) {
                event.preventDefault();
                return editor.dispatchCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OUTDENT_CONTENT_COMMAND"], undefined);
            }
            // Exception handling for iOS native behavior instead of Lexical's behavior when using Korean on iOS devices.
            // more details - https://github.com/facebook/lexical/issues/5841
            if (IS_IOS && navigator.language === 'ko-KR') {
                return false;
            }
        } else if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isNodeSelection"])(selection)) {
            return false;
        }
        event.preventDefault();
        return editor.dispatchCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DELETE_CHARACTER_COMMAND"], true);
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEY_DELETE_COMMAND"], (event)=>{
        if ($isTargetWithinDecorator(event.target)) {
            return false;
        }
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSelection"])();
        if (!((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isNodeSelection"])(selection))) {
            return false;
        }
        event.preventDefault();
        return editor.dispatchCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DELETE_CHARACTER_COMMAND"], false);
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEY_ENTER_COMMAND"], (event)=>{
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSelection"])();
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection)) {
            return false;
        }
        $resetCapitalization(selection);
        if (event !== null) {
            // If we have beforeinput, then we can avoid blocking
            // the default behavior. This ensures that the iOS can
            // intercept that we're actually inserting a paragraph,
            // and autocomplete, autocapitalize etc work as intended.
            // This can also cause a strange performance issue in
            // Safari, where there is a noticeable pause due to
            // preventing the key down of enter.
            if ((IS_IOS || IS_SAFARI || IS_APPLE_WEBKIT) && CAN_USE_BEFORE_INPUT) {
                return false;
            }
            event.preventDefault();
            if (event.shiftKey) {
                return editor.dispatchCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INSERT_LINE_BREAK_COMMAND"], false);
            }
        }
        return editor.dispatchCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INSERT_PARAGRAPH_COMMAND"], undefined);
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEY_ESCAPE_COMMAND"], ()=>{
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSelection"])();
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection)) {
            return false;
        }
        editor.blur();
        return true;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DROP_COMMAND"], (event)=>{
        const [, files] = eventFiles(event);
        if (files.length > 0) {
            const x = event.clientX;
            const y = event.clientY;
            const eventRange = caretFromPoint(x, y);
            if (eventRange !== null) {
                const { offset: domOffset, node: domNode } = eventRange;
                const node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getNearestNodeFromDOMNode"])(domNode);
                if (node !== null) {
                    const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$createRangeSelection"])();
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isTextNode"])(node)) {
                        selection.anchor.set(node.getKey(), domOffset, 'text');
                        selection.focus.set(node.getKey(), domOffset, 'text');
                    } else {
                        const parentKey = node.getParentOrThrow().getKey();
                        const offset = node.getIndexWithinParent() + 1;
                        selection.anchor.set(parentKey, offset, 'element');
                        selection.focus.set(parentKey, offset, 'element');
                    }
                    const normalizedSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$normalizeSelection__EXPERIMENTAL"])(selection);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$setSelection"])(normalizedSelection);
                }
                editor.dispatchCommand(DRAG_DROP_PASTE, files);
            }
            event.preventDefault();
            return true;
        }
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSelection"])();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection)) {
            return true;
        }
        return false;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DRAGSTART_COMMAND"], (event)=>{
        const [isFileTransfer] = eventFiles(event);
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSelection"])();
        if (isFileTransfer && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection)) {
            return false;
        }
        return true;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DRAGOVER_COMMAND"], (event)=>{
        const [isFileTransfer] = eventFiles(event);
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSelection"])();
        if (isFileTransfer && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection)) {
            return false;
        }
        const x = event.clientX;
        const y = event.clientY;
        const eventRange = caretFromPoint(x, y);
        if (eventRange !== null) {
            const node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getNearestNodeFromDOMNode"])(eventRange.node);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isDecoratorNode"])(node)) {
                // Show browser caret as the user is dragging the media across the screen. Won't work
                // for DecoratorNode nor it's relevant.
                event.preventDefault();
            }
        }
        return true;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SELECT_ALL_COMMAND"], ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$selectAll"])();
        return true;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COPY_COMMAND"], (event)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$clipboard$2f$LexicalClipboard$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyToClipboard"])(editor, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$utils$2f$LexicalUtils$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["objectKlassEquals"])(event, ClipboardEvent) ? event : null);
        return true;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CUT_COMMAND"], (event)=>{
        onCutForRichText(event, editor);
        return true;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PASTE_COMMAND"], (event)=>{
        const [, files, hasTextContent] = eventFiles(event);
        if (files.length > 0 && !hasTextContent) {
            editor.dispatchCommand(DRAG_DROP_PASTE, files);
            return true;
        }
        // if inputs then paste within the input ignore creating a new node on paste event
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDOMNode"])(event.target) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSelectionCapturedInDecoratorInput"])(event.target)) {
            return false;
        }
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSelection"])();
        if (selection !== null) {
            onPasteForRichText(event, editor);
            return true;
        }
        return false;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEY_SPACE_COMMAND"], (_)=>{
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSelection"])();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection)) {
            $resetCapitalization(selection);
        }
        return false;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEY_TAB_COMMAND"], (_)=>{
        const selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$getSelection"])();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(selection)) {
            $resetCapitalization(selection);
        }
        return false;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]));
    return removeListener;
}
/**
 * An extension to register \@lexical/rich-text behavior and nodes
 * ({@link HeadingNode}, {@link QuoteNode})
 */ const RichTextExtension = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineExtension"])({
    conflictsWith: [
        '@lexical/plain-text'
    ],
    dependencies: [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$dragon$2f$LexicalDragon$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DragonExtension"]
    ],
    name: '@lexical/rich-text',
    nodes: ()=>[
            HeadingNode,
            QuoteNode
        ],
    register: registerRichText
});
;
}),
"[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/@lexical/react/LexicalRichTextPlugin.dev.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RichTextPlugin",
    ()=>RichTextPlugin
]);
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$react$2f$LexicalComposerContext$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/@lexical/react/LexicalComposerContext.dev.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$react$2f$useLexicalEditable$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/@lexical/react/useLexicalEditable.dev.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$extension$2f$LexicalExtension$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/@lexical/extension/LexicalExtension.dev.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$react$2f$LexicalReactProviderExtension$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/@lexical/react/LexicalReactProviderExtension.dev.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$text$2f$LexicalText$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/@lexical/text/LexicalText.dev.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/lexical/Lexical.dev.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$dragon$2f$LexicalDragon$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/@lexical/dragon/LexicalDragon.dev.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$rich$2d$text$2f$LexicalRichText$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/@lexical/rich-text/LexicalRichText.dev.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ // Do not require this module directly! Use normal `invariant` calls.
function formatDevErrorMessage(message) {
    throw new Error(message);
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ const CAN_USE_DOM = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined';
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ // This workaround is no longer necessary in React 19,
// but we currently support React >=17.x
// https://github.com/facebook/react/pull/26395
const useLayoutEffectImpl = CAN_USE_DOM ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"];
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ function useDecorators(editor, ErrorBoundary) {
    const [decorators, setDecorators] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useDecorators.useState": ()=>editor.getDecorators()
    }["useDecorators.useState"]);
    // Subscribe to changes
    useLayoutEffectImpl({
        "useDecorators.useLayoutEffectImpl": ()=>{
            return editor.registerDecoratorListener({
                "useDecorators.useLayoutEffectImpl": (nextDecorators)=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"])({
                        "useDecorators.useLayoutEffectImpl": ()=>{
                            setDecorators(nextDecorators);
                        }
                    }["useDecorators.useLayoutEffectImpl"]);
                }
            }["useDecorators.useLayoutEffectImpl"]);
        }
    }["useDecorators.useLayoutEffectImpl"], [
        editor
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDecorators.useEffect": ()=>{
            // If the content editable mounts before the subscription is added, then
            // nothing will be rendered on initial pass. We can get around that by
            // ensuring that we set the value.
            setDecorators(editor.getDecorators());
        }
    }["useDecorators.useEffect"], [
        editor
    ]);
    // Return decorators defined as React Portals
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useDecorators.useMemo": ()=>{
            const decoratedPortals = [];
            const decoratorKeys = Object.keys(decorators);
            for(let i = 0; i < decoratorKeys.length; i++){
                const nodeKey = decoratorKeys[i];
                const reactDecorator = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ErrorBoundary, {
                    onError: {
                        "useDecorators.useMemo.reactDecorator": (e)=>editor._onError(e)
                    }["useDecorators.useMemo.reactDecorator"],
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                        fallback: null,
                        children: decorators[nodeKey]
                    })
                });
                const element = editor.getElementByKey(nodeKey);
                if (element !== null) {
                    decoratedPortals.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(reactDecorator, element, nodeKey));
                }
            }
            return decoratedPortals;
        }
    }["useDecorators.useMemo"], [
        ErrorBoundary,
        decorators,
        editor
    ]);
}
function isUsingReactExtension(editor) {
    const builder = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$extension$2f$LexicalExtension$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LexicalBuilder"].maybeFromEditor(editor);
    if (builder && builder.hasExtensionByName(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$react$2f$LexicalReactProviderExtension$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReactProviderExtension"].name)) {
        for (const name of [
            '@lexical/plain-text',
            '@lexical/rich-text'
        ]){
            if (!!builder.hasExtensionByName(name)) {
                formatDevErrorMessage(`LexicalBuilder: @lexical/react legacy text plugins conflict with the ${name} extension. Remove the legacy <RichTextPlugin/> or <PlainTextPlugin/> component.`);
            }
        }
        return true;
    }
    return false;
}
function Decorators({ editor, ErrorBoundary }) {
    return useDecorators(editor, ErrorBoundary);
}
/**
 * @internal
 *
 * When using @lexical/extension, the ReactProvider is expected to handle
 * rendering decorators. This component allows RichTextPlugin and
 * PlainTextPlugin to be used in extension projects that have not yet
 * migrated to use RichTextExtension or PlainTextExtension.
 **/ function LegacyDecorators({ editor, ErrorBoundary }) {
    return isUsingReactExtension(editor) ? null : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Decorators, {
        editor: editor,
        ErrorBoundary: ErrorBoundary
    });
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ function canShowPlaceholderFromCurrentEditorState(editor) {
    const currentCanShowPlaceholder = editor.getEditorState().read((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$text$2f$LexicalText$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$canShowPlaceholderCurry"])(editor.isComposing()));
    return currentCanShowPlaceholder;
}
function useCanShowPlaceholder(editor) {
    const [canShowPlaceholder, setCanShowPlaceholder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useCanShowPlaceholder.useState": ()=>canShowPlaceholderFromCurrentEditorState(editor)
    }["useCanShowPlaceholder.useState"]);
    useLayoutEffectImpl({
        "useCanShowPlaceholder.useLayoutEffectImpl": ()=>{
            function resetCanShowPlaceholder() {
                const currentCanShowPlaceholder = canShowPlaceholderFromCurrentEditorState(editor);
                setCanShowPlaceholder(currentCanShowPlaceholder);
            }
            resetCanShowPlaceholder();
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeRegister"])(editor.registerUpdateListener({
                "useCanShowPlaceholder.useLayoutEffectImpl": ()=>{
                    resetCanShowPlaceholder();
                }
            }["useCanShowPlaceholder.useLayoutEffectImpl"]), editor.registerEditableListener({
                "useCanShowPlaceholder.useLayoutEffectImpl": ()=>{
                    resetCanShowPlaceholder();
                }
            }["useCanShowPlaceholder.useLayoutEffectImpl"]));
        }
    }["useCanShowPlaceholder.useLayoutEffectImpl"], [
        editor
    ]);
    return canShowPlaceholder;
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ function useRichTextSetup(editor) {
    useLayoutEffectImpl({
        "useRichTextSetup.useLayoutEffectImpl": ()=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeRegister"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$rich$2d$text$2f$LexicalRichText$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerRichText"])(editor), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$dragon$2f$LexicalDragon$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerDragonSupport"])(editor));
        // We only do this for init
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["useRichTextSetup.useLayoutEffectImpl"], [
        editor
    ]);
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ function RichTextPlugin({ contentEditable, // TODO Remove. This property is now part of ContentEditable
placeholder = null, ErrorBoundary }) {
    const [editor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$react$2f$LexicalComposerContext$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLexicalComposerContext"])();
    useRichTextSetup(editor);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            contentEditable,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Placeholder, {
                content: placeholder
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(LegacyDecorators, {
                editor: editor,
                ErrorBoundary: ErrorBoundary
            })
        ]
    });
}
// TODO remove
function Placeholder({ content }) {
    const [editor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$react$2f$LexicalComposerContext$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLexicalComposerContext"])();
    const showPlaceholder = useCanShowPlaceholder(editor);
    const editable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$react$2f$useLexicalEditable$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLexicalEditable"])();
    if (!showPlaceholder) {
        return null;
    }
    if (typeof content === 'function') {
        return content(editable);
    } else {
        return content;
    }
}
;
}),
"[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/@lexical/react/LexicalContentEditable.dev.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContentEditable",
    ()=>ContentEditable,
    "ContentEditableElement",
    ()=>ContentEditableElement
]);
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$react$2f$LexicalComposerContext$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/@lexical/react/LexicalComposerContext.dev.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$text$2f$LexicalText$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/@lexical/text/LexicalText.dev.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/lexical/Lexical.dev.mjs [app-client] (ecmascript)");
;
;
;
;
;
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ const CAN_USE_DOM = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined';
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ // This workaround is no longer necessary in React 19,
// but we currently support React >=17.x
// https://github.com/facebook/react/pull/26395
const useLayoutEffectImpl = CAN_USE_DOM ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"];
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ function mergeRefs(...refs) {
    return (value)=>{
        for (const ref of refs){
            if (typeof ref === 'function') {
                ref(value);
            } else if (ref != null) {
                ref.current = value;
            }
        }
    };
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ function ContentEditableElementImpl({ editor, ariaActiveDescendant, ariaAutoComplete, ariaControls, ariaDescribedBy, ariaErrorMessage, ariaExpanded, ariaInvalid, ariaLabel, ariaLabelledBy, ariaMultiline, ariaOwns, ariaRequired, autoCapitalize, className, id, role = 'textbox', spellCheck = true, style, tabIndex, 'data-testid': testid, ...rest }, ref) {
    const [isEditable, setEditable] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(editor.isEditable());
    const handleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ContentEditableElementImpl.useCallback[handleRef]": (rootElement)=>{
            // defaultView is required for a root element.
            // In multi-window setups, the defaultView may not exist at certain points.
            if (rootElement && rootElement.ownerDocument && rootElement.ownerDocument.defaultView) {
                editor.setRootElement(rootElement);
            } else {
                editor.setRootElement(null);
            }
        }
    }["ContentEditableElementImpl.useCallback[handleRef]"], [
        editor
    ]);
    const mergedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ContentEditableElementImpl.useMemo[mergedRefs]": ()=>mergeRefs(ref, handleRef)
    }["ContentEditableElementImpl.useMemo[mergedRefs]"], [
        handleRef,
        ref
    ]);
    useLayoutEffectImpl({
        "ContentEditableElementImpl.useLayoutEffectImpl": ()=>{
            setEditable(editor.isEditable());
            return editor.registerEditableListener({
                "ContentEditableElementImpl.useLayoutEffectImpl": (currentIsEditable)=>{
                    setEditable(currentIsEditable);
                }
            }["ContentEditableElementImpl.useLayoutEffectImpl"]);
        }
    }["ContentEditableElementImpl.useLayoutEffectImpl"], [
        editor
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        "aria-activedescendant": isEditable ? ariaActiveDescendant : undefined,
        "aria-autocomplete": isEditable ? ariaAutoComplete : 'none',
        "aria-controls": isEditable ? ariaControls : undefined,
        "aria-describedby": ariaDescribedBy,
        ...ariaErrorMessage != null ? {
            'aria-errormessage': ariaErrorMessage
        } : {},
        "aria-expanded": isEditable && role === 'combobox' ? !!ariaExpanded : undefined,
        ...ariaInvalid != null ? {
            'aria-invalid': ariaInvalid
        } : {},
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        "aria-multiline": ariaMultiline,
        "aria-owns": isEditable ? ariaOwns : undefined,
        "aria-readonly": isEditable ? undefined : true,
        "aria-required": ariaRequired,
        autoCapitalize: autoCapitalize,
        className: className,
        contentEditable: isEditable,
        "data-testid": testid,
        id: id,
        ref: mergedRefs,
        role: role,
        spellCheck: spellCheck,
        style: style,
        tabIndex: tabIndex,
        ...rest
    });
}
const ContentEditableElement = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(ContentEditableElementImpl);
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ function canShowPlaceholderFromCurrentEditorState(editor) {
    const currentCanShowPlaceholder = editor.getEditorState().read((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$text$2f$LexicalText$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$canShowPlaceholderCurry"])(editor.isComposing()));
    return currentCanShowPlaceholder;
}
function useCanShowPlaceholder(editor) {
    const [canShowPlaceholder, setCanShowPlaceholder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useCanShowPlaceholder.useState": ()=>canShowPlaceholderFromCurrentEditorState(editor)
    }["useCanShowPlaceholder.useState"]);
    useLayoutEffectImpl({
        "useCanShowPlaceholder.useLayoutEffectImpl": ()=>{
            function resetCanShowPlaceholder() {
                const currentCanShowPlaceholder = canShowPlaceholderFromCurrentEditorState(editor);
                setCanShowPlaceholder(currentCanShowPlaceholder);
            }
            resetCanShowPlaceholder();
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeRegister"])(editor.registerUpdateListener({
                "useCanShowPlaceholder.useLayoutEffectImpl": ()=>{
                    resetCanShowPlaceholder();
                }
            }["useCanShowPlaceholder.useLayoutEffectImpl"]), editor.registerEditableListener({
                "useCanShowPlaceholder.useLayoutEffectImpl": ()=>{
                    resetCanShowPlaceholder();
                }
            }["useCanShowPlaceholder.useLayoutEffectImpl"]));
        }
    }["useCanShowPlaceholder.useLayoutEffectImpl"], [
        editor
    ]);
    return canShowPlaceholder;
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ /**
 * @deprecated This type has been renamed to `ContentEditableProps` to provide a clearer and more descriptive name.
 * For backward compatibility, this type is still exported as `Props`, but it is recommended to migrate to using `ContentEditableProps` instead.
 *
 * This alias is maintained for compatibility purposes but may be removed in future versions.
 * Please update your codebase to use `ContentEditableProps` to ensure long-term maintainability.
 */ const ContentEditable = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(ContentEditableImpl);
function ContentEditableImpl(props, ref) {
    const { placeholder, ...rest } = props;
    const [editor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$react$2f$LexicalComposerContext$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLexicalComposerContext"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ContentEditableElement, {
                editor: editor,
                ...rest,
                ref: ref
            }),
            placeholder != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Placeholder, {
                editor: editor,
                content: placeholder
            })
        ]
    });
}
function Placeholder({ content, editor }) {
    const showPlaceholder = useCanShowPlaceholder(editor);
    const [isEditable, setEditable] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(editor.isEditable());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "Placeholder.useLayoutEffect": ()=>{
            setEditable(editor.isEditable());
            return editor.registerEditableListener({
                "Placeholder.useLayoutEffect": (currentIsEditable)=>{
                    setEditable(currentIsEditable);
                }
            }["Placeholder.useLayoutEffect"]);
        }
    }["Placeholder.useLayoutEffect"], [
        editor
    ]);
    if (!showPlaceholder) {
        return null;
    }
    let placeholder = null;
    if (typeof content === 'function') {
        placeholder = content(isEditable);
    } else if (content !== null) {
        placeholder = content;
    }
    if (placeholder === null) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        "aria-hidden": true,
        children: placeholder
    });
}
;
}),
"[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/@lexical/history/LexicalHistory.dev.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HistoryExtension",
    ()=>HistoryExtension,
    "SharedHistoryExtension",
    ()=>SharedHistoryExtension,
    "createEmptyHistoryState",
    ()=>createEmptyHistoryState,
    "registerHistory",
    ()=>registerHistory
]);
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$extension$2f$LexicalExtension$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/@lexical/extension/LexicalExtension.dev.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/lexical/Lexical.dev.mjs [app-client] (ecmascript)");
;
;
;
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ const HISTORY_MERGE = 0;
const HISTORY_PUSH = 1;
const DISCARD_HISTORY_CANDIDATE = 2;
const OTHER = 0;
const COMPOSING_CHARACTER = 1;
const INSERT_CHARACTER_AFTER_SELECTION = 2;
const DELETE_CHARACTER_BEFORE_SELECTION = 3;
const DELETE_CHARACTER_AFTER_SELECTION = 4;
function getDirtyNodes(editorState, dirtyLeaves, dirtyElements) {
    const nodeMap = editorState._nodeMap;
    const nodes = [];
    for (const dirtyLeafKey of dirtyLeaves){
        const dirtyLeaf = nodeMap.get(dirtyLeafKey);
        if (dirtyLeaf !== undefined) {
            nodes.push(dirtyLeaf);
        }
    }
    for (const [dirtyElementKey, intentionallyMarkedAsDirty] of dirtyElements){
        if (!intentionallyMarkedAsDirty) {
            continue;
        }
        const dirtyElement = nodeMap.get(dirtyElementKey);
        if (dirtyElement !== undefined && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRootNode"])(dirtyElement)) {
            nodes.push(dirtyElement);
        }
    }
    return nodes;
}
function getChangeType(prevEditorState, nextEditorState, dirtyLeavesSet, dirtyElementsSet, isComposing) {
    if (prevEditorState === null || dirtyLeavesSet.size === 0 && dirtyElementsSet.size === 0 && !isComposing) {
        return OTHER;
    }
    const nextSelection = nextEditorState._selection;
    const prevSelection = prevEditorState._selection;
    if (isComposing) {
        return COMPOSING_CHARACTER;
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(nextSelection) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(prevSelection) || !prevSelection.isCollapsed() || !nextSelection.isCollapsed()) {
        return OTHER;
    }
    const dirtyNodes = getDirtyNodes(nextEditorState, dirtyLeavesSet, dirtyElementsSet);
    if (dirtyNodes.length === 0) {
        return OTHER;
    }
    // Catching the case when inserting new text node into an element (e.g. first char in paragraph/list),
    // or after existing node.
    if (dirtyNodes.length > 1) {
        const nextNodeMap = nextEditorState._nodeMap;
        const nextAnchorNode = nextNodeMap.get(nextSelection.anchor.key);
        const prevAnchorNode = nextNodeMap.get(prevSelection.anchor.key);
        if (nextAnchorNode && prevAnchorNode && !prevEditorState._nodeMap.has(nextAnchorNode.__key) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isTextNode"])(nextAnchorNode) && nextAnchorNode.__text.length === 1 && nextSelection.anchor.offset === 1) {
            return INSERT_CHARACTER_AFTER_SELECTION;
        }
        return OTHER;
    }
    const nextDirtyNode = dirtyNodes[0];
    const prevDirtyNode = prevEditorState._nodeMap.get(nextDirtyNode.__key);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isTextNode"])(prevDirtyNode) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isTextNode"])(nextDirtyNode) || prevDirtyNode.__mode !== nextDirtyNode.__mode) {
        return OTHER;
    }
    const prevText = prevDirtyNode.__text;
    const nextText = nextDirtyNode.__text;
    if (prevText === nextText) {
        return OTHER;
    }
    const nextAnchor = nextSelection.anchor;
    const prevAnchor = prevSelection.anchor;
    if (nextAnchor.key !== prevAnchor.key || nextAnchor.type !== 'text') {
        return OTHER;
    }
    const nextAnchorOffset = nextAnchor.offset;
    const prevAnchorOffset = prevAnchor.offset;
    const textDiff = nextText.length - prevText.length;
    if (textDiff === 1 && prevAnchorOffset === nextAnchorOffset - 1) {
        return INSERT_CHARACTER_AFTER_SELECTION;
    }
    if (textDiff === -1 && prevAnchorOffset === nextAnchorOffset + 1) {
        return DELETE_CHARACTER_BEFORE_SELECTION;
    }
    if (textDiff === -1 && prevAnchorOffset === nextAnchorOffset) {
        return DELETE_CHARACTER_AFTER_SELECTION;
    }
    return OTHER;
}
function isTextNodeUnchanged(key, prevEditorState, nextEditorState) {
    const prevNode = prevEditorState._nodeMap.get(key);
    const nextNode = nextEditorState._nodeMap.get(key);
    const prevSelection = prevEditorState._selection;
    const nextSelection = nextEditorState._selection;
    const isDeletingLine = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(prevSelection) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isRangeSelection"])(nextSelection) && prevSelection.anchor.type === 'element' && prevSelection.focus.type === 'element' && nextSelection.anchor.type === 'text' && nextSelection.focus.type === 'text';
    if (!isDeletingLine && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isTextNode"])(prevNode) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$isTextNode"])(nextNode) && prevNode.__parent === nextNode.__parent) {
        // This has the assumption that object key order won't change if the
        // content did not change, which should normally be safe given
        // the manner in which nodes and exportJSON are typically implemented.
        return JSON.stringify(prevEditorState.read(()=>prevNode.exportJSON())) === JSON.stringify(nextEditorState.read(()=>nextNode.exportJSON()));
    }
    return false;
}
function createMergeActionGetter(editor, delayOrStore) {
    let prevChangeTime = Date.now();
    let prevChangeType = OTHER;
    return (prevEditorState, nextEditorState, currentHistoryEntry, dirtyLeaves, dirtyElements, tags)=>{
        const changeTime = Date.now();
        // If applying changes from history stack there's no need
        // to run history logic again, as history entries already calculated
        if (tags.has(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HISTORIC_TAG"])) {
            prevChangeType = OTHER;
            prevChangeTime = changeTime;
            return DISCARD_HISTORY_CANDIDATE;
        }
        const changeType = getChangeType(prevEditorState, nextEditorState, dirtyLeaves, dirtyElements, editor.isComposing());
        const mergeAction = (()=>{
            const isSameEditor = currentHistoryEntry === null || currentHistoryEntry.editor === editor;
            const shouldPushHistory = tags.has(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HISTORY_PUSH_TAG"]);
            const shouldMergeHistory = !shouldPushHistory && isSameEditor && tags.has(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HISTORY_MERGE_TAG"]);
            if (shouldMergeHistory) {
                return HISTORY_MERGE;
            }
            if (prevEditorState === null) {
                return HISTORY_PUSH;
            }
            const selection = nextEditorState._selection;
            const hasDirtyNodes = dirtyLeaves.size > 0 || dirtyElements.size > 0;
            if (!hasDirtyNodes) {
                if (selection !== null) {
                    return HISTORY_MERGE;
                }
                return DISCARD_HISTORY_CANDIDATE;
            }
            const delay = typeof delayOrStore === 'number' ? delayOrStore : delayOrStore.peek();
            if (shouldPushHistory === false && changeType !== OTHER && changeType === prevChangeType && changeTime < prevChangeTime + delay && isSameEditor) {
                return HISTORY_MERGE;
            }
            // A single node might have been marked as dirty, but not have changed
            // due to some node transform reverting the change.
            if (dirtyLeaves.size === 1) {
                const dirtyLeafKey = Array.from(dirtyLeaves)[0];
                if (isTextNodeUnchanged(dirtyLeafKey, prevEditorState, nextEditorState)) {
                    return HISTORY_MERGE;
                }
            }
            return HISTORY_PUSH;
        })();
        prevChangeTime = changeTime;
        prevChangeType = changeType;
        return mergeAction;
    };
}
function redo(editor, historyState) {
    const redoStack = historyState.redoStack;
    const undoStack = historyState.undoStack;
    if (redoStack.length !== 0) {
        const current = historyState.current;
        if (current !== null) {
            undoStack.push(current);
            editor.dispatchCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CAN_UNDO_COMMAND"], true);
        }
        const historyStateEntry = redoStack.pop();
        if (redoStack.length === 0) {
            editor.dispatchCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CAN_REDO_COMMAND"], false);
        }
        historyState.current = historyStateEntry || null;
        if (historyStateEntry) {
            historyStateEntry.editor.setEditorState(historyStateEntry.editorState, {
                tag: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HISTORIC_TAG"]
            });
        }
    }
}
function undo(editor, historyState) {
    const redoStack = historyState.redoStack;
    const undoStack = historyState.undoStack;
    const undoStackLength = undoStack.length;
    if (undoStackLength !== 0) {
        const current = historyState.current;
        const historyStateEntry = undoStack.pop();
        if (current !== null) {
            redoStack.push(current);
            editor.dispatchCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CAN_REDO_COMMAND"], true);
        }
        if (undoStack.length === 0) {
            editor.dispatchCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CAN_UNDO_COMMAND"], false);
        }
        historyState.current = historyStateEntry || null;
        if (historyStateEntry) {
            historyStateEntry.editor.setEditorState(historyStateEntry.editorState, {
                tag: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HISTORIC_TAG"]
            });
        }
    }
}
function clearHistory(historyState) {
    historyState.undoStack = [];
    historyState.redoStack = [];
    historyState.current = null;
}
/**
 * Registers necessary listeners to manage undo/redo history stack and related editor commands.
 * It returns `unregister` callback that cleans up all listeners and should be called on editor unmount.
 * @param editor - The lexical editor.
 * @param historyState - The history state, containing the current state and the undo/redo stack.
 * @param delay - The time (in milliseconds) the editor should delay generating a new history stack,
 * instead of merging the current changes with the current stack.
 * @returns The listeners cleanup callback function.
 */ function registerHistory(editor, historyState, delay) {
    const getMergeAction = createMergeActionGetter(editor, delay);
    const applyChange = ({ editorState, prevEditorState, dirtyLeaves, dirtyElements, tags })=>{
        const current = historyState.current;
        const redoStack = historyState.redoStack;
        const undoStack = historyState.undoStack;
        const currentEditorState = current === null ? null : current.editorState;
        if (current !== null && editorState === currentEditorState) {
            return;
        }
        const mergeAction = getMergeAction(prevEditorState, editorState, current, dirtyLeaves, dirtyElements, tags);
        if (mergeAction === HISTORY_PUSH) {
            if (redoStack.length !== 0) {
                historyState.redoStack = [];
                editor.dispatchCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CAN_REDO_COMMAND"], false);
            }
            if (current !== null) {
                undoStack.push({
                    ...current
                });
                editor.dispatchCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CAN_UNDO_COMMAND"], true);
            }
        } else if (mergeAction === DISCARD_HISTORY_CANDIDATE) {
            return;
        }
        // Else we merge
        historyState.current = {
            editor,
            editorState
        };
    };
    const unregister = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeRegister"])(editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNDO_COMMAND"], ()=>{
        undo(editor, historyState);
        return true;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REDO_COMMAND"], ()=>{
        redo(editor, historyState);
        return true;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CLEAR_EDITOR_COMMAND"], ()=>{
        clearHistory(historyState);
        return false;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CLEAR_HISTORY_COMMAND"], ()=>{
        clearHistory(historyState);
        editor.dispatchCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CAN_REDO_COMMAND"], false);
        editor.dispatchCommand(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CAN_UNDO_COMMAND"], false);
        return true;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMAND_PRIORITY_EDITOR"]), editor.registerUpdateListener(applyChange));
    return unregister;
}
/**
 * Creates an empty history state.
 * @returns - The empty history state, as an object.
 */ function createEmptyHistoryState() {
    return {
        current: null,
        redoStack: [],
        undoStack: []
    };
}
/**
 * Registers necessary listeners to manage undo/redo history stack and related
 * editor commands, via the \@lexical/history module.
 */ const HistoryExtension = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineExtension"])({
    build: (editor, { delay, createInitialHistoryState, disabled })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$extension$2f$LexicalExtension$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["namedSignals"])({
            delay,
            disabled,
            historyState: createInitialHistoryState(editor)
        }),
    config: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeCast"])({
        createInitialHistoryState: createEmptyHistoryState,
        delay: 300,
        disabled: typeof window === 'undefined'
    }),
    name: '@lexical/history/History',
    register: (editor, config, state)=>{
        const stores = state.getOutput();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$extension$2f$LexicalExtension$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["effect"])(()=>stores.disabled.value ? undefined : registerHistory(editor, stores.historyState.value, stores.delay));
    }
});
function getHistoryPeer(editor) {
    return editor ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$extension$2f$LexicalExtension$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getPeerDependencyFromEditor"])(editor, HistoryExtension.name) : null;
}
/**
 * Registers necessary listeners to manage undo/redo history stack and related
 * editor commands, via the \@lexical/history module, only if the parent editor
 * has a history plugin implementation.
 */ const SharedHistoryExtension = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineExtension"])({
    dependencies: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["configExtension"])(HistoryExtension, {
            createInitialHistoryState: ()=>{
                throw new Error('SharedHistory did not inherit parent history');
            },
            disabled: true
        })
    ],
    name: '@lexical/history/SharedHistory',
    register (editor, _config, state) {
        const { output } = state.getDependency(HistoryExtension);
        const parentPeer = getHistoryPeer(editor._parentEditor);
        if (!parentPeer) {
            return ()=>{};
        }
        const parentOutput = parentPeer.output;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$extension$2f$LexicalExtension$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["effect"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$extension$2f$LexicalExtension$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["batch"])(()=>{
                output.delay.value = parentOutput.delay.value;
                output.historyState.value = parentOutput.historyState.value;
                // Note that toggling the parent history will force this to be changed
                output.disabled.value = parentOutput.disabled.value;
            }));
    }
});
;
}),
"[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/@lexical/react/LexicalHistoryPlugin.dev.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HistoryPlugin",
    ()=>HistoryPlugin
]);
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$react$2f$LexicalComposerContext$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/@lexical/react/LexicalComposerContext.dev.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$history$2f$LexicalHistory$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/@lexical/history/LexicalHistory.dev.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
;
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ function useHistory(editor, externalHistoryState, delay = 1000) {
    const historyState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useHistory.useMemo[historyState]": ()=>externalHistoryState || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$history$2f$LexicalHistory$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEmptyHistoryState"])()
    }["useHistory.useMemo[historyState]"], [
        externalHistoryState
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useHistory.useEffect": ()=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$history$2f$LexicalHistory$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerHistory"])(editor, historyState, delay);
        }
    }["useHistory.useEffect"], [
        delay,
        editor,
        historyState
    ]);
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ function HistoryPlugin({ delay, externalHistoryState }) {
    const [editor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$react$2f$LexicalComposerContext$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLexicalComposerContext"])();
    useHistory(editor, externalHistoryState, delay);
    return null;
}
;
}),
"[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/@lexical/react/LexicalOnChangePlugin.dev.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OnChangePlugin",
    ()=>OnChangePlugin
]);
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$react$2f$LexicalComposerContext$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/@lexical/react/LexicalComposerContext.dev.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/lexical/Lexical.dev.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ const CAN_USE_DOM = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined';
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ // This workaround is no longer necessary in React 19,
// but we currently support React >=17.x
// https://github.com/facebook/react/pull/26395
const useLayoutEffectImpl = CAN_USE_DOM ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"];
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ function OnChangePlugin({ ignoreHistoryMergeTagChange = true, ignoreSelectionChange = false, onChange }) {
    const [editor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$lexical$2f$react$2f$LexicalComposerContext$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLexicalComposerContext"])();
    useLayoutEffectImpl({
        "OnChangePlugin.useLayoutEffectImpl": ()=>{
            if (onChange) {
                return editor.registerUpdateListener({
                    "OnChangePlugin.useLayoutEffectImpl": ({ editorState, dirtyElements, dirtyLeaves, prevEditorState, tags })=>{
                        if (ignoreSelectionChange && dirtyElements.size === 0 && dirtyLeaves.size === 0 || ignoreHistoryMergeTagChange && tags.has(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$lexical$2f$Lexical$2e$dev$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HISTORY_MERGE_TAG"]) || prevEditorState.isEmpty()) {
                            return;
                        }
                        onChange(editorState, editor, tags);
                    }
                }["OnChangePlugin.useLayoutEffectImpl"]);
            }
        }
    }["OnChangePlugin.useLayoutEffectImpl"], [
        editor,
        ignoreHistoryMergeTagChange,
        ignoreSelectionChange,
        onChange
    ]);
    return null;
}
;
}),
]);

//# sourceMappingURL=9a37d_4166269c._.js.map