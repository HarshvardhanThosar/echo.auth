import bcrypt from 'bcrypt';

const { SALT_WORK_FACTOR = 10 } = process.env;

export async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(+SALT_WORK_FACTOR);
  const hash = await bcrypt.hash(password, salt);
  return hash;
}

export async function comparePasswords(
  password: string,
  hash: string,
): Promise<boolean> {
  return await bcrypt.compare(password, hash).catch(_error => false);
}
