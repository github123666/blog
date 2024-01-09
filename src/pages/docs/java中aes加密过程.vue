<template><div><h2>Java Aes加密</h2>
<p>crypto库 <br />
1. 创建密钥       <br />
<code>SecretKeySpec secretKey = newSecretKeySpec(keyBytes, "AES");</code>
2. 在crypto中设置加密类型 <br />
<code>Cipher cipher = Cipher.getInstance("AES/ECB/PKCS5Padding");</code>
3. 初始化 <br />
<code>cipher.init(Cipher.ENCRYPT_MODE, secretKey);</code>
4. 加密<br />
<code>byte[] encryptedBytes = cipher.doFinal(plainText.getBytes("UTF-8"));</code></p></div></template>