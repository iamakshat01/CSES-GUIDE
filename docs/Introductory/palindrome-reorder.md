---
id: palindrome-reorder
title: Palindrome Reorder
sidebar_position: 12
---

# CSES - Palindrome Reorder

[Problem link](https://cses.fi/problemset/task/1755/)

## Editorial
1. Create a map store the count of occurrences of all characters.
2. If odd occurences are greater than 1 then answer is not possible and also odd occurences are not possible in even length string.
3. Initialize two empty strings firstHalf and secondHalf.
4. Traverse the map. For every character with count as count, attach count/2 characters to end of firstHalf and beginning of secondHalf.
5. Finally return the result by appending firstHalf and secondHalf

```cpp
// At inclusion-exclusion the sign for excluding is decided by __built_in_pop_count on odd add
// Need to write return before next function call in recursion and backtracking
#include <bits/stdc++.h>
#include <ext/pb_ds/assoc_container.hpp> // Common file
#include <ext/pb_ds/tree_policy.hpp> // Including tree_order_statistics_node_update
using namespace std;
using namespace __gnu_pbds;
 
template<class T> ostream& operator<<(ostream &os, vector<T> V){os << "[ "; for(auto v  : V) os << v << " "; return os << " ]";}
template<class T> ostream& operator<<(ostream &os, set<T> V){os << "[ "; for(auto v  : V) os << v << " "; return os << " ]";}
template<class T , class R > ostream& operator<<(ostream &os, map<T , R> V){os << "[ "; for(auto v  : V) os << "(" << v.first << ":" << v.second << ")"; return os << " ]";}
template<class T , class R > ostream& operator<<(ostream &os, pair<T , R> V){return os << "(" << V.first << "," << V.second << ")";}
 
#define cerr cout
#ifdef LOCAL
    #define TRACE
#endif
#ifdef TRACE
    #define trace(...) __f(#__VA_ARGS__, __VA_ARGS__)
    template <typename Arg1>
    void __f(const char* name, Arg1&& arg1){cerr << "T->";cerr << name << " : " << arg1 << endl;}
    template <typename Arg1, typename... Args>
    void __f(const char* names, Arg1&& arg1, Args&&... args){cerr << "T->";const char* comma = strchr(names + 1, ','); cerr.write(names, comma - names) << " : " << arg1<<" | "; __f(comma+1, args...);}
    clock_t clk=clock();
    #define checktime() cout<<"\nTime Elapsed : "<<float(clock()-clk)/CLOCKS_PER_SEC<<endl
#else
    #define trace(...);
    #define checktime();
#endif
/*---------------------------Defines----------------------*/
typedef tree<int,null_type,less<int>,rb_tree_tag,tree_order_statistics_node_update> ordered_set;
// find_by_order(k)  returns iterator to kth element starting from 0;
// order_of_key(k) returns count of elements strictly smaller than k;
typedef long long int ll;
typedef long double ld;
 
#define d0(x) cout<<(x)<<" "
#define d1(x) cout<<(x)<<"\n"
#define d2(x,y) cout<<(x)<<" "<<(y)<<"\n"
#define d3(x,y,z) cout<<(x)<<" "<<(y)<<" "<<(z)<<"\n"
#define d4(a,b,c,d) cout<<(a)<<" "<<(b)<<" "<<(c)<<" "<<(d)<<"\n"
#define d5(a,b,c,d,e) cout<<(a)<<" "<<(b)<<" "<<(c)<<" "<<(d)<<" "<<(e)<<"\n"
#define d6(a,b,c,d,e,f) cout<<(a)<<" "<<(b)<<" "<<(c)<<" "<<(d)<<" "<<(e)<<" "<<(f)<<"\n"
// Use max({a,b,c,d,....}) instead
// #define max3(a,b,c) max(max((a),(b)),(c))
// #define max4(a,b,c,d) max(max((a),(b)),max((c),(d)))
 
#define rep(i,a,n) for(ll i=a;i<n;i++)
#define per(i,a,n) for(ll i=n-1;i>=a;i--)
#define pll pair<ll,ll>
#define pb push_back
#define F first
#define S second
#define I insert
#define vll vector<ll>
#define vvll vector<vll>
#define vb vector<bool>
#define vc vector<char>
#define vpll vector<pll>
#define all(x) (x).begin(), (x).end()
/*-----------------------Modular Arithmetic---------------*/
inline ll add(ll x,ll y,ll mod){x+=y; if(x>=mod) return x-mod; return x;}
inline ll sub(ll x,ll y,ll mod){x-=y; if(x<0) return x+mod; return x;}
inline ll mul(ll x,ll y,ll mod){return (x*1ll*y)%mod;}
inline ll power(ll x,ll y,ll mod){ll ans=1; while(y){if(y&1) ans=mul(ans,x,mod); x=mul(x,x,mod); y>>=1;} return ans;}
inline ll inv(ll x,ll mod){return power(x,mod-2,mod);}
/*-----------------------------Code begins----------------------------------*/
 
const ll MOD=1e9+7,M2=998244353;
const ll N=1e3+100;
 
void pre()
{
    
}
 
void solve()
{
  string str;
  cin>>str;
  map<char,ll> m;

  // count occurenc of all characters
  for(ll i = 0; i < str.length(); i++)
    m[str[i]]++;

  // counting odd characters
  ll oddCount = 0;
  char oddChar;
  for (auto x : m) 
  {
    if (x.second % 2 != 0) {
      oddCount++;
      oddChar = x.first;
    }
  }
  
  /* odd_cnt = 1 only if the length of str is odd */
  if (oddCount > 1 || (oddCount == 1 && str.length() % 2 == 0))
    {
        cout<<"NO SOLUTION";
        return;
    }
  
  string firstHalf = "", secondHalf = "";
  for (auto x : m) 
  {
     
    // Build a string of floor(count/2) occurrences of current character
    string s(x.second / 2, x.first);
  
    // Attach the built string to end of and begin of second half
    firstHalf = firstHalf + s;
    secondHalf = s + secondHalf;
  }
  
  if(oddCount==1)
  {
    cout<<firstHalf + oddChar + secondHalf;
  }
  else
  {
    cout<<firstHalf + secondHalf;
  }
}
int main()
{
    ios_base::sync_with_stdio(0); cin.tie(0); cout.tie(0);
    cout<<fixed<<setprecision(25);
    #ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("error.txt", "w", stderr); 
    freopen("output.txt", "w", stdout);
    #endif
    pre();
    ll t=1;
    //cin>>t;
    for(ll tt=1;tt<=t;tt++)
    {
        // cout<<"Test Case #"<<tt<<": \n";
        solve();
    }
    return 0;
}
```
