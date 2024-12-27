export enum ConfigEnv {
  HTTP_PORT = 'PORT',
  TCP_PORT = 'TCP_PORT',

  LOG_LEVEL = 'LOG_LEVEL',
  ENVIRONMENT = 'NODE_ENV',

  HOST_URL = 'HOST_URL',

  FRONTEND_URL = 'FRONTEND_URL',

  AUTH_HOST = 'AUTH_HOST',
  AUTH_PORT = 'AUTH_PORT',

  JWT_SECRET = 'JWT_SECRET_KEY',
  JWT_EXPIRATION = 'JWT_EXPIRY',

  MONGODB_URI = 'DB_URI',

  LINKEDIN_CLIENTID = 'LINKEDIN_CLIENTID',
  LINKEDIN_CLIENTSECRET = 'LINKEDIN_CLIENTSECRET',
  LINKEDIN_SCOPE = 'LINKEDIN_SCOPE',

  JUSPAY_WEBHOOK_STRATEGY = 'juspayWebhook',
  JUSPAY_WEBHOOK_USERNAME = 'JUSPAY_WEBHOOK_USERNAME',
  JUSPAY_WEBHOOK_PASSWORD = 'JUSPAY_WEBHOOK_PASSWORD',
  JUSPAY_RESPONSE_KEY = 'JUSPAY_RESPONSE_KEY',
  JUSPAY_MERCHANT_ID = 'JUSPAY_MERCHANT_ID',
  JUSPAY_BASE_URL = 'JUSPAY_BASE_URL',
  JUSPAY_KEY_UUID = 'JUSPAY_KEY_UUID',
  JUSPAY_PAYMENT_PAGE_CLIENT_ID = 'JUSPAY_PAYMENT_PAGE_CLIENT_ID',
  JUSPAY_JWK_BUCKET_NAME = 'JUSPAY_JWK_BUCKET_NAME',
  JUSPAY_BUCKET_PREFIX = 'JUSPAY_BUCKET_PREFIX',
  JUSPAY_JWK_PUBLIC_KEY_NAME = 'JUSPAY_JWK_PUBLIC_KEY_NAME',
  JUSPAY_JWK_PRIVATE_KEY_NAME = 'JUSPAY_JWK_PRIVATE_KEY_NAME',
  JUSPAY_JWK_PUBLIC_ENCRYPTION_KEY_NAME = 'JUSPAY_JWK_PUBLIC_ENCRYPTION_KEY_NAME',
  JUSPAY_JWK_PRIVATE_ENCRYPTION_KEY_NAME = 'JUSPAY_JWK_PRIVATE_ENCRYPTION_KEY_NAME',

  AWS_ACCESS_KEY_ID = 'AWS_ACCESS_KEY_ID',
  AWS_SECRET_ACCESS_KEY = 'AWS_SECRET_ACCESS_KEY',
  AWS_KMS_ACCESS_KEY_ID = 'AWS_KMS_ACCESS_KEY_ID',
  AWS_KMS_SECRET_ACCESS_KEY = 'AWS_KMS_SECRET_ACCESS_KEY',
  AWS_REGION = 'AWS_REGION',

  COMETCHAT_APPID = 'COMETCHAT_APPID',
  COMETCHAT_REGION = 'COMETCHAT_REGION',
  COMETCHAT_AUTHKEY = 'COMETCHAT_AUTHKEY',

  CRM_HOST_URL = 'CRM_HOST_URL',
  CRM_UI_URL = 'CRM_UI_URL',
  CRM_ORGANIZATION = 'CRM_ORGANIZATION',
  CRM_ENCRYPTION_KEY = 'CRM_ENCRYPTION_KEY',
  CRM_LOGIN_KEY = 'CRM_LOGIN_KEY',
  CRM_SECRET_KEY = 'CRM_SECRET_KEY',

  POSTS_BUCKET_NAME = 'POSTS_BUCKET_NAME',
  IMAGE_UPLOAD_BUCKET = 'IMAGE_UPLOAD_BUCKET',
  PERSONAL_RERA_CERTIFICATE_S3_PATH = 'PERSONAL_RERA_CERTIFICATE_S3_PATH',
  GOOGLE_MAPS_API_URL = 'GOOGLE_MAPS_API_URL',
  GOOGLE_API_KEY = 'GOOGLE_API_KEY',

  SMS_API_KEY = 'SMS_API_KEY',
  SMS_SERVER_URL = 'SMS_SERVER_URL',
  SMS_USER_ID = 'SMS_USER_ID',
  SMS_PASSWORD = 'SMS_PASSWORD',
  SMS_SENDER_NAME = 'SMS_SENDER_NAME',
  SMS_DLT_ENTITY_ID = 'SMS_DLT_ENTITY_ID',
  SMS_SEND_METHOD = 'SMS_SEND_METHOD',
  SMS_MSG_TYPE = 'SMS_MSG_TYPE',
  SMS_DLT_TEMPLATE_ID = 'SMS_DLT_TEMPLATE_ID',
  SMS_OUTPUT = 'SMS_OUTPUT',
  SMS_DUPLICATE_CHECK = 'SMS_DUPLICATE_CHECK',
  SMS_PAYLOAD = 'SMS_PAYLOAD',

  FMS_HOST_URL = 'FMS_HOST_URL',
  FMS_UI_URL = 'FMS_UI_URL',
  FMS_PASSWORD = 'FMS_PASSWORD',
  FMS_SECRET_KEY = 'FMS_SECRET_KEY',

  OKR_HOST_URL = 'OKR_HOST_URL',
  OKR_UI_URL = 'OKR_UI_URL',
  OKR_SECRET_KEY = 'OKR_SECRET_KEY',
  OKR_ORGANIZATION = 'OKR_ORGANIZATION',

  MAIL_HOST = 'MAIL_HOST',
  MAIL_USER = 'MAIL_USER',
  MAIL_PASSWORD = 'MAIL_PASSWORD',
  MAIL_FROM = 'MAIL_FROM',
  MAIL_PORT = 'MAIL_PORT',

  SUPPORT_EMAIL_ID = 'SUPPORT_EMAIL_ID',

  DB_USER_NAME = 'tt_uapp',
  DB_USER_CONN = 'UAPP_DB',

  R_ENGINE_HOST = 'R_ENGINE_HOST',

  DWH_API_HOST = 'DWH_API_HOST',
  DWH_API_EMAIL = 'DWH_API_EMAIL',
  DWH_API_PASSWORD = 'DWH_API_PASSWORD',

  REDIS_HOST = 'REDIS_HOST',
  REDIS_PORT = 'REDIS_PORT',

  INFORMATION_BOT_USER = 'INFORMATION_BOT_USER',
  INFORMATION_BOT_COMPANY = 'INFORMATION_BOT_COMPANY',

  GEOLOCATION_URL='GEOLOCATION_URL',
}