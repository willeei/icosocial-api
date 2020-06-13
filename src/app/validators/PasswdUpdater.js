import * as Yup from 'yup';

export default async (req, res, next) => {
  try {
    const schema = Yup.object().shape({
      password: Yup.string()
        .required()
        .min(6),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
    });

    await schema.validate(req.body, { abortEarly: false });

    return next();
  } catch (err) {
    return res
      .status(200)
      .json({ error: 'Validation fails', messages: err.inner });
  }
};
