/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProductosInputValues = {
    nombre?: string;
    descripcion?: string;
};
export declare type ProductosValidationValues = {
    nombre?: ValidationFunction<string>;
    descripcion?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProductosOverridesProps = {
    ProductosGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    descripcion?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProductosProps = React.PropsWithChildren<{
    overrides?: ProductosOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ProductosInputValues) => ProductosInputValues;
    onSuccess?: (fields: ProductosInputValues) => void;
    onError?: (fields: ProductosInputValues, errorMessage: string) => void;
    onChange?: (fields: ProductosInputValues) => ProductosInputValues;
    onValidate?: ProductosValidationValues;
} & React.CSSProperties>;
export default function Productos(props: ProductosProps): React.ReactElement;
