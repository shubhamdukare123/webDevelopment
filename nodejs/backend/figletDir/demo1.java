class demo1 {
    void fun(int ...x){
        for(int i: x){
            System.out.println(i);
        }

    }
    public static void main(String[] v ){
        demo1 obj = new demo1();
        obj.fun(1,2,3,4,5);

    }
}
