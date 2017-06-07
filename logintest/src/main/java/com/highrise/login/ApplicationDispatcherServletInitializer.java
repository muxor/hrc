package com.highrise.login;

import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.XmlWebApplicationContext;
import org.springframework.web.servlet.support.AbstractDispatcherServletInitializer;

public class ApplicationDispatcherServletInitializer  extends AbstractDispatcherServletInitializer {

    
    protected WebApplicationContext createRootApplicationContext() {
        return null;
    }

    
    protected WebApplicationContext createServletApplicationContext() {
        XmlWebApplicationContext cxt = new XmlWebApplicationContext();
        cxt.setConfigLocation("classpath:/META-INF/goLogin-servlet.xml");
        return cxt;
    }

    
    protected String[] getServletMappings() {
        return new String[] { "/app/*" };
    }
}
