#include <stdio.h>

// Function to compare and print the array with greater value
void printGreaterArray(int arr1[], int size1, int arr2[], int size2) {
    int sum1 = 0, sum2 = 0;

    // Calculate cumulative bounty for the first array
    for (int i = 0; i < size1; i++) {
        if (i > 0) {
            if (arr1[i - 1] > 0 && arr1[i] > 0) {
                sum1 += arr1[i];
            } else if (arr1[i - 1] < 0 && arr1[i] < 0) {
                sum1 *= arr1[i];
            } else {
                sum1 += arr1[i] - arr1[i - 1];
            }
        } else {
            sum1 += arr1[i];
        }
    }

    // Calculate cumulative bounty for the second array
    for (int i = 0; i < size2; i++) {
        if (i > 0) {
            if (arr2[i - 1] > 0 && arr2[i] > 0) {
                sum2 += arr2[i];
            } else if (arr2[i - 1] < 0 && arr2[i] < 0) {
                sum2 *= arr2[i];
            } else {
                sum2 += arr2[i] - arr2[i - 1];
            }
        } else {
            sum2 += arr2[i];
        }
    }

    // Print the array with greater value
    printf("Array with greater value: ");
    if (sum1 > sum2) {
        for (int i = 0; i < size1; i++) {
            printf("%d ", arr1[i]);
        }
    } else {
        for (int i = 0; i < size2; i++) {
            printf("%d ", arr2[i]);
        }
    }
}

int main() {
    // Input arrays
    int arr1[100], arr2[100];
    int size1, size2;

    // Read the first array from stdin
    size1 = 0;
    while (scanf("%d", &arr1[size1]) != EOF) {
        size1++;
    }

    // Read the second array from stdin
    size2 = 0;
    while (scanf("%d", &arr2[size2]) != EOF) {
        size2++;
    }

    // Call the function to compare and print the array with greater value
    printGreaterArray(arr1, size1, arr2, size2);

    return 0;
}
