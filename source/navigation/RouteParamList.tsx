import { RouteProp } from "@react-navigation/core"
import { StackNavigationProp } from "@react-navigation/stack"

export type RuoteParamsList = {
    Home:undefined,
    Login:undefined,
    signup:undefined   
}

export type RouteStackParamList<T extends keyof RuoteParamsList> ={
    navigation:StackNavigationProp<RuoteParamsList,T>;
    route:RouteProp<RuoteParamsList,T>
}