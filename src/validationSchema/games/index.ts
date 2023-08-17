import * as yup from 'yup';

export const gameValidationSchema = yup.object().shape({
  name: yup.string().required(),
  rules: yup.string().required(),
  betting_limit: yup.number().integer().required(),
  organization_id: yup.string().nullable(),
});
