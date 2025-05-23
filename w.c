#include<stdio.h>
#include<time.h>

void selSort(int a[],int n);

int main()
{
	int n;
	scanf("%d",&n);
	
	int a[n];
	
	for(int i=0;i<n;i++)
		scanf("%d",&a[i]);
		
	clock_t start,end;
	start=clock();
	selSort(a,n);
	end=clock();
	
	double timeTaken=(double)(end-start)/CLOCKS_PER_SEC;
	printf("After Sorting\n");
	for(int i=0;i<n;i++)
		printf("%d\n",a[i]);
	printf("Time taken is %lf sec\n",timeTaken);
	
}

void swap(int *pa,int *pb)
{
	int temp;
	temp=*pa;
	*pa=*pb;
	*pb=temp;
}
void selSort(int a[],int n)
{
	int min;
	for(int i=0;i<=n-2;i++)
	{
		min=i;
		for(int j=i+1;j<=n-1;j++)
		{
			if(a[j]<a[min])
				min=j;
		}
		swap(&a[min],&a[i]);
	}
}