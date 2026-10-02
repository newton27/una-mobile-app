import { WebViewHandlers } from "../types/webview-handlers-type";

/**
 * Handles messages received from WebView injected JS.
 */
export const handleWebViewMessage =
    (handlers: WebViewHandlers) => 
    (event: any) => {

        let oMsgData;
        try {
            oMsgData = JSON.parse(event.nativeEvent.data);
        } catch (err) {
            console.warn("Failed to parse message from WebView:", err);
        }

        console.info(oMsgData);
        
        // --- LOGGED IN STATE ---
        if (typeof oMsgData.loggedin !== "undefined") {
            handlers.setLoggedIn(oMsgData.loggedin);
            handlers.setData?.(oMsgData);
            handlers.setLoading?.(false);
        }

        // Push tags are ignored in the Expo Go preview.

        // --- STOP LOADING ---
        if (oMsgData.stop_loading) {
            handlers.setLoading?.(false);
        }

        // --- VIDEO CALLS ---
        if (oMsgData.video_call_start) {
            handlers.onVideoCallStart?.(
                oMsgData.video_call_start.uri,
                typeof oMsgData.video_call_start.audio === "undefined"
                    ? false
                    : oMsgData.video_call_start.audio
            );
        }

        if (oMsgData.video_call_stop) {
            handlers.endVideoCall?.();
        }

        // --- PURCHASE / SUBSCRIPTION ---
        if (oMsgData.request_purchase) {
            handlers.onRequestPurchase?.(oMsgData.request_purchase);
        }
        if (oMsgData.request_subscription) {
            handlers.onRequestSubscription?.(oMsgData.request_subscription);
        }

        // --- NAVIGATION ---
        if (oMsgData.goto_home) {
            handlers.onHomeMenu?.();
        }
        if (oMsgData.reload) {
            handlers.reload?.();
        }

    };
