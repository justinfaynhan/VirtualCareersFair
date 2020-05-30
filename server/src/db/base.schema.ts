export const Base = {
  created_at: {type: Date, required: true},
  updated_at: {type: Date, required: true}
}

export const User = {
  email: {type: String, required: true, index: true, dropDups: true},
  password: {type: String, required: true},
}