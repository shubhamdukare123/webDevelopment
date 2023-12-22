import java.util.Scanner;

class GiftPayment {
    static int MOD = 1000000007;

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int K = scanner.nextInt();
        
        long[][] dp = new long[10][K + 1];
        
        for (int i = 1; i <= 9; i++) {
            dp[i][0] = 1;
            for (int j = 1; j <= K; j++) {
                for (int k = 0; k <= Math.min(i, j); k++) {
                    dp[i][j] = (dp[i][j] + dp[i - 1][j - k]) % MOD;
                }
            }
        }
        
        System.out.println(dp[9][K]);
    }
}
