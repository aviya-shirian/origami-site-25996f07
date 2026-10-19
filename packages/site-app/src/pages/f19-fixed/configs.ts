import type {InteractConfig} from '@wix/interact'

export const interactions: InteractConfig = {
    "conditions": {
        "variants-majqhh081": {
            "type": "media",
            "predicate": "(max-width:1023px)"
        }
    },
    "effects": {},
    "interactions": [
        {
            "trigger": "viewEnter",
            "key": "comp-mv9dqmpg",
            "selector": "#comp-mv9dqmpg",
            "params": {
                "threshold": 0.15
            },
            "effects": [
                {
                    "key": "comp-mv9dqmpg",
                    "selector": "#comp-mv9dqmpg",
                    "effectId": "effects-mv9dqmpn1",
                    "fill": "backwards",
                    "delay": 200,
                    "duration": 1200,
                    "namedEffect": {
                        "type": "FloatIn",
                        "direction": "top"
                    },
                    "triggerType": "once"
                }
            ]
        },
        {
            "trigger": "pointerMove",
            "key": "comp-mv9dqmrr",
            "selector": "#comp-mv9dqmrr",
            "params": {
                "hitArea": "root"
            },
            "effects": [
                {
                    "key": "comp-mv9dqmrr",
                    "selector": "#comp-mv9dqmrr",
                    "effectId": "effects-mv9dqmrs4",
                    "fill": "both",
                    "centeredToTarget": true,
                    "transitionDuration": 500,
                    "namedEffect": {
                        "inverted": false,
                        "blur": 25,
                        "power": "medium",
                        "type": "BlurMouse",
                        "distance": {
                            "value": 100,
                            "unit": "px"
                        }
                    }
                }
            ]
        },
        {
            "trigger": "viewProgress",
            "key": "comp-mv9dqmsj",
            "selector": "#comp-mv9dqmsj",
            "effects": [
                {
                    "key": "comp-mv9dqmsj",
                    "selector": "#comp-mv9dqmsj",
                    "effectId": "effects-mv9nzv8v",
                    "fill": "both",
                    "namedEffect": {
                        "range": "in",
                        "type": "ParallaxScroll",
                        "speed": 0.5
                    },
                    "rangeStart": {
                        "name": "cover",
                        "offset": {
                            "value": 0,
                            "unit": "percentage"
                        }
                    },
                    "rangeEnd": {
                        "name": "cover",
                        "offset": {
                            "value": 50,
                            "unit": "percentage"
                        }
                    }
                },
                {
                    "key": "comp-mv9dqmsj",
                    "selector": "#comp-mv9dqmsj",
                    "effectId": "effects-mv9o0irm",
                    "fill": "both",
                    "namedEffect": {
                        "range": "in",
                        "opacity": 0,
                        "type": "FadeScroll"
                    },
                    "rangeStart": {
                        "name": "cover",
                        "offset": {
                            "value": 0,
                            "unit": "percentage"
                        }
                    },
                    "rangeEnd": {
                        "name": "cover",
                        "offset": {
                            "value": 50,
                            "unit": "percentage"
                        }
                    },
                    "conditions": [
                        "variants-majqhh081"
                    ]
                }
            ]
        },
        {
            "trigger": "activate",
            "key": "comp-mv9dqmt31",
            "selector": "#comp-mv9dqmt31",
            "effects": [
                {
                    "key": "comp-mv9dqmt31",
                    "selector": "#comp-mv9dqmt31",
                    "effectId": "variants-mv9dqmt4",
                    "stateAction": "toggle",
                    "transition": {
                        "styleProperties": []
                    }
                }
            ]
        },
        {
            "trigger": "viewEnter",
            "key": "comp-mv9dqmt31",
            "selector": "#comp-mv9dqmt31",
            "params": {
                "threshold": 0.15
            },
            "effects": [
                {
                    "key": "comp-mv9dqmt31",
                    "selector": "#comp-mv9dqmt31",
                    "effectId": "effects-mvduv3kk",
                    "easing": "backOut",
                    "fill": "backwards",
                    "delay": 0,
                    "duration": 1200,
                    "namedEffect": {
                        "direction": "top",
                        "type": "FoldIn",
                        "initialRotate": 90
                    },
                    "triggerType": "once"
                }
            ]
        },
        {
            "trigger": "pointerMove",
            "key": "comp-mv9dqmwc",
            "selector": "#comp-mv9dqmwc",
            "effects": [
                {
                    "key": "comp-mv9dqmwc",
                    "selector": "#comp-mv9dqmwc",
                    "effectId": "effects-mv9dqmwe1",
                    "fill": "both",
                    "namedEffect": {
                        "axis": "both",
                        "type": "TrackMouse",
                        "distance": {
                            "value": 100,
                            "unit": "px"
                        }
                    }
                }
            ]
        }
    ]
}
