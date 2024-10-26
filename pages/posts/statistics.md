---
title: 数理统计笔记
updated: 2024-10-23
categories: Valaxy 笔记
tags:
  - 笔记
top: 1
---

<!-- # I. Estimation

## 1. Introduction, concepts and notation

### 1.1 A very simple motivating example

### 1.2 Probabilities, models and random variables

### 1.3 Frequentist and subjective interpretations of probabilities

## 2. The (observed) likelihood function

## 3. Maximum likelihood estimates - invariance property

### 3.1 Definition

### 3.2 Invariance property of MLE

## 4. Determining MLEs: the tractable case

### 4.1 Differentiable likelihood in the continuous case - the multivariate scenario

### 4.2 An interesting example: ML estimation for capture recapture models -->

## 5. Statistics and estimators
需要掌握的几个定义：Statistic、Estimate、Estimator、Distribution of an estimator（符号的定义、对统计量估计参数这一过程的描述、Unbiased estimator、MSE

Remark 5.1:统计量的分布受参数值（未知 影响

Remark 5.2：如何衡量估计的准确性（置信度<br>
skill：样本量增大时，分布收敛到某个特定的分布（不依赖于未知参数，通过特定分布的性质来推断

Remark 5.3：未知参数等同于随机变量，所以相等是指等号在参数任意值处都成立

Remark 5.4：无偏估计并没有解决计算置信度的问题

Remark 5.5：偏差-方差分解

Example 5.1：一个Poisson分布无偏估计的例子，讨论了样本量对置信度的影响，提到了'asymptotic property of the estimator'

tip：对无偏性、渐进无偏性的讨论参考茆书6.1.1

## 6. Probabilistic convergence
标题下的部分实际在讨论中心极限定理

### 6.1 Two useful inequalities
Markov’s inequality、Chebyshev’s inequality
### 6.2 Types of probabilistic convergence
熟练掌握Convergence in quadratic mean、Convergence in probability、Convergence in distribution <br>
注意前者可以推出后者，三个条件依次减弱<br>
可以参考王书2.7

Weak Law of Large Numbers、Central Limit Theorem是两个关于收敛的结论，很重要<br>
可以参考茆书

Example 6.3：依分布收敛的例子

Continuous Mapping Theorem，Slutsky’s theorem也很重要，记住结论即可

Slutsky’s theorem的注解中还提到了：均方收敛可以推出概率收敛


### 6.3 Probabilistic convergence and estimators
Consistency of a sequence of estimators关于一致性的定义

Remark 6.1：注意一致性是一个存在于序列上的概念

（重要）Example 6.5：综合运用本节知识，一步步推导出了计算estimator置信度的方法

一致性定义可参考邵书2.5.1
## 7. The Fisher information
本节讨论的是‘models that are sufficiently regular’方差下界、渐进正态性

需要掌握的定义有Fisher information regularity conditions、The score function、Fisher information，以及对The score function、Fisher information的直观解释

几个例子是关于验证FIRC、计算The score function、Fisher information的，也是作业里的题型

渐进正态性可参考韦书96页

## 8. Efficiency and the Cramer–Rao bound
需要掌握的定义：Efficient estimator（有效估计、Cauchy–Schwarz inequality for expectations（证明中要用到

最重要的内容是Cramer–Rao bound定义和证明

两个例子讨论了有效估计问题

7、8节内容可参考王书2.6、韦书3.5，有详细的证明

## 9. Asymptotic distribution of the MLE
讨论了ML估计的渐进正态性，注意Theorem 9.1的条件部分

Corollay 9.1：定义asymptotically efficient

Remark 9.1:进一步阐述了asymptotically efficient，给出了均方误差收敛和依分布收敛两种对asymptotically efficient的描述。<br>
强调这种性质关注估计参数周围的variability，两种描述只是不同的刻画
根据偏差-方差分解可以推测在渐进无偏的条件下，两种描述等价

Definition 9.1：定义了regular statistical models

## 10. Confidence sets around the ML estimator
有了统计量对参数进行估计后，如果还知道统计量的分布并且分布与待估计参数无关，那么就可以计算置信区间。<br>
前面的章节给出了ML估计及其渐进分布，本节讨论ML估计的置信区间：

Definition 10.1：给出了置信度的定义

Definition 10.2：1 − α confidence interval，1 − α代表置信度，注意给定置信度下的置信区间并不唯一

Definition 10.3：观测置信区间（基于样本的


## 11. Asymptotic approximations of CIs
Theorem 11.1：该定理即为中心极限定理

Remark 11.1:强调通过渐进分布得到的置信区间是渐进准确的

Theorem 11.2：使用slutsky替换了上一定理中的方差部分

Remark 11.2：样本量越高估计越准确

## 12. Estimating the information for ML estimators
这一节将应用ML估计的渐进正态性给出置信区间，在此之前，需要对Lemma 9.1所讲内容进行讨论，确保使用未知参数的估计量替代未知参数计算fisher信息量这一过程的准确性

Therom 12.1：fisher信息量依概率收敛证明

Remark 12.1：强调了CMT定理的连续性条件，要求在未知参数的邻域连续

Therom 12.2：进一步的，使用估计量计算fisher信息量时也会遇到期望难以计算的问题，可以应用WLLN解决期望计算问题。当估计满足一定的条件，可以保障概率收敛性。该定理的条件与Therom 9.1类似，可以互相参考

Example 12.1（对Example 6.5更精确的讨论）：一个应用渐进正态性估计置信区间的例子

Remark 12.3：Observed Fisher information的定义


## 13. Transformations and confidence intervals
开头有一个关于Wald approach的定义，即之前使用渐进分布求置信区间的方法

讨论待估计量为未知参数的函数时，置信区间的变换<br>
一种方法直接对参数的置信区间进行函数转化，另一种方法是使用逆函数进行重新参数化，两种方法结果都正确，但有所不同（因为置信区间不唯一）

Lemma 13.1：重新参数化后，新的fisher信息量的形式（之前在讲C-R下界时也有补充过

Corollary 13.1：一般化的ML估计的渐进正态性

Example 13.1：一个估计正态分布均值参数的例子，对比两种方法的差异

Remark 13.1：讨论了重新参数化方法的几点问题


## 14. Likelihood ratio confidence sets: Wilks’ approach
本节讲了一种完全不同于之前的，新的构建置信区间方法
Theorem 14.1（Wilks定理）：似然比函数在一定条件下依分布收敛于自由度为1的卡方分布，注意定理中的符号theta*含义为估计量，而不是真实值；theta_hat为ML估计值。因此通过这种方法可以选出似然函数最大的置信区间

Corollary 14.1：具体置信区间的构造

Remark 14.2：这种方法很难求解析解，但使用计算机容易求出遍历解（迭代解

Proposition 14.1：一个有意思的小结论，95%置信区间内的参数值，和ML估计参数值差距在2以内

这一章不太重要，但是wilks定理会在之后的似然比检验中再次出现

## 15. Transformation invariant confidence sets
在chapter 13提到了重新参数化方法，这种变化应用在wald方法中会有问题，但是应用在wilks方法中时，两种置信区间完全等价，本节证明了这一点


<!-- ---

# II. Testing

## 16. Introduction to hypothesis tests

## 17. Hypothesis testing: significance and power

### 17.1 Significance

### 17.2 Power

### 17.3 Summary and definitions

### 17.4 Testing as a legal trial

## 18. Designing tests: the Neyman-Pearson approach

## 19. Testing: p-values, equivalent test statistics and computing the power function

### 19.1 p-values

### 19.2 Equivalent test statistics and computing the power function

## 20. Uniformly most powerful tests

### 20.1 Why a test can be UMP (not examinable)

## 21. More general hypothesis tests

### 21.1 Generalized likelihood ratio tests

### 21.2 Connection to confidence intervals

## 22. Categorical distributions and Pearson’s chi-squared test

### 22.1 Categorical & Multinomial random variables

### 22.2 GLR test statistic

### 22.3 Pearson’s chi-squared test statistic

## 23. Two goodness-of-fit examples from genetics

### 23.1 Mendel’s peas

### 23.2 Hardy–Weinberg model

---

# III. Bayesian inference

## 24. Bayesian inference

### 24.1 From prior to posterior

## 25. Posterior distributions: Bayes estimates and credible intervals

### 25.1 Bayes estimators

### 25.2 Credible intervals

## 26. Bayesian hypothesis testing -->

