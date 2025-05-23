#include <stdio.h>

#include <stdlib.h>



struct segment_table_entry {

    int segment_number;

    int segment_size;

    int segment_base;

};

void simulate_segmentation(int logical_address, struct segment_table_entry *segment_table, int table_size) {

    int segment_number = logical_address / segment_table[0].segment_size;

    int offset = logical_address % segment_table[0].segment_size;



    if (segment_number >= table_size) {

        printf("Segmentation fault: Invalid segment number\n");

        return;

    }

    if (offset >= segment_table[segment_number].segment_size) {

        printf("Segmentation fault: Address out of bounds\n");

        return;

    }

    int physical_address = segment_table[segment_number].segment_base + offset;

    printf("Physical address: %d\n", physical_address);

}



int main() {

    printf("PES1UG22CS602\n");

    printf("Soumya CP\n");

    

    int table_size;

    printf("Enter the size of the segment table: ");

    scanf("%d", &table_size);



    struct segment_table_entry *segment_table = malloc(table_size * sizeof(struct segment_table_entry));

    if (segment_table == NULL) {

        printf("Memory allocation failed\n");

        return 1;

    }

    for (int i = 0; i < table_size; i++) {

        printf("Enter segment number, size, and base address for entry %d: ", i);

        scanf("%d %d %d", &segment_table[i].segment_number, &segment_table[i].segment_size, &segment_table[i].segment_base);



        for (int j = 0; j < i; j++) {

            if (segment_table[i].segment_number == segment_table[j].segment_number) {

                printf("Warning: Duplicate segment number %d detected.\n", segment_table[i].segment_number);

                break;

            }

        }

    }



    int logical_address;

    printf("Enter a logical address: ");

    scanf("%d", &logical_address);

    simulate_segmentation(logical_address, segment_table, table_size);



    free(segment_table);

    return 0;

}

