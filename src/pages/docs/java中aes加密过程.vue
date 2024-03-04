<template>  <MarkdownToVue markdown="## Java Aes加密
crypto库   
1. 创建密钥         
```SecretKeySpec secretKey = newSecretKeySpec(keyBytes, &quot;AES&quot;);```
2. 在crypto中设置加密类型   
```Cipher cipher = Cipher.getInstance(&quot;AES/ECB/PKCS5Padding&quot;);```
3. 初始化   
```cipher.init(Cipher.ENCRYPT_MODE, secretKey);```
4. 加密  
```        byte[] encryptedBytes = cipher.doFinal(plainText.getBytes(&quot;UTF-8&quot;));```" /> </template>