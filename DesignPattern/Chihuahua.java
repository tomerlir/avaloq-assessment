public class Chihuahua extends Dog {
    public Chihuahua(Bark b){
        super(b);
    }

    @Override
    public void doBark(){
        System.out.print("Chihuahua barking... ");
		bark.doBark();     
    }
}
