---
categories:
- Web Development
comments: true
date: 2011-12-09T22:08:49Z
description: WordPress มี plugin ช่วยแสดงผล related posts อยู่มากมาย แต่ความจริงแล้ว
  เราสามารถเขียนเองได้ไม่ยากนัก วิธีที่ผมใช้คือเขียนลงไปใน theme เลย
slug: wordpress-related-posts-without-plugin
tags:
- Related Posts
- Theme
- WordPress
title: 'WordPress : แสดง Post ที่เกี่ยวข้องโดยไม่ใช้ Plugin'
url: /2011/12/09/wordpress-related-posts-without-plugin/
wordpress_id: 1924
---

เรื่องที่เกี่ยวข้อง หรือ **Related Posts** สำหรับผมแล้วถือว่าเป็นสิ่งจำเป็นที่บล็อกทุกบล็อกควรจะมีครับ เพราะมันช่วยให้ผู้อ่านใช้เวลากับบล็อกของเรามากขึ้น (เรียกง่ายๆ ว่าช่วยดักท่านผู้ชมไม่ให้ออกจากบล็อกเรา โดยการเสนอให้อ่านเรื่องอื่นต่อ) .. พอเปลี่ยนธีมแล้วไม่มี Related Posts ก็เลยไปเสิชหา วิธีการเพิ่มโพสต์ที่เกี่ยวข้องโดยไม่ใช้ Plugin ดูครับ เจอจากบล็อก [WP Recipe - How to: Show related posts without a plugin](http://www.wprecipes.com/how-to-show-related-posts-without-a-plugin) ซึ่งผมก็เอาโค้ดมาดัดแปลงต่ออีกหน่อยครับผม

โดยหลักการก็คือ เราจะแสดงโพสต์ที่เกี่ยวข้องโดยค้นหาจาก Tag ที่เหมือนกับเรื่องที่ดูอยู่ ซึ่งเราก็ต้องไปเพิ่มโค้ดใน [WordPress Loop](http://codex.wordpress.org/The_Loop) ของเราครับ ตรงนี้แล้วแต่ธีมที่ใช้นะครับว่าอยู่ไฟล์ไหน ของผมอยู่ที่ `single.php` ซึ่งทำหน้าที่แสดงโพสต์แต่ละโพสต์ ผมเพิ่มโค้ดนี้ข้างล่างเนื้อหาของโพสต์


<pre><code class="language-clike">&lt;div class="related-posts"&gt;
  &lt;?php
    $tags = wp_get_post_tags($post-&gt;ID);
    if ($tags) :
      $first_tag = $tags[0]-&gt;term_id;
      $args=array(
      'tag__in' =&gt; array($first_tag),
      'post__not_in' =&gt; array($post-&gt;ID),
      'showposts'=&gt;5,
      'caller_get_posts'=&gt;1
    );

    $my_query = new WP_Query($args);
    if( $my_query-&gt;have_posts() ) : ?&gt;
      &lt;h4&gt;Related Posts (beta)&lt;/h4&gt;
      &lt;ul&gt;
      &lt;?php while ($my_query-&gt;have_posts()) : $my_query-&gt;the_post(); ?&gt;
        &lt;li&gt;
        &lt;a href="&lt;?php the_permalink() ?&gt;" rel="bookmark" title="
        Permanent Link to &lt;?php the_title_attribute(); ?&gt;"&gt;
          &lt;?php the_title(); ?&gt;&lt;/a&gt;
        &lt;/li&gt;
      &lt;?php endwhile;  ?&gt;
      &lt;/ul&gt;
  &lt;?php  endif;
    endif;
    wp_reset_query();
  ?&gt;
&lt;/div&gt;</code></pre>

ถ้าลองอ่านโค้ดดู มันคือการเอา Tag แรกของโพสต์ที่แสดงอยู่ ไปค้นหาโพสต์ที่มี Tag นี้เหมือนกัน เราจะได้ Custom Loop ใน Main Loop อีกที เพราะฉะนั้นเมื่อเราวน Custom Loop เสร็จแล้ว ต้องเรียกใช้ฟังก์ชั่น `wp_reset_query();` เพื่อเป็นการ Reset Custom Loop และกลับเข้าสู่ Loop หลักครับ .. ตรงนี้สำคัญ (และโค้ดต้นฉบับไม่ได้ใส่มาให้) เพราะถ้าเราไม่ Reset Query เวลาเรียกใช้ตัวแปร `$post` หลังจากนี้ มันจะเป็นของ Custom Loop แทนที่จะเป็นของ Main Loop และอาจทำให้ค่าต่างๆ เพี้ยนได้ครับ

อ่านรายละเอียดของ `wp_reset_query();` ได้ [ที่นี่](http://codex.wordpress.org/Function_Reference/wp_reset_query) ครับ
