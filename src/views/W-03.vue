<template>
    <!-- Start header -->
    <Header />
    <!-- End header -->

    <!-- Start content -->
    <div class="flex h-screen">
        <!-- Start list streaming -->
        <div id="list-stream"
            class="w-1/6 bg-[#272727] mt-16 overflow-y-scroll scrollbar-thumb-[#3e3e3e] scrollbar-track-transparent scrollbar">
            <p class="p-5 text-xl font-medium text-center text-white">Khám phá thêm</p>
            <ul class="flex flex-col gap-6">
                <li class="flex flex-col flex-grow mx-4 cursor-pointer h-1/4">
                    <img src="../assets/W-03/list-stream-thumbnail.png"
                        class="flex flex-grow object-cover overflow-hidden opacity-100 h-4/5 rounded-xl hover:opacity-60"
                        alt="">
                    <div class="flex mt-4 h-[15%]">
                        <img src="../assets/W-02/avatar.jpg" class="rounded-full size-10" alt="">
                        <div class="flex flex-col justify-center flex-grow ml-2 text-white">
                            <div class="flex items-center justify-between w-full text-base font-medium">
                                <p>feyd153</p>
                                <div class="flex items-center space-x-1">
                                    <p class="text-sm">0:37:29</p>
                                    <div class="flex px-2 bg-red-500 rounded-md">
                                        <p>LIVE</p>
                                    </div>
                                </div>
                            </div>
                            <p class="mt-1 text-sm">Vẽ cùng tuiii</p>
                        </div>
                    </div>
                </li>
                <li class="flex flex-col flex-grow mx-4 cursor-pointer h-1/4">
                    <img src="../assets/W-03/list-stream-thumbnail.png"
                        class="flex flex-grow object-cover overflow-hidden opacity-100 h-4/5 rounded-xl hover:opacity-60"
                        alt="">
                    <div class="flex mt-4 h-[15%]">
                        <img src="../assets/W-02/avatar.jpg" class="rounded-full size-10" alt="">
                        <div class="flex flex-col justify-center flex-grow ml-2 text-white">
                            <div class="flex items-center justify-between w-full text-base font-medium">
                                <p>feyd153</p>
                                <div class="flex items-center space-x-1">
                                    <p class="text-sm">0:37:29</p>
                                    <div class="flex px-2 bg-red-500 rounded-md">
                                        <p>LIVE</p>
                                    </div>
                                </div>
                            </div>
                            <p class="mt-1 text-sm">Vẽ cùng tuiii</p>
                        </div>
                    </div>
                </li>
                <li class="flex flex-col flex-grow mx-4 cursor-pointer h-1/4">
                    <img src="../assets/W-03/list-stream-thumbnail.png"
                        class="flex flex-grow object-cover overflow-hidden opacity-100 h-4/5 rounded-xl hover:opacity-60"
                        alt="">
                    <div class="flex mt-4 h-[15%]">
                        <img src="../assets/W-02/avatar.jpg" class="rounded-full size-10" alt="">
                        <div class="flex flex-col justify-center flex-grow ml-2 text-white">
                            <div class="flex items-center justify-between w-full text-base font-medium">
                                <p>feyd153</p>
                                <div class="flex items-center space-x-1">
                                    <p class="text-sm">0:37:29</p>
                                    <div class="flex px-2 bg-red-500 rounded-md">
                                        <p>LIVE</p>
                                    </div>
                                </div>
                            </div>
                            <p class="mt-1 text-sm">Vẽ cùng tuiii</p>
                        </div>
                    </div>
                </li>
                <li class="flex flex-col flex-grow mx-4 cursor-pointer h-1/4">
                    <img src="../assets/W-03/list-stream-thumbnail.png"
                        class="flex flex-grow object-cover overflow-hidden opacity-100 h-4/5 rounded-xl hover:opacity-60"
                        alt="">
                    <div class="flex mt-4 h-[15%]">
                        <img src="../assets/W-02/avatar.jpg" class="rounded-full size-10" alt="">
                        <div class="flex flex-col justify-center flex-grow ml-2 text-white">
                            <div class="flex items-center justify-between w-full text-base font-medium">
                                <p>feyd153</p>
                                <div class="flex items-center space-x-1">
                                    <p class="text-sm">0:37:29</p>
                                    <div class="flex px-2 bg-red-500 rounded-md">
                                        <p>LIVE</p>
                                    </div>
                                </div>
                            </div>
                            <p class="mt-1 text-sm">Vẽ cùng tuiii</p>
                        </div>
                    </div>
                </li>
                <li class="flex flex-col flex-grow mx-4 cursor-pointer h-1/4">
                    <img src="../assets/W-03/list-stream-thumbnail.png"
                        class="flex flex-grow object-cover overflow-hidden opacity-100 h-4/5 rounded-xl hover:opacity-60"
                        alt="">
                    <div class="flex mt-4 h-[15%]">
                        <img src="../assets/W-02/avatar.jpg" class="rounded-full size-10" alt="">
                        <div class="flex flex-col justify-center flex-grow ml-2 text-white">
                            <div class="flex items-center justify-between w-full text-base font-medium">
                                <p>feyd153</p>
                                <div class="flex items-center space-x-1">
                                    <p class="text-sm">0:37:29</p>
                                    <div class="flex px-2 bg-red-500 rounded-md">
                                        <p>LIVE</p>
                                    </div>
                                </div>
                            </div>
                            <p class="mt-1 text-sm">Vẽ cùng tuiii</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <!-- End list streaming -->

        <!-- Start streaming frame -->
        <div id="stream-frame" class="flex-grow mt-16 bg-black">
            <p class="text-center text-white">Stream frame</p>
        </div>
        <!-- End streaming frame -->

        <!-- Start live chatroom -->
        <div id="live-chat-room" class="w-[20%] bg-[#272727] mt-16">
            <p class="p-5 text-xl font-medium text-center text-white">
                <i class="fa-brands fa-rocketchat"></i> Trò chuyện
            </p>
            <div id="list-comment"
                class="flex flex-col h-[80%] overflow-y-scroll scrollbar-thumb-[#3e3e3e] scrollbar-track-transparent scrollbar">
                <ul class="flex flex-col gap-3">
                    <li class="flex flex-col mx-4">
                        <div class="flex flex-row content-center gap-2">
                            <img src="../assets/W-02/avatar.jpg" class="rounded-full size-6" alt="">
                            <p class="text-base font-medium text-gray-200">Nguyengoc</p>
                        </div>
                        <p class="ml-8 text-base text-white">hay quá ae tin tôi</p>
                    </li>
                    <li class="flex flex-col mx-4">
                        <div class="flex flex-row content-center gap-2">
                            <img src="../assets/W-02/avatar.jpg" class="rounded-full size-6" alt="">
                            <p class="text-base font-medium text-gray-200">Nguyengoc</p>
                        </div>
                        <p class="ml-8 text-base text-white">Combo 2 chiếc quần short kaki giá chỉ 115k,nhanh tay thì
                            còn chậm tay là hết cả nhà ơi</p>
                    </li>
                    <li class="flex flex-col mx-4">
                        <div class="flex flex-row content-center gap-2">
                            <img src="../assets/W-02/avatar.jpg" class="rounded-full size-6" alt="">
                            <p class="text-base font-medium text-gray-200">Nguyengoc</p>
                        </div>
                        <p class="ml-8 text-base text-white">hay quá ae tin tôi</p>
                    </li>
                    <li class="flex flex-col mx-4">
                        <div class="flex flex-row content-center gap-2">
                            <img src="../assets/W-02/avatar.jpg" class="rounded-full size-6" alt="">
                            <p class="text-base font-medium text-gray-200">Nguyengoc</p>
                        </div>
                        <p class="ml-8 text-base text-white">Combo 2 chiếc quần short kaki giá chỉ 115k,nhanh tay thì
                            còn chậm tay là hết cả nhà ơi</p>
                    </li>
                    <li class="flex flex-col mx-4">
                        <div class="flex flex-row content-center gap-2">
                            <img src="../assets/W-02/avatar.jpg" class="rounded-full size-6" alt="">
                            <p class="text-base font-medium text-gray-200">Nguyengoc</p>
                        </div>
                        <p class="ml-8 text-base text-white">hay quá ae tin tôi</p>
                    </li>
                    <li class="flex flex-col mx-4">
                        <div class="flex flex-row content-center gap-2">
                            <img src="../assets/W-02/avatar.jpg" class="rounded-full size-6" alt="">
                            <p class="text-base font-medium text-gray-200">Nguyengoc</p>
                        </div>
                        <p class="ml-8 text-base text-white">Combo 2 chiếc quần short kaki giá chỉ 115k,nhanh tay thì
                            còn chậm tay là hết cả nhà ơi</p>
                    </li>
                    <li class="flex flex-col mx-4">
                        <div class="flex flex-row content-center gap-2">
                            <img src="../assets/W-02/avatar.jpg" class="rounded-full size-6" alt="">
                            <p class="text-base font-medium text-gray-200">Nguyengoc</p>
                        </div>
                        <p class="ml-8 text-base text-white">hay quá ae tin tôi</p>
                    </li>
                    <li class="flex flex-col mx-4">
                        <div class="flex flex-row content-center gap-2">
                            <img src="../assets/W-02/avatar.jpg" class="rounded-full size-6" alt="">
                            <p class="text-base font-medium text-gray-200">Nguyengoc</p>
                        </div>
                        <p class="ml-8 text-base text-white">Combo 2 chiếc quần short kaki giá chỉ 115k,nhanh tay thì
                            còn chậm tay là hết cả nhà ơi</p>
                    </li>
                    <li class="flex flex-col mx-4">
                        <div class="flex flex-row content-center gap-2">
                            <img src="../assets/W-02/avatar.jpg" class="rounded-full size-6" alt="">
                            <p class="text-base font-medium text-gray-200">Nguyengoc</p>
                        </div>
                        <p class="ml-8 text-base text-white">hay quá ae tin tôi</p>
                    </li>
                    <li class="flex flex-col mx-4">
                        <div class="flex flex-row content-center gap-2">
                            <img src="../assets/W-02/avatar.jpg" class="rounded-full size-6" alt="">
                            <p class="text-base font-medium text-gray-200">Nguyengoc</p>
                        </div>
                        <p class="ml-8 text-base text-white">Combo 2 chiếc quần short kaki giá chỉ 115k,nhanh tay thì
                            còn chậm tay là hết cả nhà ơi</p>
                    </li>
                </ul>
            </div>
            <div id="comment-box" class="flex flex-col h-[10%] mx-5 py-2 gap-2">
                <p class="text-white">
                    <i class="fa-solid fa-arrow-right-to-bracket"></i> FeyD153 đã tham gia
                </p>
                <div class="flex flex-row items-center gap-3">
                    <input id="comment-box" type="text"
                        class="px-3 py-3 w-full pl-4 bg-[#444444] rounded-xl transition-all  outline outline-2 outline-transparent focus:outline-white scrollbar-none text-white placeholder:text-gray-400 resize-none"
                        placeholder="Hãy nói gì đó">
                    <div class="flex content-center text-xl text-white size-5">
                        <i class="fa-solid fa-paper-plane"></i>
                    </div>
                </div>
            </div>
        </div>
        <!-- End live chatroom -->
    </div>
    <!-- End content -->
</template>

<script>
import Header from '@/components/Header.vue';

export default {
    components: {
        Header
    }
}
</script>