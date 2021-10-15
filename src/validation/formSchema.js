import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('name is required!')
        .min(2, 'name must be at least 2 characters'),
    size: yup
        .string()
        .oneOf(['10 inch', '12 inch', '14 inch', '16 inch'], 'size is required'),
    pepperoni: yup.boolean(),
    bacon: yup.boolean(),
    pineapple: yup.boolean(),
    olives: yup.boolean(),
    special: yup
        .string()
        .trim()
});

export default formSchema;