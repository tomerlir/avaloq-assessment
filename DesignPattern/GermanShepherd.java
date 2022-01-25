public class GermanShepherd extends Dog {
    public GermanShepherd(Bark b){
        super(b);
    }

    @Override
    public void doBark(){
        System.out.print("German Shepherd barking... ");
		bark.doBark();     
    }

}
