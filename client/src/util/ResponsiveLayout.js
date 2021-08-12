

export default  class  ResponsiveLayout  {
    static  getResponsiveLayout = (mediaQuery, defaultLayout, mobile, desktop, tablet) => {
        switch (true) {
            case mediaQuery.isMobile && !!mobile:
                return mobile;
            case mediaQuery.isDesktop && !!desktop:
                return desktop;
            case mediaQuery.isTablet && !!tablet:
                return tablet;
            default:
                return defaultLayout
        }

    }
}
