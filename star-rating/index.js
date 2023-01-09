import { makeDOMwithProperties } from '../utils/dom.js'

export const StarRating = (StarRatingDOM) => {

    const maxRating = StarRatingDOM.dataset.maxRating // 별의 갯수
    const starRatingContainer = makeDOMwithProperties('div', {
        className: 'star-rating-container'
    }) //star-rating-containerDOM 생성

    StarRatingDOM.appendChild(starRatingContainer)

    for (let i = 0; i < maxRating; i++) {

        const star = makeDOMwithProperties('i', {
            className: 'bx bxs-star',
            id: `${i + 1}`
        }) // 별을 생성하는 것도 반복해야 함


        starRatingContainer.appendChild(star)
    }

    const stars = Array.from(StarRatingDOM.querySelectorAll('i'))
    if (stars.length === 5) { // 별의 개수가 5개일 경우
        for (let i = 0; i < stars.length; i++) {
            stars[i].addEventListener('mouseover', (e) => {
                switch (e.target.id) {
                    case '1':
                        stars[0].classList.add('hovered')
                        break
                    case '2':
                        stars[0].classList.add('hovered')
                        stars[1].classList.add('hovered')
                        break
                    case '3':
                        stars[0].classList.add('hovered')
                        stars[1].classList.add('hovered')
                        stars[2].classList.add('hovered')
                        break
                    case '4':
                        stars[0].classList.add('hovered')
                        stars[1].classList.add('hovered')
                        stars[2].classList.add('hovered')
                        stars[3].classList.add('hovered')
                        break
                    case '5':
                        stars[0].classList.add('hovered')
                        stars[1].classList.add('hovered')
                        stars[2].classList.add('hovered')
                        stars[3].classList.add('hovered')
                        stars[4].classList.add('hovered')
                        break
                }
            })
        }

        for (let i = 0; i < stars.length; i++) {
            stars[i].addEventListener('mouseout', (e) => {
                switch (e.target.id) {
                    case '1':
                        stars[0].classList.remove('hovered')
                        break
                    case '2':
                        stars[0].classList.remove('hovered')
                        stars[1].classList.remove('hovered')
                        break
                    case '3':
                        stars[0].classList.remove('hovered')
                        stars[1].classList.remove('hovered')
                        stars[2].classList.remove('hovered')
                        break
                    case '4':
                        stars[0].classList.remove('hovered')
                        stars[1].classList.remove('hovered')
                        stars[2].classList.remove('hovered')
                        stars[3].classList.remove('hovered')
                        break
                    case '5':
                        stars[0].classList.remove('hovered')
                        stars[1].classList.remove('hovered')
                        stars[2].classList.remove('hovered')
                        stars[3].classList.remove('hovered')
                        stars[4].classList.remove('hovered')
                        break
                }
            })
        }

        for (let i = 0; i < stars.length; i++) {

            stars[i].addEventListener('click', (e) => {
                // 클릭 될 때마다 rating-change event를 호출 해야됨
                const ratingChange = new CustomEvent('rating-change', { detail: e.target.id });

                StarRatingDOM.dispatchEvent(ratingChange) // 이벤트 실행은 StarRatingDOM에서 발생할때
                switch (e.target.id) {
                    case '1':
                        stars[0].classList.add('selected')
                        stars[1].classList.remove('selected')
                        stars[2].classList.remove('selected')
                        stars[3].classList.remove('selected')
                        stars[4].classList.remove('selected')
                        break
                    case '2':
                        stars[0].classList.add('selected')
                        stars[1].classList.add('selected')
                        stars[2].classList.remove('selected')
                        stars[3].classList.remove('selected')
                        stars[4].classList.remove('selected')
                        break
                    case '3':
                        stars[0].classList.add('selected')
                        stars[1].classList.add('selected')
                        stars[2].classList.add('selected')
                        stars[3].classList.remove('selected')
                        stars[4].classList.remove('selected')
                        break
                    case '4':
                        stars[0].classList.add('selected')
                        stars[1].classList.add('selected')
                        stars[2].classList.add('selected')
                        stars[3].classList.add('selected')
                        stars[4].classList.remove('selected')
                        break
                    case '5':
                        stars[0].classList.add('selected')
                        stars[1].classList.add('selected')
                        stars[2].classList.add('selected')
                        stars[3].classList.add('selected')
                        stars[4].classList.add('selected')
                        break
                }
            })
        }
    }

    if (stars.length === 3) { // 별의 개수가 3개일 경우
        for (let i = 0; i < stars.length; i++) {
            stars[i].addEventListener('mouseover', (e) => {
                switch (e.target.id) {
                    case '1':
                        stars[0].classList.add('hovered')
                        break
                    case '2':
                        stars[0].classList.add('hovered')
                        stars[1].classList.add('hovered')
                        break
                    case '3':
                        stars[0].classList.add('hovered')
                        stars[1].classList.add('hovered')
                        stars[2].classList.add('hovered')
                        break
                }
            })
        }

        for (let i = 0; i < stars.length; i++) {
            stars[i].addEventListener('mouseout', (e) => {
                switch (e.target.id) {
                    case '1':
                        stars[0].classList.remove('hovered')
                        break
                    case '2':
                        stars[0].classList.remove('hovered')
                        stars[1].classList.remove('hovered')
                        break
                    case '3':
                        stars[0].classList.remove('hovered')
                        stars[1].classList.remove('hovered')
                        stars[2].classList.remove('hovered')
                        break
                }
            })
        }

        for (let i = 0; i < stars.length; i++) {
            stars[i].addEventListener('click', (e) => {
                const ratingChange = new CustomEvent('rating-change', { detail: e.target.id });

                StarRatingDOM.dispatchEvent(ratingChange) // 이벤트 실행은 StarRatingDOM에서 발생할때
                switch (e.target.id) {
                    case '1':
                        stars[0].classList.add('selected')
                        stars[1].classList.remove('selected')
                        stars[2].classList.remove('selected')
                        break
                    case '2':
                        stars[0].classList.add('selected')
                        stars[1].classList.add('selected')
                        stars[2].classList.remove('selected')
                        break
                    case '3':
                        stars[0].classList.add('selected')
                        stars[1].classList.add('selected')
                        stars[2].classList.add('selected')
                        break
                }
            })
        }
    }
}