public abstract class Dog {
    protected Bark bark;

    public Dog(Bark b){
        this.bark = b;
    }

    abstract public void doBark();
}
