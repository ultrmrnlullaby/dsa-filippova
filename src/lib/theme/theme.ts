import { colors } from "./tokens";
import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
    colors: {
        bg: {
            neutral: {
                page: {
                    subtle: colors.grey[50],
                },
                surface: {
                    subtle: colors.white,
                    subtleInverted: colors.grey[800],
                    accent: colors.grey[50],
                    onDark: colors.white,
                    onLight: colors.grey[800],
                    disabled: colors.grey[200],
                },
                elevated: {
                    subtle: colors.white,
                },
                accent: {
                    enabled: colors.grey[100],
                    hover: colors.grey[200],
                    active: colors.grey[300],
                },
            },
            primary: {
                subtle: {
                    enabled: colors.blue[50],
                    hover: colors.blue[100],
                    active: colors.blue[200],
                },
                accent: {
                        enabled: colors.blue[400],
                        hover: colors.blue[500],
                        active: colors.blue[600],
                },  
                accentStatic: {
                        enabled: colors.blue[400],
                        hover: colors.blue[500],
                        active: colors.blue[600],
                },
                strong: {
                        enabled: colors.blue[500],
                        hover: colors.blue[600],
                        active: colors.blue[700],
                },
            },
            secondary: {
                    subtle: {
                        enabled: colors.teal[50],
                        hover: colors.teal[100],
                        active: colors.teal[200],
                    },

                    accent: {
                        enabled: colors.teal[400],
                        hover: colors.teal[500],
                        active: colors.teal[600],
                    },
                    
                    accentStatic: {
                        enabled: colors.teal[400],
                        hover: colors.teal[500],
                        active: colors.teal[600],
                    },
                    
                    strong: {
                        enabled: colors.teal[500],
                        hover: colors.teal[600],
                        active: colors.teal[700],
                    },
                },
            success: {
                    subtle: {
                        enabled: colors.green[50],
                        hover: colors.green[100],
                        active: colors.green[200],
                    },

                    accent: {
                        enabled: colors.green[400],
                        hover: colors.green[500],
                        active: colors.green[600],
                    },
                    
                    strong: {
                        enabled: colors.green[500],
                        hover: colors.green[600],
                        active: colors.green[700],
                    },
                },
            warning: {
                    subtle: {
                        enabled: colors.yellow[50],
                        hover: colors.yellow[100],
                        active: colors.yellow[200],
                    },

                    accent: {
                        enabled: colors.yellow[400],
                        hover: colors.yellow[500],
                        active: colors.yellow[600],
                    },
                    
                    strong: {
                        enabled: colors.yellow[500],
                        hover: colors.yellow[600],
                        active: colors.yellow[700],
                    },
                },
            critical: {
                    subtle: {
                        enabled: colors.red[50],
                        hover: colors.red[100],
                        active: colors.red[200],
                    },

                    accent: {
                        enabled: colors.red[400],
                        hover: colors.red[500],
                        active: colors.red[600],
                    },
                    
                    strong: {
                        enabled: colors.red[500],
                        hover: colors.red[600],
                        active: colors.red[700],
                    },
                },
            info: {
                    subtle: {
                        enabled: colors.cyan[50],
                        hover: colors.cyan[100],
                        active: colors.cyan[200],
                    },

                    accent: {
                        enabled: colors.cyan[400],
                        hover: colors.cyan[500],
                        active: colors.cyan[600],
                    },
                    
                    strong: {
                        enabled: colors.cyan[500],
                        hover: colors.cyan[600],
                        active: colors.cyan[700],
                    },
                },
        },
        border: {
            neutral: {
                base: colors.grey[50];
                icon: colors.grey[800];
                onDark: colors.grey[600];
                onLight: colors.grey[200];
                disabled: colors.grey[300];
            },
            primary: {
                subtle: {
                    enabled: colors.blue[50],
                    hover: colors.blue[100],
                    active: colors.blue[200],
                },
                accent: {
                        enabled: colors.blue[400],
                        hover: colors.blue[500],
                        active: colors.blue[600],
                },  
                accentStatic: {
                        enabled: colors.blue[400],
                        hover: colors.blue[500],
                        active: colors.blue[600],
                },
                strong: {
                        enabled: colors.blue[500],
                        hover: colors.blue[600],
                        active: colors.blue[700],
                },
            },
            secondary: {
                    subtle: {
                        enabled: colors.teal[50],
                        hover: colors.teal[100],
                        active: colors.teal[200],
                    },

                    accent: {
                        enabled: colors.teal[400],
                        hover: colors.teal[500],
                        active: colors.teal[600],
                    },
                    
                    accentStatic: {
                        enabled: colors.teal[400],
                        hover: colors.teal[500],
                        active: colors.teal[600],
                    },
                    
                    strong: {
                        enabled: colors.teal[500],
                        hover: colors.teal[600],
                        active: colors.teal[700],
                    },
                },
            success: {
                    subtle: {
                        enabled: colors.green[50],
                        hover: colors.green[100],
                        active: colors.green[200],
                    },

                    accent: {
                        enabled: colors.green[400],
                        hover: colors.green[500],
                        active: colors.green[600],
                    },
                    
                    strong: {
                        enabled: colors.green[500],
                        hover: colors.green[600],
                        active: colors.green[700],
                    },
                },
            warning: {
                    subtle: {
                        enabled: colors.yellow[50],
                        hover: colors.yellow[100],
                        active: colors.yellow[200],
                    },

                    accent: {
                        enabled: colors.yellow[400],
                        hover: colors.yellow[500],
                        active: colors.yellow[600],
                    },
                    
                    strong: {
                        enabled: colors.yellow[500],
                        hover: colors.yellow[600],
                        active: colors.yellow[700],
                    },
                },
            critical: {
                    subtle: {
                        enabled: colors.red[50],
                        hover: colors.red[100],
                        active: colors.red[200],
                    },

                    accent: {
                        enabled: colors.red[400],
                        hover: colors.red[500],
                        active: colors.red[600],
                    },
                    
                    strong: {
                        enabled: colors.red[500],
                        hover: colors.red[600],
                        active: colors.red[700],
                    },
                },
            info: {
                    subtle: {
                        enabled: colors.cyan[50],
                        hover: colors.cyan[100],
                        active: colors.cyan[200],
                    },

                    accent: {
                        enabled: colors.cyan[400],
                        hover: colors.cyan[500],
                        active: colors.cyan[600],
                    },
                    
                    strong: {
                        enabled: colors.cyan[500],
                        hover: colors.cyan[600],
                        active: colors.cyan[700],
                    },
                },
        },
        link: {
                disabled: colors.grey[300];
                subtle: {
                    enabled: colors.blue[50],
                    hover: colors.blue[100],
                    disabled: colors.blue[200],
                },
                accent: {
                    enabled: colors.blue[400],
                    hover: colors.blue[500],
                    disabled: colors.blue[600],
                },
                onLight: {
                    enabled: colors.blue[400],
                    hover: colors.blue[500],
                    disabled: colors.blue[600],
                },
                onDark: {
                    enabled: colors.blue[200],
                    hover: colors.blue[100],
                    disabled: colors.blue[50],
                },
                inverted: {
                    enabled: colors.blue[200],
                    hover: colors.blue[100],
                    disabled: colors.blue[50],
                },
        },
        text: {
            neutral: {
                    base: colors.grey[800],
                    inverted: colors.grey[50],
                    onLight: colors.grey[800],
                    onDark: colors.grey[50],
                    secondary: colors.grey[500],
                    tetriary: colors.grey[400],
                    disabled: colors.grey[300],
            },
            primary: {
                    subtle: {
                        enabled: colors.blue[50],
                        hover: colors.blue[100],
                        active: colors.blue[200],
                    },

                    accent: {
                        enabled: colors.blue[400],
                        hover: colors.blue[500],
                        active: colors.blue[600],
                    },
                    
                    accentStatic: {
                        enabled: colors.blue[400],
                        hover: colors.blue[500],
                        active: colors.blue[600],
                    },
                    
                    strong: {
                        enabled: colors.blue[500],
                        hover: colors.blue[600],
                        active: colors.blue[700],
                    },
                },
            secondary: {
                    subtle: {
                        enabled: colors.grey[50],
                    },

                    accent: {
                        enabled: colors.grey[400],
                    },
                    
                    strong: {
                        enabled: colors.grey[500],
                    },
                },
            success: {
                    subtle: {
                        enabled: colors.grey[50],
                    },
                    accent: {
                        enabled: colors.grey[400],
                    },                    
                    strong: {
                        enabled: colors.grey[500],
                    },
                },
            warning: {
                    subtle: {
                        enabled: colors.grey[50],
                    },
                    accent: {
                        enabled: colors.grey[400],
                    },                    
                    strong: {
                        enabled: colors.grey[500],
                    },
                },
            critical: {
                    subtle: {
                        enabled: colors.grey[50],
                    },
                    accent: {
                        enabled: colors.grey[400],
                    },                    
                    strong: {
                        enabled: colors.grey[500],
                    },
                },
            info: {
                    subtle: {
                        enabled: colors.grey[50],
                    },
                    accent: {
                        enabled: colors.grey[400],
                    },                    
                    strong: {
                        enabled: colors.grey[500],
                    },
                },
            },
    },
}

export const darkTheme = {
    colors: {
        bgGlobal: colors.grey[900],
        text: colors.grey[50],
    },
}