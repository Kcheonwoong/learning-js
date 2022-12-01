# Understanding-ECMAScript6

## Terminology
### ECMA International
> 정보 통신 시스템을 위한 국제 표준화 기구(스위스 제네바)

### ECMAScript
> ECMA-262 기술 규격에 따라 정의하고 있는 표준화된 스크립트 프로그래밍 언어(Javascript)

### TDZ
> Temporal Dead Zone

### IIFE
> Immediately Invoked Function Expressions

### UTF
> Universal Coded Character Set + Transformation Format

### UTF-8
> 가변길이 문자 인코딩 방식으로 1~4 바이트를 사용. U+0000부터 U+007F 범위에 있는 ASCII 문자들은 UTF-8에서 1바이트만으로 표시

### UTF-16
> BMP 에 속하는 문자는 16bits로 인코딩되며, 그 외의 문자는 32bits로 인코딩된다. 또한 surrogate pairs를 도입하므로써 두 개의 16bits 코드 유닛으로 더 많은 문자를 표현한다. 
    
    BMP 를 넘어서는 문자를 어떻게 표현하는가?
    다국어평면은 U+0000 U+FFFF 영역을 차지한다. 하지만 이 영역을 넘어서는 U+10000 는 두 개의 코드 유닛, 즉 \uD800 \uDC00 가 surrogate pairs 를 이루어 문자를 표현한다.

    하지만 여기서 해당 문자가 기존에 할당된 16bits 하나의 문자 각각으로 표현되지 않고 한 쌍이 하나의 문자로 어떻게 인식될 수 있는지 궁금증이 생긴다.

    이를 위해서 utf-16에서는 U+D800 ~ U+DFFF 사이의 영역은(2048개) 사용되지 않는다.
    이것을 절반으로 나누어 앞,뒤의 값으로 이용하는 surrogate pairs 방식인 것이다.
    [0xd800:0xdbff][0xdc00:0xdfff] 1024 * 1024 = 2^20 가지 표현 가능.

 ### NFC
 > Normalization Form Canonical Composition) - default  정준결합(분해 후 결합)
 ### NFD
 > Normalization Form Canonical Decomposition)          정준분해
 ### NFKC
 > Normalization Form Compatibility Composition)       호환결합 - 기호나 특수문자도 정규화 진행
 ### NFKD
 > Normalization Form Compatibility Decomposition)     호환분해

## Introduction
