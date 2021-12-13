import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AutthRoutes } from "./auth.routes";

export function Routes() {
    return(
        <NavigationContainer>
            <AutthRoutes/>
        </NavigationContainer>
    )
}