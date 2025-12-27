import { r as reactExports, b as reactDomExports } from "./mui-BeFIxXnL.js";
const MODULE_CAROUSEL = "carousel";
const MODULE_CONTROLLER = "controller";
const MODULE_NAVIGATION = "navigation";
const MODULE_NO_SCROLL = "no-scroll";
const MODULE_PORTAL = "portal";
const MODULE_ROOT = "root";
const MODULE_TOOLBAR = "toolbar";
const PLUGIN_CAPTIONS = "captions";
const SLIDE_STATUS_LOADING = "loading";
const SLIDE_STATUS_ERROR = "error";
const SLIDE_STATUS_COMPLETE = "complete";
const SLIDE_STATUS_PLACEHOLDER = "placeholder";
const activeSlideStatus = (status) => `active-slide-${status}`;
const CLASS_FLEX_CENTER = "flex_center";
const CLASS_NO_SCROLL = "no_scroll";
const CLASS_NO_SCROLL_PADDING = "no_scroll_padding";
const CLASS_SLIDE = "slide";
const CLASS_SLIDE_WRAPPER = "slide_wrapper";
const ACTION_PREV = "prev";
const ACTION_NEXT = "next";
const ACTION_SWIPE = "swipe";
const ACTION_CLOSE = "close";
const EVENT_ON_POINTER_DOWN = "onPointerDown";
const EVENT_ON_POINTER_MOVE = "onPointerMove";
const EVENT_ON_POINTER_UP = "onPointerUp";
const EVENT_ON_POINTER_LEAVE = "onPointerLeave";
const EVENT_ON_POINTER_CANCEL = "onPointerCancel";
const EVENT_ON_KEY_DOWN = "onKeyDown";
const EVENT_ON_KEY_UP = "onKeyUp";
const EVENT_ON_WHEEL = "onWheel";
const VK_ESCAPE = "Escape";
const VK_ARROW_LEFT = "ArrowLeft";
const VK_ARROW_RIGHT = "ArrowRight";
const ELEMENT_BUTTON = "button";
const ELEMENT_ICON = "icon";
const IMAGE_FIT_CONTAIN = "contain";
const IMAGE_FIT_COVER = "cover";
const UNKNOWN_ACTION_TYPE = "Unknown action type";
const cssPrefix$3 = "yarl__";
function clsx(...classes) {
  return [...classes].filter(Boolean).join(" ");
}
function cssClass(name) {
  return `${cssPrefix$3}${name}`;
}
function cssVar(name) {
  return `--${cssPrefix$3}${name}`;
}
function composePrefix(base, prefix) {
  return `${base}${prefix ? `_${prefix}` : ""}`;
}
function makeComposePrefix(base) {
  return (prefix) => composePrefix(base, prefix);
}
function translateLabel(labels, defaultLabel) {
  var _a;
  return (_a = labels === null || labels === void 0 ? void 0 : labels[defaultLabel]) !== null && _a !== void 0 ? _a : defaultLabel;
}
function translateSlideCounter(labels, slides, index) {
  return translateLabel(labels, "{index} of {total}").replace(/\{index}/g, `${getSlideIndex(index, slides.length) + 1}`).replace(/\{total}/g, `${slides.length}`);
}
function cleanup(...cleaners) {
  return () => {
    cleaners.forEach((cleaner) => {
      cleaner();
    });
  };
}
function makeUseContext(name, contextName, context) {
  return () => {
    const ctx = reactExports.useContext(context);
    if (!ctx) {
      throw new Error(`${name} must be used within a ${contextName}.Provider`);
    }
    return ctx;
  };
}
function hasWindow() {
  return typeof window !== "undefined";
}
function round(value, decimals = 0) {
  const factor = 10 ** decimals;
  return Math.round((value + Number.EPSILON) * factor) / factor;
}
function isImageSlide(slide) {
  return slide.type === void 0 || slide.type === "image";
}
function isImageFitCover(image, imageFit) {
  return image.imageFit === IMAGE_FIT_COVER || image.imageFit !== IMAGE_FIT_CONTAIN && imageFit === IMAGE_FIT_COVER;
}
function parseInt(value) {
  return typeof value === "string" ? Number.parseInt(value, 10) : value;
}
function parseLengthPercentage(input) {
  if (typeof input === "number") {
    return { pixel: input };
  }
  if (typeof input === "string") {
    const value = parseInt(input);
    return input.endsWith("%") ? { percent: value } : { pixel: value };
  }
  return { pixel: 0 };
}
function computeSlideRect(containerRect, padding) {
  const paddingValue = parseLengthPercentage(padding);
  const paddingPixels = paddingValue.percent !== void 0 ? containerRect.width / 100 * paddingValue.percent : paddingValue.pixel;
  return {
    width: Math.max(containerRect.width - 2 * paddingPixels, 0),
    height: Math.max(containerRect.height - 2 * paddingPixels, 0)
  };
}
function getSlideIndex(index, slidesCount) {
  return slidesCount > 0 ? (index % slidesCount + slidesCount) % slidesCount : 0;
}
function hasSlides(slides) {
  return slides.length > 0;
}
function getSlide(slides, index) {
  return slides[getSlideIndex(index, slides.length)];
}
function getSlideIfPresent(slides, index) {
  return hasSlides(slides) ? getSlide(slides, index) : void 0;
}
function getSlideKey(slide) {
  return isImageSlide(slide) ? slide.src : void 0;
}
function addToolbarButton(toolbar, key, button) {
  if (!button)
    return toolbar;
  const { buttons, ...restToolbar } = toolbar;
  const index = buttons.findIndex((item) => item === key);
  const buttonWithKey = reactExports.isValidElement(button) ? reactExports.cloneElement(button, { key }, null) : button;
  if (index >= 0) {
    const result = [...buttons];
    result.splice(index, 1, buttonWithKey);
    return { buttons: result, ...restToolbar };
  }
  return { buttons: [buttonWithKey, ...buttons], ...restToolbar };
}
function calculatePreload(carousel, slides, minimum = 0) {
  return Math.min(carousel.preload, Math.max(carousel.finite ? slides.length - 1 : Math.floor(slides.length / 2), minimum));
}
const isReact19 = Number(reactExports.version.split(".")[0]) >= 19;
function makeInertWhen(condition) {
  const legacyValue = condition ? "" : void 0;
  return { inert: isReact19 ? condition : legacyValue };
}
function reflow(node) {
  node.scrollTop;
}
const LightboxDefaultProps = {
  open: false,
  close: () => {
  },
  index: 0,
  slides: [],
  render: {},
  plugins: [],
  toolbar: { buttons: [ACTION_CLOSE] },
  labels: {},
  animation: {
    fade: 250,
    swipe: 500,
    easing: {
      fade: "ease",
      swipe: "ease-out",
      navigation: "ease-in-out"
    }
  },
  carousel: {
    finite: false,
    preload: 2,
    padding: "16px",
    spacing: "30%",
    imageFit: IMAGE_FIT_CONTAIN,
    imageProps: {}
  },
  controller: {
    ref: null,
    focus: true,
    aria: false,
    touchAction: "none",
    closeOnPullUp: false,
    closeOnPullDown: false,
    closeOnBackdropClick: false,
    preventDefaultWheelX: true,
    preventDefaultWheelY: false,
    disableSwipeNavigation: false
  },
  portal: {},
  noScroll: {
    disabled: false
  },
  on: {},
  styles: {},
  className: ""
};
function createModule(name, component) {
  return { name, component };
}
function createNode(module, children) {
  return { module, children };
}
function traverseNode(node, target, apply) {
  if (node.module.name === target) {
    return apply(node);
  }
  if (node.children) {
    return [
      createNode(node.module, node.children.flatMap((n) => {
        var _a;
        return (_a = traverseNode(n, target, apply)) !== null && _a !== void 0 ? _a : [];
      }))
    ];
  }
  return [node];
}
function traverse(nodes, target, apply) {
  return nodes.flatMap((node) => {
    var _a;
    return (_a = traverseNode(node, target, apply)) !== null && _a !== void 0 ? _a : [];
  });
}
function withPlugins(root, plugins = [], augmentations = []) {
  let config = root;
  const contains = (target) => {
    const nodes = [...config];
    while (nodes.length > 0) {
      const node = nodes.pop();
      if ((node === null || node === void 0 ? void 0 : node.module.name) === target)
        return true;
      if (node === null || node === void 0 ? void 0 : node.children)
        nodes.push(...node.children);
    }
    return false;
  };
  const addParent = (target, module) => {
    if (target === "") {
      config = [createNode(module, config)];
      return;
    }
    config = traverse(config, target, (node) => [createNode(module, [node])]);
  };
  const append = (target, module) => {
    config = traverse(config, target, (node) => [createNode(node.module, [createNode(module, node.children)])]);
  };
  const addChild = (target, module, precede) => {
    config = traverse(config, target, (node) => {
      var _a;
      return [
        createNode(node.module, [
          ...precede ? [createNode(module)] : [],
          ...(_a = node.children) !== null && _a !== void 0 ? _a : [],
          ...!precede ? [createNode(module)] : []
        ])
      ];
    });
  };
  const addSibling = (target, module, precede) => {
    config = traverse(config, target, (node) => [
      ...precede ? [createNode(module)] : [],
      node,
      ...!precede ? [createNode(module)] : []
    ]);
  };
  const addModule = (module) => {
    append(MODULE_CONTROLLER, module);
  };
  const replace = (target, module) => {
    config = traverse(config, target, (node) => [createNode(module, node.children)]);
  };
  const remove = (target) => {
    config = traverse(config, target, (node) => node.children);
  };
  const augment = (augmentation) => {
    augmentations.push(augmentation);
  };
  plugins.forEach((plugin) => {
    plugin({
      contains,
      addParent,
      append,
      addChild,
      addSibling,
      addModule,
      replace,
      remove,
      augment
    });
  });
  return {
    config,
    augmentation: (props) => augmentations.reduce((acc, augmentation) => augmentation(acc), props)
  };
}
const A11yContext = reactExports.createContext(null);
const useA11yContext = makeUseContext("useA11yContext", "A11yContext", A11yContext);
function A11yContextProvider({ children }) {
  const [focusWithin, setFocusWithin] = reactExports.useState(false);
  const [autoPlaying, setAutoPlaying] = reactExports.useState(false);
  const context = reactExports.useMemo(() => {
    const trackFocusWithin = (onFocus, onBlur) => {
      const trackAndDelegate = (focusWithinValue) => (event) => {
        var _a;
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setFocusWithin(focusWithinValue);
        }
        (_a = focusWithinValue ? onFocus : onBlur) === null || _a === void 0 ? void 0 : _a(event);
      };
      return {
        onFocus: trackAndDelegate(true),
        onBlur: trackAndDelegate(false)
      };
    };
    return { focusWithin, trackFocusWithin, autoPlaying, setAutoPlaying };
  }, [focusWithin, autoPlaying]);
  return reactExports.createElement(A11yContext.Provider, { value: context }, children);
}
const DocumentContext = reactExports.createContext(null);
const useDocumentContext = makeUseContext("useDocument", "DocumentContext", DocumentContext);
function DocumentContextProvider({ nodeRef, children }) {
  const context = reactExports.useMemo(() => {
    const getOwnerDocument = (node) => {
      var _a;
      return ((_a = node || nodeRef.current) === null || _a === void 0 ? void 0 : _a.ownerDocument) || document;
    };
    const getOwnerWindow = (node) => {
      var _a;
      return ((_a = getOwnerDocument(node)) === null || _a === void 0 ? void 0 : _a.defaultView) || window;
    };
    return { getOwnerDocument, getOwnerWindow };
  }, [nodeRef]);
  return reactExports.createElement(DocumentContext.Provider, { value: context }, children);
}
const EventsContext = reactExports.createContext(null);
const useEvents = makeUseContext("useEvents", "EventsContext", EventsContext);
function EventsProvider({ children }) {
  const [subscriptions] = reactExports.useState({});
  reactExports.useEffect(() => () => {
    Object.keys(subscriptions).forEach((topic) => delete subscriptions[topic]);
  }, [subscriptions]);
  const context = reactExports.useMemo(() => {
    const unsubscribe = (topic, callback) => {
      var _a;
      (_a = subscriptions[topic]) === null || _a === void 0 ? void 0 : _a.splice(0, subscriptions[topic].length, ...subscriptions[topic].filter((cb) => cb !== callback));
    };
    const subscribe = (topic, callback) => {
      if (!subscriptions[topic]) {
        subscriptions[topic] = [];
      }
      subscriptions[topic].push(callback);
      return () => unsubscribe(topic, callback);
    };
    const publish = (...[topic, event]) => {
      var _a;
      (_a = subscriptions[topic]) === null || _a === void 0 ? void 0 : _a.forEach((callback) => callback(event));
    };
    return { publish, subscribe, unsubscribe };
  }, [subscriptions]);
  return reactExports.createElement(EventsContext.Provider, { value: context }, children);
}
const LightboxPropsContext = reactExports.createContext(null);
const useLightboxProps = makeUseContext("useLightboxProps", "LightboxPropsContext", LightboxPropsContext);
function LightboxPropsProvider({ children, ...props }) {
  return reactExports.createElement(LightboxPropsContext.Provider, { value: props }, children);
}
const LightboxStateContext = reactExports.createContext(null);
const useLightboxState = makeUseContext("useLightboxState", "LightboxStateContext", LightboxStateContext);
const LightboxDispatchContext = reactExports.createContext(null);
const useLightboxDispatch = makeUseContext("useLightboxDispatch", "LightboxDispatchContext", LightboxDispatchContext);
function reducer(state, action) {
  switch (action.type) {
    case "swipe": {
      const { slides } = state;
      const increment = (action === null || action === void 0 ? void 0 : action.increment) || 0;
      const globalIndex = state.globalIndex + increment;
      const currentIndex = getSlideIndex(globalIndex, slides.length);
      const currentSlide = getSlideIfPresent(slides, currentIndex);
      const animation = increment || action.duration !== void 0 ? {
        increment,
        duration: action.duration,
        easing: action.easing
      } : void 0;
      return { slides, currentIndex, globalIndex, currentSlide, animation };
    }
    case "update":
      if (action.slides !== state.slides || action.index !== state.currentIndex) {
        return {
          slides: action.slides,
          currentIndex: action.index,
          globalIndex: action.index,
          currentSlide: getSlideIfPresent(action.slides, action.index)
        };
      }
      return state;
    default:
      throw new Error(UNKNOWN_ACTION_TYPE);
  }
}
function LightboxStateProvider({ slides, index, children }) {
  const [state, dispatch] = reactExports.useReducer(reducer, {
    slides,
    currentIndex: index,
    globalIndex: index,
    currentSlide: getSlideIfPresent(slides, index)
  });
  reactExports.useEffect(() => {
    dispatch({ type: "update", slides, index });
  }, [slides, index]);
  const context = reactExports.useMemo(() => ({ ...state, state, dispatch }), [state, dispatch]);
  return reactExports.createElement(
    LightboxDispatchContext.Provider,
    { value: dispatch },
    reactExports.createElement(LightboxStateContext.Provider, { value: context }, children)
  );
}
const TimeoutsContext = reactExports.createContext(null);
const useTimeouts = makeUseContext("useTimeouts", "TimeoutsContext", TimeoutsContext);
function TimeoutsProvider({ children }) {
  const [timeouts] = reactExports.useState([]);
  reactExports.useEffect(() => () => {
    timeouts.forEach((tid) => window.clearTimeout(tid));
    timeouts.splice(0, timeouts.length);
  }, [timeouts]);
  const context = reactExports.useMemo(() => {
    const removeTimeout = (id) => {
      timeouts.splice(0, timeouts.length, ...timeouts.filter((tid) => tid !== id));
    };
    const setTimeout = (fn, delay) => {
      const id = window.setTimeout(() => {
        removeTimeout(id);
        fn();
      }, delay);
      timeouts.push(id);
      return id;
    };
    const clearTimeout = (id) => {
      if (id !== void 0) {
        removeTimeout(id);
        window.clearTimeout(id);
      }
    };
    return { setTimeout, clearTimeout };
  }, [timeouts]);
  return reactExports.createElement(TimeoutsContext.Provider, { value: context }, children);
}
const IconButton = reactExports.forwardRef(function IconButton2({ label, className, icon: Icon, renderIcon, onClick, style, ...rest }, ref) {
  const { styles, labels } = useLightboxProps();
  const buttonLabel = translateLabel(labels, label);
  return reactExports.createElement("button", { ref, type: "button", title: buttonLabel, "aria-label": buttonLabel, className: clsx(cssClass(ELEMENT_BUTTON), className), onClick, style: { ...style, ...styles.button }, ...rest }, renderIcon ? renderIcon() : reactExports.createElement(Icon, { className: cssClass(ELEMENT_ICON), style: styles.icon }));
});
function svgIcon(name, children) {
  const icon = (props) => reactExports.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24", "aria-hidden": "true", focusable: "false", ...props }, children);
  icon.displayName = name;
  return icon;
}
function createIcon(name, glyph) {
  return svgIcon(name, reactExports.createElement(
    "g",
    { fill: "currentColor" },
    reactExports.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
    glyph
  ));
}
function createIconDisabled(name, glyph) {
  return svgIcon(name, reactExports.createElement(
    reactExports.Fragment,
    null,
    reactExports.createElement(
      "defs",
      null,
      reactExports.createElement(
        "mask",
        { id: "strike" },
        reactExports.createElement("path", { d: "M0 0h24v24H0z", fill: "white" }),
        reactExports.createElement("path", { d: "M0 0L24 24", stroke: "black", strokeWidth: 4 })
      )
    ),
    reactExports.createElement("path", { d: "M0.70707 2.121320L21.878680 23.292883", stroke: "currentColor", strokeWidth: 2 }),
    reactExports.createElement(
      "g",
      { fill: "currentColor", mask: "url(#strike)" },
      reactExports.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
      glyph
    )
  ));
}
const CloseIcon = createIcon("Close", reactExports.createElement("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }));
const PreviousIcon = createIcon("Previous", reactExports.createElement("path", { d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" }));
const NextIcon = createIcon("Next", reactExports.createElement("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" }));
const LoadingIcon = createIcon("Loading", reactExports.createElement(reactExports.Fragment, null, Array.from({ length: 8 }).map((_, index, array) => reactExports.createElement("line", { key: index, x1: "12", y1: "6.5", x2: "12", y2: "1.8", strokeLinecap: "round", strokeWidth: "2.6", stroke: "currentColor", strokeOpacity: 1 / array.length * (index + 1), transform: `rotate(${360 / array.length * index}, 12, 12)` }))));
const ErrorIcon = createIcon("Error", reactExports.createElement("path", { d: "M21.9,21.9l-8.49-8.49l0,0L3.59,3.59l0,0L2.1,2.1L0.69,3.51L3,5.83V19c0,1.1,0.9,2,2,2h13.17l2.31,2.31L21.9,21.9z M5,18 l3.5-4.5l2.5,3.01L12.17,15l3,3H5z M21,18.17L5.83,3H19c1.1,0,2,0.9,2,2V18.17z" }));
const useLayoutEffect = hasWindow() ? reactExports.useLayoutEffect : reactExports.useEffect;
function useMotionPreference() {
  const [reduceMotion, setReduceMotion] = reactExports.useState(false);
  reactExports.useEffect(() => {
    var _a, _b;
    const mediaQuery = (_a = window.matchMedia) === null || _a === void 0 ? void 0 : _a.call(window, "(prefers-reduced-motion: reduce)");
    setReduceMotion(mediaQuery === null || mediaQuery === void 0 ? void 0 : mediaQuery.matches);
    const listener = (event) => setReduceMotion(event.matches);
    (_b = mediaQuery === null || mediaQuery === void 0 ? void 0 : mediaQuery.addEventListener) === null || _b === void 0 ? void 0 : _b.call(mediaQuery, "change", listener);
    return () => {
      var _a2;
      return (_a2 = mediaQuery === null || mediaQuery === void 0 ? void 0 : mediaQuery.removeEventListener) === null || _a2 === void 0 ? void 0 : _a2.call(mediaQuery, "change", listener);
    };
  }, []);
  return reduceMotion;
}
function currentTransformation(node) {
  let x = 0;
  let y = 0;
  let z = 0;
  const matrix = window.getComputedStyle(node).transform;
  const matcher = matrix.match(/matrix.*\((.+)\)/);
  if (matcher) {
    const values = matcher[1].split(",").map(parseInt);
    if (values.length === 6) {
      x = values[4];
      y = values[5];
    } else if (values.length === 16) {
      x = values[12];
      y = values[13];
      z = values[14];
    }
  }
  return { x, y, z };
}
function useAnimation(nodeRef, computeAnimation) {
  const snapshot = reactExports.useRef(void 0);
  const animation = reactExports.useRef(void 0);
  const reduceMotion = useMotionPreference();
  useLayoutEffect(() => {
    var _a, _b, _c;
    if (nodeRef.current && snapshot.current !== void 0 && !reduceMotion) {
      const { keyframes, duration, easing, onfinish } = computeAnimation(snapshot.current, nodeRef.current.getBoundingClientRect(), currentTransformation(nodeRef.current)) || {};
      if (keyframes && duration) {
        (_a = animation.current) === null || _a === void 0 ? void 0 : _a.cancel();
        animation.current = void 0;
        try {
          animation.current = (_c = (_b = nodeRef.current).animate) === null || _c === void 0 ? void 0 : _c.call(_b, keyframes, { duration, easing });
        } catch (err) {
          console.error(err);
        }
        if (animation.current) {
          animation.current.onfinish = () => {
            animation.current = void 0;
            onfinish === null || onfinish === void 0 ? void 0 : onfinish();
          };
        }
      }
    }
    snapshot.current = void 0;
  });
  return {
    prepareAnimation: (currentSnapshot) => {
      snapshot.current = currentSnapshot;
    },
    isAnimationPlaying: () => {
      var _a;
      return ((_a = animation.current) === null || _a === void 0 ? void 0 : _a.playState) === "running";
    }
  };
}
function useContainerRect() {
  const containerRef = reactExports.useRef(null);
  const observerRef = reactExports.useRef(void 0);
  const [containerRect, setContainerRect] = reactExports.useState();
  const setContainerRef = reactExports.useCallback((node) => {
    containerRef.current = node;
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = void 0;
    }
    const updateContainerRect = () => {
      if (node) {
        const styles = window.getComputedStyle(node);
        const parse = (value) => parseFloat(value) || 0;
        setContainerRect({
          width: Math.round(node.clientWidth - parse(styles.paddingLeft) - parse(styles.paddingRight)),
          height: Math.round(node.clientHeight - parse(styles.paddingTop) - parse(styles.paddingBottom))
        });
      } else {
        setContainerRect(void 0);
      }
    };
    updateContainerRect();
    if (node && typeof ResizeObserver !== "undefined") {
      observerRef.current = new ResizeObserver(updateContainerRect);
      observerRef.current.observe(node);
    }
  }, []);
  return { setContainerRef, containerRef, containerRect };
}
function useDelay() {
  const timeoutId = reactExports.useRef(void 0);
  const { setTimeout, clearTimeout } = useTimeouts();
  return reactExports.useCallback((callback, delay) => {
    clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(callback, delay > 0 ? delay : 0);
  }, [setTimeout, clearTimeout]);
}
function useEventCallback(fn) {
  const ref = reactExports.useRef(fn);
  useLayoutEffect(() => {
    ref.current = fn;
  });
  return reactExports.useCallback((...args) => {
    var _a;
    return (_a = ref.current) === null || _a === void 0 ? void 0 : _a.call(ref, ...args);
  }, []);
}
function setRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}
function useForkRef(refA, refB) {
  return reactExports.useMemo(() => refA == null && refB == null ? null : (refValue) => {
    setRef(refA, refValue);
    setRef(refB, refValue);
  }, [refA, refB]);
}
function useLoseFocus(focus, disabled = false) {
  const focused = reactExports.useRef(false);
  useLayoutEffect(() => {
    if (disabled && focused.current) {
      focused.current = false;
      focus();
    }
  }, [disabled, focus]);
  const onFocus = reactExports.useCallback(() => {
    focused.current = true;
  }, []);
  const onBlur = reactExports.useCallback(() => {
    focused.current = false;
  }, []);
  return { onFocus, onBlur };
}
function useRTL() {
  const [isRTL, setIsRTL] = reactExports.useState(false);
  useLayoutEffect(() => {
    setIsRTL(window.getComputedStyle(window.document.documentElement).direction === "rtl");
  }, []);
  return isRTL;
}
function useSensors() {
  const [subscribers] = reactExports.useState({});
  const notifySubscribers = reactExports.useCallback((type, event) => {
    var _a;
    (_a = subscribers[type]) === null || _a === void 0 ? void 0 : _a.forEach((listener) => {
      if (!event.isPropagationStopped())
        listener(event);
    });
  }, [subscribers]);
  const registerSensors = reactExports.useMemo(() => ({
    onPointerDown: (event) => notifySubscribers(EVENT_ON_POINTER_DOWN, event),
    onPointerMove: (event) => notifySubscribers(EVENT_ON_POINTER_MOVE, event),
    onPointerUp: (event) => notifySubscribers(EVENT_ON_POINTER_UP, event),
    onPointerLeave: (event) => notifySubscribers(EVENT_ON_POINTER_LEAVE, event),
    onPointerCancel: (event) => notifySubscribers(EVENT_ON_POINTER_CANCEL, event),
    onKeyDown: (event) => notifySubscribers(EVENT_ON_KEY_DOWN, event),
    onKeyUp: (event) => notifySubscribers(EVENT_ON_KEY_UP, event),
    onWheel: (event) => notifySubscribers(EVENT_ON_WHEEL, event)
  }), [notifySubscribers]);
  const subscribeSensors = reactExports.useCallback((type, callback) => {
    if (!subscribers[type]) {
      subscribers[type] = [];
    }
    subscribers[type].unshift(callback);
    return () => {
      const listeners = subscribers[type];
      if (listeners) {
        listeners.splice(0, listeners.length, ...listeners.filter((el) => el !== callback));
      }
    };
  }, [subscribers]);
  return { registerSensors, subscribeSensors };
}
function useThrottle(callback, delay) {
  const lastCallbackTime = reactExports.useRef(0);
  const delayCallback = useDelay();
  const executeCallback = useEventCallback((...args) => {
    lastCallbackTime.current = Date.now();
    callback(args);
  });
  return reactExports.useCallback((...args) => {
    delayCallback(() => {
      executeCallback(args);
    }, delay - (Date.now() - lastCallbackTime.current));
  }, [delay, executeCallback, delayCallback]);
}
const slidePrefix = makeComposePrefix("slide");
const slideImagePrefix = makeComposePrefix("slide_image");
function ImageSlide({ slide: image, offset, render, rect, imageFit, imageProps, onClick, onLoad, onError, style }) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const [status, setStatus] = reactExports.useState(SLIDE_STATUS_LOADING);
  const { publish } = useEvents();
  const { setTimeout } = useTimeouts();
  const imageRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (offset === 0) {
      publish(activeSlideStatus(status));
    }
  }, [offset, status, publish]);
  const handleLoading = useEventCallback((img) => {
    ("decode" in img ? img.decode() : Promise.resolve()).catch(() => {
    }).then(() => {
      if (!img.parentNode) {
        return;
      }
      setStatus(SLIDE_STATUS_COMPLETE);
      setTimeout(() => {
        onLoad === null || onLoad === void 0 ? void 0 : onLoad(img);
      }, 0);
    });
  });
  const setImageRef = reactExports.useCallback((img) => {
    imageRef.current = img;
    if (img === null || img === void 0 ? void 0 : img.complete) {
      handleLoading(img);
    }
  }, [handleLoading]);
  const handleOnLoad = reactExports.useCallback((event) => {
    handleLoading(event.currentTarget);
  }, [handleLoading]);
  const handleOnError = useEventCallback(() => {
    setStatus(SLIDE_STATUS_ERROR);
    onError === null || onError === void 0 ? void 0 : onError();
  });
  const cover = isImageFitCover(image, imageFit);
  const nonInfinite = (value, fallback) => Number.isFinite(value) ? value : fallback;
  const maxWidth = nonInfinite(Math.max(...((_b = (_a = image.srcSet) === null || _a === void 0 ? void 0 : _a.map((x) => x.width)) !== null && _b !== void 0 ? _b : []).concat(image.width ? [image.width] : []).filter(Boolean)), ((_c = imageRef.current) === null || _c === void 0 ? void 0 : _c.naturalWidth) || 0);
  const maxHeight = nonInfinite(Math.max(...((_e = (_d = image.srcSet) === null || _d === void 0 ? void 0 : _d.map((x) => x.height)) !== null && _e !== void 0 ? _e : []).concat(image.height ? [image.height] : []).filter(Boolean)), ((_f = imageRef.current) === null || _f === void 0 ? void 0 : _f.naturalHeight) || 0);
  const defaultStyle = maxWidth && maxHeight ? {
    maxWidth: `min(${maxWidth}px, 100%)`,
    maxHeight: `min(${maxHeight}px, 100%)`
  } : {
    maxWidth: "100%",
    maxHeight: "100%"
  };
  const srcSet = (_g = image.srcSet) === null || _g === void 0 ? void 0 : _g.sort((a, b) => a.width - b.width).map((item) => `${item.src} ${item.width}w`).join(", ");
  const estimateActualWidth = () => rect && !cover && image.width && image.height ? rect.height / image.height * image.width : Number.MAX_VALUE;
  const sizes = srcSet && rect && hasWindow() ? `${Math.round(Math.min(estimateActualWidth(), rect.width))}px` : void 0;
  const { style: imagePropsStyle, className: imagePropsClassName, ...restImageProps } = imageProps || {};
  return reactExports.createElement(
    reactExports.Fragment,
    null,
    reactExports.createElement("img", { ref: setImageRef, onLoad: handleOnLoad, onError: handleOnError, onClick, draggable: false, className: clsx(cssClass(slideImagePrefix()), cover && cssClass(slideImagePrefix("cover")), status !== SLIDE_STATUS_COMPLETE && cssClass(slideImagePrefix("loading")), imagePropsClassName), style: { ...defaultStyle, ...style, ...imagePropsStyle }, ...restImageProps, alt: (_h = image.alt) !== null && _h !== void 0 ? _h : "", sizes, srcSet, src: image.src }),
    status !== SLIDE_STATUS_COMPLETE && reactExports.createElement(
      "div",
      { className: cssClass(slidePrefix(SLIDE_STATUS_PLACEHOLDER)) },
      status === SLIDE_STATUS_LOADING && ((render === null || render === void 0 ? void 0 : render.iconLoading) ? render.iconLoading() : reactExports.createElement(LoadingIcon, { className: clsx(cssClass(ELEMENT_ICON), cssClass(slidePrefix(SLIDE_STATUS_LOADING))) })),
      status === SLIDE_STATUS_ERROR && ((render === null || render === void 0 ? void 0 : render.iconError) ? render.iconError() : reactExports.createElement(ErrorIcon, { className: clsx(cssClass(ELEMENT_ICON), cssClass(slidePrefix(SLIDE_STATUS_ERROR))) }))
    )
  );
}
const LightboxRoot = reactExports.forwardRef(function LightboxRoot2({ className, children, onFocus, onBlur, ...rest }, ref) {
  const nodeRef = reactExports.useRef(null);
  const { trackFocusWithin } = useA11yContext();
  return reactExports.createElement(
    DocumentContextProvider,
    { nodeRef },
    reactExports.createElement("div", { ref: useForkRef(ref, nodeRef), className: clsx(cssClass("root"), className), ...trackFocusWithin(onFocus, onBlur), ...rest }, children)
  );
});
var SwipeState;
(function(SwipeState2) {
  SwipeState2[SwipeState2["NONE"] = 0] = "NONE";
  SwipeState2[SwipeState2["SWIPE"] = 1] = "SWIPE";
  SwipeState2[SwipeState2["PULL"] = 2] = "PULL";
  SwipeState2[SwipeState2["ANIMATION"] = 3] = "ANIMATION";
})(SwipeState || (SwipeState = {}));
function usePointerEvents(subscribeSensors, onPointerDown, onPointerMove, onPointerUp, disabled) {
  reactExports.useEffect(
    () => cleanup(subscribeSensors(EVENT_ON_POINTER_DOWN, onPointerDown), subscribeSensors(EVENT_ON_POINTER_MOVE, onPointerMove), subscribeSensors(EVENT_ON_POINTER_UP, onPointerUp), subscribeSensors(EVENT_ON_POINTER_LEAVE, onPointerUp), subscribeSensors(EVENT_ON_POINTER_CANCEL, onPointerUp)),
    [subscribeSensors, onPointerDown, onPointerMove, onPointerUp, disabled]
  );
}
var Gesture;
(function(Gesture2) {
  Gesture2[Gesture2["NONE"] = 0] = "NONE";
  Gesture2[Gesture2["SWIPE"] = 1] = "SWIPE";
  Gesture2[Gesture2["PULL"] = 2] = "PULL";
})(Gesture || (Gesture = {}));
const SWIPE_THRESHOLD = 30;
function usePointerSwipe({ disableSwipeNavigation, closeOnBackdropClick }, subscribeSensors, isSwipeValid, containerWidth, swipeAnimationDuration, onSwipeStart, onSwipeProgress, onSwipeFinish, onSwipeCancel, pullUpEnabled, pullDownEnabled, onPullStart, onPullProgress, onPullFinish, onPullCancel, onClose) {
  const offset = reactExports.useRef(0);
  const pointers = reactExports.useRef([]);
  const activePointer = reactExports.useRef(void 0);
  const startTime = reactExports.useRef(0);
  const gesture = reactExports.useRef(Gesture.NONE);
  const clearPointer = reactExports.useCallback((event) => {
    if (activePointer.current === event.pointerId) {
      activePointer.current = void 0;
      gesture.current = Gesture.NONE;
    }
    const currentPointers = pointers.current;
    currentPointers.splice(0, currentPointers.length, ...currentPointers.filter((p) => p.pointerId !== event.pointerId));
  }, []);
  const addPointer = reactExports.useCallback((event) => {
    clearPointer(event);
    event.persist();
    pointers.current.push(event);
  }, [clearPointer]);
  const lookupPointer = reactExports.useCallback((event) => pointers.current.find(({ pointerId }) => event.pointerId === pointerId), []);
  const onPointerDown = useEventCallback((event) => {
    addPointer(event);
  });
  const exceedsPullThreshold = (value, threshold) => pullDownEnabled && value > threshold || pullUpEnabled && value < -threshold;
  const onPointerUp = useEventCallback((event) => {
    const pointer = lookupPointer(event);
    if (pointer) {
      if (activePointer.current === event.pointerId) {
        const duration = Date.now() - startTime.current;
        const currentOffset = offset.current;
        if (gesture.current === Gesture.SWIPE) {
          if (Math.abs(currentOffset) > 0.3 * containerWidth || Math.abs(currentOffset) > 5 && duration < swipeAnimationDuration) {
            onSwipeFinish(currentOffset, duration);
          } else {
            onSwipeCancel(currentOffset);
          }
        } else if (gesture.current === Gesture.PULL) {
          if (exceedsPullThreshold(currentOffset, 2 * SWIPE_THRESHOLD)) {
            onPullFinish(currentOffset, duration);
          } else {
            onPullCancel(currentOffset);
          }
        }
        offset.current = 0;
        gesture.current = Gesture.NONE;
      } else {
        const { target } = event;
        if (closeOnBackdropClick && target instanceof HTMLElement && target === pointer.target && (target.classList.contains(cssClass(CLASS_SLIDE)) || target.classList.contains(cssClass(CLASS_SLIDE_WRAPPER)))) {
          onClose();
        }
      }
    }
    clearPointer(event);
  });
  const onPointerMove = useEventCallback((event) => {
    const pointer = lookupPointer(event);
    if (pointer) {
      const isCurrentPointer = activePointer.current === event.pointerId;
      if (event.buttons === 0) {
        if (isCurrentPointer && offset.current !== 0) {
          onPointerUp(event);
        } else {
          clearPointer(pointer);
        }
        return;
      }
      const deltaX = event.clientX - pointer.clientX;
      const deltaY = event.clientY - pointer.clientY;
      if (activePointer.current === void 0) {
        const startGesture = (newGesture) => {
          addPointer(event);
          activePointer.current = event.pointerId;
          startTime.current = Date.now();
          gesture.current = newGesture;
        };
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > SWIPE_THRESHOLD && isSwipeValid(deltaX)) {
          if (!disableSwipeNavigation) {
            startGesture(Gesture.SWIPE);
            onSwipeStart();
          }
        } else if (Math.abs(deltaY) > Math.abs(deltaX) && exceedsPullThreshold(deltaY, SWIPE_THRESHOLD)) {
          startGesture(Gesture.PULL);
          onPullStart();
        }
      } else if (isCurrentPointer) {
        if (gesture.current === Gesture.SWIPE) {
          offset.current = deltaX;
          onSwipeProgress(deltaX);
        } else if (gesture.current === Gesture.PULL) {
          offset.current = deltaY;
          onPullProgress(deltaY);
        }
      }
    }
  });
  usePointerEvents(subscribeSensors, onPointerDown, onPointerMove, onPointerUp);
}
function usePreventWheelDefaults({ preventDefaultWheelX, preventDefaultWheelY }) {
  const ref = reactExports.useRef(null);
  const listener = useEventCallback((event) => {
    const horizontal = Math.abs(event.deltaX) > Math.abs(event.deltaY);
    if (horizontal && preventDefaultWheelX || !horizontal && preventDefaultWheelY || event.ctrlKey) {
      event.preventDefault();
    }
  });
  return reactExports.useCallback((node) => {
    var _a;
    if (node) {
      node.addEventListener("wheel", listener, { passive: false });
    } else {
      (_a = ref.current) === null || _a === void 0 ? void 0 : _a.removeEventListener("wheel", listener);
    }
    ref.current = node;
  }, [listener]);
}
function useWheelSwipe(swipeState, subscribeSensors, isSwipeValid, containerWidth, swipeAnimationDuration, onSwipeStart, onSwipeProgress, onSwipeFinish, onSwipeCancel) {
  const offset = reactExports.useRef(0);
  const intent = reactExports.useRef(0);
  const intentCleanup = reactExports.useRef(void 0);
  const resetCleanup = reactExports.useRef(void 0);
  const wheelInertia = reactExports.useRef(0);
  const wheelInertiaCleanup = reactExports.useRef(void 0);
  const startTime = reactExports.useRef(0);
  const { setTimeout, clearTimeout } = useTimeouts();
  const cancelSwipeIntentCleanup = reactExports.useCallback(() => {
    if (intentCleanup.current) {
      clearTimeout(intentCleanup.current);
      intentCleanup.current = void 0;
    }
  }, [clearTimeout]);
  const cancelSwipeResetCleanup = reactExports.useCallback(() => {
    if (resetCleanup.current) {
      clearTimeout(resetCleanup.current);
      resetCleanup.current = void 0;
    }
  }, [clearTimeout]);
  const handleCleanup = useEventCallback(() => {
    if (swipeState !== SwipeState.SWIPE) {
      offset.current = 0;
      startTime.current = 0;
      cancelSwipeIntentCleanup();
      cancelSwipeResetCleanup();
    }
  });
  reactExports.useEffect(handleCleanup, [swipeState, handleCleanup]);
  const handleCancelSwipe = useEventCallback((currentSwipeOffset) => {
    resetCleanup.current = void 0;
    if (offset.current === currentSwipeOffset) {
      onSwipeCancel(offset.current);
    }
  });
  const onWheel = useEventCallback((event) => {
    if (event.ctrlKey) {
      return;
    }
    if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
      return;
    }
    const setWheelInertia = (inertia) => {
      wheelInertia.current = inertia;
      clearTimeout(wheelInertiaCleanup.current);
      wheelInertiaCleanup.current = inertia > 0 ? setTimeout(() => {
        wheelInertia.current = 0;
        wheelInertiaCleanup.current = void 0;
      }, 300) : void 0;
    };
    if (swipeState === SwipeState.NONE) {
      if (Math.abs(event.deltaX) <= 1.2 * Math.abs(wheelInertia.current)) {
        setWheelInertia(event.deltaX);
        return;
      }
      if (!isSwipeValid(-event.deltaX)) {
        return;
      }
      intent.current += event.deltaX;
      cancelSwipeIntentCleanup();
      if (Math.abs(intent.current) > 30) {
        intent.current = 0;
        setWheelInertia(0);
        startTime.current = Date.now();
        onSwipeStart();
      } else {
        const currentSwipeIntent = intent.current;
        intentCleanup.current = setTimeout(() => {
          intentCleanup.current = void 0;
          if (currentSwipeIntent === intent.current) {
            intent.current = 0;
          }
        }, swipeAnimationDuration);
      }
    } else if (swipeState === SwipeState.SWIPE) {
      let newSwipeOffset = offset.current - event.deltaX;
      newSwipeOffset = Math.min(Math.abs(newSwipeOffset), containerWidth) * Math.sign(newSwipeOffset);
      offset.current = newSwipeOffset;
      onSwipeProgress(newSwipeOffset);
      cancelSwipeResetCleanup();
      if (Math.abs(newSwipeOffset) > 0.2 * containerWidth) {
        setWheelInertia(event.deltaX);
        onSwipeFinish(newSwipeOffset, Date.now() - startTime.current);
        return;
      }
      resetCleanup.current = setTimeout(() => handleCancelSwipe(newSwipeOffset), 2 * swipeAnimationDuration);
    } else {
      setWheelInertia(event.deltaX);
    }
  });
  reactExports.useEffect(() => subscribeSensors(EVENT_ON_WHEEL, onWheel), [subscribeSensors, onWheel]);
}
const cssContainerPrefix = makeComposePrefix("container");
const ControllerContext = reactExports.createContext(null);
const useController = makeUseContext("useController", "ControllerContext", ControllerContext);
function Controller({ children, ...props }) {
  var _a;
  const { carousel, animation, controller, on, styles, render } = props;
  const { closeOnPullUp, closeOnPullDown, preventDefaultWheelX, preventDefaultWheelY } = controller;
  const [toolbarWidth, setToolbarWidth] = reactExports.useState();
  const state = useLightboxState();
  const dispatch = useLightboxDispatch();
  const [swipeState, setSwipeState] = reactExports.useState(SwipeState.NONE);
  const swipeOffset = reactExports.useRef(0);
  const pullOffset = reactExports.useRef(0);
  const pullOpacity = reactExports.useRef(1);
  const { registerSensors, subscribeSensors } = useSensors();
  const { subscribe, publish } = useEvents();
  const cleanupAnimationIncrement = useDelay();
  const cleanupSwipeOffset = useDelay();
  const cleanupPullOffset = useDelay();
  const { containerRef, setContainerRef, containerRect } = useContainerRect();
  const handleContainerRef = useForkRef(usePreventWheelDefaults({ preventDefaultWheelX, preventDefaultWheelY }), setContainerRef);
  const carouselRef = reactExports.useRef(null);
  const setCarouselRef = useForkRef(carouselRef, void 0);
  const { getOwnerDocument } = useDocumentContext();
  const isRTL = useRTL();
  const rtl = (value) => (isRTL ? -1 : 1) * (typeof value === "number" ? value : 1);
  const focus = useEventCallback(() => {
    var _a2;
    return (_a2 = containerRef.current) === null || _a2 === void 0 ? void 0 : _a2.focus();
  });
  const getLightboxProps = useEventCallback(() => props);
  const getLightboxState = useEventCallback(() => state);
  const prev = reactExports.useCallback((params) => publish(ACTION_PREV, params), [publish]);
  const next = reactExports.useCallback((params) => publish(ACTION_NEXT, params), [publish]);
  const close = reactExports.useCallback(() => publish(ACTION_CLOSE), [publish]);
  const isSwipeValid = (offset) => !(carousel.finite && (rtl(offset) > 0 && state.currentIndex === 0 || rtl(offset) < 0 && state.currentIndex === state.slides.length - 1));
  const setSwipeOffset = (offset) => {
    var _a2;
    swipeOffset.current = offset;
    (_a2 = containerRef.current) === null || _a2 === void 0 ? void 0 : _a2.style.setProperty(cssVar("swipe_offset"), `${Math.round(offset)}px`);
  };
  const setPullOffset = (offset) => {
    var _a2, _b;
    pullOffset.current = offset;
    pullOpacity.current = (() => {
      const threshold = 60;
      const minOpacity = 0.5;
      const offsetValue = (() => {
        if (closeOnPullDown && offset > 0)
          return offset;
        if (closeOnPullUp && offset < 0)
          return -offset;
        return 0;
      })();
      return Math.min(Math.max(round(1 - offsetValue / threshold * (1 - minOpacity), 2), minOpacity), 1);
    })();
    (_a2 = containerRef.current) === null || _a2 === void 0 ? void 0 : _a2.style.setProperty(cssVar("pull_offset"), `${Math.round(offset)}px`);
    (_b = containerRef.current) === null || _b === void 0 ? void 0 : _b.style.setProperty(cssVar("pull_opacity"), `${pullOpacity.current}`);
  };
  const { prepareAnimation: preparePullAnimation } = useAnimation(carouselRef, (snapshot, rect, translate) => {
    if (carouselRef.current && containerRect) {
      return {
        keyframes: [
          {
            transform: `translate(0, ${snapshot.rect.y - rect.y + translate.y}px)`,
            opacity: snapshot.opacity
          },
          { transform: "translate(0, 0)", opacity: 1 }
        ],
        duration: snapshot.duration,
        easing: animation.easing.fade
      };
    }
    return void 0;
  });
  const pull = (offset, cancel) => {
    if (closeOnPullUp || closeOnPullDown) {
      setPullOffset(offset);
      let duration = 0;
      if (carouselRef.current) {
        duration = animation.fade * (cancel ? 2 : 1);
        preparePullAnimation({
          rect: carouselRef.current.getBoundingClientRect(),
          opacity: pullOpacity.current,
          duration
        });
      }
      cleanupPullOffset(() => {
        setPullOffset(0);
        setSwipeState(SwipeState.NONE);
      }, duration);
      setSwipeState(SwipeState.ANIMATION);
      if (!cancel) {
        close();
      }
    }
  };
  const { prepareAnimation, isAnimationPlaying } = useAnimation(carouselRef, (snapshot, rect, translate) => {
    var _a2;
    if (carouselRef.current && containerRect && ((_a2 = state.animation) === null || _a2 === void 0 ? void 0 : _a2.duration)) {
      const parsedSpacing = parseLengthPercentage(carousel.spacing);
      const spacingValue = (parsedSpacing.percent ? parsedSpacing.percent * containerRect.width / 100 : parsedSpacing.pixel) || 0;
      return {
        keyframes: [
          {
            transform: `translate(${rtl(state.globalIndex - snapshot.index) * (containerRect.width + spacingValue) + snapshot.rect.x - rect.x + translate.x}px, 0)`
          },
          { transform: "translate(0, 0)" }
        ],
        duration: state.animation.duration,
        easing: state.animation.easing
      };
    }
    return void 0;
  });
  const swipe = useEventCallback((action) => {
    var _a2, _b;
    const currentSwipeOffset = action.offset || 0;
    const swipeDuration = !currentSwipeOffset ? (_a2 = animation.navigation) !== null && _a2 !== void 0 ? _a2 : animation.swipe : animation.swipe;
    const swipeEasing = !currentSwipeOffset && !isAnimationPlaying() ? animation.easing.navigation : animation.easing.swipe;
    let { direction } = action;
    const count = (_b = action.count) !== null && _b !== void 0 ? _b : 1;
    let newSwipeState = SwipeState.ANIMATION;
    let newSwipeAnimationDuration = swipeDuration * count;
    if (!direction) {
      const containerWidth = containerRect === null || containerRect === void 0 ? void 0 : containerRect.width;
      const elapsedTime = action.duration || 0;
      const expectedTime = containerWidth ? swipeDuration / containerWidth * Math.abs(currentSwipeOffset) : swipeDuration;
      if (count !== 0) {
        if (elapsedTime < expectedTime) {
          newSwipeAnimationDuration = newSwipeAnimationDuration / expectedTime * Math.max(elapsedTime, expectedTime / 5);
        } else if (containerWidth) {
          newSwipeAnimationDuration = swipeDuration / containerWidth * (containerWidth - Math.abs(currentSwipeOffset));
        }
        direction = rtl(currentSwipeOffset) > 0 ? ACTION_PREV : ACTION_NEXT;
      } else {
        newSwipeAnimationDuration = swipeDuration / 2;
      }
    }
    let increment = 0;
    if (direction === ACTION_PREV) {
      if (isSwipeValid(rtl(1))) {
        increment = -count;
      } else {
        newSwipeState = SwipeState.NONE;
        newSwipeAnimationDuration = swipeDuration;
      }
    } else if (direction === ACTION_NEXT) {
      if (isSwipeValid(rtl(-1))) {
        increment = count;
      } else {
        newSwipeState = SwipeState.NONE;
        newSwipeAnimationDuration = swipeDuration;
      }
    }
    newSwipeAnimationDuration = Math.round(newSwipeAnimationDuration);
    cleanupSwipeOffset(() => {
      setSwipeOffset(0);
      setSwipeState(SwipeState.NONE);
    }, newSwipeAnimationDuration);
    if (carouselRef.current) {
      prepareAnimation({
        rect: carouselRef.current.getBoundingClientRect(),
        index: state.globalIndex
      });
    }
    setSwipeState(newSwipeState);
    publish(ACTION_SWIPE, {
      type: "swipe",
      increment,
      duration: newSwipeAnimationDuration,
      easing: swipeEasing
    });
  });
  reactExports.useEffect(() => {
    var _a2, _b;
    if (((_a2 = state.animation) === null || _a2 === void 0 ? void 0 : _a2.increment) && ((_b = state.animation) === null || _b === void 0 ? void 0 : _b.duration)) {
      cleanupAnimationIncrement(() => dispatch({ type: "swipe", increment: 0 }), state.animation.duration);
    }
  }, [state.animation, dispatch, cleanupAnimationIncrement]);
  const swipeParams = [
    subscribeSensors,
    isSwipeValid,
    (containerRect === null || containerRect === void 0 ? void 0 : containerRect.width) || 0,
    animation.swipe,
    () => setSwipeState(SwipeState.SWIPE),
    (offset) => setSwipeOffset(offset),
    (offset, duration) => swipe({ offset, duration, count: 1 }),
    (offset) => swipe({ offset, count: 0 })
  ];
  const pullParams = [
    () => {
      if (closeOnPullDown) {
        setSwipeState(SwipeState.PULL);
      }
    },
    (offset) => setPullOffset(offset),
    (offset) => pull(offset),
    (offset) => pull(offset, true)
  ];
  usePointerSwipe(controller, ...swipeParams, closeOnPullUp, closeOnPullDown, ...pullParams, close);
  useWheelSwipe(swipeState, ...swipeParams);
  const focusOnMount = useEventCallback(() => {
    if (controller.focus && getOwnerDocument().querySelector(`.${cssClass(MODULE_PORTAL)} .${cssClass(cssContainerPrefix())}`)) {
      focus();
    }
  });
  reactExports.useEffect(focusOnMount, [focusOnMount]);
  const onViewCallback = useEventCallback(() => {
    var _a2;
    (_a2 = on.view) === null || _a2 === void 0 ? void 0 : _a2.call(on, { index: state.currentIndex });
  });
  reactExports.useEffect(onViewCallback, [state.globalIndex, onViewCallback]);
  reactExports.useEffect(() => cleanup(subscribe(ACTION_PREV, (action) => swipe({ direction: ACTION_PREV, ...action })), subscribe(ACTION_NEXT, (action) => swipe({ direction: ACTION_NEXT, ...action })), subscribe(ACTION_SWIPE, (action) => dispatch(action))), [subscribe, swipe, dispatch]);
  const context = reactExports.useMemo(() => ({
    prev,
    next,
    close,
    focus,
    slideRect: containerRect ? computeSlideRect(containerRect, carousel.padding) : { width: 0, height: 0 },
    containerRect: containerRect || { width: 0, height: 0 },
    subscribeSensors,
    containerRef,
    setCarouselRef,
    toolbarWidth,
    setToolbarWidth
  }), [
    prev,
    next,
    close,
    focus,
    subscribeSensors,
    containerRect,
    containerRef,
    setCarouselRef,
    toolbarWidth,
    setToolbarWidth,
    carousel.padding
  ]);
  reactExports.useImperativeHandle(controller.ref, () => ({
    prev,
    next,
    close,
    focus,
    getLightboxProps,
    getLightboxState
  }), [prev, next, close, focus, getLightboxProps, getLightboxState]);
  return reactExports.createElement("div", { ref: handleContainerRef, className: clsx(cssClass(cssContainerPrefix()), cssClass(CLASS_FLEX_CENTER)), style: {
    ...swipeState === SwipeState.SWIPE ? { [cssVar("swipe_offset")]: `${Math.round(swipeOffset.current)}px` } : null,
    ...swipeState === SwipeState.PULL ? {
      [cssVar("pull_offset")]: `${Math.round(pullOffset.current)}px`,
      [cssVar("pull_opacity")]: `${pullOpacity.current}`
    } : null,
    ...controller.touchAction !== "none" ? { [cssVar("controller_touch_action")]: controller.touchAction } : null,
    ...styles.container
  }, tabIndex: -1, ...registerSensors }, containerRect && reactExports.createElement(
    ControllerContext.Provider,
    { value: context },
    children,
    (_a = render.controls) === null || _a === void 0 ? void 0 : _a.call(render)
  ));
}
const ControllerModule = createModule(MODULE_CONTROLLER, Controller);
function cssPrefix$2(value) {
  return composePrefix(MODULE_CAROUSEL, value);
}
function cssSlidePrefix(value) {
  return composePrefix(CLASS_SLIDE, value);
}
function CarouselSlide({ slide, offset }) {
  const containerRef = reactExports.useRef(null);
  const { currentIndex, slides } = useLightboxState();
  const { slideRect, focus } = useController();
  const { render, carousel: { imageFit, imageProps }, on: { click: onClick }, styles: { slide: style }, labels } = useLightboxProps();
  const { getOwnerDocument } = useDocumentContext();
  const offscreen = offset !== 0;
  reactExports.useEffect(() => {
    var _a;
    if (offscreen && ((_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.contains(getOwnerDocument().activeElement))) {
      focus();
    }
  }, [offscreen, focus, getOwnerDocument]);
  const renderSlide = () => {
    var _a, _b, _c, _d;
    let rendered = (_a = render.slide) === null || _a === void 0 ? void 0 : _a.call(render, { slide, offset, rect: slideRect });
    if (!rendered && isImageSlide(slide)) {
      rendered = reactExports.createElement(ImageSlide, { slide, offset, render, rect: slideRect, imageFit, imageProps, onClick: !offscreen ? () => onClick === null || onClick === void 0 ? void 0 : onClick({ index: currentIndex }) : void 0 });
    }
    return rendered ? reactExports.createElement(
      reactExports.Fragment,
      null,
      (_b = render.slideHeader) === null || _b === void 0 ? void 0 : _b.call(render, { slide }),
      ((_c = render.slideContainer) !== null && _c !== void 0 ? _c : (({ children }) => children))({ slide, children: rendered }),
      (_d = render.slideFooter) === null || _d === void 0 ? void 0 : _d.call(render, { slide })
    ) : null;
  };
  return reactExports.createElement("div", { ref: containerRef, className: clsx(cssClass(cssSlidePrefix()), !offscreen && cssClass(cssSlidePrefix("current")), cssClass(CLASS_FLEX_CENTER)), ...makeInertWhen(offscreen), style, role: "group", "aria-roledescription": translateLabel(labels, "Slide"), "aria-label": translateSlideCounter(labels, slides, currentIndex + offset) }, renderSlide());
}
function Placeholder() {
  const style = useLightboxProps().styles.slide;
  return reactExports.createElement("div", { className: cssClass(CLASS_SLIDE), style });
}
function Carousel({ carousel, labels }) {
  const { slides, currentIndex, globalIndex } = useLightboxState();
  const { setCarouselRef } = useController();
  const { autoPlaying, focusWithin } = useA11yContext();
  const spacingValue = parseLengthPercentage(carousel.spacing);
  const paddingValue = parseLengthPercentage(carousel.padding);
  const preload = calculatePreload(carousel, slides, 1);
  const items = [];
  if (hasSlides(slides)) {
    for (let index = currentIndex - preload; index <= currentIndex + preload; index += 1) {
      const slide = getSlide(slides, index);
      const key = globalIndex - currentIndex + index;
      const placeholder = carousel.finite && (index < 0 || index > slides.length - 1);
      items.push(!placeholder ? {
        key: [`${key}`, getSlideKey(slide)].filter(Boolean).join("|"),
        offset: index - currentIndex,
        slide
      } : { key });
    }
  }
  return reactExports.createElement("div", { ref: setCarouselRef, className: clsx(cssClass(cssPrefix$2()), items.length > 0 && cssClass(cssPrefix$2("with_slides"))), style: {
    [`${cssVar(cssPrefix$2("slides_count"))}`]: items.length,
    [`${cssVar(cssPrefix$2("spacing_px"))}`]: spacingValue.pixel || 0,
    [`${cssVar(cssPrefix$2("spacing_percent"))}`]: spacingValue.percent || 0,
    [`${cssVar(cssPrefix$2("padding_px"))}`]: paddingValue.pixel || 0,
    [`${cssVar(cssPrefix$2("padding_percent"))}`]: paddingValue.percent || 0
  }, role: "region", "aria-live": autoPlaying && !focusWithin ? "off" : "polite", "aria-roledescription": translateLabel(labels, "Carousel"), "aria-label": translateLabel(labels, "Photo gallery") }, items.map(({ key, slide, offset }) => slide ? reactExports.createElement(CarouselSlide, { key, slide, offset }) : reactExports.createElement(Placeholder, { key })));
}
const CarouselModule = createModule(MODULE_CAROUSEL, Carousel);
function useNavigationState() {
  const { carousel } = useLightboxProps();
  const { slides, currentIndex } = useLightboxState();
  const prevDisabled = slides.length === 0 || carousel.finite && currentIndex === 0;
  const nextDisabled = slides.length === 0 || carousel.finite && currentIndex === slides.length - 1;
  return { prevDisabled, nextDisabled };
}
function useKeyboardNavigation(subscribeSensors) {
  var _a;
  const isRTL = useRTL();
  const { publish } = useEvents();
  const { animation } = useLightboxProps();
  const { prevDisabled, nextDisabled } = useNavigationState();
  const throttle = ((_a = animation.navigation) !== null && _a !== void 0 ? _a : animation.swipe) / 2;
  const prev = useThrottle(() => publish(ACTION_PREV), throttle);
  const next = useThrottle(() => publish(ACTION_NEXT), throttle);
  const handleKeyDown = useEventCallback((event) => {
    switch (event.key) {
      case VK_ESCAPE:
        publish(ACTION_CLOSE);
        break;
      case VK_ARROW_LEFT:
        if (!(isRTL ? nextDisabled : prevDisabled))
          (isRTL ? next : prev)();
        break;
      case VK_ARROW_RIGHT:
        if (!(isRTL ? prevDisabled : nextDisabled))
          (isRTL ? prev : next)();
        break;
    }
  });
  reactExports.useEffect(() => subscribeSensors(EVENT_ON_KEY_DOWN, handleKeyDown), [subscribeSensors, handleKeyDown]);
}
function NavigationButton({ label, icon, renderIcon, action, onClick, disabled, style }) {
  return reactExports.createElement(IconButton, { label, icon, renderIcon, className: cssClass(`navigation_${action}`), disabled, onClick, style, ...useLoseFocus(useController().focus, disabled) });
}
function Navigation({ render: { buttonPrev, buttonNext, iconPrev, iconNext }, styles }) {
  const { prev, next, subscribeSensors } = useController();
  const { prevDisabled, nextDisabled } = useNavigationState();
  useKeyboardNavigation(subscribeSensors);
  return reactExports.createElement(
    reactExports.Fragment,
    null,
    buttonPrev ? buttonPrev() : reactExports.createElement(NavigationButton, { label: "Previous", action: ACTION_PREV, icon: PreviousIcon, renderIcon: iconPrev, style: styles.navigationPrev, disabled: prevDisabled, onClick: prev }),
    buttonNext ? buttonNext() : reactExports.createElement(NavigationButton, { label: "Next", action: ACTION_NEXT, icon: NextIcon, renderIcon: iconNext, style: styles.navigationNext, disabled: nextDisabled, onClick: next })
  );
}
const NavigationModule = createModule(MODULE_NAVIGATION, Navigation);
const noScroll = cssClass(CLASS_NO_SCROLL);
const noScrollPadding = cssClass(CLASS_NO_SCROLL_PADDING);
function isHTMLElement(element) {
  return "style" in element;
}
function padScrollbar(element, padding, rtl) {
  const styles = window.getComputedStyle(element);
  const property = rtl ? "padding-left" : "padding-right";
  const computedValue = rtl ? styles.paddingLeft : styles.paddingRight;
  const originalValue = element.style.getPropertyValue(property);
  element.style.setProperty(property, `${(parseInt(computedValue) || 0) + padding}px`);
  return () => {
    if (originalValue) {
      element.style.setProperty(property, originalValue);
    } else {
      element.style.removeProperty(property);
    }
  };
}
function NoScroll({ noScroll: { disabled }, children }) {
  const rtl = useRTL();
  const { getOwnerDocument, getOwnerWindow } = useDocumentContext();
  reactExports.useEffect(() => {
    if (disabled)
      return () => {
      };
    const cleanup2 = [];
    const ownerWindow = getOwnerWindow();
    const { body, documentElement } = getOwnerDocument();
    const scrollbar = Math.round(ownerWindow.innerWidth - documentElement.clientWidth);
    if (scrollbar > 0) {
      cleanup2.push(padScrollbar(body, scrollbar, rtl));
      const elements = body.getElementsByTagName("*");
      for (let i = 0; i < elements.length; i += 1) {
        const element = elements[i];
        if (isHTMLElement(element) && ownerWindow.getComputedStyle(element).getPropertyValue("position") === "fixed" && !element.classList.contains(noScrollPadding)) {
          cleanup2.push(padScrollbar(element, scrollbar, rtl));
        }
      }
    }
    body.classList.add(noScroll);
    return () => {
      body.classList.remove(noScroll);
      cleanup2.forEach((clean) => clean());
    };
  }, [rtl, disabled, getOwnerDocument, getOwnerWindow]);
  return reactExports.createElement(reactExports.Fragment, null, children);
}
const NoScrollModule = createModule(MODULE_NO_SCROLL, NoScroll);
function cssPrefix$1(value) {
  return composePrefix(MODULE_PORTAL, value);
}
function setAttribute(element, attribute, value) {
  const previousValue = element.getAttribute(attribute);
  element.setAttribute(attribute, value);
  return () => {
    if (previousValue) {
      element.setAttribute(attribute, previousValue);
    } else {
      element.removeAttribute(attribute);
    }
  };
}
function Portal({ children, animation, styles, className, on, portal, close, labels }) {
  const [mounted, setMounted] = reactExports.useState(false);
  const [visible, setVisible] = reactExports.useState(false);
  const cleanup2 = reactExports.useRef([]);
  const restoreFocus = reactExports.useRef(null);
  const { setTimeout } = useTimeouts();
  const { subscribe } = useEvents();
  const reduceMotion = useMotionPreference();
  const animationDuration = !reduceMotion ? animation.fade : 0;
  reactExports.useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
      setVisible(false);
    };
  }, []);
  const handleCleanup = useEventCallback(() => {
    cleanup2.current.forEach((clean) => clean());
    cleanup2.current = [];
  });
  const handleClose = useEventCallback(() => {
    var _a;
    setVisible(false);
    handleCleanup();
    (_a = on.exiting) === null || _a === void 0 ? void 0 : _a.call(on);
    setTimeout(() => {
      var _a2;
      (_a2 = on.exited) === null || _a2 === void 0 ? void 0 : _a2.call(on);
      close();
    }, animationDuration);
  });
  reactExports.useEffect(() => subscribe(ACTION_CLOSE, handleClose), [subscribe, handleClose]);
  const handleEnter = useEventCallback((node) => {
    var _a, _b, _c;
    reflow(node);
    setVisible(true);
    (_a = on.entering) === null || _a === void 0 ? void 0 : _a.call(on);
    const elements = (_c = (_b = node.parentNode) === null || _b === void 0 ? void 0 : _b.children) !== null && _c !== void 0 ? _c : [];
    for (let i = 0; i < elements.length; i += 1) {
      const element = elements[i];
      if (["TEMPLATE", "SCRIPT", "STYLE"].indexOf(element.tagName) === -1 && element !== node) {
        cleanup2.current.push(setAttribute(element, "inert", ""));
        cleanup2.current.push(setAttribute(element, "aria-hidden", "true"));
      }
    }
    cleanup2.current.push(() => {
      var _a2, _b2;
      (_b2 = (_a2 = restoreFocus.current) === null || _a2 === void 0 ? void 0 : _a2.focus) === null || _b2 === void 0 ? void 0 : _b2.call(_a2);
    });
    setTimeout(() => {
      var _a2;
      (_a2 = on.entered) === null || _a2 === void 0 ? void 0 : _a2.call(on);
    }, animationDuration);
  });
  const handleRef = reactExports.useCallback((node) => {
    if (node) {
      handleEnter(node);
    } else {
      handleCleanup();
    }
  }, [handleEnter, handleCleanup]);
  return mounted ? reactDomExports.createPortal(reactExports.createElement(LightboxRoot, { ref: handleRef, className: clsx(className, cssClass(cssPrefix$1()), cssClass(CLASS_NO_SCROLL_PADDING), visible && cssClass(cssPrefix$1("open"))), "aria-modal": true, role: "dialog", "aria-label": translateLabel(labels, "Lightbox"), style: {
    ...animation.fade !== LightboxDefaultProps.animation.fade ? { [cssVar("fade_animation_duration")]: `${animationDuration}ms` } : null,
    ...animation.easing.fade !== LightboxDefaultProps.animation.easing.fade ? { [cssVar("fade_animation_timing_function")]: animation.easing.fade } : null,
    ...styles.root
  }, onFocus: (event) => {
    if (!restoreFocus.current) {
      restoreFocus.current = event.relatedTarget;
    }
  } }, children), portal.root || document.body) : null;
}
const PortalModule = createModule(MODULE_PORTAL, Portal);
function Root({ children }) {
  return reactExports.createElement(reactExports.Fragment, null, children);
}
const RootModule = createModule(MODULE_ROOT, Root);
function cssPrefix$4(value) {
  return composePrefix(MODULE_TOOLBAR, value);
}
function Toolbar({ toolbar: { buttons }, render: { buttonClose, iconClose }, styles }) {
  const { close, setToolbarWidth } = useController();
  const { setContainerRef, containerRect } = useContainerRect();
  useLayoutEffect(() => {
    setToolbarWidth(containerRect === null || containerRect === void 0 ? void 0 : containerRect.width);
  }, [setToolbarWidth, containerRect === null || containerRect === void 0 ? void 0 : containerRect.width]);
  const renderCloseButton = () => {
    if (buttonClose)
      return buttonClose();
    return reactExports.createElement(IconButton, { key: ACTION_CLOSE, label: "Close", icon: CloseIcon, renderIcon: iconClose, onClick: close });
  };
  return reactExports.createElement("div", { ref: setContainerRef, style: styles.toolbar, className: cssClass(cssPrefix$4()) }, buttons === null || buttons === void 0 ? void 0 : buttons.map((button) => button === ACTION_CLOSE ? renderCloseButton() : button));
}
const ToolbarModule = createModule(MODULE_TOOLBAR, Toolbar);
function renderNode(node, props) {
  var _a;
  return reactExports.createElement(node.module.component, { key: node.module.name, ...props }, (_a = node.children) === null || _a === void 0 ? void 0 : _a.map((child) => renderNode(child, props)));
}
function mergeAnimation(defaultAnimation, animation = {}) {
  const { easing: defaultAnimationEasing, ...restDefaultAnimation } = defaultAnimation;
  const { easing, ...restAnimation } = animation;
  return {
    easing: { ...defaultAnimationEasing, ...easing },
    ...restDefaultAnimation,
    ...restAnimation
  };
}
function Lightbox({ carousel, animation, render, toolbar, controller, noScroll: noScroll2, on, plugins, slides, index, ...restProps }) {
  const { animation: defaultAnimation, carousel: defaultCarousel, render: defaultRender, toolbar: defaultToolbar, controller: defaultController, noScroll: defaultNoScroll, on: defaultOn, slides: defaultSlides, index: defaultIndex, plugins: defaultPlugins, ...restDefaultProps } = LightboxDefaultProps;
  const { config, augmentation } = withPlugins([
    createNode(PortalModule, [
      createNode(NoScrollModule, [
        createNode(ControllerModule, [
          createNode(CarouselModule),
          createNode(ToolbarModule),
          createNode(NavigationModule)
        ])
      ])
    ])
  ], plugins || defaultPlugins);
  const props = augmentation({
    animation: mergeAnimation(defaultAnimation, animation),
    carousel: { ...defaultCarousel, ...carousel },
    render: { ...defaultRender, ...render },
    toolbar: { ...defaultToolbar, ...toolbar },
    controller: { ...defaultController, ...controller },
    noScroll: { ...defaultNoScroll, ...noScroll2 },
    on: { ...defaultOn, ...on },
    ...restDefaultProps,
    ...restProps
  });
  if (!props.open)
    return null;
  return reactExports.createElement(
    LightboxPropsProvider,
    { ...props },
    reactExports.createElement(
      LightboxStateProvider,
      { slides: slides || defaultSlides, index: parseInt(index || defaultIndex) },
      reactExports.createElement(
        TimeoutsProvider,
        null,
        reactExports.createElement(
          EventsProvider,
          null,
          reactExports.createElement(A11yContextProvider, null, renderNode(createNode(RootModule, config), props))
        )
      )
    )
  );
}
const cssPrefix = (className) => cssClass(`slide_${className}`);
const defaultCaptionsProps = {
  descriptionTextAlign: "start",
  descriptionMaxLines: 3,
  showToggle: false,
  hidden: false
};
const resolveCaptionsProps = (captions) => ({
  ...defaultCaptionsProps,
  ...captions
});
function useCaptionsProps() {
  const { captions } = useLightboxProps();
  return resolveCaptionsProps(captions);
}
const CaptionsContext = reactExports.createContext(null);
const useCaptions = makeUseContext("useCaptions", "CaptionsContext", CaptionsContext);
function CaptionsContextProvider({ captions, children }) {
  const { ref, hidden } = resolveCaptionsProps(captions);
  const [visible, setVisible] = reactExports.useState(!hidden);
  const context = reactExports.useMemo(() => ({
    visible,
    show: () => setVisible(true),
    hide: () => setVisible(false)
  }), [visible]);
  reactExports.useImperativeHandle(ref, () => context, [context]);
  return reactExports.createElement(CaptionsContext.Provider, { value: context }, children);
}
function Title({ title }) {
  const { toolbarWidth } = useController();
  const { styles } = useLightboxProps();
  const { visible } = useCaptions();
  if (!visible)
    return null;
  return reactExports.createElement(
    "div",
    { role: "heading", "aria-level": 2, style: styles.captionsTitleContainer, className: clsx(cssPrefix("captions_container"), cssPrefix("title_container")) },
    reactExports.createElement("div", { className: cssPrefix("title"), style: {
      ...toolbarWidth ? { [cssVar("toolbar_width")]: `${toolbarWidth}px` } : null,
      ...styles.captionsTitle
    } }, title)
  );
}
function Description({ description }) {
  const { descriptionTextAlign, descriptionMaxLines } = useCaptionsProps();
  const { styles, labels } = useLightboxProps();
  const { visible } = useCaptions();
  if (!visible)
    return null;
  return reactExports.createElement(
    "div",
    { style: styles.captionsDescriptionContainer, className: clsx(cssPrefix("captions_container"), cssPrefix("description_container")) },
    reactExports.createElement("div", { className: cssPrefix("description"), style: {
      ...descriptionTextAlign !== defaultCaptionsProps.descriptionTextAlign || descriptionMaxLines !== defaultCaptionsProps.descriptionMaxLines ? {
        [cssVar("slide_description_text_align")]: descriptionTextAlign,
        [cssVar("slide_description_max_lines")]: descriptionMaxLines
      } : null,
      ...styles.captionsDescription
    }, role: "paragraph", "aria-roledescription": translateLabel(labels, "Caption") }, typeof description === "string" ? description.split("\n").flatMap((line, index) => [...index > 0 ? [reactExports.createElement("br", { key: index })] : [], line]) : description)
  );
}
const captionsIcon = () => reactExports.createElement(
  reactExports.Fragment,
  null,
  reactExports.createElement("path", { strokeWidth: 2, stroke: "currentColor", strokeLinejoin: "round", fill: "none", d: "M3 5l18 0l0 14l-18 0l0-14z" }),
  reactExports.createElement("path", { d: "M7 15h3c.55 0 1-.45 1-1v-1H9.5v.5h-2v-3h2v.5H11v-1c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm7 0h3c.55 0 1-.45 1-1v-1h-1.5v.5h-2v-3h2v.5H18v-1c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1z" })
);
const CaptionsVisible = createIcon("CaptionsVisible", captionsIcon());
const CaptionsHidden = createIconDisabled("CaptionsVisible", captionsIcon());
function CaptionsButton() {
  const { visible, show, hide } = useCaptions();
  const { render } = useLightboxProps();
  if (render.buttonCaptions) {
    return reactExports.createElement(reactExports.Fragment, null, render.buttonCaptions({ visible, show, hide }));
  }
  return reactExports.createElement(IconButton, { label: visible ? "Hide captions" : "Show captions", icon: visible ? CaptionsVisible : CaptionsHidden, renderIcon: visible ? render.iconCaptionsVisible : render.iconCaptionsHidden, onClick: visible ? hide : show });
}
function Captions({ augment, addModule }) {
  augment(({ captions: captionsProps, render: { slideFooter: renderFooter, ...restRender }, toolbar, ...restProps }) => {
    const captions = resolveCaptionsProps(captionsProps);
    return {
      render: {
        slideFooter: ({ slide }) => reactExports.createElement(
          reactExports.Fragment,
          null,
          renderFooter === null || renderFooter === void 0 ? void 0 : renderFooter({ slide }),
          slide.title && reactExports.createElement(Title, { title: slide.title }),
          slide.description && reactExports.createElement(Description, { description: slide.description })
        ),
        ...restRender
      },
      toolbar: addToolbarButton(toolbar, PLUGIN_CAPTIONS, captions.showToggle ? reactExports.createElement(CaptionsButton, null) : null),
      captions,
      ...restProps
    };
  });
  addModule(createModule(PLUGIN_CAPTIONS, CaptionsContextProvider));
}
export {
  Captions as C,
  Lightbox as L
};
