CREATE TABLE USERS(
	ID BIGINT AUTO_INCREMENT NOT NULL,
	FIRST_NAME VARCHAR(50) NOT NULL,
	LAST_NAME VARCHAR(50) NOT NULL,
	EMAIL VARCHAR(100) UNIQUE NOT NULL,
	PASSWORD VARCHAR(100) NOT NULL,
	TOKEN VARCHAR(200) NOT NULL,
	CONSTRAINT PK_USERS PRIMARY KEY (ID)
);

CREATE TABLE CATEGORIES(
	ID BIGINT AUTO_INCREMENT NOT NULL,
	CATEGORY_NAME VARCHAR(50) NOT NULL,
	DESCRIPTION VARCHAR(200) NOT NULL,
	CONSTRAINT PK_CATEGORIES PRIMARY KEY (ID)
);

CREATE TABLE PRODUCTS(
	ID BIGINT AUTO_INCREMENT NOT NULL,
	PRODUCT_NAME VARCHAR(50) NOT NULL,
	PRICE DOUBLE NOT NULL,
	FK_CATEGORY_ID BIGINT NOT NULL,
	CONSTRAINT PK_PRODUCTS PRIMARY KEY (ID),
	CONSTRAINT FK_CATEGORY_ID FOREIGN KEY (FK_CATEGORY_ID)
	  REFERENCES SHOP.CATEGORIES(ID)
);

CREATE TABLE ORDERS(
	ID BIGINT AUTO_INCREMENT NOT NULL,
  FK_USER_ID BIGINT NOT NULL,
	PRICE DOUBLE NOT NULL,
	ORDER_STATUS VARCHAR(20) NOT NULL,
	CREATE_TIME DATETIME NOT NULL,
	PAYMENT_TIME DATETIME NOT NULL,
  CONSTRAINT FK_USER_ID FOREIGN KEY (FK_USER_ID)
	  REFERENCES USERS(ID),
);

CREATE TABLE ORDER_TO_PRODUCTS(
  ID BIGINT AUTO_INCREMENT NOT NULL,
  FK_ORDER_ID BIGINT NOT NULL,
  FK_PRODUCT_ID BIGINT NOT NULL,
  QUANTITY BIGINT NOT NULL,
  CONSTRAINT PK_ORDER_DESCRIPTION PRIMARY KEY (ID),
  CONSTRAINT FK_ORDER_ID FOREIGN KEY (FK_ORDER_ID)
    REFERENCES ORDERS(ID),
  CONSTRAINT FK_PRODUCT_ID FOREIGN KEY (FK_PRODUCT_ID)
    REFERENCES PRODUCTS(ID)
);

CREATE TABLE ROLES (
  ID BIGINT PRIMARY KEY AUTO_INCREMENT,
  ROLE_NAME VARCHAR(15) NOT NULL
);

CREATE TABLE USER_TO_ROLE (
  ID BIGINT PRIMARY KEY AUTO_INCREMENT,
  FK_USER_ID BIGINT NOT NULL,
  FK_ROLE_ID BIGINT NOT NULL,
    CONSTRAINT FK_UTR_TO_USERS FOREIGN KEY (FK_USER_ID)
            REFERENCES USERS(ID),
    CONSTRAINT FK_UTR_TO_ROLES FOREIGN KEY (FK_ROLE_ID)
            REFERENCES ROLES(ID)
);

CREATE TABLE CART (
  CART_ID BIGINT NOT NULL,
    FOREIGN KEY(CART_ID) REFERENCES USERS(ID)
);

CREATE TABLE CART_TO_PRODUCT (
  FK_CART_ID BIGINT NOT NULL,
    FOREIGN KEY (FK_CART_ID) REFERENCES CART(CART_ID),
  FK_PRODUCT_ID BIGINT NOT NULL,
    FOREIGN KEY (FK_PRODUCT_ID) REFERENCES PRODUCTS(ID)
);
