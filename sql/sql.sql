PGDMP  7            
    	    |         
   turnoscaja    16.4    16.4 p    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    24590 
   turnoscaja    DATABASE     ~   CREATE DATABASE turnoscaja WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Mexico.1252';
    DROP DATABASE turnoscaja;
                postgres    false            �            1259    24806 	   attention    TABLE     �   CREATE TABLE public.attention (
    attentionid integer NOT NULL,
    turn_turnid integer,
    client_clientid integer,
    attentiontype_attentiontypeid character varying(3),
    attentionstatus_statusid integer
);
    DROP TABLE public.attention;
       public         heap    postgres    false            �            1259    24805    attention_attentionid_seq    SEQUENCE     �   CREATE SEQUENCE public.attention_attentionid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.attention_attentionid_seq;
       public          postgres    false    241            �           0    0    attention_attentionid_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.attention_attentionid_seq OWNED BY public.attention.attentionid;
          public          postgres    false    240            �            1259    24800    attentionstatus    TABLE     n   CREATE TABLE public.attentionstatus (
    statusid integer NOT NULL,
    description character varying(30)
);
 #   DROP TABLE public.attentionstatus;
       public         heap    postgres    false            �            1259    24795    attentiontype    TABLE     �   CREATE TABLE public.attentiontype (
    attentiontypeid character varying(3) NOT NULL,
    description character varying(100)
);
 !   DROP TABLE public.attentiontype;
       public         heap    postgres    false            �            1259    24670    cash    TABLE     �   CREATE TABLE public.cash (
    cashid integer NOT NULL,
    cashdescription character varying(50),
    active character varying(1)
);
    DROP TABLE public.cash;
       public         heap    postgres    false            �            1259    24669    cash_cashid_seq    SEQUENCE     �   CREATE SEQUENCE public.cash_cashid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.cash_cashid_seq;
       public          postgres    false    225            �           0    0    cash_cashid_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.cash_cashid_seq OWNED BY public.cash.cashid;
          public          postgres    false    224            �            1259    24704    client    TABLE     h  CREATE TABLE public.client (
    clientid integer NOT NULL,
    name character varying(50),
    lastname character varying(50),
    identification character varying(13),
    email character varying(120),
    phonenumber character varying(13),
    address character varying(100),
    referencedaddress character varying(100),
    active boolean DEFAULT true
);
    DROP TABLE public.client;
       public         heap    postgres    false            �            1259    24703    client_clientid_seq    SEQUENCE     �   CREATE SEQUENCE public.client_clientid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.client_clientid_seq;
       public          postgres    false    230            �           0    0    client_clientid_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.client_clientid_seq OWNED BY public.client.clientid;
          public          postgres    false    229            �            1259    24757    contract    TABLE     J  CREATE TABLE public.contract (
    contractid integer NOT NULL,
    startdate timestamp with time zone,
    enddate timestamp with time zone,
    service_serviceid integer,
    statuscontract_statusid character varying(3),
    client_clientid integer,
    methodpayment_methodpaymentid integer,
    active boolean DEFAULT true
);
    DROP TABLE public.contract;
       public         heap    postgres    false            �            1259    24756    contract_contractid_seq    SEQUENCE     �   CREATE SEQUENCE public.contract_contractid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.contract_contractid_seq;
       public          postgres    false    235            �           0    0    contract_contractid_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.contract_contractid_seq OWNED BY public.contract.contractid;
          public          postgres    false    234            �            1259    24623    device    TABLE     �   CREATE TABLE public.device (
    deviceid integer NOT NULL,
    devicename character varying(50),
    service_serviceid integer
);
    DROP TABLE public.device;
       public         heap    postgres    false            �            1259    24622    device_deviceid_seq    SEQUENCE     �   CREATE SEQUENCE public.device_deviceid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.device_deviceid_seq;
       public          postgres    false    219            �           0    0    device_deviceid_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.device_deviceid_seq OWNED BY public.device.deviceid;
          public          postgres    false    218            �            1259    24750    methodpayment    TABLE     s   CREATE TABLE public.methodpayment (
    methodpaymentid integer NOT NULL,
    description character varying(50)
);
 !   DROP TABLE public.methodpayment;
       public         heap    postgres    false            �            1259    24749 !   methodpayment_methodpaymentid_seq    SEQUENCE     �   CREATE SEQUENCE public.methodpayment_methodpaymentid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 8   DROP SEQUENCE public.methodpayment_methodpaymentid_seq;
       public          postgres    false    233            �           0    0 !   methodpayment_methodpaymentid_seq    SEQUENCE OWNED BY     g   ALTER SEQUENCE public.methodpayment_methodpaymentid_seq OWNED BY public.methodpayment.methodpaymentid;
          public          postgres    false    232            �            1259    24784    payments    TABLE     �   CREATE TABLE public.payments (
    paymentid integer NOT NULL,
    paymentdate timestamp with time zone,
    client_clientid integer
);
    DROP TABLE public.payments;
       public         heap    postgres    false            �            1259    24783    payments_paymentid_seq    SEQUENCE     �   CREATE SEQUENCE public.payments_paymentid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.payments_paymentid_seq;
       public          postgres    false    237            �           0    0    payments_paymentid_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.payments_paymentid_seq OWNED BY public.payments.paymentid;
          public          postgres    false    236            �            1259    24644    rol    TABLE     [   CREATE TABLE public.rol (
    rolid integer NOT NULL,
    rolname character varying(50)
);
    DROP TABLE public.rol;
       public         heap    postgres    false            �            1259    24643    rol_rolid_seq    SEQUENCE     �   CREATE SEQUENCE public.rol_rolid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.rol_rolid_seq;
       public          postgres    false    221            �           0    0    rol_rolid_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.rol_rolid_seq OWNED BY public.rol.rolid;
          public          postgres    false    220            �            1259    24616    service    TABLE     �   CREATE TABLE public.service (
    serviceid integer NOT NULL,
    servicename character varying(100),
    servicedescription character varying(150),
    price character varying(10),
    equipment character varying(100),
    speed integer
);
    DROP TABLE public.service;
       public         heap    postgres    false            �            1259    24615    service_serviceid_seq    SEQUENCE     �   CREATE SEQUENCE public.service_serviceid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.service_serviceid_seq;
       public          postgres    false    217            �           0    0    service_serviceid_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.service_serviceid_seq OWNED BY public.service.serviceid;
          public          postgres    false    216            �            1259    24722    statuscontract    TABLE     z   CREATE TABLE public.statuscontract (
    statusid character varying(3) NOT NULL,
    description character varying(50)
);
 "   DROP TABLE public.statuscontract;
       public         heap    postgres    false            �            1259    24692    turn    TABLE       CREATE TABLE public.turn (
    turnid integer NOT NULL,
    description character varying(7),
    date timestamp without time zone DEFAULT (CURRENT_TIMESTAMP AT TIME ZONE 'America/Guayaquil'::text),
    cash_cashid integer,
    usergestorid integer,
    active boolean DEFAULT true
);
    DROP TABLE public.turn;
       public         heap    postgres    false            �            1259    24691    turn_turnid_seq    SEQUENCE     �   CREATE SEQUENCE public.turn_turnid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.turn_turnid_seq;
       public          postgres    false    228            �           0    0    turn_turnid_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.turn_turnid_seq OWNED BY public.turn.turnid;
          public          postgres    false    227            �            1259    24651    user    TABLE     �  CREATE TABLE public."user" (
    userid integer NOT NULL,
    username character varying(50),
    email character varying(100),
    password character varying(100),
    rol_rolid integer,
    createdate timestamp without time zone DEFAULT (CURRENT_TIMESTAMP AT TIME ZONE 'America/Guayaquil'::text),
    usercreate integer,
    dateapproval timestamp without time zone,
    userstatus_statusid character varying(3),
    active boolean DEFAULT true
);
    DROP TABLE public."user";
       public         heap    postgres    false            �            1259    24650    user_userid_seq    SEQUENCE     �   CREATE SEQUENCE public.user_userid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.user_userid_seq;
       public          postgres    false    223            �           0    0    user_userid_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.user_userid_seq OWNED BY public."user".userid;
          public          postgres    false    222            �            1259    24676    usercash    TABLE     e   CREATE TABLE public.usercash (
    user_userid integer NOT NULL,
    cash_cashid integer NOT NULL
);
    DROP TABLE public.usercash;
       public         heap    postgres    false            �            1259    24603 
   userstatus    TABLE     v   CREATE TABLE public.userstatus (
    statusid character varying(3) NOT NULL,
    description character varying(50)
);
    DROP TABLE public.userstatus;
       public         heap    postgres    false            �           2604    24809    attention attentionid    DEFAULT     ~   ALTER TABLE ONLY public.attention ALTER COLUMN attentionid SET DEFAULT nextval('public.attention_attentionid_seq'::regclass);
 D   ALTER TABLE public.attention ALTER COLUMN attentionid DROP DEFAULT;
       public          postgres    false    241    240    241            �           2604    24673    cash cashid    DEFAULT     j   ALTER TABLE ONLY public.cash ALTER COLUMN cashid SET DEFAULT nextval('public.cash_cashid_seq'::regclass);
 :   ALTER TABLE public.cash ALTER COLUMN cashid DROP DEFAULT;
       public          postgres    false    224    225    225            �           2604    24707    client clientid    DEFAULT     r   ALTER TABLE ONLY public.client ALTER COLUMN clientid SET DEFAULT nextval('public.client_clientid_seq'::regclass);
 >   ALTER TABLE public.client ALTER COLUMN clientid DROP DEFAULT;
       public          postgres    false    229    230    230            �           2604    24760    contract contractid    DEFAULT     z   ALTER TABLE ONLY public.contract ALTER COLUMN contractid SET DEFAULT nextval('public.contract_contractid_seq'::regclass);
 B   ALTER TABLE public.contract ALTER COLUMN contractid DROP DEFAULT;
       public          postgres    false    234    235    235            �           2604    24626    device deviceid    DEFAULT     r   ALTER TABLE ONLY public.device ALTER COLUMN deviceid SET DEFAULT nextval('public.device_deviceid_seq'::regclass);
 >   ALTER TABLE public.device ALTER COLUMN deviceid DROP DEFAULT;
       public          postgres    false    218    219    219            �           2604    24753    methodpayment methodpaymentid    DEFAULT     �   ALTER TABLE ONLY public.methodpayment ALTER COLUMN methodpaymentid SET DEFAULT nextval('public.methodpayment_methodpaymentid_seq'::regclass);
 L   ALTER TABLE public.methodpayment ALTER COLUMN methodpaymentid DROP DEFAULT;
       public          postgres    false    232    233    233            �           2604    24787    payments paymentid    DEFAULT     x   ALTER TABLE ONLY public.payments ALTER COLUMN paymentid SET DEFAULT nextval('public.payments_paymentid_seq'::regclass);
 A   ALTER TABLE public.payments ALTER COLUMN paymentid DROP DEFAULT;
       public          postgres    false    237    236    237            �           2604    24647 	   rol rolid    DEFAULT     f   ALTER TABLE ONLY public.rol ALTER COLUMN rolid SET DEFAULT nextval('public.rol_rolid_seq'::regclass);
 8   ALTER TABLE public.rol ALTER COLUMN rolid DROP DEFAULT;
       public          postgres    false    220    221    221            �           2604    24619    service serviceid    DEFAULT     v   ALTER TABLE ONLY public.service ALTER COLUMN serviceid SET DEFAULT nextval('public.service_serviceid_seq'::regclass);
 @   ALTER TABLE public.service ALTER COLUMN serviceid DROP DEFAULT;
       public          postgres    false    217    216    217            �           2604    24695    turn turnid    DEFAULT     j   ALTER TABLE ONLY public.turn ALTER COLUMN turnid SET DEFAULT nextval('public.turn_turnid_seq'::regclass);
 :   ALTER TABLE public.turn ALTER COLUMN turnid DROP DEFAULT;
       public          postgres    false    227    228    228            �           2604    24654    user userid    DEFAULT     l   ALTER TABLE ONLY public."user" ALTER COLUMN userid SET DEFAULT nextval('public.user_userid_seq'::regclass);
 <   ALTER TABLE public."user" ALTER COLUMN userid DROP DEFAULT;
       public          postgres    false    222    223    223            �          0    24806 	   attention 
   TABLE DATA           �   COPY public.attention (attentionid, turn_turnid, client_clientid, attentiontype_attentiontypeid, attentionstatus_statusid) FROM stdin;
    public          postgres    false    241   "�                 0    24800    attentionstatus 
   TABLE DATA           @   COPY public.attentionstatus (statusid, description) FROM stdin;
    public          postgres    false    239   ?�       ~          0    24795    attentiontype 
   TABLE DATA           E   COPY public.attentiontype (attentiontypeid, description) FROM stdin;
    public          postgres    false    238   \�       q          0    24670    cash 
   TABLE DATA           ?   COPY public.cash (cashid, cashdescription, active) FROM stdin;
    public          postgres    false    225   y�       v          0    24704    client 
   TABLE DATA           �   COPY public.client (clientid, name, lastname, identification, email, phonenumber, address, referencedaddress, active) FROM stdin;
    public          postgres    false    230   ��       {          0    24757    contract 
   TABLE DATA           �   COPY public.contract (contractid, startdate, enddate, service_serviceid, statuscontract_statusid, client_clientid, methodpayment_methodpaymentid, active) FROM stdin;
    public          postgres    false    235   =�       k          0    24623    device 
   TABLE DATA           I   COPY public.device (deviceid, devicename, service_serviceid) FROM stdin;
    public          postgres    false    219   ��       y          0    24750    methodpayment 
   TABLE DATA           E   COPY public.methodpayment (methodpaymentid, description) FROM stdin;
    public          postgres    false    233   ��       }          0    24784    payments 
   TABLE DATA           K   COPY public.payments (paymentid, paymentdate, client_clientid) FROM stdin;
    public          postgres    false    237   �       m          0    24644    rol 
   TABLE DATA           -   COPY public.rol (rolid, rolname) FROM stdin;
    public          postgres    false    221   3�       i          0    24616    service 
   TABLE DATA           f   COPY public.service (serviceid, servicename, servicedescription, price, equipment, speed) FROM stdin;
    public          postgres    false    217   z�       w          0    24722    statuscontract 
   TABLE DATA           ?   COPY public.statuscontract (statusid, description) FROM stdin;
    public          postgres    false    231   ��       t          0    24692    turn 
   TABLE DATA           \   COPY public.turn (turnid, description, date, cash_cashid, usergestorid, active) FROM stdin;
    public          postgres    false    228   �       o          0    24651    user 
   TABLE DATA           �   COPY public."user" (userid, username, email, password, rol_rolid, createdate, usercreate, dateapproval, userstatus_statusid, active) FROM stdin;
    public          postgres    false    223   o�       r          0    24676    usercash 
   TABLE DATA           <   COPY public.usercash (user_userid, cash_cashid) FROM stdin;
    public          postgres    false    226   "�       g          0    24603 
   userstatus 
   TABLE DATA           ;   COPY public.userstatus (statusid, description) FROM stdin;
    public          postgres    false    215   ?�       �           0    0    attention_attentionid_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.attention_attentionid_seq', 1, false);
          public          postgres    false    240            �           0    0    cash_cashid_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.cash_cashid_seq', 1, true);
          public          postgres    false    224            �           0    0    client_clientid_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.client_clientid_seq', 3, true);
          public          postgres    false    229            �           0    0    contract_contractid_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.contract_contractid_seq', 6, true);
          public          postgres    false    234            �           0    0    device_deviceid_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.device_deviceid_seq', 1, false);
          public          postgres    false    218            �           0    0 !   methodpayment_methodpaymentid_seq    SEQUENCE SET     O   SELECT pg_catalog.setval('public.methodpayment_methodpaymentid_seq', 4, true);
          public          postgres    false    232            �           0    0    payments_paymentid_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.payments_paymentid_seq', 1, false);
          public          postgres    false    236            �           0    0    rol_rolid_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.rol_rolid_seq', 4, true);
          public          postgres    false    220            �           0    0    service_serviceid_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.service_serviceid_seq', 6, true);
          public          postgres    false    216            �           0    0    turn_turnid_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.turn_turnid_seq', 4, true);
          public          postgres    false    227            �           0    0    user_userid_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.user_userid_seq', 27, true);
          public          postgres    false    222            �           2606    24811    attention attention_pkey 
   CONSTRAINT     _   ALTER TABLE ONLY public.attention
    ADD CONSTRAINT attention_pkey PRIMARY KEY (attentionid);
 B   ALTER TABLE ONLY public.attention DROP CONSTRAINT attention_pkey;
       public            postgres    false    241            �           2606    24804 $   attentionstatus attentionstatus_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public.attentionstatus
    ADD CONSTRAINT attentionstatus_pkey PRIMARY KEY (statusid);
 N   ALTER TABLE ONLY public.attentionstatus DROP CONSTRAINT attentionstatus_pkey;
       public            postgres    false    239            �           2606    24799     attentiontype attentiontype_pkey 
   CONSTRAINT     k   ALTER TABLE ONLY public.attentiontype
    ADD CONSTRAINT attentiontype_pkey PRIMARY KEY (attentiontypeid);
 J   ALTER TABLE ONLY public.attentiontype DROP CONSTRAINT attentiontype_pkey;
       public            postgres    false    238            �           2606    24675    cash cash_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.cash
    ADD CONSTRAINT cash_pkey PRIMARY KEY (cashid);
 8   ALTER TABLE ONLY public.cash DROP CONSTRAINT cash_pkey;
       public            postgres    false    225            �           2606    24709    client client_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.client
    ADD CONSTRAINT client_pkey PRIMARY KEY (clientid);
 <   ALTER TABLE ONLY public.client DROP CONSTRAINT client_pkey;
       public            postgres    false    230            �           2606    24762    contract contract_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.contract
    ADD CONSTRAINT contract_pkey PRIMARY KEY (contractid);
 @   ALTER TABLE ONLY public.contract DROP CONSTRAINT contract_pkey;
       public            postgres    false    235            �           2606    24628    device device_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.device
    ADD CONSTRAINT device_pkey PRIMARY KEY (deviceid);
 <   ALTER TABLE ONLY public.device DROP CONSTRAINT device_pkey;
       public            postgres    false    219            �           2606    24755     methodpayment methodpayment_pkey 
   CONSTRAINT     k   ALTER TABLE ONLY public.methodpayment
    ADD CONSTRAINT methodpayment_pkey PRIMARY KEY (methodpaymentid);
 J   ALTER TABLE ONLY public.methodpayment DROP CONSTRAINT methodpayment_pkey;
       public            postgres    false    233            �           2606    24789    payments payments_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public.payments
    ADD CONSTRAINT payments_pkey PRIMARY KEY (paymentid);
 @   ALTER TABLE ONLY public.payments DROP CONSTRAINT payments_pkey;
       public            postgres    false    237            �           2606    24649    rol rol_pkey 
   CONSTRAINT     M   ALTER TABLE ONLY public.rol
    ADD CONSTRAINT rol_pkey PRIMARY KEY (rolid);
 6   ALTER TABLE ONLY public.rol DROP CONSTRAINT rol_pkey;
       public            postgres    false    221            �           2606    24621    service service_pkey 
   CONSTRAINT     Y   ALTER TABLE ONLY public.service
    ADD CONSTRAINT service_pkey PRIMARY KEY (serviceid);
 >   ALTER TABLE ONLY public.service DROP CONSTRAINT service_pkey;
       public            postgres    false    217            �           2606    24726 "   statuscontract statuscontract_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public.statuscontract
    ADD CONSTRAINT statuscontract_pkey PRIMARY KEY (statusid);
 L   ALTER TABLE ONLY public.statuscontract DROP CONSTRAINT statuscontract_pkey;
       public            postgres    false    231            �           2606    24697    turn turn_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.turn
    ADD CONSTRAINT turn_pkey PRIMARY KEY (turnid);
 8   ALTER TABLE ONLY public.turn DROP CONSTRAINT turn_pkey;
       public            postgres    false    228            �           2606    24656    user user_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (userid);
 :   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_pkey;
       public            postgres    false    223            �           2606    24658    user user_username_key 
   CONSTRAINT     W   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_username_key UNIQUE (username);
 B   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_username_key;
       public            postgres    false    223            �           2606    24680    usercash usercash_pkey 
   CONSTRAINT     j   ALTER TABLE ONLY public.usercash
    ADD CONSTRAINT usercash_pkey PRIMARY KEY (user_userid, cash_cashid);
 @   ALTER TABLE ONLY public.usercash DROP CONSTRAINT usercash_pkey;
       public            postgres    false    226    226            �           2606    24607    userstatus userstatus_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.userstatus
    ADD CONSTRAINT userstatus_pkey PRIMARY KEY (statusid);
 D   ALTER TABLE ONLY public.userstatus DROP CONSTRAINT userstatus_pkey;
       public            postgres    false    215            �           2606    24827 1   attention attention_attentionstatus_statusid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.attention
    ADD CONSTRAINT attention_attentionstatus_statusid_fkey FOREIGN KEY (attentionstatus_statusid) REFERENCES public.attentionstatus(statusid);
 [   ALTER TABLE ONLY public.attention DROP CONSTRAINT attention_attentionstatus_statusid_fkey;
       public          postgres    false    239    4806    241            �           2606    24822 6   attention attention_attentiontype_attentiontypeid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.attention
    ADD CONSTRAINT attention_attentiontype_attentiontypeid_fkey FOREIGN KEY (attentiontype_attentiontypeid) REFERENCES public.attentiontype(attentiontypeid);
 `   ALTER TABLE ONLY public.attention DROP CONSTRAINT attention_attentiontype_attentiontypeid_fkey;
       public          postgres    false    241    4804    238            �           2606    24817 (   attention attention_client_clientid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.attention
    ADD CONSTRAINT attention_client_clientid_fkey FOREIGN KEY (client_clientid) REFERENCES public.client(clientid);
 R   ALTER TABLE ONLY public.attention DROP CONSTRAINT attention_client_clientid_fkey;
       public          postgres    false    241    230    4794            �           2606    24812 $   attention attention_turn_turnid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.attention
    ADD CONSTRAINT attention_turn_turnid_fkey FOREIGN KEY (turn_turnid) REFERENCES public.turn(turnid);
 N   ALTER TABLE ONLY public.attention DROP CONSTRAINT attention_turn_turnid_fkey;
       public          postgres    false    228    241    4792            �           2606    24773 &   contract contract_client_clientid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.contract
    ADD CONSTRAINT contract_client_clientid_fkey FOREIGN KEY (client_clientid) REFERENCES public.client(clientid);
 P   ALTER TABLE ONLY public.contract DROP CONSTRAINT contract_client_clientid_fkey;
       public          postgres    false    235    4794    230            �           2606    24778 4   contract contract_methodpayment_methodpaymentid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.contract
    ADD CONSTRAINT contract_methodpayment_methodpaymentid_fkey FOREIGN KEY (methodpayment_methodpaymentid) REFERENCES public.methodpayment(methodpaymentid);
 ^   ALTER TABLE ONLY public.contract DROP CONSTRAINT contract_methodpayment_methodpaymentid_fkey;
       public          postgres    false    235    4798    233            �           2606    24763 (   contract contract_service_serviceid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.contract
    ADD CONSTRAINT contract_service_serviceid_fkey FOREIGN KEY (service_serviceid) REFERENCES public.service(serviceid);
 R   ALTER TABLE ONLY public.contract DROP CONSTRAINT contract_service_serviceid_fkey;
       public          postgres    false    4778    235    217            �           2606    24768 .   contract contract_statuscontract_statusid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.contract
    ADD CONSTRAINT contract_statuscontract_statusid_fkey FOREIGN KEY (statuscontract_statusid) REFERENCES public.statuscontract(statusid);
 X   ALTER TABLE ONLY public.contract DROP CONSTRAINT contract_statuscontract_statusid_fkey;
       public          postgres    false    231    4796    235            �           2606    24629 $   device device_service_serviceid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.device
    ADD CONSTRAINT device_service_serviceid_fkey FOREIGN KEY (service_serviceid) REFERENCES public.service(serviceid);
 N   ALTER TABLE ONLY public.device DROP CONSTRAINT device_service_serviceid_fkey;
       public          postgres    false    217    219    4778            �           2606    24790 &   payments payments_client_clientid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.payments
    ADD CONSTRAINT payments_client_clientid_fkey FOREIGN KEY (client_clientid) REFERENCES public.client(clientid);
 P   ALTER TABLE ONLY public.payments DROP CONSTRAINT payments_client_clientid_fkey;
       public          postgres    false    4794    237    230            �           2606    24698    turn turn_cash_cashid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.turn
    ADD CONSTRAINT turn_cash_cashid_fkey FOREIGN KEY (cash_cashid) REFERENCES public.cash(cashid);
 D   ALTER TABLE ONLY public.turn DROP CONSTRAINT turn_cash_cashid_fkey;
       public          postgres    false    228    4788    225            �           2606    24659    user user_rol_rolid_fkey    FK CONSTRAINT     |   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_rol_rolid_fkey FOREIGN KEY (rol_rolid) REFERENCES public.rol(rolid);
 D   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_rol_rolid_fkey;
       public          postgres    false    223    221    4782            �           2606    24664 "   user user_userstatus_statusid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_userstatus_statusid_fkey FOREIGN KEY (userstatus_statusid) REFERENCES public.userstatus(statusid);
 N   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_userstatus_statusid_fkey;
       public          postgres    false    223    215    4776            �           2606    24686 "   usercash usercash_cash_cashid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.usercash
    ADD CONSTRAINT usercash_cash_cashid_fkey FOREIGN KEY (cash_cashid) REFERENCES public.cash(cashid);
 L   ALTER TABLE ONLY public.usercash DROP CONSTRAINT usercash_cash_cashid_fkey;
       public          postgres    false    226    4788    225            �           2606    24681 "   usercash usercash_user_userid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.usercash
    ADD CONSTRAINT usercash_user_userid_fkey FOREIGN KEY (user_userid) REFERENCES public."user"(userid);
 L   ALTER TABLE ONLY public.usercash DROP CONSTRAINT usercash_user_userid_fkey;
       public          postgres    false    4784    226    223            �      x������ � �            x������ � �      ~      x������ � �      q       x�3�tN�JT(��K�,H������� Y��      v   �   x���9�0@�z|�9��%R"
*@3؃0r<���S�~=�{8ˣ�"�����x�MG�#i��u��a���΂�-Δ3㥥R�3�@9c����F�QR��M2��,�8rKA�����VJ� �EIW      {   D   x�3�4202�54�54R04�20 "]S��)aC�0OwNcN#�.S�^CS,zQ�azM�zc���� ��L      k      x������ � �      y   X   x�3�I,�J-ITHIUp.:�2%�$��Y����$��1gHQb^qZjQj^rf��Sb^rbQf"�	g@bz�Bj��kZjrIfY>W� ז�      }      x������ � �      m   7   x�3�tL����,.)JL�/�2�tO-.2�9��R��L8�s2S�JR�b���� �0�      i   #  x���;R�0�Z:�N��I���IL�G�f#��ed)X�nCIA�|1$���i�_�i��ؽXY���{ƪ!ENh4n*gE��)ҠŹ�BJ�� 2)��6�=�:�"�e�of��	z}v�䃲���og�XaIu�F���e+����!{�|7+�&T�ƨSp6�p=	}b:�Q򜽠��<��V��>j�
��Z&���x��-�
,�t�^�f[����"�O�*�==�}Gζ?0����8�De��d���--LZֵ�~ǓN��u���� �      w   S   x��t�t��+)J,�W(�LO�+I�
F��d��f��s9;�!ē�Ss��A�H©y
E�y�e�ə�7�q��qqq _#L      t   O   x�3�tt6000�4202�54 "CC+cK+CC=33#s#N�$g	�	v�&@�zF&f�fP�F�F�1~`�4�=... �      o   �   x�3������)�����9�z���������E)�FƜ��1~P�h`�Y�ed ��&��C�)H�T�)@0�,�IL��M��L�1��s3s����S�A���8�Ʉb�2�2202�54 "C#+cK+S=S33#ssL`�"5tӸb���� xjz�      r      x������ � �      g   ;   x�s40�tL.�,���2=�!�  ' 5/%35�$U!%U!��(?)19���<�=... L     