# https ssl tsl


![](../../source/img/2024-05-08-23-43-39.png)

![](../../source/img/2024-05-08-23-51-34.png)


![](../../source/img/2024-05-08-23-52-04.png)

 
 ![](../../source/img/2024-05-08-23-52-31.png)

  ![](../../source/img/2024-05-08-23-53-27.png)

  ![](../../source/img/2024-05-10-06-54-54.png)

## 开发和测试环境使用
![](../../source/img/2024-05-10-06-57-58.png)
openssl genpkey -algorithm RSA -out private-key.pem -aes256
输入一段密码 生成私钥 111111

生成pem证书文件  csr证书签名文件
openssl req -new -key private-key.pem -out certificate.csr  
![](../../source/img/2024-05-10-07-03-28.png)

![](../../source/img/2024-05-10-07-04-42.png)


### nodejs server https
### nginx https