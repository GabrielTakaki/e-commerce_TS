export default {
  port: 3001,
  host: 'localhost',
  dbUri: 'mongodb://localhost:27017/nodejs-ts',
  saltWorkFactor: 10,
  accessTokenExpiration: '15m',
  refreshTokenExpiration: '30d',
  privateKey: `-----BEGIN RSA PRIVATE KEY-----
  MIICXQIBAAKBgQCou7+RIRv9seGmSENyUUQXDWgFjsuofJNFhoJZw30wxbAUJEzn
  DMs6JN/jNWxZU177iDFPVZXF1+qD8GrrlnKNVFuUVly+FmHFw+7r7y4NRt+tZk3b
  wfNQ8p2uktdGX0BHRfMjZPt3LFBXzni+iQfHuSGsyEVoDClXIbz2IqQlywIDAQAB
  AoGAYVLRnvsy8vSsC8Y4qPJ4zLcd3b7Md2VLaNm5y963Ee+krSl29fnqKqJkROBm
  m2s8KOcYUgMyfUgZ63o7oaFIdo5vrPRUbiGLq5its7OAYO1g76SPlyTmrpL1sXMh
  QPy7i8XCdEYiR62wzfPfNHNezX1wbMn5bDN4DM50pJl/ZGECQQDVVF8e4B/QhSQc
  QInYdgr+01+6xw2ciafYMnkHDu51CnpWCwhc/GzeEFgWK+Gp26PnTZiSqDu0oCwV
  eQ9cSEBxAkEAynvPkjZ5boRxBwiDYwWW7a+jRMTOx4eHrXGbMVqeIVi/vhu8yKhq
  vJu2P9VXyQZ3bc1RkhMovx+SjWx0I5fn+wJAaKHJRcuHzy5+V50P/ytmmTXzbhjT
  hEPAHzoiQmQAcUeCWVFv+KuWehRqH/XF6RnhekGE4+m/3wfwl1eZQRnvAQJBAJpc
  IpR7VL1M2AGdmtPdSf7u24+sXVq81lEB/2Zzh4MybhIWgSeTRLN+HUSydla4yEj7
  sgii9HgnMIkBudP8lQsCQQCpVVMcn/gbnCm+fQ0mXWTDV/RV4Hn2x8DQdIlOiMHd
  CWORptDWcPgF7C/RvhjmhDZO83+c4mEwfx2ouiTNTF9C
  -----END RSA PRIVATE KEY-----`,
}
