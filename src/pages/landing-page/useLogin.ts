import { loginSuccess } from '@/reducers/authentication';
import { useLoginMutation } from '@services';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { RegexPattern } from '@constants';
import { useNavigate } from 'react-router';

const defaultValues = {
  username: '',
  password: '',
};

export default function useLogin() {
  const { t } = useTranslation();
  const loginSchema = Yup.object().shape({
    username: Yup.string()
      .required(t('error.field_required', { field: t('authentication.email') }))
      .matches(
        RegexPattern.email,
        t('error.field_invalid', { field: t('authentication.email') }),
      ),
    password: Yup.string().required(
      t('error.field_required', { field: t('authentication.password') }),
    ),
  });
  const methods = useForm({
    defaultValues,
    mode: 'onSubmit',
    resolver: yupResolver(loginSchema),
  });
  const {
    handleSubmit,
    formState: { errors, isValid },
    register,
    watch,
  } = methods;
  const [login, { isError, isLoading }] = useLoginMutation();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const loginHandle = async (value: typeof defaultValues) => {
    const { error, data } = await login(value);
    if (error) {
      return;
    }
    dispatch(loginSuccess(data.data));
    navigate('../');
  };

  return {
    isLoading,
    isError,
    loginHandle: handleSubmit(loginHandle),
    errors,
    isValid,
    methods,
    register,
    values: watch(),
  };
}
