package com.example.app;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.os.Bundle;
import android.view.View;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class MainActivity extends Activity {

    private WebView mWebView;

    @Override
    @SuppressLint("SetJavaScriptEnabled")
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        mWebView = findViewById(R.id.activity_main_webview);
        WebSettings webSettings = mWebView.getSettings();
        webSettings.setJavaScriptEnabled(true);
        mWebView.setWebViewClient(new MyWebViewClient());

        // REMOTE RESOURCE
         mWebView.loadUrl("http://192.168.2.6:4200");

         WebSettings settings = mWebView.getSettings();
         settings.setJavaScriptEnabled(true);

         mWebView.addJavascriptInterface(new WebAppInterface(this, mWebView), "Android");
         WebView.setWebContentsDebuggingEnabled(true);
    }

    @Override
    public void onBackPressed() {
        if(mWebView.canGoBack()) {
            mWebView.goBack();
        } else {
            super.onBackPressed();
        }
    }

    public void onTriggerPressed(View view) {
        this.mWebView.loadUrl("javascript:onAndroidMessage('testEvent', 'Pressed successfully')");
    }
}
