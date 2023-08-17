import * as yup from 'yup';

export const teamMemberValidationSchema = yup.object().shape({
  role: yup.string().required(),
  status: yup.string().required(),
  user_id: yup.string().nullable(),
  organization_id: yup.string().nullable(),
});
