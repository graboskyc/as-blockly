{
    "blocks": {
        "languageVersion": 0,
        "blocks": [
            {
                "type": "atlasimports",
                "id": "#.X|?*03V{p*YBBuJSTC",
                "x": 90,
                "y": -130,
                "next": {
                    "block": {
                        "type": "variables_set",
                        "id": "7J(twZc/TB4i|y[85unX",
                        "fields": {
                            "VAR": {
                                "id": "^pjc$Aa4%|r^N)$x^eS_"
                            }
                        },
                        "inputs": {
                            "VALUE": {
                                "block": {
                                    "type": "text",
                                    "id": "BVba.FH@ig}2;|0p-23i",
                                    "fields": {
                                        "TEXT": "mongodb+srv://..."
                                    }
                                }
                            }
                        },
                        "next": {
                            "block": {
                                "type": "variables_set",
                                "id": "X1*P|HhzM1Ye2f9#;*C|",
                                "fields": {
                                    "VAR": {
                                        "id": "AbJo~MKx5!]5#wK=Kz[K"
                                    }
                                },
                                "inputs": {
                                    "VALUE": {
                                        "block": {
                                            "type": "text",
                                            "id": "||Mz,9U_Kw^:7J*.!!^#",
                                            "fields": {
                                                "TEXT": "sample_mflix"
                                            }
                                        }
                                    }
                                },
                                "next": {
                                    "block": {
                                        "type": "variables_set",
                                        "id": "Nw~L+/F4J)*uX~*nZ/_U",
                                        "fields": {
                                            "VAR": {
                                                "id": "%j=]=Df7mFS:(x,2;8ve"
                                            }
                                        },
                                        "inputs": {
                                            "VALUE": {
                                                "block": {
                                                    "type": "text",
                                                    "id": "M?nqJ3?J%;y[XH|#gCG)",
                                                    "fields": {
                                                        "TEXT": "movies"
                                                    }
                                                }
                                            }
                                        },
                                        "next": {
                                            "block": {
                                                "type": "variables_set",
                                                "id": "3?jG|z,Vj_CknaMlNkr}",
                                                "fields": {
                                                    "VAR": {
                                                        "id": "7$^$SvLID{Yoh0#,EHq^"
                                                    }
                                                },
                                                "inputs": {
                                                    "VALUE": {
                                                        "block": {
                                                            "type": "text",
                                                            "id": "L`gK;(ehK*7*P}1?rF0(",
                                                            "fields": {
                                                                "TEXT": "mySearchIndex"
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        ]
    },
    "variables": [
        {
            "name": "connectionString",
            "id": "^pjc$Aa4%|r^N)$x^eS_"
        },
        {
            "name": "databaseName",
            "id": "AbJo~MKx5!]5#wK=Kz[K"
        },
        {
            "name": "collectionName",
            "id": "%j=]=Df7mFS:(x,2;8ve"
        },
        {
            "name": "searchIndexName",
            "id": "7$^$SvLID{Yoh0#,EHq^"
        }
    ]
}