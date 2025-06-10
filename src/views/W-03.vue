<template>
    <!-- Start header -->
    <Header />
    <!-- End header -->

    <div class="flex h-screen">
        <!-- Start list streaming -->
        <div id="list-stream" class="w-[20%] bg-[#272727] mt-16 overflow-y-scroll scrollbar-none">
            <p class="p-5 text-xl font-medium text-center text-white">Khám phá thêm</p>
            <ul class="flex flex-col gap-6">
                <li class="flex flex-col flex-grow mx-4 h-1/4">
                    <img src="../assets/W-03/list-stream-thumbnail.png"
                        class="flex flex-grow object-cover overflow-hidden h-4/5 rounded-xl" alt="">
                    <div class="flex mt-4 h-[15%]">
                        <img src="../assets/W-02/avatar.jpg" class="rounded-full size-12" alt="">
                        <div class="flex flex-col justify-center flex-grow ml-2">
                            <p class="text-base font-medium text-white">feyd153</p>
                            <p class="text-base text-white">Vẽ cùng tui</p>
                        </div>
                        <div class="flex items-center justify-end mr-2 text-base text-white">
                            <p>0:37:29</p>
                            <div class="flex items-center px-2 mx-2 bg-red-500 ">
                                <p>LIVE</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="flex flex-col flex-grow mx-4 h-1/4">
                    <img src="../assets/W-03/list-stream-thumbnail.png"
                        class="flex flex-grow object-cover overflow-hidden h-4/5 rounded-xl" alt="">
                    <div class="flex mt-4 h-[15%]">
                        <img src="../assets/W-02/avatar.jpg" class="rounded-full size-12" alt="">
                        <div class="flex flex-col justify-center flex-grow ml-2">
                            <p class="text-base font-medium text-white">feyd153</p>
                            <p class="text-base text-white">Vẽ cùng tui</p>
                        </div>
                        <div class="flex items-center justify-end mr-2 text-base text-white">
                            <p>0:37:29</p>
                            <div class="flex items-center px-2 mx-2 bg-red-500 ">
                                <p>LIVE</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="flex flex-col flex-grow mx-4 h-1/4">
                    <img src="../assets/W-03/list-stream-thumbnail.png"
                        class="flex flex-grow object-cover overflow-hidden h-4/5 rounded-xl" alt="">
                    <div class="flex mt-4 h-[15%]">
                        <img src="../assets/W-02/avatar.jpg" class="rounded-full size-12" alt="">
                        <div class="flex flex-col justify-center flex-grow ml-2">
                            <p class="text-base font-medium text-white">feyd153</p>
                            <p class="text-base text-white">Vẽ cùng tui</p>
                        </div>
                        <div class="flex items-center justify-end mr-2 text-base text-white">
                            <p>0:37:29</p>
                            <div class="flex items-center px-2 mx-2 bg-red-500 ">
                                <p>LIVE</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="flex flex-col flex-grow mx-4 h-1/4">
                    <img src="../assets/W-03/list-stream-thumbnail.png"
                        class="flex flex-grow object-cover overflow-hidden h-4/5 rounded-xl" alt="">
                    <div class="flex mt-4 h-[15%]">
                        <img src="../assets/W-02/avatar.jpg" class="rounded-full size-12" alt="">
                        <div class="flex flex-col justify-center flex-grow ml-2">
                            <p class="text-base font-medium text-white">feyd153</p>
                            <p class="text-base text-white">Vẽ cùng tui</p>
                        </div>
                        <div class="flex items-center justify-end mr-2 text-base text-white">
                            <p>0:37:29</p>
                            <div class="flex items-center px-2 mx-2 bg-red-500 ">
                                <p>LIVE</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="flex flex-col flex-grow mx-4 h-1/4">
                    <img src="../assets/W-03/list-stream-thumbnail.png"
                        class="flex flex-grow object-cover overflow-hidden h-4/5 rounded-xl" alt="">
                    <div class="flex mt-4 h-[15%]">
                        <img src="../assets/W-02/avatar.jpg" class="rounded-full size-12" alt="">
                        <div class="flex flex-col justify-center flex-grow ml-2">
                            <p class="text-base font-medium text-white">feyd153</p>
                            <p class="text-base text-white">Vẽ cùng tui</p>
                        </div>
                        <div class="flex items-center justify-end mr-2 text-base text-white">
                            <p>0:37:29</p>
                            <div class="flex items-center px-2 mx-2 bg-red-500 ">
                                <p>LIVE</p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <!-- End list streaming -->
        <div id="stream-frame" class="flex-grow mt-16 bg-black"></div>
        <div id="list-comment" class="w-[20%] bg-[#272727] mt-16"></div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
    components: {
        Header
    }
}
</script>