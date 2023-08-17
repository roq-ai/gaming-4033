import * as yup from 'yup';

export const betValidationSchema = yup.object().shape({
  amount: yup.number().integer().required(),
  status: yup.string().required(),
  game_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
