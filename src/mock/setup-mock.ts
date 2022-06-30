const env = process.env.NODE_ENV !== 'production';
export default ({ mock, setup }: { mock?: boolean; setup: () => void }) => {
  if (mock !== false && env) setup();
};
export const successResponseWrap = (data: unknown) => ({
  data,
  status: 'ok',
  msg: '请求成功',
  code: 200,
});

export const failResponseWrap = (data: unknown, msg: string, code = 50000) => ({
  data,
  status: 'fail',
  msg,
  code,
});
