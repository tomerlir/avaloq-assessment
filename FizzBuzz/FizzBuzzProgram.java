public class FizzBuzzProgram {
    public static void main(String[] args) {
        // Running the function with the requested range of 100
        fizzBuzz(100);
    }

    // Function to do the requested FizzBuzz task
    private static void fizzBuzz(int num) {
        for (int i = 1; i <= num; i++) {
            String result = i % 5 == 0 ? (i % 3 == 0 ? "FizzBuzz" : "Buzz") : (i % 3 == 0 ? "Fizz" : String.valueOf(i));
            System.out.println(result);
        }
    }
}