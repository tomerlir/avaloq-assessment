public class BridgePatternProgram {
    public static void main(String[] args) {
        // Design Pattern Selected: Bridge https://en.wikipedia.org/wiki/Bridge_pattern
        Dog caesar = new GermanShepherd(new StrongBark());
        caesar.doBark();

        Dog cinnamon = new Chihuahua(new WeakBark());
        cinnamon.doBark();
    }
}
