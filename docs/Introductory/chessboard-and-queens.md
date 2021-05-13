---
id: chessboard-and-queens
title: Chessboard and Queens
sidebar_position: 17
---

# CSES - Chessboard and Queens

[Problem link](https://cses.fi/problemset/task/1624)

## Editorial

We use backtracking to successively place queens and check if it's a possible non attacking solution. 

```cpp
#include <bits/stdc++.h>
using namespace std;
int ans = 0;
bool takencols[8], takendiag1[16], takendiag2[16];
// takendiag1 shows presence of queen in diagonals from left
// takendiag2 shows presence of queen in diagonals from right
void place(string board[8], int r, int &ans)
{
    if (r == 8)
    {
        ans++;
        return;
    }
    for (int c = 0; c < 8; c++)
    {
        if (board[r][c] == '.')
        {
            if (!takencols[c] && !takendiag1[r - c + 8 - 1] && !takendiag2[r + c])
            {
                takencols[c] = takendiag1[r - c + 8 - 1] = takendiag2[r + c] = true;
                place(board, r + 1, ans);
                takencols[c] = takendiag1[r - c + 8 - 1] = takendiag2[r + c] = false;
            }
        }
    }
}
 
int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    string s;
    string board[8];
    int ans = 0;
    for (int i = 0; i < 8; i++)
    {
        cin >> board[i];
    }
    place(board, 0, ans);
    cout << ans;
    return 0;
}
```
