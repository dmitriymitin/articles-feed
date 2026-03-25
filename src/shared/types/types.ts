import { ComponentType } from "react";

export type AnyObject = Record<PropertyKey, any>;

export type CustomComponent<P = AnyObject> = ComponentType<P> | string;
