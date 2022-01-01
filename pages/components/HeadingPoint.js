import React from 'react'

const HeadingPoint = (props) => {
    return (
        <div>
         <section class="text-gray-600 body-font overflow-hidden dark:bg-gray-700 dark:text-gray-200">
        <div class="container mx-auto">
          <div class="lg:w-11/12 mx-auto flex flex-row-reverse flex-wrap-reverse">
            <div class="lg:w-full w-full lg:pl-10 mb-3 lg:mb-0">
              <h1 class="text-gray-900 text-xl title-font font-medium mb-1 dark:text-gray-50">
                {props.heading} :
              </h1>
              <p class="leading-relaxed mb-4 text-justify text-md">
                {props.para}
              </p>
            </div>
          </div>
        </div>
      </section>
        </div>
    )
}

export default HeadingPoint
